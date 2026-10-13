/* Sync with Supabase.
   Client pages: a link ending in #c=<token> ties this browser to one client record. The
   browser copy stays the main copy (pages load instantly and work offline); changes are
   uploaded in the background and merged with changes from the client's other devices.
   Coach page: email + password sign-in, then direct table access limited by the
   database's coach-only rules. */
(function () {
  const P = window.P520;
  const cfg = window.P520_SYNC_CONFIG || {};
  const BASE_URL = String(cfg.url || "").replace(/\/+$/, "");
  const KEY = String(cfg.key || "");
  const enabled = !!(BASE_URL && KEY);

  const KEY_LINK = "p520.link";                 // { token, id } for this browser's client
  const keyBase = id => "p520.syncBase." + id;  // { version, data } as last agreed with the server
  const KEY_AUTH = "p520.coachAuth";

  /* ---------- HTTP ---------- */
  function headers(jwt, extra) {
    const h = Object.assign({ apikey: KEY, "Content-Type": "application/json" }, extra || {});
    // Legacy anon keys are JWTs and go in Authorization too; publishable keys must not.
    const bearer = jwt || (KEY.indexOf("eyJ") === 0 ? KEY : null);
    if (bearer) h.Authorization = "Bearer " + bearer;
    return h;
  }
  async function call(method, path, body, opts) {
    opts = opts || {};
    const init = { method, headers: headers(opts.jwt, opts.headers) };
    if (body !== undefined) {
      init.body = JSON.stringify(body);
      if (opts.keepalive && init.body.length < 60000) init.keepalive = true;
    }
    let res;
    try { res = await fetch(BASE_URL + path, init); }
    catch (e) { const err = new Error("offline"); err.offline = true; throw err; }
    const text = await res.text();
    let json = null;
    try { json = text ? JSON.parse(text) : null; } catch (e) {}
    if (!res.ok) {
      const err = new Error((json && (json.message || json.msg || json.error_description || json.error)) || ("Request failed (" + res.status + ")"));
      err.status = res.status; err.code = json && json.code;
      throw err;
    }
    return json;
  }
  const rpc = (fn, args, opts) => call("POST", "/rest/v1/rpc/" + fn, args, opts);

  /* ---------- Merge ---------- */
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  // Three-way merge of two plain objects against what both last agreed on (base).
  // A key changed on only one side takes that side's value; a missing key is a delete.
  // If both sides changed the same key, this device's value wins.
  function mergeMap(b, l, r) {
    b = b || {}; l = l || {}; r = r || {};
    const out = {};
    new Set(Object.keys(l).concat(Object.keys(r))).forEach(k => {
      const lv = l[k], rv = r[k], bv = b[k];
      const v = eq(lv, rv) ? lv : eq(lv, bv) ? rv : lv;
      if (v !== undefined) out[k] = v;
    });
    return out;
  }
  const byId = list => { const m = {}; (list || []).forEach(x => { if (x && x.id) m[x.id] = x; }); return m; };
  function mergeList(b, l, r) {
    const m = mergeMap(byId(b), byId(l), byId(r));
    const order = (l || []).map(x => x.id).concat((r || []).map(x => x.id));
    const seen = new Set(), out = [];
    order.forEach(id => { if (m[id] && !seen.has(id)) { seen.add(id); out.push(m[id]); } });
    return out;
  }
  function merge3(base, local, remote) {
    base = base || {}; remote = remote || {};
    const bp = P.normProgress(base.progress), lp = P.normProgress(local.progress), rp = P.normProgress(remote.progress);
    return {
      progress: { ch: mergeMap(bp.ch, lp.ch, rp.ch), items: mergeMap(bp.items, lp.items, rp.items) },
      cars: mergeList(base.cars, local.cars, remote.cars),
      fl: mergeList(base.fl, local.fl, remote.fl)
    };
  }

  /* ---------- Client sync ---------- */
  const hash = location.hash || "";
  const hashToken = (/[#&]c=([A-Za-z0-9_-]+)/.exec(hash) || [])[1] || null;
  const preview = /[#&]p=/.test(hash);     // plan-in-link preview: stays on this device only
  const coachPage = !!document.querySelector('meta[name="p520-page"][content="coach"]');
  let link = P.store.get(KEY_LINK, null);
  if (hashToken && (!link || link.token !== hashToken)) {
    link = { token: hashToken, id: null };
    P.store.set(KEY_LINK, link);
    P.store.del(P.KEY_PLAN);                // a different client's link: wait for their plan
  }
  const active = enabled && !preview && !coachPage && !!(link && link.token);

  let status = active ? "loading" : "off";  // off | loading | synced | offline | badlink | error
  let lastSynced = null;
  const listeners = [];
  function setStatus(s) { status = s; if (s === "synced") lastSynced = new Date(); listeners.forEach(fn => { try { fn(s); } catch (e) {} }); }
  function onStatus(fn) { listeners.push(fn); fn(status); }

  let applying = false;                     // true while sync itself writes to storage
  function rawSet(k, v) { applying = true; try { P.store.set(k, v); } finally { applying = false; } }

  function readLocal(id) {
    const d = { progress: P.loadProgress(id), cars: P.store.get(P.keyCars(id), []) || [], fl: P.store.get(P.keyFL(id), []) || [] };
    // Entries saved before syncing existed have no ID; give them one so they merge.
    ["cars", "fl"].forEach(k => {
      let added = false;
      d[k] = d[k].map(x => x && !x.id ? (added = true, Object.assign({ id: P.makeId() }, x)) : x);
      if (added) rawSet(k === "cars" ? P.keyCars(id) : P.keyFL(id), d[k]);
    });
    return d;
  }
  function writeLocal(id, d) {
    rawSet(P.keyProgress(id), d.progress);
    rawSet(P.keyCars(id), d.cars);
    rawSet(P.keyFL(id), d.fl);
  }

  let localChanged = false;   // set when a sync changed what this page is showing
  async function reconcile(id, remote, version) {
    for (let i = 0; i < 5; i++) {
      const base = P.store.get(keyBase(id), null);
      const local = readLocal(id);
      if (!remote && base && eq(local, base.data)) return;          // nothing new here
      const merged = remote ? merge3(base && base.data, local, remote) : local;
      if (!eq(merged, local)) { writeLocal(id, merged); localChanged = true; }
      if (remote && eq(merged, remote)) { rawSet(keyBase(id), { version, data: merged }); return; }
      const res = await rpc("client_push", { p_token: link.token, p_base_version: version, p_data: merged }, { keepalive: true });
      if (res && res.ok) { rawSet(keyBase(id), { version: res.version, data: merged }); return; }
      remote = res.data || {}; version = res.version;               // someone saved first: merge again
    }
  }

  let planChanged = false;
  async function pullAndMerge() {
    const r = await rpc("client_pull", { p_token: link.token });
    link = { token: link.token, id: r.id };
    rawSet(KEY_LINK, link);
    const local = P.store.get(P.KEY_PLAN, null);
    const serverRev = (r.plan && r.plan.rev) || r.plan_rev || 0;
    if (r.plan && (!local || local.id !== r.id || (local.rev || 0) < serverRev || ((local.rev || 0) === serverRev && !eq(local, r.plan)))) {
      rawSet(P.KEY_PLAN, r.plan); planChanged = true;
    }
    await reconcile(r.id, r.data || {}, r.version || 0);
  }

  // One sync at a time; a request made while one runs triggers one more pass afterwards.
  let running = null, again = false, retryTimer = null;
  function run(kind) {
    if (!active) return Promise.resolve();
    if (running) { again = again || kind; return running; }
    running = (async () => {
      try {
        if (kind === "push" && link.id && P.store.get(keyBase(link.id), null)) {
          const base = P.store.get(keyBase(link.id), null);
          await reconcile(link.id, null, base.version);
        } else await pullAndMerge();
        setStatus("synced");
      } catch (e) {
        if (e.offline) setStatus("offline");
        else if (e.code === "P0002" || /unknown link/i.test(e.message)) setStatus("badlink");
        else { setStatus("error"); if (window.console) console.warn("Sync failed:", e.message); }
      } finally {
        running = null;
        // Couldn't reach the server: try again in a bit (also on reconnect and on returning to the tab).
        if (status === "offline" || status === "error") { clearTimeout(retryTimer); retryTimer = setTimeout(() => run("pull"), 30000); }
        if (again && status !== "badlink") { const k = again; again = false; run(k); }
      }
    })();
    return running;
  }

  // Upload shortly after any change to this client's logs or check-offs.
  let timer = null;
  function isDataKey(k) {
    const id = link && link.id;
    return !!id && (k === P.keyCars(id) || k === P.keyFL(id) || k === P.keyProgress(id));
  }
  if (active) {
    const origSet = P.store.set.bind(P.store);
    P.store.set = function (k, v) {
      const ok = origSet(k, v);
      if (!applying && isDataKey(k)) { clearTimeout(timer); timer = setTimeout(() => { timer = null; run("push"); }, 800); }
      return ok;
    };
    addEventListener("pagehide", () => { if (timer) { clearTimeout(timer); timer = null; run("push"); } });
  }

  // When a sync changes what's on screen: reload on first open; later, offer a refresh.
  function afterSync(first) {
    const changed = planChanged || localChanged;
    planChanged = localChanged = false;
    if (!changed) return;
    let n = 0;
    try { n = +sessionStorage.getItem("p520.syncReloads") || 0; } catch (e) {}
    const busy = Array.from(document.querySelectorAll("form input, textarea")).some(el => el.type !== "date" && el.value !== "");
    if ((first || !busy) && n < 3) {
      try { sessionStorage.setItem("p520.syncReloads", String(n + 1)); } catch (e) {}
      location.reload();
    } else showRefresh();
  }
  function showRefresh() {
    if (document.getElementById("syncBar")) return;
    const bar = document.createElement("div");
    bar.id = "syncBar"; bar.className = "sync-bar"; bar.setAttribute("role", "status");
    bar.innerHTML = '<span>Updated from your other device.</span><button class="btn btn-sm" type="button">Refresh</button>';
    bar.querySelector("button").addEventListener("click", () => location.reload());
    document.body.prepend(bar);
  }

  if (active) {
    run("pull").then(() => {
      afterSync(true);
      setTimeout(() => { try { sessionStorage.removeItem("p520.syncReloads"); } catch (e) {} }, 4000);
    });
    let lastPull = Date.now();
    const pullLater = () => {
      if (document.visibilityState !== "visible" || Date.now() - lastPull < 15000) return;
      lastPull = Date.now();
      run("pull").then(() => afterSync(false));
    };
    document.addEventListener("visibilitychange", pullLater);
    addEventListener("online", () => { lastPull = 0; pullLater(); });
  }

  /* ---------- Coach sign-in ---------- */
  function session() { return P.store.get(KEY_AUTH, null); }
  function saveSession(j) {
    const s = { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: j.expires_at || Math.floor(Date.now() / 1000) + (j.expires_in || 3600), email: j.user && j.user.email };
    P.store.set(KEY_AUTH, s);
    return s;
  }
  async function signIn(email, password) {
    const j = await call("POST", "/auth/v1/token?grant_type=password", { email, password });
    return saveSession(j);
  }
  async function jwt() {
    const s = session();
    if (!s) throw Object.assign(new Error("Sign in first."), { status: 401 });
    if (s.expires_at - 60 > Date.now() / 1000) return s.access_token;
    try {
      const j = await call("POST", "/auth/v1/token?grant_type=refresh_token", { refresh_token: s.refresh_token });
      if (!j.user) j.user = { email: s.email };
      return saveSession(j).access_token;
    } catch (e) {
      if (!e.offline) P.store.del(KEY_AUTH);
      throw e;
    }
  }
  async function signOut() {
    const s = session();
    P.store.del(KEY_AUTH);
    if (s) { try { await call("POST", "/auth/v1/logout", {}, { jwt: s.access_token }); } catch (e) {} }
  }
  // Coach table access, e.g. rest("GET", "/clients?select=*")
  async function rest(method, path, body, prefer) {
    const token = await jwt();
    return call(method, "/rest/v1" + path, body, { jwt: token, headers: prefer ? { Prefer: prefer } : null });
  }

  function clientLink(token, base) {
    return new URL("calendar.html", base || location.href).href.split("#")[0] + "#c=" + token;
  }

  window.P520Sync = {
    enabled, active, preview,
    get status() { return status; },
    get lastSynced() { return lastSynced; },
    onStatus, syncNow: () => run("pull"),
    merge3, clientLink,
    auth: { signIn, signOut, session, jwt },
    rest, rpc
  };
})();
