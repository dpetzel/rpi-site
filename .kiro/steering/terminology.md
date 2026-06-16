# Terminology Conventions

This project uses a consistent three-level hierarchy when referring to Raspberry Pi boards:

## Hierarchy

| Level | Term | Description | Examples |
|-------|------|-------------|----------|
| 1 | **Generation** | The major Pi version / product line | Pi 3, Pi 4, Pi 5 |
| 2 | **Model** | The board variant within a generation | Model B, Model B+, Model A+ |
| 3 | **Revision** | The PCB revision of a specific model | Rev 1.1, Rev 1.2, Rev 1.4 |

## Usage Guidelines

- Use these terms consistently in page titles, navigation, and content.
- A Generation may have one or more Models.
- A Model may have one or more Revisions.
- Not every Generation uses the "Model" designation (e.g., Pi 5 is just "Pi 5" with no Model letter). In this case, the Model level is omitted and Revisions sit directly under the Generation.
- Revisions matter for repair because component placement, power circuitry, and test points can differ between PCB revisions of the same model.

## Directory Structure Convention

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

When a Generation has no distinct Model variants (like Pi 5), revisions go directly under the generation folder:

```
docs/
  pi5/
    index.md
    rev-1.0/
      index.md
      components.md
      ...
```

## Navigation Ordering

- Generations are ordered in **reverse chronological** order (newest first).
- Models within a generation follow their release order.
- Revisions within a model are ordered in **reverse chronological** order (newest first).
