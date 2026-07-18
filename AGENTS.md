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
4. **Update `mkdocs.yml` nav** — Add the new entries in the correct position:
   - Generations: reverse chronological (newest first)
   - Keyboard-integrated variants (Pi 400, Pi 500) go immediately after their parent generation
   - Revisions within a model: reverse chronological (newest first)
5. **Update `docs/index.md`** — Add the new board to the "Models Covered" table on the front page.
6. **Build and verify** — Run `mkdocs build` and confirm no errors.

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
