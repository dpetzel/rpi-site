# AGENTS.md

Instructions for AI agents working on this project.

## Adding a New Board

When adding support for a new Raspberry Pi board (generation, model, or revision), follow this checklist to ensure nothing is missed.

### Checklist

1. **Create directory structure** under `docs/` following the conventions described below.
2. **Create index.md** for the generation/model with:
   - Description of the board
   - Revisions table (or Models table if applicable)
   - Board photos section (if images are available)
3. **Create revision pages** with:
   - `index.md` — Identification section (revision codes, release date, key changes)
   - `test-points.md` — Test point placeholder tables (Power Rails + Signal Test Points)
4. **Add an interactive worksheet** (only once the board has real test-point
   data — see [Test Point Worksheets](#test-point-worksheets)). Skip this for
   boards whose `test-points.md` is still an empty placeholder.
5. **Update `mkdocs.yml` nav** — Add the new entries in the correct position:
   - Generations: reverse chronological (newest first)
   - Keyboard-integrated variants (Pi 400, Pi 500) go immediately after their parent generation
   - Revisions within a model: reverse chronological (newest first)
6. **Update `docs/index.md`** — Add the new board to the "Models Covered" table on the front page.
7. **Build and verify** — Run `mkdocs build` and confirm no errors.

## Directory Structure

```
docs/
  pi{generation}/
    index.md                          # Generation overview
    {model}/                          # e.g., model-b/, 3b-plus/, 3a-plus/
      index.md                        # Model overview
      rev-{version}/                  # e.g., rev-1.1/, rev-1.2/
        index.md                      # Revision overview
        components.md
        voltages.md
        test-points.md
        worksheet.md                  # Interactive worksheet (boards with test-point data only)
        failure-modes.md
```

When a generation has no distinct model variants (Pi 5, Pi 400, Pi 500), revisions go directly under the generation folder:

```
docs/
  pi5/
    index.md
    rev-1.0/
      index.md
      test-points.md
```

## Keyboard-Integrated Boards

Boards like the Pi 400 and Pi 500 are keyboard-integrated computers that share an SoC with a parent generation (Pi 4 and Pi 5, respectively). They:

- Do **not** use Model A/B designations
- Have their own generation-level directory (e.g., `docs/pi400/`, `docs/pi500/`)
- Follow the flat revision structure (revisions directly under the generation)
- Are placed immediately after their parent generation in navigation

## Bundle Products

Retail bundles (e.g., "Pi 500 Desktop Kit", "Pi 400 Kit") are purchasing packages, not distinct boards. They do **not** get their own pages.

## Navigation Ordering

- Generations are ordered in reverse chronological order (newest first).
- Models within a generation follow their release order.
- Revisions within a model are ordered in reverse chronological order (newest first).

## Test Point Worksheets

Some revisions have an interactive **measurement worksheet** — a page where a
technician records their own test-point readings for a specific board and has
them persisted in the browser (`localStorage`) across sessions. It is entirely
client-side; nothing is uploaded. It supports multiple named "devices" so
several physical boards can be tracked separately, and offers CSV/JSON export.

### Moving parts

| Piece | Path | Purpose |
|-------|------|---------|
| Worksheet engine | `docs/assets/javascripts/tp-worksheet.js` | Renders the form, handles storage/export. Contains the `TP_DATASETS` object with each board's reference values. |
| Styles | `docs/assets/stylesheets/tp-worksheet.css` | Styling (follows the Material light/dark theme). |
| Worksheet page | `docs/{…}/rev-{ver}/worksheet.md` | Thin page with a mount `<div class="tp-worksheet">`. |
| Global wiring | `mkdocs.yml` | `extra_css` / `extra_javascript` load the assets site-wide; a `Worksheet:` nav entry sits right after that revision's `Test Points`. |

The JS and CSS are registered **once** in `mkdocs.yml` and serve every
worksheet — you do not add them per page.

### How the worksheet uses the data

- Each board has an entry in `TP_DATASETS`, keyed by a slug like
  `pi4-model-b-rev1.5` (the same string used in the page's `data-board`
  attribute). The `data-title` attribute is the human-readable heading.
- A dataset has `columns` (the measurement columns, e.g. Powered / OS Idle /
  Resistance) and `points` (one row per test point, each carrying its `zone`
  and the published reference values in `ref`).
- On the page, rows are **grouped by zone** and any test point with **no
  published reference value is omitted** from the worksheet (it still lives on
  the reference `test-points.md` page). The muted *exp.* columns echo the
  reference values so the tech can compare against what they measure.

### Adding a worksheet for a board

Only add a worksheet once `test-points.md` has **real recorded data** (not an
empty `TODO` placeholder).

1. **Add a dataset** to `TP_DATASETS` in `tp-worksheet.js`. Copy the values
   **verbatim** from that revision's `test-points.md` table — same test-point
   labels (`TP…` or `PP…`), zones, and reference readings. Include rows with no
   data too (blank `ref` values); the renderer filters them out. If the board
   uses a different column schema, define its `columns` accordingly.
2. **Create `worksheet.md`** next to `test-points.md`. Use an existing worksheet
   (e.g. `docs/pi4/model-b/rev-1.5/worksheet.md`) as the template and update the
   heading, `data-board`, and `data-title`. Keep the "how your data is stored"
   admonition. Keep `markdown="0"` on the mount `<div>` so `md_in_html` does not
   reformat it.
3. **Add the nav entry** in `mkdocs.yml`: a `Worksheet:` item immediately after
   that revision's `Test Points:` entry.
4. **Verify:** `node --check docs/assets/javascripts/tp-worksheet.js` and
   `mkdocs build`, then confirm the worksheet renders and groups by zone.

### ⚠️ Keep worksheets in sync with test points

**The reference values baked into `TP_DATASETS` are a copy of the
`test-points.md` tables. Whenever you add, edit, or correct test-point data for
a board that has a worksheet, you MUST update the matching `TP_DATASETS` entry
in `tp-worksheet.js` in the same change** — otherwise the worksheet's *exp.*
columns will silently drift out of date.

This applies in both directions:

- Editing a value, zone, or test-point label in `test-points.md` → update the
  corresponding `ref` / `zone` / `tp` field in `tp-worksheet.js`.
- Adding a new column to a board's readings → update that dataset's `columns`.
- Adding a worksheet-less board's first real data → consider adding a worksheet
  per the steps above.

Boards currently with worksheets (keep these in sync): `pi4-model-b-rev1.5`,
`pi4-model-b-rev1.1`, `pi5-rev1.0`, `pi5-rev1.1` (Powered-only reference so
far), `pi3-3b-plus-rev1.3`.


## File and Directory Permissions

All directories under `docs/` are owned by `:users` with the setgid bit set (`drwxrwsr-x`). This means:

- **Group `users` can write** to all directories — any agent or user in the `users` group can create, modify, and delete files.
- **New files and subdirectories inherit the `users` group** automatically because of setgid.

When creating or copying files (especially images) into `images/` directories, ensure group write permission is set so every member of `users` can modify them later:

```bash
# Copy a file and set group-writable permissions
cp source.jpg destination.jpg
chgrp users destination.jpg
chmod 664 destination.jpg
```

Or create new files directly with the right perms:

```bash
# Create a new file writable by group
touch newfile.md
chgrp users newfile.md
chmod 664 newfile.md
```

**Check before finishing:** After adding or copying files, verify with:

```bash
ls -la path/to/images/
ls -ld path/to/images/ path/to/parent/
```

All files should have `664` (rw-rw-r--) permissions and belong to the `users` group. All directories should show `drwxrwsr-x` with the `users` group.

If a file belongs to a different group, or lacks group write (`644` instead of `664`), members of `users` will not be able to modify it — fix it before handing off.
