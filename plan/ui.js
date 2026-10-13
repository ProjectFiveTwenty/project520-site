/* Shared page chrome for the client pages: brand bar, footer with backup tools, toast. */
(function () {
  const P = window.P520;

  function nav(active, plan) {
    const hash = location.hash && /p=/.test(location.hash) ? location.hash : "";
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
    el.innerHTML =
      '<div class="wrap">' +
      "<div><p style=\"margin:0\">Your logs are saved in this browser on this device. Download a backup now and then, and send it to your coach before check-ins.</p></div>" +
      '<div class="foot-actions">' +
      (plan ? '<button class="btn btn-plain btn-sm" id="exportBtn" type="button">Download backup</button>' : "") +
      '<label class="btn btn-plain btn-sm" for="importFile">Restore backup</label>' +
      '<input id="importFile" type="file" accept="application/json,.json" hidden>' +
      '<button class="theme-btn" id="themeBtn" type="button">Dark mode</button>' +
      "</div></div>";
    document.body.appendChild(el);
    P.initTheme(el.querySelector("#themeBtn"));
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
    container.innerHTML =
      '<div class="empty-state"><h2>No study plan on this device yet</h2>' +
      "<p>Open the link your coach sent you, and your calendar will load here. " +
      "If you saved a backup before, use <b>Restore backup</b> at the bottom of the page.</p></div>";
  }

  // A new plan link pasted into an open tab only changes the #hash; reload so it takes effect.
  window.addEventListener("hashchange", () => { if (/p=/.test(location.hash)) location.reload(); });

  window.P520UI = { nav, footer, toast, noPlan };
})();
