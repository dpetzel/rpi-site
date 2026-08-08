# Pi 5 - 5V Power Flow

!!! warning "Disclaimer"
    This page was produced through reverse engineering by a completely untrained
    hobbyist with a multimeter and more curiosity than qualifications. It is not
    based on official schematics, manufacturer documentation, or any formal
    electronics education. Treat everything here as "best guess" — it may be
    wrong, incomplete, or misleading.

This diagram shows how 5V power travels through the board from the USB-C
input. The DA9091 PMIC controls a DMG7430LFG N-channel MOSFET as a hot-swap
switch, ramping the gate over ~400µs to limit inrush current into the >350µF
of capacitance on the 5V rail.

Component references (e.g. "Top #8") refer to the numbered component lists
on the [Pi 5 Components](../components.md) page — "Top" or "Bottom" indicates
which side of the board, and the number matches the ID in that table.

## Power Flow

```mermaid
flowchart LR
    USB(["⚡ USB-C (Top #8, J1)"]) -- "5V In → Drain" --> MOSFET["N-Ch MOSFET\nDMG7430LFG\n(Bottom #3)"]
    USB -- "Drain sense" --> PMIC_DRAIN["DA9091 Pin 21\nHOTSWAP_DRAIN"]
    PMIC_GATE["DA9091 Pin 22\nHOTSWAP_GATE"] -- "Gate drive\n(~400µs ramp)" --> MOSFET
    MOSFET -- "Source → 5V Rail" --> RAIL["5V Rail"]
    RAIL --> PMIC_5V["DA9091 Pins 7 & 9\n(+5V Input)"]
    RAIL --> BOARD["Rest of Board"]
    RAIL -. "Probe here" .-> TP63["📍 TP63 (5V)"]

    PMIC_DRAIN --- PMIC["DA9091 PMIC\n(Top #12)"]
    PMIC_GATE --- PMIC
    PMIC_5V --- PMIC
```

## MOSFET Pinout — Bottom #3 (DMG7430LFG-7)

<table style="border-collapse: collapse; text-align: center; font-family: monospace;">
  <tr>
    <td style="border: none; padding: 8px; vertical-align: middle;" rowspan="3">5V Out ➡</td>
    <td style="border: 1px solid #666; padding: 8px; background: #d4edda; color: #1a1a1a;">Pin 1 (Source)</td>
    <td style="padding: 0 20px;" rowspan="4"></td>
    <td style="border: 1px solid #666; padding: 8px; background: #fff3cd; color: #1a1a1a;">Pin 8 (Drain)</td>
    <td style="border: none; padding: 8px; vertical-align: middle;" rowspan="4">⬅ USB-C (5V In)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #666; padding: 8px; background: #d4edda; color: #1a1a1a;">Pin 2 (Source)</td>
    <td style="border: 1px solid #666; padding: 8px; background: #fff3cd; color: #1a1a1a;">Pin 7 (Drain)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #666; padding: 8px; background: #d4edda; color: #1a1a1a;">Pin 3 (Source)</td>
    <td style="border: 1px solid #666; padding: 8px; background: #fff3cd; color: #1a1a1a;">Pin 6 (Drain)</td>
  </tr>
  <tr>
    <td style="border: none; padding: 8px;">⬅ DA9091 Pin 22 (HOTSWAP_GATE) — 9.72V</td>
    <td style="border: 1px solid #666; padding: 8px; background: #cce5ff; color: #1a1a1a;">Pin 4 (Gate)</td>
    <td style="border: 1px solid #666; padding: 8px; background: #fff3cd; color: #1a1a1a;">Pin 5 (Drain)</td>
  </tr>
</table>



## 5V Test Points

See the full [Test Points (Rev 1.1)](../rev-1.1/test-points.md) page for voltage readings.

## Sources

The PMIC pin assignments (HOTSWAP_GATE, HOTSWAP_DRAIN, +5V inputs) were
verified from the [CM5 Reverse Engineering project](https://github.com/schlae/cm5-reveng)
by Tube Time. The Compute Module 5 uses the identical DA9091 PMIC and
DMG7430LFG hot-swap MOSFET circuit.
