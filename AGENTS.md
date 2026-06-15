# AGENTS.md — Project Steering Rules

This file provides guidance for AI agents working on this repository.

## Project Overview

This is an MkDocs-powered static site about Raspberry Pi information, hosted at
**https://rpi.dpetzel.info**. It is deployed to GitHub Pages via GitHub Actions
and fronted by Cloudflare for DNS and CDN.

## Tech Stack

- **Static Site Generator:** MkDocs with the Material for MkDocs theme
- **Language:** Python (for tooling only; site content is Markdown)
- **Hosting:** GitHub Pages (via `actions/deploy-pages`)
- **CDN / DNS:** Cloudflare
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)

## Repository Structure

```
.
├── .github/workflows/   # CI/CD workflows
├── docs/                # All site content (Markdown files)
│   ├── index.md         # Homepage
│   ├── getting-started.md
│   └── guides/          # Step-by-step guides
├── mkdocs.yml           # MkDocs configuration
├── requirements.txt     # Python dependencies
└── AGENTS.md            # This file
```

## Content Guidelines

1. **All site content lives in `docs/`** — never place Markdown content outside this directory.
2. **Use Markdown only** — no HTML unless absolutely necessary for a feature MkDocs/Material cannot provide natively.
3. **Leverage Material for MkDocs features** — use admonitions (`!!! note`), code blocks with copy buttons, tabbed content, and other built-in extensions rather than custom solutions.
4. **Keep pages focused** — one topic per page. If a page grows beyond ~300 lines, consider splitting it.
5. **Use descriptive filenames** — lowercase, hyphen-separated (e.g., `install-docker.md`).
6. **Update `nav` in `mkdocs.yml`** — when adding new pages, always add them to the `nav` section so they appear in the site navigation.

## Development Workflow

### Local Development

```bash
pip install -r requirements.txt
mkdocs serve
```

### Building the Site

```bash
mkdocs build --strict
```

The `--strict` flag treats warnings as errors. Always use it to catch issues early.

### Deployment

Deployment is automatic. Pushing to the `main` branch triggers the GitHub Actions
workflow which builds the site and deploys it to GitHub Pages.

## Rules for AI Agents

1. **Never modify `.github/workflows/deploy.yml`** without explicit user approval — it controls production deployments.
2. **Always run `mkdocs build --strict`** (or confirm it passes) before considering content changes complete.
3. **Do not add Python dependencies** to `requirements.txt` without explicit user approval.
4. **Preserve the Material theme configuration** — do not change the theme unless instructed.
5. **Keep the CNAME file intact** — `docs/CNAME` contains the custom domain and must not be removed or altered.
6. **Commit messages** should be concise and descriptive (e.g., `Add guide for setting up Pi-hole`).
7. **Branch strategy** — work on feature branches; never push directly to `main` without a PR.
8. **When adding new pages:**
   - Create the `.md` file in the appropriate `docs/` subdirectory.
   - Add the page to the `nav` section of `mkdocs.yml`.
   - Verify the build passes with `--strict`.
9. **Image assets** — place images in `docs/assets/images/` and reference them with relative paths.
10. **No generated files in source** — the `site/` directory is in `.gitignore` and must never be committed.
