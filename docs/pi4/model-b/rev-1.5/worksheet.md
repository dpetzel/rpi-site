# Pi 4 Model B Rev 1.5 - Measurement Worksheet

Use this interactive worksheet to record your own test point measurements while
diagnosing a board. It supports **multiple devices**, so you can track several
boards separately — add a new device for each unit you work on.

!!! info "How your data is stored"
    Entries are saved **in your browser only** (via local storage) as you type.
    You can close the tab and pick up where you left off later on the **same
    browser and device**. Nothing is uploaded anywhere.

    This is convenient but not a backup: clearing your browser data, using a
    different device, or private/incognito windows will lose the entries. Use
    **Export CSV / JSON** to keep a durable copy.

The muted *exp.* columns show the published reference values from the
[reference test points page](test-points.md) for quick comparison against what
you measure. Points are **grouped by board zone** so you can work through one
area of the board at a time. Test points with no published reference value are
omitted here — see the full [reference test points page](test-points.md) for the
complete list.

<div class="tp-worksheet"
     data-board="pi4-model-b-rev1.5"
     data-title="Pi 4 Model B Rev 1.5"
     markdown="0">
  <noscript>This worksheet requires JavaScript to be enabled.</noscript>
</div>

## Measurement conditions

Match these conditions when recording, so your values line up with the reference:

* **Powered** — board plugged in / powered on, with *nothing* else connected
  (no SD card inserted).
* **OS Idle** — booted into Raspberry Pi OS from an inserted SD card, sitting idle.
* **Resistance** — measured **without** power; resistance to ground from the test point.

!!! note "TP11 a/b"
    There are two points near TP11; one is unnumbered. `a` is the one farther
    from the SD card slot, `b` is the one closer to the slot and board edge.
