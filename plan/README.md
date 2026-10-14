# Project 520 study plan pages

Drop this folder into the `projectfivetwenty.github.io` repo as `plan/`, and the `.github` folder from the zip into the top of the repo. The pages are then served at:

- `https://projectfivetwenty.github.io/plan/coach.html` — your Control Panel (coach only)
- `https://projectfivetwenty.github.io/plan/calendar.html` — client calendar (the client link opens this)
- `.../plan/cars.html` — client CARS tracker
- `.../plan/scores.html` — client full-length score tracker

## How it works

There are two modes, set by `sync-config.js`:

- **Synced (after you follow [BACKEND-SETUP.md](BACKEND-SETUP.md)).** The plan and the client's progress live in Supabase. Client links end in `#c=<secret>`. Clients' check-offs, CARS logs and scores sync across their devices. You sign in to the Control Panel to see a client list, save plans to clients and run check-ins on live data.
- **Browser only (if `sync-config.js` is empty).** The whole plan rides in the client link after `#p=`, and each client's logs are saved in their browser only. Check-ins need syncing, so this mode is only a fallback.

In both modes:

- Logging CARS sessions moves the client through the 7 phases, and the calendar's CARS assignments follow the current phase, same as the sheet.
- The browser is always the first copy, so pages load instantly and work offline.

## Plan settings

- **Plan tier**: Core or Coaching. Core plans never mention a coach on the client's pages.
- **Plan style**: Daily (a set list for each day), Weekly (a checklist per week; the client picks the day), or Phase (content by subject, fixed full-length dates, weekly question goals). Milestones and the on-track status appear in every style.
- **Weekly catch-up day**: an optional study day with no new chapters.
- **Anki deck**: AnKing MCAT, Captain Hook, or MileDown. The client's Anki buttons give searches for that deck. The list shows how many of the chosen resource's chapters have a search for each deck.
- **Final stretch**: days between the last full-length review and test day have no assignments. Write a final-stretch note per client, or leave it blank for the default (Coaching: "Plan these days with your coach." Core: "No set assignments.").

## Progress and re-planning

- Clients check off chapters and practice blocks on the calendar. A status strip shows whether they're on track, ahead, or behind (and which chapters are missing).
- Re-plans go through you. Open the client from the client list and press **Start check-in** under Check-in & re-plan.
- You'll see chapters done, how far behind they are, their pace over the last two weeks, and the pace needed to finish on time.
- Pick a start date for the re-plan and an option: absorb, extend content review, or move the test date. You can also drop chapters and write a note. The table compares the current plan with the re-plan.
- **Save re-plan**. The client sees it the next time they open their plan. Their check-offs, CARS log and scores carry over.
- Days before the re-plan date show what the client actually finished; the remaining chapters are spread evenly from the re-plan date on.

## Files

- `engine.js` — the schedule logic (port of the Schedule tab formula), CARS phase rules, Anki search format, storage
- `sync.js` — syncing with Supabase (client links, merging, coach sign-in); `sync-config.js` — the Supabase URL and public key
- `supabase/setup.sql` — the database setup to paste into Supabase; `BACKEND-SETUP.md` — the setup steps
- `resources.js` — Kaplan, UWorld and Khan Academy chapter lists with Classic / Integrated / Hybrid order
- `anki-tags.js` — the Anki search for each chapter, per deck (AnKing, Captain Hook, MileDown)
- `p520.css`, `ui.js` — shared styles and page chrome
- `coach.html`, `calendar.html` (+ `calendar-view.js`), `cars.html`, `cars-guide.html` (the CARS training guide, linked from the tracker), `scores.html`, `index.html` (redirects to the calendar)
- `../.github/workflows/keep-supabase-awake.yml` — pings the database every 3 days so the free project doesn't pause (goes at the top of the repo, not in `plan/`)

To add or fix a chapter, edit `resources.js`. To add or fix an Anki search, edit `anki-tags.js`: find the chapter by its ID and comment (e.g. `"gc-5": { // General Chemistry Ch. 5: Chemical Kinetics`) and paste the search exactly as it appears in the sheet, inside the backticks. To add a deck for UWorld or Khan Academy, add a `captainhook:` or `miledown:` line to each chapter.

After editing any file, change the `?v=` number in the five HTML files (for example `v=20261013a` to `v=20261013b`) so browsers load the new copy.

`coach.html` is marked `noindex`, but anyone with the URL can open it. It shows no client data until you sign in, and the database only gives client data to your coach login.
