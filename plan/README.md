# Project 520 study plan pages

Drop this folder into the `projectfivetwenty.github.io` repo as `plan/`. The pages are then served at:

- `https://projectfivetwenty.github.io/plan/coach.html` — your Control Panel (coach only)
- `https://projectfivetwenty.github.io/plan/calendar.html` — client calendar (the client link opens this)
- `.../plan/cars.html` — client CARS tracker
- `.../plan/scores.html` — client full-length score tracker

## How it works

- The Control Panel builds a client link. The whole plan rides in the link after `#p=`, so nothing is stored on a server.
- When the client opens the link, the plan is saved in their browser. Their CARS and score logs are saved there too, under the plan's ID.
- Resending an updated link (load their link in the Control Panel, edit, copy the new link) keeps the same ID, so their logs carry over.
- Logging CARS sessions moves the client through the 7 phases, and the calendar's CARS assignments follow the current phase, same as the sheet.
- Clients can download a backup file from the footer of any page and send it to you. Restoring it in any browser (including yours) shows their calendar and logs.

## Plan settings

- **Plan tier**: Core or Coaching. Core plans never mention a coach on the client's pages.
- **Plan style**: Daily (a set list for each day), Weekly (a checklist per week; the client picks the day), or Phase (content by subject, fixed full-length dates, weekly question goals). Milestones and the on-track status appear in every style.
- **Weekly catch-up day**: an optional study day with no new chapters.
- **Anki deck**: AnKing MCAT, Captain Hook, or MileDown. The client's Anki buttons give searches for that deck. The list shows how many of the chosen resource's chapters have a search for each deck.
- **Final stretch**: days between the last full-length review and test day have no assignments. Write a final-stretch note per client, or leave it blank for the default (Coaching: "Plan these days with your coach." Core: "No set assignments.").

## Progress and re-planning

- Clients check off chapters and practice blocks on the calendar. A status strip shows whether they're on track, ahead, or behind (and which chapters are missing).
- Re-plans go through you. Ask the client for a backup file (footer of any page), then in the Control Panel use **Load client backup** under Check-in & re-plan.
- You'll see chapters done, how far behind they are, their pace over the last two weeks, and the pace needed to finish on time.
- Pick a start date for the re-plan and an option: absorb, extend content review, or move the test date. You can also drop chapters and write a note. The table compares the current plan with the re-plan.
- **Save re-plan**, then copy the client link and send it. Their check-offs, CARS log and scores carry over. An old bookmarked link won't undo the re-plan.
- Days before the re-plan date show what the client actually finished; the remaining chapters are spread evenly from the re-plan date on.

## Files

- `engine.js` — the schedule logic (port of the Schedule tab formula), CARS phase rules, Anki search format, storage
- `resources.js` — Kaplan, UWorld and Khan Academy chapter lists with Classic / Integrated / Hybrid order
- `anki-tags.js` — the Anki search for each chapter, per deck (AnKing, Captain Hook, MileDown)
- `p520.css`, `ui.js` — shared styles and page chrome
- `coach.html`, `calendar.html` (+ `calendar-view.js`), `cars.html`, `scores.html`, `index.html` (redirects to the calendar)

To add or fix a chapter, edit `resources.js`. To add or fix an Anki search, edit `anki-tags.js`: find the chapter by its ID and comment (e.g. `"gc-5": { // General Chemistry Ch. 5: Chemical Kinetics`) and paste the search exactly as it appears in the sheet, inside the backticks. To add a deck for UWorld or Khan Academy, add a `captainhook:` or `miledown:` line to each chapter.

After editing any file, change the `?v=` number in the four HTML files (for example `v=20261013a` to `v=20261013b`) so browsers load the new copy.

`coach.html` is marked `noindex`, but anyone with the URL can open it. It holds no client data, only the form.
