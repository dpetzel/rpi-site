# Pi 4 Boardview

!!! warning "Unofficial, incomplete and possibly wrong"
    Reverse engineered by an untrained hobbyist. Not made, endorsed or checked by Raspberry Pi Ltd. Parts, values and
    connections may be wrong. Use at your own risk; see the [full disclaimer](../../disclaimer.md).

An interactive view of the Pi 4 Model B board built from a reverse-engineered KiCad layout: click a part for its
details, or a pad to highlight its net. Each board revision is reconstructed separately.

| Revision | Viewer |
|---|---|
| [Rev 1.5](../model-b/rev-1.5/index.md) | [Open rev 1.5 ↗](https://dpetzel.github.io/pi4-boardview/1.5/){ target="_blank" } |
| [Rev 1.4](../model-b/rev-1.4/index.md) | [Open rev 1.4 ↗](https://dpetzel.github.io/pi4-boardview/1.4/){ target="_blank" } |

[Open the boardview ↗](https://dpetzel.github.io/pi4-boardview/){ .md-button .md-button--primary target="_blank" }

Not sure which revision you have? Run `grep Revision /proc/cpuinfo`: the last digit of the code is the revision
(`c03114` = rev 1.4, `c03115` = rev 1.5).

Source, corrections and downloads (offline HTML, OpenBoardView `.brd`):
[dpetzel/pi4-boardview](https://github.com/dpetzel/pi4-boardview).
