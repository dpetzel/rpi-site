# Raspberry Pi Repair Reference

A community-driven reference site for Raspberry Pi board repair, covering component identification, voltage measurements, test points, and documented failure modes.

**Live site:** Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed via GitHub Pages.

## Prerequisites

### Git LFS

This repository uses [Git LFS](https://git-lfs.com/) to store `.xcf` (GIMP) source files for board diagrams and annotated images. You must install Git LFS before cloning.

**Install Git LFS:**

```bash
# Ubuntu/Debian
sudo apt-get install git-lfs

# macOS
brew install git-lfs

# Windows
# Download from https://git-lfs.com/
```

**Then initialize it (one-time setup):**

```bash
git lfs install
```

After that, `git clone` will automatically pull LFS files.

### Python (for local preview)

```bash
pip install -r requirements.txt
mkdocs serve
```

## Repository Structure

```
docs/           # Site content (Markdown + images)
  pi3/          # Raspberry Pi 3 models
  pi4/          # Raspberry Pi 4 models
  pi5/          # Raspberry Pi 5 models
  pi-zero/      # Raspberry Pi Zero models
  pi400/        # Raspberry Pi 400
  pi500/        # Raspberry Pi 500
  guides/       # General repair guides
overrides/      # MkDocs theme overrides
mkdocs.yml      # Site configuration
```

## Contributing

See [docs/contributing.md](docs/contributing.md) for guidelines on submitting repair data, working with board images, and pull request expectations.

## License

MIT
