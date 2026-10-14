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
    deck: "anking",              // Anki deck the client uses: anking | captainhook | miledown
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
    carsP57: [false, false, false, true, false, true, false], // 2 days
    // Re-planning (coach only). baseline: from this date on, schedule only the chapters not
    // in baseline.done. dropped: chapters removed from the plan. history: past re-plans.
    tier: "coaching",            // core | coaching: decides whether client pages mention a coach
    finalNote: "",               // optional text for the final-stretch days (after the last FL review)
    view: "daily",               // daily | weekly | phase: how the client's calendar is laid out
    catchUpDay: -1,              // weekday (0 = Sun) kept free of new chapters, or -1 for none
    flDay: -1,                   // weekday for practice full lengths, or -1 for the test-day weekday
    baseline: null,              // { date: "2026-10-20", done: ["gc-1", ...] }
    dropped: [],
    history: []                  // [{ date, note, behind, summary }]
  };

  // Weekday (0 = Sun) for practice full lengths: the coach's pick, else the test-day weekday.
  function flWeekday(plan) {
    const f = parseInt(plan.flDay, 10);
    if (f >= 0 && f <= 6) return f;
    const t = dn(plan.test);
    return t == null ? 0 : wd(t);
  }
  function normalizePlan(p) {
    const base = JSON.parse(JSON.stringify(DEFAULT_PLAN));
    const out = Object.assign(base, p || {});
    out.contentWeeks = Math.max(1, Math.min(20, parseInt(out.contentWeeks, 10) || 8));
    out.offDays = (out.offDays || []).filter(Boolean).sort();
    out.dropped = Array.isArray(out.dropped) ? out.dropped : [];
    out.history = Array.isArray(out.history) ? out.history : [];
    if (out.baseline && !out.baseline.date) out.baseline = null;
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
  // Phase for each calendar day: sessions logged before a day decide that day's phase;
  // today and later use the current phase.
  function carsPhaseByDay(log, today) {
    const current = carsProgress(log).active;
    const cache = new Map();
    return n => {
      if (n >= today) return current;
      if (!cache.has(n)) { const d = iso(n); cache.set(n, carsProgress((log || []).filter(r => r.date && r.date < d)).active); }
      return cache.get(n);
    };
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
    // carsPhase is a phase number, or a function (day number -> phase) so past days keep
    // the phase that was active on that day.
    const phaseOn = typeof carsPhase === "function" ? carsPhase : () => (carsPhase || 1);

    // Off days only cost a study day when they land on one (fixes the sheet counting
    // off days that fall on rest days, which repeated a day's chapters).
    const isStudyDate = n => studyDays[wd(n)];
    const offOnStudyBefore = n => { let k = 0; offSet.forEach(o => { if (o >= start && o < n && isStudyDate(o)) k++; }); return k; };
    const contentEnd = week1Sun + cw * 7 - 1;
    // Optional weekly catch-up day: a study day with no new chapters.
    const catchUp = plan.catchUpDay != null && plan.catchUpDay >= 0 && studyDays[plan.catchUpDay] && daysPerWk > 1 ? +plan.catchUpDay : -1;
    // Every day that gets chapters: study days in the content weeks, minus off days and catch-up days.
    const contentDayList = [];
    for (let n = start; n <= Math.min(contentEnd, test - 1); n++) if (isStudyDate(n) && !offSet.has(n) && wd(n) !== catchUp) contentDayList.push(n);
    const totalContentDays = Math.max(1, contentDayList.length);

    // Smoothed distribution: each content day gets an even share of chapters
    // (AM first, then PM), so no day has an empty AM slot next to a filled PM.
    // With a re-plan baseline, days before its date keep nothing new, and the chapters not
    // yet done (minus any dropped) are spread evenly over the content days from that date on.
    const N = queue.length;
    const skip = new Set(plan.dropped || []);
    const R = plan.baseline ? Math.max(dn(plan.baseline.date), start) : null;
    if (R != null) (plan.baseline.done || []).forEach(id => skip.add(id));
    const pool = queue.filter(c => !skip.has(c.id));
    const poolDayList = R != null ? contentDayList.filter(n => n >= R) : contentDayList;
    const poolDays = poolDayList.length;
    const dayIndex = new Map(poolDayList.map((n, i) => [n, i + 1]));
    const PN = pool.length;
    function chaptersForDay(n) {
      const k = dayIndex.get(n);
      if (!k) return { am: [], pm: [] };
      const from = Math.round((k - 1) * PN / poolDays);
      const to = Math.round(k * PN / poolDays);
      const list = pool.slice(from, Math.min(to, PN));
      const amN = Math.ceil(list.length / 2);
      return { am: list.slice(0, amN), pm: list.slice(amN) };
    }

    const testWk = Math.floor((test - week1Sun) / 7) + 1;
    // Practice full lengths fall on the full-length weekday (the test-day weekday unless the
    // coach picked another), at least a week before test day; each review is the next day.
    const flCol = flWeekday(plan);
    const flStartWk = cw + 1;
    const flSet = new Set(), reviewSet = new Set();
    for (let w = flStartWk; w <= totalWeeks; w++) {
      const n = week1Sun + (w - 1) * 7 + flCol;
      if (n <= test - 7) { flSet.add(n); reviewSet.add(n + 1); }
    }
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
        if (R != null && n < R) day.beforeReplan = true;
        if (w <= cw && c === catchUp) day.catchUp = true;
        const ch = chaptersForDay(n);
        day.am = ch.am; day.pm = ch.pm;

        // CARS
        const source = w >= aamcStartWk ? "AAMC" : "Jack Westin";
        const phase = phaseOn(n);
        const carsDay = phase <= 3 ? true : phase === 4 ? !!plan.carsP4[c] : !!plan.carsP57[c];
        day.cars = carsDay ? { phase, source: phase === 7 && source === "AAMC" ? "AAMC / FLs" : source, task: carsTask(phase) } : null;

        // QBank / Full Length
        if (flSet.has(n)) {
          day.practice = { type: "fl", text: "Practice Full Length" }; fls++;
        } else if (reviewSet.has(n)) {
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
    // Final stretch: after the last full-length review (or last full length) and before
    // test day, nothing is assigned. The coach plans those days with each client.
    let lastFlDay = null;
    weeks.forEach(w => w.days.forEach(d => { if (d.kind === "study" && d.practice && d.practice.type !== "qbank") lastFlDay = d.n; }));
    if (lastFlDay != null) weeks.forEach(w => w.days.forEach(d => {
      if (d.kind === "study" && d.n > lastFlDay && d.n < test) {
        if (d.practice && d.practice.type === "qbank") totalQs -= d.practice.q * d.practice.blocks;
        d.kind = "open"; d.am = []; d.pm = []; d.cars = null; d.practice = null;
      }
    }));
    const contentDaysLeft = R != null ? poolDays : totalContentDays;
    return { weeks, D, totals: {
      qs: totalQs, fls, contentDays: totalContentDays, chapters: N - (plan.dropped || []).length,
      remaining: PN, contentDaysLeft, perDayLeft: contentDaysLeft ? PN / contentDaysLeft : Infinity,
      unplaced: contentDaysLeft ? 0 : PN, contentEnd, replanDate: R,
      firstContentDay: contentDayList[0], lastContentDay: contentDayList[contentDayList.length - 1],
      contentDayList, catchUp
    } };
  }

  /* ---------- Progress (what the client has done) ---------- */
  // progress = { ch: { "gc-5": "2026-10-12", ... }, items: { "2026-10-12:p": true } }
  function emptyProgress() { return { ch: {}, items: {} }; }
  function normProgress(p) { p = p || {}; return { ch: p.ch || {}, items: p.items || {} }; }

  // Where the client stands against the schedule as of `today`.
  // view (defaults to the plan's): daily compares day by day, weekly week by week
  // (any day within the week is fine), and phase compares chapter counts only.
  function status(plan, sched, progress, today, view) {
    progress = normProgress(progress);
    view = view || plan.view || "daily";
    const dropped = new Set(plan.dropped || []);
    const done = new Set(Object.keys(progress.ch).filter(id => !dropped.has(id)));
    const weekStart = today - wd(today);
    const cutoff = view === "weekly" ? weekStart : today;          // due before this day
    const periodEnd = view === "weekly" ? weekStart + 7 : today + 1; // "now" is [cutoff, periodEnd)
    const due = new Map(); // id -> scheduled day number
    if (plan.baseline) (plan.baseline.done || []).forEach(id => due.set(id, null));
    const placed = [];
    const nowList = [];
    let ahead = 0;
    const byId = {};
    for (const w of sched.weeks) for (const d of w.days) {
      if (d.kind !== "study") continue;
      for (const c of d.am.concat(d.pm)) {
        byId[c.id] = c; placed.push(c);
        if (d.n < cutoff) due.set(c.id, d.n);
        else if (d.n < periodEnd) nowList.push(c);
        else if (done.has(c.id)) ahead++;
      }
    }
    let missing = [];
    if (view === "phase") {
      // Order is the client's choice: compare how many are done with how many should be.
      const expected = due.size;
      const doneN = Array.from(done).filter(id => due.has(id) || byId[id]).length;
      const gap = expected - doneN;
      if (gap > 0) missing = placed.filter(c => !done.has(c.id)).slice(0, gap).map(c => ({ chapter: c, n: null }));
      ahead = Math.max(0, -gap);
    } else {
      due.forEach((n, id) => { if (!done.has(id) && !dropped.has(id) && byId[id]) missing.push({ chapter: byId[id], n }); });
      missing.sort((x, y) => (x.n || 0) - (y.n || 0));
    }
    // Pace: chapters finished per study day over the last 14 days
    const D = sched.D;
    let studyDays14 = 0;
    for (let n = today - 14; n < today; n++) if (n >= D.start && D.studyDays[wd(n)] && !D.offSet.has(n)) studyDays14++;
    let done14 = 0;
    Object.values(progress.ch).forEach(dIso => { const n = dn(dIso); if (n >= today - 14 && n < today) done14++; });
    const total = sched.totals.chapters;
    const dueNow = nowList.filter(c => !done.has(c.id)).length;
    return {
      view, doneCount: done.size, total, behind: missing.length, missing, ahead,
      dueNow, dueToday: dueNow, period: view === "weekly" ? "this week" : view === "daily" ? "today" : "",
      pace: studyDays14 ? done14 / studyDays14 : null, studyDays14, done14,
      state: missing.length ? "behind" : ahead ? "ahead" : "ontrack"
    };
  }

  // Milestones shown to the client and coach. Each: { key, label, n (date), status, detail }
  // status: done | ontrack | atrisk | missed | upcoming
  function milestones(plan, sched, progress, today, carsActive, flLog) {
    progress = normProgress(progress);
    const out = [];
    const t = sched.totals, D = sched.D;
    if (!sched.weeks.length) return out;
    const done = new Set(Object.keys(progress.ch));
    const st = status(plan, sched, progress, today);
    // Chapter milestone: content review complete
    const placedByDay = [];
    for (const w of sched.weeks) for (const d of w.days) if (d.kind === "study" && d.am && (d.am.length || d.pm.length)) placedByDay.push([d.n, d.am.concat(d.pm)]);
    const baseDone = plan.baseline ? (plan.baseline.done || []) : [];
    function chapterMilestone(key, label, untilN) {
      const ids = baseDone.slice();
      placedByDay.forEach(([n, list]) => { if (n <= untilN) list.forEach(c => ids.push(c.id)); });
      if (!ids.length) return;
      const left = ids.filter(id => !done.has(id)).length;
      let status, detail;
      if (!left) { status = "done"; detail = "All " + ids.length + " chapters done"; }
      else if (today > untilN) { status = "missed"; detail = left + " of " + ids.length + " chapters still to do"; }
      else if (st.behind) { status = "atrisk"; detail = st.behind + " behind right now; " + left + " to go"; }
      else { status = "ontrack"; detail = (ids.length - left) + " of " + ids.length + " done"; }
      out.push({ key, label, n: untilN, status, detail });
    }
    const list = t.contentDayList || [];
    if (list.length) chapterMilestone("content", "Content review complete", list[list.length - 1]);
    // Goal score, judged on the average of the last 3 complete full lengths
    if (plan.target) {
      const full = (flLog || []).filter(r => r.scaled && FL_SECTIONS.every(s => r.scaled[s.key])).sort((x, y) => (x.date || "").localeCompare(y.date || ""));
      const last3 = full.slice(-3).map(r => FL_SECTIONS.reduce((a, s) => a + (+r.scaled[s.key] || 0), 0));
      let status = "upcoming", detail = "No full lengths logged yet";
      if (last3.length) {
        const avg = Math.round(last3.reduce((a, b) => a + b, 0) / last3.length);
        status = avg >= +plan.target ? "ontrack" : "atrisk";
        detail = "Recent average " + avg + (avg >= +plan.target ? "" : ", " + (+plan.target - avg) + " to go");
      }
      out.push({ key: "goal", label: "Goal score " + plan.target, n: D.test, status, detail });
    }
    return out.sort((x, y) => x.n - y.n);
  }
  // Wording that depends on whether the client has a coach
  function hasCoach(plan) { return (plan && plan.tier) !== "core"; }
  function finalStretchText(plan) {
    if (plan.finalNote && plan.finalNote.trim()) return plan.finalNote.trim();
    return hasCoach(plan) ? "Plan these days with your coach." : "No set assignments.";
  }
  const MILESTONE_LABEL = { done: "Done", ontrack: "On track", atrisk: "At risk", missed: "Missed", upcoming: "Upcoming" };

  // Coach re-plan. Returns a new plan; the client keeps the same ID and logs.
  // opts: { date (ISO, first day of the new layout), dropped: [ids], contentWeeks, test, note, summary, behind }
  function replan(plan, progress, opts) {
    progress = normProgress(progress);
    const p = normalizePlan(JSON.parse(JSON.stringify(plan)));
    p.baseline = { date: opts.date, done: Object.keys(progress.ch).sort() };
    p.dropped = (opts.dropped || []).slice().sort();
    if (opts.contentWeeks) p.contentWeeks = opts.contentWeeks;
    if (opts.test) p.test = opts.test;
    p.history = (p.history || []).concat([{ date: iso(todayDn()), from: opts.date, note: opts.note || "", behind: opts.behind || 0, summary: opts.summary || "" }]);
    return p;
  }

  /* ---------- Anki search (EZ Anki Tags format) ---------- */
  const DECKS = window.P520_ANKI_DECKS || [{ key: "anking", label: "AnKing MCAT" }];
  function deckLabel(deck) { const d = DECKS.find(x => x.key === deck); return d ? d.label : "AnKing MCAT"; }
  function chapterTag(c, deck) { return ((c && c.tags) || {})[deck || "anking"] || ""; }
  // How many of a resource's chapters have a search for this deck
  function deckCoverage(resourceKey, deck) {
    const r = (window.P520_RESOURCES || {})[resourceKey];
    if (!r) return { tagged: 0, total: 0, missing: [] };
    const missing = r.chapters.filter(c => !chapterTag(c, deck));
    return { tagged: r.chapters.length - missing.length, total: r.chapters.length, missing };
  }
  // One search for a set of chapters. Each chapter's search is wrapped in parentheses when it
  // has more than one term, so OR, negation and quoted deck names combine safely.
  function ankiQuery(chapters, deck) {
    const seen = new Set();
    const terms = [];
    (chapters || []).forEach(c => {
      const t = chapterTag(c, deck).trim();
      if (!t || seen.has(t)) return;
      seen.add(t);
      terms.push(/\s/.test(t.replace(/"[^"]*"/g, '""')) ? "(" + t + ")" : t); // spaces inside quotes don't count
    });
    if (!terms.length) return "";
    const joined = terms.join(" OR ");
    return (terms.length > 1 ? "(" + joined + ")" : joined) + " is:suspended -flag:1";
  }

  // A chapter's search as simple terms ({ kind: "tag" | "deck", path, quoted }), or null when it
  // isn't just tag:/deck: terms joined by OR (then the subject search falls back to the OR list).
  function searchTerms(q) {
    const parts = String(q || "").trim().split(/ OR (?=(?:[^"]*"[^"]*")*[^"]*$)/);
    const out = [];
    for (const raw of parts) {
      const p = raw.trim();
      let m = /^"(tag|deck):([^"]+)"$/.exec(p);
      if (m) { out.push({ kind: m[1], path: m[2], quoted: true }); continue; }
      m = /^(tag|deck):(\S+)$/.exec(p);
      if (m) { out.push({ kind: m[1], path: m[2], quoted: false }); continue; }
      return null;
    }
    return out.length ? out : null;
  }
  function termText(kind, path, neg) {
    const t = kind + ":" + path;
    return (neg ? "-" : "") + (/[\s()"]/.test(path) ? '"' + t + '"' : t);   // quote spaces and parentheses
  }
  // Search for the chapters of one subject not yet done, as short as possible. When every chapter
  // of the subject sits under one parent tag (or deck) that no other subject uses, this can be the
  // parent minus the finished chapters, e.g. (tag:Parent -tag:Parent::Ch1) is:suspended -flag:1.
  // Whichever of that and the plain OR list is shorter wins.
  function ankiSubjectQuery(subjectChapters, remaining, otherChapters, deck) {
    const orQ = ankiQuery(remaining, deck);
    if (!remaining.length || subjectChapters.length < 2) return orQ;
    const parsed = subjectChapters.map(c => ({ c, terms: searchTerms(chapterTag(c, deck)) }));
    if (parsed.some(x => !x.terms)) return orQ;
    const all = [].concat(...parsed.map(x => x.terms));
    const kind = all[0].kind;
    if (all.some(t => t.kind !== kind)) return orQ;
    const segs = all.map(t => t.path.split("::"));
    let n = 0;
    while (segs.every(s => s.length > n + 1 && s[n] === segs[0][n])) n++;
    if (!n) return orQ;
    const parent = segs[0].slice(0, n).join("::");
    // The parent must not also cover another subject's chapters.
    const clash = otherChapters.some(c => (searchTerms(chapterTag(c, deck)) || []).some(t => t.kind === kind && (t.path === parent || t.path.indexOf(parent + "::") === 0)));
    if (clash) return orQ;
    const keep = new Set(remaining.map(c => c.id));
    const keepPaths = new Set([].concat(...parsed.filter(x => keep.has(x.c.id)).map(x => x.terms.map(t => t.path))));
    const excl = [];
    for (const x of parsed) {
      if (keep.has(x.c.id)) continue;
      for (const t of x.terms) {
        if (keepPaths.has(t.path)) return orQ;   // a finished chapter shares a tag with a remaining one
        const s = termText(kind, t.path, true);
        if (excl.indexOf(s) < 0) excl.push(s);
      }
    }
    const base = termText(kind, parent, false);
    const parentQ = (excl.length ? "(" + base + " " + excl.join(" ") + ")" : base) + " is:suspended -flag:1";
    return parentQ.length < orQ.length ? parentQ : orQ;
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
  const keyProgress = id => "p520.progress." + id;
  const loadProgress = id => normProgress(store.get(keyProgress(id), null));
  const saveProgress = (id, p) => store.set(keyProgress(id), p);

  // The client's plan: from the link (#p=...) if present, else the saved copy.
  function loadClientPlan() {
    const m = /[#&]p=([^&]+)/.exec(location.hash || "");
    if (m) {
      const p = decodePlan(m[1]);
      const prev = store.get(KEY_PLAN, null);
      // An older link (e.g. a bookmark) never replaces a newer plan the coach already sent.
      if (p && prev && prev.id === p.id && (prev.rev || 0) > (p.rev || 0)) return normalizePlan(prev);
      if (p) { store.set(KEY_PLAN, p); return p; }
    }
    const saved = store.get(KEY_PLAN, null);
    return saved ? normalizePlan(saved) : null;
  }
  function planLinkSuffix(plan) { return "#p=" + encodePlan(plan); }

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
    DEFAULT_PLAN, normalizePlan, flWeekday, encodePlan, decodePlan, derive, buildSchedule, makeId,
    CARS_PHASES, CARS_SOURCES, carsRowPasses, carsProgress, carsPhaseByDay,
    FL_SOURCES, FL_SECTIONS, ankiQuery, ankiSubjectQuery, DECKS, deckLabel, chapterTag, deckCoverage,
    store, KEY_PLAN, KEY_COACH, keyCars, keyFL, keyProgress, loadProgress, saveProgress, loadClientPlan, planLinkSuffix,
    emptyProgress, normProgress, status, replan, milestones, MILESTONE_LABEL, hasCoach, finalStretchText,
    esc, copyText, initTheme
  };
})();
