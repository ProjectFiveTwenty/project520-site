/* Project 520 study plan engine.
   A JavaScript port of the "Schedule" tab formula in the MCAT Master Sheet, plus the
   CARS_Tracker phase rules, the Full_Lengths scoring, and the EZ Anki Tags query format.
   Shared by coach.html, calendar.html, cars.html and scores.html. */
(function () {
  "use strict";

  /* ---------- Dates (whole-day numbers, UTC, so DST never shifts a day) ---------- */
  const DAY = 86400000;
  const DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const DOW3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MON3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function dn(iso) { // "2026-09-14" -> day number
    if (!iso) return null;
    const [y, m, d] = String(iso).split("-").map(Number);
    if (!y || !m || !d) return null;
    return Math.round(Date.UTC(y, m - 1, d) / DAY);
  }
  function iso(n) { return new Date(n * DAY).toISOString().slice(0, 10); }
  function wd(n) { return ((n + 4) % 7 + 7) % 7; } // 0 = Sunday
  function md(n) { const d = new Date(n * DAY); return (d.getUTCMonth() + 1) + "/" + d.getUTCDate(); }
  function longDate(n) { const d = new Date(n * DAY); return DOW3[wd(n)] + ", " + MON3[d.getUTCMonth()] + " " + d.getUTCDate(); }
  function shortDate(n) { const d = new Date(n * DAY); return MON3[d.getUTCMonth()] + " " + d.getUTCDate(); }
  function todayDn() { const t = new Date(); return Math.round(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) / DAY); }

  /* ---------- Plan settings (the coach's Control Panel) ---------- */
  const DEFAULT_PLAN = {
    v: 1,
    id: "",
    name: "",
    target: "",                // goal total score, e.g. 515 (optional)
    resource: "kaplan",          // kaplan | uworld | khanacademy
    structure: "Hybrid",         // Classic | Integrated | Hybrid
    start: "2026-09-14",
    test: "2027-01-11",
    contentWeeks: 8,
    studyDays: [true, true, true, true, true, true, false], // Sun..Sat
    offDays: [],
    qbank: "UWorld",
    qtable: [                    // index 1..8: Qs per block, blocks per day, content-aligned
      { q: 10, b: 1, aligned: true },
      { q: 15, b: 1, aligned: true },
      { q: 20, b: 1, aligned: true },
      { q: 30, b: 1, aligned: false },
      { q: 40, b: 1, aligned: false },
      { q: 50, b: 1, aligned: false },
      { q: 59, b: 1, aligned: false },
      { q: 59, b: 1, aligned: false }
    ],
    carsP4: [true, false, false, true, false, true, false],   // 3 days
    carsP57: [false, false, false, true, false, true, false]  // 2 days
  };

  function normalizePlan(p) {
    const base = JSON.parse(JSON.stringify(DEFAULT_PLAN));
    const out = Object.assign(base, p || {});
    out.contentWeeks = Math.max(1, Math.min(20, parseInt(out.contentWeeks, 10) || 8));
    out.offDays = (out.offDays || []).filter(Boolean).sort();
    if (!out.id) out.id = makeId();
    return out;
  }
  function makeId() { return Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4); }

  // Plan <-> link-safe string
  function encodePlan(p) {
    const json = JSON.stringify(p);
    const b64 = btoa(unescape(encodeURIComponent(json)));
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function decodePlan(s) {
    try {
      let b = String(s).replace(/-/g, "+").replace(/_/g, "/");
      while (b.length % 4) b += "=";
      return normalizePlan(JSON.parse(decodeURIComponent(escape(atob(b)))));
    } catch (e) { return null; }
  }

  /* ---------- Derived plan numbers (Control_Panel B6, C20, C21, ...) ---------- */
  function derive(plan) {
    const start = dn(plan.start), test = dn(plan.test);
    const res = (window.P520_RESOURCES || {})[plan.resource];
    const queue = res ? res.chapters.slice().sort((a, b) => a.order[plan.structure] - b.order[plan.structure]) : [];
    const studyDays = plan.studyDays.map(Boolean);
    const daysPerWk = studyDays.filter(Boolean).length;
    // Total Prep Weeks = ROUNDUP((test - start)/7, 0) + 1
    const totalWeeks = (start != null && test != null) ? Math.ceil((test - start) / 7) + 1 : 0;
    // AAMC start week for CARS = B6 - IF(B6>=12, 8, IF(B6>=8, 6, B6)) + 1
    const aamcStartWk = totalWeeks - (totalWeeks >= 12 ? 8 : totalWeeks >= 8 ? 6 : totalWeeks) + 1;
    const week1Sun = start != null ? start - wd(start) : null;
    // Study days in the first week that fall before the start date
    let startOffset = 0;
    if (start != null) for (let i = 0; i < wd(start); i++) if (studyDays[i]) startOffset++;
    const offSet = new Set(plan.offDays.map(dn).filter(n => n != null));
    return { start, test, res, queue, studyDays, daysPerWk, totalWeeks, aamcStartWk, week1Sun, startOffset, offSet };
  }

  /* ---------- CARS phases (CARS_Tracker) ---------- */
  const CARS_PHASES = [
    { n: 1, name: "Acclimation", req: "10 passages", goal: 10, unit: "passages" },
    { n: 2, name: "Accuracy", req: "5 passages at 80%+", goal: 5, unit: "passages" },
    { n: 3, name: "Timing", req: "5 passages at 80%+, ≤10 min each", goal: 5, unit: "passages" },
    { n: 4, name: "Endurance I", req: "3 blocks of 3 at 80%+, ≤10 min each", goal: 3, unit: "blocks" },
    { n: 5, name: "Endurance II", req: "2 blocks of 6 at 90%+, ≤10 min each", goal: 2, unit: "blocks" },
    { n: 6, name: "Full Section", req: "2 blocks of 9 at 90%+, ≤10 min each", goal: 2, unit: "blocks" },
    { n: 7, name: "Buffer Pace", req: "Test ready: 9 passages at 95%+, ≤9 min each", goal: 1, unit: "blocks" }
  ];
  const CARS_SOURCES = ["Jack Westin", "AAMC QBank", "AAMC Unscored FL", "AAMC FL 1 (Free)", "AAMC FL 2", "AAMC FL 3", "AAMC FL 4", "AAMC FL 5", "AAMC FL 6"];

  // One log row -> did it meet its phase's bar? (CARS_Tracker column X)
  function carsRowPasses(r) {
    const n = +r.passages || 0, q = +r.questions || 0, c = +r.correct || 0, m = +r.minutes || 0;
    if (!r.phase || !q) return null;
    const acc = c / q, per = n > 0 ? m / n : Infinity;
    switch (+r.phase) {
      case 1: return true;
      case 2: return acc >= 0.8;
      case 3: return acc >= 0.8 && per <= 10.1;
      case 4: return n >= 3 && acc >= 0.8 && per <= 10.1;
      case 5: return n >= 6 && acc >= 0.9 && per <= 10.1;
      case 6: return n >= 9 && acc >= 0.9 && per <= 10.1;
      case 7: return n >= 9 && acc >= 0.95 && per <= 9.1;
    }
    return false;
  }
  // Progress per phase (CARS_Tracker Z3..Z15) and the active phase (F7)
  function carsProgress(log) {
    const p = [0, 0, 0, 0, 0, 0, 0, 0];
    for (const r of log || []) {
      const ph = +r.phase, ok = carsRowPasses(r);
      if (ph === 1) p[1] += +r.passages || 0;
      else if ((ph === 2 || ph === 3) && ok) p[ph] += +r.passages || 0;
      else if (ph >= 4 && ph <= 7 && ok) p[ph] += 1;
    }
    let active = 7;
    if (p[1] < 10) active = 1;
    else if (p[2] < 5) active = 2;
    else if (p[3] < 5) active = 3;
    else if (p[4] < 3) active = 4;
    else if (p[5] < 2) active = 5;
    else if (p[6] < 2) active = 6;
    return { counts: p, active };
  }
  function carsTask(phase, source) {
    switch (phase) {
      case 1: return "1 passage, untimed";
      case 2: return "1–2 passages, untimed, aim 80%+";
      case 3: return "1–2 passages, timed";
      case 4: return "3-passage block";
      case 5: return "6-passage block";
      case 6: return "9-passage simulation";
      case 7: return "9-passage simulation";
    }
    return "";
  }

  /* ---------- The schedule (Schedule tab) ---------- */
  // carsPhase: 1..7 (from the client's CARS log).
  function buildSchedule(plan, carsPhase) {
    const D = derive(plan);
    const { start, test, queue, studyDays, daysPerWk, totalWeeks, aamcStartWk, week1Sun, startOffset, offSet } = D;
    const weeks = [];
    if (start == null || test == null || test < start || !daysPerWk) return { weeks, D, totals: { qs: 0, fls: 0, contentDays: 0 } };
    const cw = plan.contentWeeks;
    const phase = carsPhase || 1;

    // Off days only cost a study day when they land on one (fixes the sheet counting
    // off days that fall on rest days, which repeated a day's chapters).
    const isStudyDate = n => studyDays[wd(n)];
    const offOnStudyBefore = n => { let k = 0; offSet.forEach(o => { if (o >= start && o < n && isStudyDate(o)) k++; }); return k; };
    const contentEnd = week1Sun + cw * 7 - 1;
    let contentOffs = 0;
    offSet.forEach(o => { if (o >= start && o <= contentEnd && isStudyDate(o)) contentOffs++; });
    const totalContentDays = Math.max(1, cw * daysPerWk - startOffset - contentOffs);

    // Smoothed distribution: each content day gets an even share of chapters
    // (AM first, then PM), so no day has an empty AM slot next to a filled PM.
    const N = queue.length;
    function chaptersForDay(sd) {
      const from = Math.round((sd - 1) * N / totalContentDays);
      const to = Math.round(sd * N / totalContentDays);
      const list = queue.slice(from, Math.min(to, N));
      const amN = Math.ceil(list.length / 2);
      return { am: list.slice(0, amN), pm: list.slice(amN) };
    }

    const testWk = Math.floor((test - week1Sun) / 7) + 1;
    const testCol = wd(test); // 0..6
    const flReviewCol = testCol === 6 ? 0 : testCol + 1;
    const flStartWk = cw + 1;
    let totalQs = 0, fls = 0;

    for (let w = 1; w <= totalWeeks; w++) {
      const days = [];
      // QBank ramp (q_idx)
      const qIdx = w <= cw ? Math.round(1 + (w - 1) * 3 / Math.max(1, cw - 1)) : Math.min(8, 4 + (w - cw));
      const qrow = plan.qtable[Math.max(1, Math.min(8, qIdx)) - 1] || { q: 0, b: 0, aligned: false };
      let anyInRange = false;
      for (let c = 0; c < 7; c++) {
        const n = week1Sun + (w - 1) * 7 + c;
        const day = { n, iso: iso(n), col: c, week: w, kind: "none" };
        days.push(day);
        if (n < start || n > test) continue;
        anyInRange = true;
        if (n === test) { day.kind = "test"; continue; }
        if (offSet.has(n)) { day.kind = "off"; continue; }
        if (!studyDays[c]) { day.kind = "rest"; continue; }
        day.kind = "study";
        let sdInWk = 0;
        for (let i = 0; i <= c; i++) if (studyDays[i]) sdInWk++;
        day.studyDay = (w - 1) * daysPerWk + sdInWk - startOffset - offOnStudyBefore(n);

        // Content (AM / PM)
        day.am = []; day.pm = [];
        if (w <= cw && day.studyDay >= 1 && day.studyDay <= totalContentDays) {
          const ch = chaptersForDay(day.studyDay);
          day.am = ch.am; day.pm = ch.pm;
        }

        // CARS
        const source = w >= aamcStartWk ? "AAMC" : "Jack Westin";
        const carsDay = phase <= 3 ? true : phase === 4 ? !!plan.carsP4[c] : !!plan.carsP57[c];
        day.cars = carsDay ? { phase, source: phase === 7 && source === "AAMC" ? "AAMC / FLs" : source, task: carsTask(phase) } : null;

        // QBank / Full Length
        const reviewWk = testCol === 6 ? w - 1 : w;
        if (w >= flStartWk && w < testWk && c === testCol) {
          day.practice = { type: "fl", text: "Practice Full Length" }; fls++;
        } else if (reviewWk >= flStartWk && reviewWk < testWk && c === flReviewCol) {
          day.practice = { type: "review", text: "Full Length Review" };
        } else {
          const qs = (+qrow.q || 0) * (+qrow.b || 0);
          totalQs += qs;
          day.practice = { type: "qbank", blocks: +qrow.b || 0, q: +qrow.q || 0, aligned: !!qrow.aligned,
            text: (+qrow.b) + (+qrow.b === 1 ? " block of " : " blocks of ") + (+qrow.q) + " Qs" };
        }
        // No CARS on full-length or full-length review days, in any phase.
        if (day.practice.type !== "qbank") day.cars = null;
      }
      weeks.push({ num: w, days, phase: w <= cw ? "content" : "practice", anyInRange });
    }
    return { weeks, D, totals: { qs: totalQs, fls, contentDays: totalContentDays, chapters: N } };
  }

  /* ---------- Anki search (EZ Anki Tags format) ---------- */
  function ankiQuery(chapters) {
    const terms = (chapters || []).map(c => c.tag).filter(Boolean).map(t => / OR /.test(t) ? "(" + t + ")" : t);
    if (!terms.length) return "";
    const joined = terms.join(" OR ");
    return (terms.length > 1 ? "(" + joined + ")" : joined) + " is:suspended -flag:1";
  }

  /* ---------- Full-length scores (Full_Lengths) ---------- */
  const FL_SOURCES = ["Diagnostic Half-Length", "AAMC Unscored FL", "AAMC FL 1", "AAMC FL 2", "AAMC FL 3", "AAMC FL 4", "AAMC FL 5", "AAMC FL 6",
    "Kaplan 1", "Kaplan 2", "Kaplan 3", "Kaplan 4", "Kaplan 5", "Kaplan 6", "Blueprint 1", "Blueprint 2", "Blueprint 3", "Blueprint 4", "Blueprint 5", "Blueprint 6",
    "TPR 1", "TPR 2", "TPR 3", "TPR 4", "TPR 5", "TPR 6"];
  const FL_SECTIONS = [
    { key: "cp", label: "C/P", max: 59 }, { key: "cars", label: "CARS", max: 53 },
    { key: "bb", label: "B/B", max: 59 }, { key: "ps", label: "P/S", max: 59 }
  ];

  /* ---------- Storage (this browser only) ---------- */
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem(k); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const KEY_PLAN = "p520.plan";
  const KEY_COACH = "p520.coachDraft";
  const keyCars = id => "p520.cars." + id;
  const keyFL = id => "p520.fl." + id;

  // The client's plan: from the link (#p=...) if present, else the saved copy.
  function loadClientPlan() {
    const m = /[#&]p=([^&]+)/.exec(location.hash || "");
    if (m) {
      const p = decodePlan(m[1]);
      if (p) { store.set(KEY_PLAN, p); return p; }
    }
    const saved = store.get(KEY_PLAN, null);
    return saved ? normalizePlan(saved) : null;
  }
  function planLinkSuffix(plan) { return "#p=" + encodePlan(plan); }

  /* ---------- Backup (export / import of a client's logs) ---------- */
  function exportData(plan) {
    return { app: "project520", exported: new Date().toISOString(), plan, cars: store.get(keyCars(plan.id), []), fl: store.get(keyFL(plan.id), []) };
  }
  function importData(obj) {
    if (!obj || obj.app !== "project520" || !obj.plan) throw new Error("That file isn't a Project 520 backup.");
    const plan = normalizePlan(obj.plan);
    store.set(KEY_PLAN, plan);
    store.set(keyCars(plan.id), obj.cars || []);
    store.set(keyFL(plan.id), obj.fl || []);
    return plan;
  }
  function downloadJSON(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------- Small UI helpers ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch])); }
  function copyText(text, onDone) {
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove(); onDone && onDone(ok);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => onDone && onDone(true), fallback);
    } else fallback();
  }
  // Theme toggle (same behavior as the landing page: sets data-theme on <html>)
  function initTheme(btn) {
    const saved = store.get("p520.theme", null);
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    if (!btn) return;
    const label = () => {
      const cur = document.documentElement.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      btn.textContent = cur === "dark" ? "Light mode" : "Dark mode";
    };
    label();
    btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      store.set("p520.theme", next); label();
    });
  }

  window.P520 = {
    dn, iso, wd, md, longDate, shortDate, todayDn, DOW, DOW3,
    DEFAULT_PLAN, normalizePlan, encodePlan, decodePlan, derive, buildSchedule, makeId,
    CARS_PHASES, CARS_SOURCES, carsRowPasses, carsProgress,
    FL_SOURCES, FL_SECTIONS, ankiQuery,
    store, KEY_PLAN, KEY_COACH, keyCars, keyFL, loadClientPlan, planLinkSuffix,
    exportData, importData, downloadJSON, esc, copyText, initTheme
  };
})();
