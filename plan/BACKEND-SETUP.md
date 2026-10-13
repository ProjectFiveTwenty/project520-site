# Setting up syncing (Supabase)

This takes about 10 minutes. Until you finish, the plan pages keep working the way they do now, with data saved only in each browser.

When you're done:

- Client links look like `…/plan/calendar.html#c=<secret>`. Clients see the plan you last saved, and their check-offs, CARS log and scores sync across all their devices.
- The Control Panel has a sign-in and a client list showing each client's status, CARS phase, latest full length and when they last opened their plan.
- Saving a plan or a re-plan updates the client's calendar the next time they open it, so you don't send a new link.

## 1. Create the Supabase project

1. Go to supabase.com and sign up. The free plan is enough.
2. Create a new project. Name it something like `project520`. Pick a region near most of your clients (for example US East), and save the database password somewhere safe. You won't need it for these pages.
3. Wait a minute or two for the project to finish setting up.

## 2. Create the database tables

1. In the project, open **SQL Editor** and start a new query.
2. Open `supabase/setup.sql` from this folder, copy the whole file, paste it in and press **Run**. You should see "Success". It's safe to run again later.

## 3. Create your coach login

1. Open **Authentication → Users** and choose **Add user → Create new user**. Enter your email and a strong password, and tick **Auto Confirm User**.
2. Back in **SQL Editor**, run this with your email in place of the placeholder:

   ```sql
   insert into public.coaches (user_id)
   select id from auth.users where email = 'you@example.com';
   ```

   It should say "1 row" was inserted. This is what lets your login see client data. Any other account sees nothing.
3. Optional but tidy: under **Authentication → Sign In / Providers**, turn off **Allow new users to sign up**. Then nobody else can create an account. They couldn't see anything anyway, because they aren't in the coaches table.

## 4. Connect the pages

1. Open **Project Settings → API Keys** (or **Connect**). Copy the **Project URL** and the **publishable** key. If your project only shows a legacy **anon** key, use that instead.
2. Paste both into `plan/sync-config.js`:

   ```js
   window.P520_SYNC_CONFIG = {
     url: "https://abcdefghijklmnop.supabase.co",
     key: "sb_publishable_..."
   };
   ```

   These two values are meant to be public. **Never** paste the `secret` or `service_role` key here; that key bypasses every access rule.
3. Upload the files to the repo. In the HTML files, change the `?v=` tags to a new value (see the README) so browsers load the new copies.

## 5. Keep the free project awake

Free Supabase projects pause after about a week without activity, and a paused project means clients' pages can't sync. Pages keep working offline, but changes stay on each device.

- Copy `.github/workflows/keep-supabase-awake.yml` into the repo at that same path (`.github/workflows/` at the top level, not inside `plan/`).
- In the repo's **Actions** tab, open **Keep Supabase awake** and press **Run workflow** once to check it. It should print `"ok"`.
- After that it runs every 3 days on its own. Once you have active clients, their own use keeps the project awake too.

If the project ever does pause, open it in Supabase and press **Restore**. No data is lost.

## 6. Try it

1. Open `…/plan/coach.html`. A **Clients** panel appears at the top. Sign in.
2. Build a test plan, give it a name and press **Create client** under **Client link**.
3. Open the link on your phone and on your laptop. Check off a chapter on one, then open or refresh the other.
4. Back in the Control Panel, press **Refresh**. The client shows up with their progress. Press **Open**, change something and press **Save changes to client**. The client sees the change the next time they open their plan.
5. When you're done, open the test client and press **Archive client**. To delete it for good, use Supabase's **Table Editor → clients**.

## How it behaves

- **Clients' browsers stay the main copy.** Pages load from the device right away, then sync in the background. Offline changes upload once the device is back online. Each page footer shows "Synced", or a note that changes are being kept on the device.
- **Edits on two devices merge.** CARS entries and full-length scores from both devices are kept. Check-offs merge chapter by chapter. If two devices change the same item at once, the device that syncs second wins for that item.
- **Only you change plans.** Clients never write a plan. Edits in the Control Panel stay private until you press **Save changes to client**, or **Save re-plan** during a check-in, which saves and sends in one step.
- **Check-ins don't need backup files.** For a synced client, **Start check-in** loads their latest progress directly. **Load client backup** still works for anyone who isn't synced.
- **Open client view previews on your device only.** It uses a `#p=` link, so clicking around in the preview never changes the client's data.
- **Old `#p=` links still work.** They stay on that one device and don't sync. To move a client over, paste their old link into **Edit an existing client**, then press **Create client** and send them the new link. Their existing data uploads the first time they open the new link on the device where they used the old one.

## Privacy

- A client's link is the key to their data, so anyone with the link can see and change that client's plan progress. Ask clients not to share it. If a link leaks, run this in **SQL Editor** to give that client a new link (the old one stops working), then refresh the Control Panel, open the client and send them the new link:

  ```sql
  update public.clients set token = replace(gen_random_uuid()::text, '-', '') where name = 'Jordan';
  ```

- Use first names only in plans. The database holds names, dates, check-offs, CARS logs and practice-exam scores. It holds no emails or payment details.
- To export everything, go to **Table Editor → clients → Export to CSV**.

## Moving to a new domain later

- New links follow the address the Control Panel is opened from, so nothing in the code needs to change.
- If you add a custom domain to this same GitHub repo, GitHub redirects the old `projectfivetwenty.github.io` addresses and keeps the `#c=…` part, so clients' existing links keep working.
- Browser storage is kept per domain, so each client's first visit on the new domain starts with an empty copy and then pulls everything back from the server. You'll sign in to the Control Panel once more on the new domain.
- No Supabase settings need to change.
