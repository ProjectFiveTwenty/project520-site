/* Shared page chrome for the client pages: brand bar, footer with backup tools, toast. */
(function () {
  const P = window.P520;

  function nav(active, plan) {
    const hash = location.hash && /[pc]=/.test(location.hash) ? location.hash : "";
    const link = (href, key, text) =>
      '<a href="' + href + hash + '"' + (active === key ? ' aria-current="page"' : "") + ">" + text + "</a>";
    const el = document.createElement("header");
    el.className = "nav";
    el.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="calendar.html' + hash + '">PROJECT 520<small>' + P.esc(plan && plan.name ? plan.name : "Study plan") + "</small></a>" +
      '<nav class="nav-links" aria-label="Plan pages">' +
      link("calendar.html", "calendar", "Calendar") +
      link("cars.html", "cars", "CARS tracker") +
      link("scores.html", "scores", "Full-length scores") +
      "</nav></div>";
    document.body.prepend(el);
  }

  function footer(plan, onImported) {
    const el = document.createElement("footer");
    el.className = "foot";
    const S = window.P520Sync;
    const synced = !!(S && S.active);
    const coach = plan && P.hasCoach(plan);
    const note = synced
      ? "Your progress is saved online and syncs across your devices." + (coach ? " Your coach sees it too." : "") + ' <span class="sync-state" id="syncState"></span>'
      : "Your logs are saved in this browser on this device. " + (coach ? "Download a backup now and then, and send it to your coach before check-ins." : "Download a backup now and then so you have a copy.");
    el.innerHTML =
      '<div class="wrap">' +
      "<div><p style=\"margin:0\">" + note + "</p></div>" +
      '<div class="foot-actions">' +
      (plan ? '<button class="btn btn-plain btn-sm" id="exportBtn" type="button">Download backup</button>' : "") +
      '<label class="btn btn-plain btn-sm" for="importFile">Restore backup</label>' +
      '<input id="importFile" type="file" accept="application/json,.json" hidden>' +
      '<button class="theme-btn" id="themeBtn" type="button">Dark mode</button>' +
      "</div></div>";
    document.body.appendChild(el);
    P.initTheme(el.querySelector("#themeBtn"));
    if (synced) S.onStatus(st => {
      const t = el.querySelector("#syncState");
      if (!t) return;
      const txt = { loading: "Syncing…", synced: "Synced.", offline: "Offline right now: changes are saved on this device and sync when you're back online.", error: "Couldn't sync just now; your changes are saved on this device.", badlink: "" }[st] || "";
      t.textContent = txt;
      t.dataset.state = st;
    });
    const ex = el.querySelector("#exportBtn");
    if (ex) ex.addEventListener("click", () => {
      const stamp = P.iso(P.todayDn());
      const who = (plan.name || "plan").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      P.downloadJSON("project520-" + who + "-" + stamp + ".json", P.exportData(plan));
      toast("Backup downloaded");
    });
    el.querySelector("#importFile").addEventListener("change", e => {
      const f = e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try { P.importData(JSON.parse(r.result)); toast("Backup restored"); setTimeout(() => location.reload(), 600); }
        catch (err) { toast(err.message || "That file couldn't be read."); }
      };
      r.readAsText(f);
    });
  }

  let toastTimer;
  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }

  function noPlan(container) {
    const S = window.P520Sync;
    if (S && S.active) {
      const show = st => {
        if (st === "loading") container.innerHTML = '<div class="empty-state"><h2>Loading your study plan…</h2><p>This takes a moment the first time you open your link on a device.</p></div>';
        else if (st === "badlink") container.innerHTML = '<div class="empty-state"><h2>This link isn\'t active</h2><p>Check that you opened the full link you received from Project 520. If it still doesn\'t work, ask for a new one.</p></div>';
        else if (st === "offline" || st === "error") container.innerHTML = '<div class="empty-state"><h2>Your plan couldn\'t load</h2><p>' + (st === "offline" ? "You seem to be offline. Connect to the internet and refresh this page." : "Something went wrong reaching the server. Refresh the page in a minute.") + "</p></div>";
      };
      S.onStatus(show);
      return;
    }
    container.innerHTML =
      '<div class="empty-state"><h2>No study plan on this device yet</h2>' +
      "<p>Open the study plan link you received from Project 520, and your calendar will load here. " +
      "If you saved a backup before, use <b>Restore backup</b> at the bottom of the page.</p></div>";
  }

  // A new plan link pasted into an open tab only changes the #hash; reload so it takes effect.
  window.addEventListener("hashchange", () => { if (/[pc]=/.test(location.hash)) location.reload(); });

  // If any script fails (usually a stale cached file right after an update), say so on the page.
  let warned = false;
  window.addEventListener("error", () => {
    if (warned) return; warned = true;
    const bar = document.createElement("div");
    bar.setAttribute("role", "alert");
    bar.style.cssText = "background:var(--rose-soft);color:var(--rose);border-bottom:1px solid var(--line);padding:10px 16px;font-weight:600;text-align:center";
    bar.textContent = "Part of this page didn't load. Refresh the page (Ctrl+Shift+R, or Cmd+Shift+R on a Mac). If it keeps happening, upload every file in the plan folder again.";
    document.body.prepend(bar);
  });

  window.P520UI = { nav, footer, toast, noPlan };
})();
