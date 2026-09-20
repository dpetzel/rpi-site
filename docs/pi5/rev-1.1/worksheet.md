# Pi 5 Rev 1.1 - Measurement Worksheet

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

!!! note "Reference data is partial for this revision"
    Only **Powered** reference readings have been recorded for the Rev 1.1 so
    far. The *OS Idle* and *Resistance* reference columns are blank until more
    data is captured — but you can still record your own values in every column.

<div class="tp-worksheet"
     data-board="pi5-rev1.1"
     data-title="Pi 5 Rev 1.1"
     markdown="0">
  <noscript>This worksheet requires JavaScript to be enabled.</noscript>
</div>

## Measurement conditions

Match these conditions when recording, so your values line up with the reference:

* **Powered** — board plugged in / powered on, with *nothing* else connected
  (no SD card inserted).
* **OS Idle** — booted into Raspberry Pi OS from an inserted SD card, sitting idle.
* **Resistance** — measured **without** power; resistance to ground from the test point.
