# Contributing

Contributions of repair data are welcome. This site improves when experienced repair technicians share what they know.

## What to Contribute

- Component identification data (IC designators, part numbers, packages)
- Voltage measurements at test points (specify board revision and conditions)
- Documented failure modes with symptoms and confirmed root causes
- Corrections to existing data
- Annotated board images (component maps, test point diagrams, voltage overlays)

## Getting Started

### Requirements

1. **Git LFS** — required for working with `.xcf` image source files. Install it before cloning:

    ```bash
    # Ubuntu/Debian
    sudo apt-get install git-lfs

    # macOS
    brew install git-lfs

    # Windows — download from https://git-lfs.com/
    ```

    Then run once:

    ```bash
    git lfs install
    ```

2. **Clone the repo** (LFS files download automatically):

    ```bash
    git clone https://github.com/<org>/rpi-site.git
    ```

3. **Python** (optional, for local preview):

    ```bash
    pip install -r requirements.txt
    mkdocs serve
    ```

## Working with Board Images

Board diagrams are maintained as `.xcf` files (GIMP's native format). These are the editable source files that contributors modify to add annotations, component labels, or voltage measurements.

### Workflow

1. Open the relevant `.xcf` file in [GIMP](https://www.gimp.org/) (free, cross-platform)
2. Add your annotations on a **new layer** — don't flatten or merge existing layers
3. Export a `.webp` or `.png` version for the site (File → Export As)
4. Commit both the updated `.xcf` and the exported image

### Guidelines for Image Edits

- Use consistent label styling (check existing layers for font, size, color conventions)
- Name your layers descriptively (e.g., "USB controller voltages", "Q4 identification")
- Keep separate measurement conditions on separate layers so they can be toggled

### LFS Notes

- `.xcf` files are stored via Git LFS — they won't bloat the repo history
- If `git clone` shows placeholder text files instead of real `.xcf` data, run `git lfs pull`
- You can verify LFS is working with `git lfs ls-files`

## How to Submit

1. Fork the repository on GitHub
2. Create a branch for your changes
3. Add or edit content in the `docs/` directory
4. Follow the existing page structure and formatting conventions
5. Open a pull request with a description of what you added and how you verified it

## Data Quality Standards

- All voltage measurements must specify: board revision, measurement conditions (bare board vs. booted), and probe points
- Component data should reference a source (datasheet, visual identification, schematic)
- Failure modes should distinguish between confirmed root causes and suspected causes

## License

By contributing, you agree that your contributions are licensed under the same terms as the rest of the site (MIT).
