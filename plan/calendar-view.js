/* Client calendar: daily, weekly and phase views of the same plan. */
(function () {
  const P = window.P520, UI = window.P520UI;
  const plan = P.loadClientPlan();
  UI.nav("calendar", plan);
  UI.footer(plan);
  const $ = id => document.getElementById(id);
  const head = $("head");
  const weeksEl = $("weeks");
  if (!plan) { UI.noPlan(weeksEl); return; }

  const view = plan.view || "daily";
  const deck = plan.deck || "anking";
  const deckName = P.deckLabel(deck);
  const carsLog = P.store.get(P.keyCars(plan.id), []);
  const flLog = P.store.get(P.keyFL(plan.id), []);
  const carsDates = new Set(carsLog.map(r => r.date));
  const cars = P.carsProgress(carsLog);
  const sched = P.buildSchedule(plan, P.carsPhaseByDay(carsLog, P.todayDn()));
  const today = P.todayDn();
  const D = sched.D;
  const daysLeft = D.test - today;
  const currentWeek = Math.floor((today - D.week1Sun) / 7) + 1;
  const inPlan = currentWeek >= 1 && currentWeek <= sched.weeks.length;
  const phase = P.CARS_PHASES[cars.active - 1];
  let progress = P.loadProgress(plan.id);
  const allChapters = {};
  (D.res ? D.res.chapters : []).forEach(c => allChapters[c.id] = c);
  const qbankName = P.esc(plan.qbank || "QBank");
  const subj = c => P.esc(c.subject) + " · Ch. " + c.ch;
  const isDone = id => !!progress.ch[id];
  const placed = new Set();
  sched.weeks.forEach(w => w.days.forEach(d => { if (d.am) d.am.concat(d.pm).forEach(c => placed.add(c.id)); }));
  const VIEW_NAME = { daily: "Day-by-day plan", weekly: "Weekly plan", phase: "Phase plan" };

  /* ---------- Header ---------- */
  head.innerHTML =
    '<div><div class="tagline">' + VIEW_NAME[view] + "</div>" +
    "<h1>" + (plan.name ? P.esc(plan.name) + "’s MCAT plan" : "Your MCAT plan") + "</h1>" +
    '<p class="lede">Test day is ' + P.longDate(D.test) +
    (daysLeft > 1 ? " · " + daysLeft + " days to go." : daysLeft === 1 ? " · tomorrow." : daysLeft === 0 ? " · today. Good luck." : ".") +
    (view === "weekly" ? " Each week lists what to finish; you choose which day to do each item." : "") +
    (view === "phase" ? " Work through each phase in the order that suits you, and keep an eye on the milestones." : "") + "</p></div>" +
    '<div class="stats">' +
    '<div class="stat"><b>' + (inPlan ? currentWeek + " / " + sched.weeks.length : sched.weeks.length) + "</b><span>" + (inPlan ? "Current week" : "Weeks in plan") + "</span></div>" +
    '<div class="stat"><b id="statDone">–</b><span>Chapters done</span></div>' +
    '<a class="stat" href="cars.html" style="text-decoration:none;color:inherit"><b>Phase ' + cars.active + "</b><span>CARS: " + phase.name + "</span></a>" +
    "</div>";

  const last = (plan.history || [])[plan.history.length - 1];
  if (last) {
    const n = document.createElement("div");
    n.className = "coach-note";
    n.innerHTML = '<div class="label">Plan updated ' + P.shortDate(P.dn(last.date)) + (P.hasCoach(plan) ? " by your coach" : "") + "</div>" +
      (last.note ? "<p>" + P.esc(last.note) + "</p>" : "<p>Your remaining chapters were spread over the days ahead. Earlier days now show what you completed.</p>");
    head.after(n);
  }
  const statusEl = document.createElement("div");
  statusEl.className = "status-strip";
  statusEl.setAttribute("role", "status");
  const msEl = document.createElement("div");
  msEl.className = "milestones";
  msEl.setAttribute("aria-label", "Milestones");
  $("toolbar").before(statusEl, msEl);

  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }

  function renderStatus() {
    const st = P.status(plan, sched, progress, today);
    $("statDone").textContent = st.doneCount + " / " + st.total;
    let html;
    if (today < D.start) html = '<span class="pill locked">Not started</span><span>Your plan starts ' + P.longDate(D.start) + ".</span>";
    else if (st.state === "behind") {
      html = '<span class="pill miss">' + plural(st.behind, "chapter", "chapters") + " behind</span>" +
        "<span>Check off chapters as you catch up" + (P.hasCoach(plan) ? ", and tell your coach if you can't catch up this week" : "") + ".</span>";
    } else if (st.state === "ahead") html = '<span class="pill done">' + plural(st.ahead, "chapter", "chapters") + " ahead</span><span>Nice work. You're ahead of the plan.</span>";
    else {
      let msg = "Every chapter due so far is checked off.";
      if (st.dueNow && st.period) msg = plural(st.dueNow, "chapter", "chapters") + " left " + st.period + ".";
      if (view === "phase" && sched.totals.contentDayList && today <= sched.totals.lastContentDay) {
        const daysLeftContent = sched.totals.contentDayList.filter(n => n >= today).length;
        const left = st.total - st.doneCount;
        if (daysLeftContent) msg = left + " chapters left; about " + (left / daysLeftContent * Math.max(1, D.daysPerWk)).toFixed(0) + " a week keeps you on pace.";
      }
      html = '<span class="pill done">On track</span><span>' + msg + "</span>";
    }
    statusEl.innerHTML = html;
    renderMilestones();
  }

  const MS_PILL = { done: "done", ontrack: "now", atrisk: "risk", missed: "miss", upcoming: "up" };
  function renderMilestones() {
    const ms = P.milestones(plan, sched, progress, today, cars.active, flLog);
    msEl.innerHTML = ms.map(m =>
      '<div class="ms"><div class="ms-top"><span class="ms-date">' + P.shortDate(m.n) + '</span><span class="pill ' + MS_PILL[m.status] + '">' + P.MILESTONE_LABEL[m.status] + "</span></div>" +
      '<div class="ms-label">' + P.esc(m.label) + '</div><div class="ms-detail">' + P.esc(m.detail) + "</div></div>").join("");
    msEl.hidden = !ms.length;
  }

  /* ---------- Shared pieces ---------- */
  function chapterTask(label, c, extra) {
    const done = isDone(c.id);
    return '<label class="task check' + (done ? " done" : "") + '"><span class="kind k-content">' + label + "</span>" +
      '<span class="what"><input type="checkbox" data-ch="' + c.id + '"' + (done ? " checked" : "") + ' aria-label="Done: ' + P.esc(c.label) + '">' +
      '<span><span class="subj">' + subj(c) + (extra ? " · " + extra : "") + "</span>" + P.esc(c.topic) + "</span></span></label>";
  }
  function itemTask(key, kindCls, kindText, what, sub) {
    const done = !!progress.items[key];
    return '<label class="task check' + (done ? " done" : "") + '"><span class="kind ' + kindCls + '">' + kindText + "</span>" +
      '<span class="what"><input type="checkbox" data-item="' + key + '"' + (done ? " checked" : "") + ' aria-label="Done: ' + P.esc(what) + '">' +
      "<span>" + P.esc(what) + (sub ? '<span class="sub">' + P.esc(sub) + "</span>" : "") + "</span></span></label>";
  }
  function doneLog(n) {
    const isoN = P.iso(n);
    const ids = Object.keys(progress.ch).filter(id => progress.ch[id] === isoN && allChapters[id] && !placed.has(id));
    return ids.map(id => '<div class="task done-log"><span class="kind k-content">Done</span><div class="what"><span class="subj">' + subj(allChapters[id]) + "</span>" + P.esc(allChapters[id].topic) + "</div></div>").join("");
  }
  // Anki dialog sets, keyed by button
  const ankiSets = [];
  function ankiButton(title, sub, entries) {
    ankiSets.push({ title, sub, entries });
    return '<button class="anki-btn" type="button" data-anki="' + (ankiSets.length - 1) + '" aria-label="Anki searches: ' + P.esc(title) + '">Anki</button>';
  }
  function weekHead(w, extra) {
    const isNow = inPlan && w.num === currentWeek;
    return '<div class="week-head"><h2>Week ' + w.num + "</h2>" +
      '<span class="range">' + P.shortDate(w.days[0].n) + " – " + P.shortDate(w.days[6].n) + "</span>" +
      (isNow ? '<span class="pill now">This week</span>' : "") + (extra || "") + "</div>";
  }

  /* ---------- Daily view ---------- */
  function dayHtml(d) {
    const isToday = d.n === today;
    const cls = "day " + d.kind + (isToday ? " today" : "") + (d.catchUp ? " catchup" : "");
    if (d.kind === "none") return '<div class="' + cls + '" aria-hidden="true"></div>';
    let top = '<div class="day-top"><div class="day-date"><span>' + (isToday ? "Today" : P.DOW3[d.col]) + "</span>" + P.md(d.n) + "</div>";
    const content = d.kind === "study" ? d.am.concat(d.pm) : [];
    if (content.length) top += ankiButton("Anki for " + P.longDate(d.n), "Week " + d.week,
      [{ label: "AM session", list: d.am }, { label: "PM session", list: d.pm }, { label: "AM + PM together", list: content, onlyIfBoth: true }]);
    top += "</div>";
    if (d.kind === "test") return '<div class="' + cls + '">' + top + '<div class="note">Test day</div></div>';
    if (d.kind === "off") return '<div class="' + cls + '">' + top + '<div class="note">Off day</div></div>';
    if (d.kind === "rest") return '<div class="' + cls + '">' + top + '<div class="note">Rest / review</div></div>';
    if (d.kind === "open") return '<div class="' + cls + '">' + top + '<div class="note">Final stretch</div><div class="sub">' + P.esc(P.finalStretchText(plan)) + "</div></div>";
    let body = doneLog(d.n);
    if (d.beforeReplan && !body) body += '<div class="task"><span class="kind k-review">Before re-plan</span><div class="what sub">No chapters checked off this day</div></div>';
    if (d.catchUp) body += '<div class="catchup-note">Catch-up day: finish any unchecked chapters</div>';
    d.am.forEach((c, i) => body += chapterTask(i ? "AM, cont." : "AM", c));
    d.pm.forEach((c, i) => body += chapterTask(i ? "PM, cont." : "PM", c));
    body += carsTask(d);
    body += practiceTask(d);
    return '<div class="' + cls + '">' + top + body + "</div>";
  }
  function carsTask(d) {
    if (!d.cars) return "";
    const logged = carsDates.has(d.iso);
    return '<div class="task' + (logged ? " done" : "") + '"><span class="kind k-cars">CARS' + (logged ? " · logged ✓" : "") + '</span><div class="what">' + P.esc(d.cars.task) + '</div><div class="sub">' + P.esc(d.cars.source) + (logged ? "" : ' · <a href="cars.html">Log it</a>') + "</div></div>";
  }
  function practiceTask(d, label) {
    const pr = d.practice, key = d.iso + ":p";
    if (pr.type === "fl") return itemTask(key, "k-fl", "Full length", "Practice full length" + (label ? " · " + label : ""), "Log scores after");
    if (pr.type === "review") return itemTask(key, "k-review", "Full length", "Full length review" + (label ? " · " + label : ""), "");
    return itemTask(key, "k-qbank", qbankName, (label ? label + ": " : "") + pr.text, pr.aligned ? "Content-aligned" : "Mixed subjects");
  }
  function renderDaily() {
    let html = "";
    for (const w of sched.weeks) {
      if (!w.anyInRange) continue;
      html += '<section class="week" id="week-' + w.num + '">' + weekHead(w) + '<div class="days">' + w.days.map(dayHtml).join("") + "</div></section>";
    }
    return html;
  }

  /* ---------- Weekly view ---------- */
  function renderWeekly() {
    let html = "";
    for (const w of sched.weeks) {
      if (!w.anyInRange) continue;
      const study = w.days.filter(d => d.kind === "study");
      const chapters = [];
      study.forEach(d => d.am.concat(d.pm).forEach(c => chapters.push(c)));
      const doneHere = chapters.filter(c => isDone(c.id)).length;
      const isNow = inPlan && w.num === currentWeek;
      // Left: chapters
      let left = '<h3><span>Chapters' + (chapters.length ? " · " + doneHere + " of " + chapters.length : "") + "</span>" +
        (chapters.length ? ankiButton("Anki for week " + w.num, P.shortDate(w.days[0].n) + " – " + P.shortDate(w.days[6].n),
          [{ label: "Whole week", list: chapters }].concat(chapters.map(c => ({ label: c.subject + " Ch. " + c.ch + ": " + c.topic, list: [c] })))) : "") + "</h3>";
      if (chapters.length) {
        left += '<div class="prog-line"><i style="width:' + Math.round(100 * doneHere / chapters.length) + '%"></i></div>';
        left += '<div class="wk-list">' + chapters.map(c => chapterTask("", c).replace('<span class="kind k-content"></span>', "")).join("") + "</div>";
        left += '<p class="hint">Listed in a suggested order. Do them on any days this week.</p>';
      } else {
        const before = w.days.map(d => doneLog(d.n)).join("");
        left += before || '<p class="hint">' + (w.phase === "content" ? "No new chapters this week." : "Content review is finished. This week is practice and full lengths.") + "</p>";
      }
      // Right: practice, CARS, daily minimums
      let right = "<h3><span>Practice</span></h3><div class=\"wk-list\">";
      const qdays = study.filter(d => d.practice.type === "qbank");
      const fl = study.filter(d => d.practice.type !== "qbank");
      fl.forEach(d => right += practiceTask(d, P.longDate(d.n)));
      if (qdays.length) {
        const q0 = qdays[0].practice;
        right += '<div class="task"><span class="kind k-qbank">' + qbankName + '</span><div class="sub">' + plural(qdays.length, "set", "sets") + " of " + P.esc(q0.text) + " · " +
          (q0.aligned ? "content-aligned" : "mixed subjects") + "</div></div>";
        right += '<div class="sets">' + qdays.map((d, i) => {
          const key = d.iso + ":p", done = !!progress.items[key];
          return '<label class="set' + (done ? " done" : "") + '"><input type="checkbox" data-item="' + key + '"' + (done ? " checked" : "") + ' aria-label="Question set ' + (i + 1) + ' done">Set ' + (i + 1) + "</label>";
        }).join("") + "</div>";
      }
      right += "</div>";
      const carsDays = study.filter(d => d.cars);
      if (carsDays.length) {
        const logged = carsLog.filter(r => { const n = P.dn(r.date); return n >= w.days[0].n && n <= w.days[6].n; }).length;
        const wc = carsDays[carsDays.length - 1].cars; // this week's phase (past weeks keep theirs)
        const prefNote = wc.phase >= 4 ? " on " + carsDays.map(d => P.DOW3[d.col]).join(", ") : "";
        right += '<h3><span>CARS</span><span class="ct">' + Math.min(logged, carsDays.length) + " of " + carsDays.length + " logged</span></h3>" +
          '<div class="task"><span class="kind k-cars">Phase ' + wc.phase + '</span><div class="what">' + plural(carsDays.length, "session", "sessions") + prefNote + ": " + P.esc(wc.task) +
          '</div><div class="sub">' + P.esc(wc.source) + ' · <a href="cars.html">Log a session</a></div></div>';
      }
      const notes = [];
      if (study.length) notes.push("Every study day: Anki reviews" + (carsDays.length ? " and CARS when scheduled" : "") + ".");
      const off = w.days.filter(d => d.kind === "off").map(d => P.DOW3[d.col]);
      const rest = w.days.filter(d => d.kind === "rest").map(d => P.DOW3[d.col]);
      const cu = w.days.filter(d => d.catchUp).map(d => P.DOW3[d.col]);
      if (cu.length) notes.push(cu.join(", ") + " is your catch-up day.");
      if (rest.length) notes.push("Rest: " + rest.join(", ") + ".");
      if (off.length) notes.push("Off: " + off.join(", ") + ".");
      const open = w.days.filter(d => d.kind === "open").map(d => P.DOW3[d.col]);
      if (open.length) notes.push("Final stretch (" + open.join(", ") + "): " + P.finalStretchText(plan));
      const test = w.days.find(d => d.kind === "test");
      if (test) notes.push("Test day: " + P.longDate(test.n) + ".");
      right += '<p class="wk-days">' + notes.join(" ") + "</p>";
      html += '<section class="week" id="week-' + w.num + '">' + weekHead(w) +
        '<div class="wk-card' + (isNow ? " now" : "") + '"><div class="wk-col">' + left + '</div><div class="wk-col">' + right + "</div></div></section>";
    }
    return html;
  }

  /* ---------- Phase view ---------- */
  function renderPhase() {
    const t = sched.totals;
    const chapters = [];
    sched.weeks.forEach(w => w.days.forEach(d => { if (d.am) d.am.concat(d.pm).forEach(c => chapters.push(c)); }));
    const extraDone = Object.keys(progress.ch).filter(id => allChapters[id] && !placed.has(id));
    let html = "";
    // Content review
    if (t.contentDayList && t.contentDayList.length) {
      const doneN = chapters.filter(c => isDone(c.id)).length + extraDone.length;
      const totalN = chapters.length + extraDone.length;
      const perWeek = t.contentDayList.length ? (chapters.length / t.contentDayList.length * D.daysPerWk) : 0;
      html += '<section class="phase-sec" id="phase-content"><h2>Content review</h2><p class="hint">' + P.shortDate(t.contentDayList[0]) + " – " + P.shortDate(t.lastContentDay) +
        " · " + doneN + " of " + totalN + " chapters done · about " + perWeek.toFixed(0) + " chapters a week. Do them in any order; the suggested order is listed first.</p>";
      const bySubj = {};
      chapters.forEach(c => (bySubj[c.subject] = bySubj[c.subject] || []).push(c));
      Object.keys(bySubj).forEach(sj => {
        const list = bySubj[sj];
        const d2 = list.filter(c => isDone(c.id)).length;
        const open = d2 < list.length && (today >= D.start);
        html += '<details class="subj"' + (open ? " open" : "") + '><summary><span class="nm">' + P.esc(sj) + '</span><span class="ct">' + d2 + " / " + list.length +
          '</span><span class="prog-line"><i style="width:' + Math.round(100 * d2 / list.length) + '%"></i></span></summary><div class="subj-body">' +
          '<div class="row-between"><span class="hint">Unchecked chapters first</span>' +
          ankiButton("Anki for " + sj, "Chapters in this subject", [{ label: "All " + sj + " chapters not checked off", list: list.filter(c => !isDone(c.id)) }].concat(list.map(c => ({ label: "Ch. " + c.ch + ": " + c.topic, list: [c] })))) + "</div>" +
          list.slice().sort((a, b) => isDone(a.id) - isDone(b.id)).map(c => chapterTask("", c).replace('<span class="kind k-content"></span>', "")).join("") +
          "</div></details>";
      });
      html += "</section>";
    }
    // Practice & full lengths
    const fls = [], qweeks = [];
    sched.weeks.forEach(w => {
      let qs = 0, blocks = 0;
      w.days.forEach(d => {
        if (d.kind !== "study") return;
        if (d.practice.type === "qbank") { qs += d.practice.q * d.practice.blocks; blocks += d.practice.blocks; }
        else fls.push(d);
      });
      if (qs) qweeks.push({ w, qs, blocks });
    });
    html += '<section class="phase-sec" id="phase-practice"><h2>Full lengths</h2><p class="hint">These dates stay fixed. Review each exam the next day, then log your scores.</p>' +
      '<div class="fl-list">' + fls.map(d => practiceTask(d, P.longDate(d.n))).join("") + "</div></section>";
    html += '<section class="phase-sec"><h2>Question bank goals</h2><p class="hint">' + qbankName + ". Spread each week's questions however you like.</p>" +
      '<div class="table-scroll"><table class="data qweeks"><thead><tr><th>Week</th><th>Dates</th><th class="r">Questions</th><th>Type</th></tr></thead><tbody>' +
      qweeks.map(x => {
        const aligned = x.w.days.some(d => d.kind === "study" && d.practice.type === "qbank" && d.practice.aligned);
        return "<tr" + (inPlan && x.w.num === currentWeek ? ' style="font-weight:700"' : "") + "><td>" + x.w.num + "</td><td>" + P.shortDate(x.w.days[0].n) + " – " + P.shortDate(x.w.days[6].n) +
          '</td><td class="r">' + x.qs + "</td><td>" + (aligned ? "Content-aligned" : "Mixed subjects") + "</td></tr>";
      }).join("") + "</tbody></table></div></section>";
    const openDays = [];
    sched.weeks.forEach(w => w.days.forEach(d => { if (d.kind === "open") openDays.push(d.n); }));
    if (openDays.length) html += '<section class="phase-sec"><h2>Final stretch</h2><p>' + P.shortDate(openDays[0]) + " – " + P.shortDate(openDays[openDays.length - 1]) +
      ". " + P.esc(P.finalStretchText(plan)) + "</p></section>";
    html += '<section class="phase-sec"><h2>Every study day</h2><p>Anki reviews, plus CARS: ' + P.esc(phase.name) + " phase, " + P.esc(P.CARS_PHASES[cars.active - 1].req) +
      '. <a href="cars.html">Open the CARS tracker</a>.</p></section>';
    return html;
  }

  /* ---------- Render ---------- */
  $("toolbar").hidden = false;
  weeksEl.innerHTML = view === "weekly" ? renderWeekly() : view === "phase" ? renderPhase() : renderDaily();
  renderStatus();

  // Check-offs
  weeksEl.addEventListener("change", e => {
    const box = e.target;
    if (box.type !== "checkbox") return;
    if (box.dataset.ch) {
      if (box.checked) progress.ch[box.dataset.ch] = P.iso(today); else delete progress.ch[box.dataset.ch];
      // keep duplicate checkboxes for the same chapter in sync
      weeksEl.querySelectorAll('input[data-ch="' + box.dataset.ch + '"]').forEach(x => { x.checked = box.checked; x.closest(".task").classList.toggle("done", box.checked); });
    } else if (box.dataset.item) {
      if (box.checked) progress.items[box.dataset.item] = true; else delete progress.items[box.dataset.item];
      (box.closest(".task") || box.closest(".set")).classList.toggle("done", box.checked);
    } else return;
    P.saveProgress(plan.id, progress);
    renderStatus();
  });

  // Jump to this week (daily and weekly views)
  const jump = $("jumpBtn");
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (inPlan && view !== "phase") {
    jump.addEventListener("click", () => $("week-" + currentWeek).scrollIntoView({ block: "start" }));
    if (currentWeek > 1) requestAnimationFrame(() => {
      const el = $("week-" + currentWeek);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "instant" });
    });
  } else jump.hidden = true;

  // Anki dialog
  const dlg = $("ankiDlg");
  let current = [];
  weeksEl.addEventListener("click", e => {
    const b = e.target.closest(".anki-btn");
    if (!b) return;
    e.preventDefault();
    const set = ankiSets[+b.dataset.anki];
    $("ankiTitle").textContent = set.title;
    $("ankiSub").textContent = (set.sub ? set.sub + " · " : "") + deckName + " deck";
    const withQ = set.entries.map(en => ({ label: en.label, list: en.list, q: P.ankiQuery(en.list, deck), onlyIfBoth: en.onlyIfBoth }));
    const nonEmpty = withQ.filter(x => x.list.length && !x.onlyIfBoth).length;
    current = withQ.filter(x => x.list.length && (!x.onlyIfBoth || nonEmpty > 1));
    $("ankiList").innerHTML = current.map((x, i) => {
      const missing = x.list.filter(c => !P.chapterTag(c, deck)).map(c => c.label);
      const emptyText = "No " + deckName + " search yet for " + (missing.join("; ") || "this chapter");
      return '<div><div class="row-between" style="margin-bottom:6px"><span class="kind k-content">' + P.esc(x.label) + "</span>" +
        '<button class="btn btn-sm" type="button" data-copy="' + i + '"' + (x.q ? "" : " disabled") + ">Copy</button></div>" +
        '<div class="query' + (x.q ? "" : " empty") + '">' + P.esc(x.q || emptyText) + "</div></div>";
    }).join("");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  });
  $("ankiList").addEventListener("click", e => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    const x = current[+b.dataset.copy];
    P.copyText(x.q, ok => UI.toast(ok ? "Search copied" : "Couldn't copy. Select the text and copy it."));
  });
  $("ankiClose").addEventListener("click", () => dlg.close ? dlg.close() : dlg.removeAttribute("open"));
})();
