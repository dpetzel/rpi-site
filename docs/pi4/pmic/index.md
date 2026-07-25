# Power Management IC

The Pi 4 Model B uses two different PMICs depending on the board revision:

| PMIC | Revisions | Manufacturer |
|------|-----------|--------------|
| [MxL7704](mxl7704.md) | Rev 1.1–1.4 | MaxLinear |
| [DA9090](da9090.md) | Rev 1.5 | Dialog / Renesas |

The two chips are **not** pin-compatible and have different pad layouts. If replacing a PMIC, you must match the correct chip to the board revision.
