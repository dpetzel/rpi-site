# Power Management IC

Very few resources seem to exist publicly documenting the PMIC and nearby components. 
This is a breakdown of the PMIC area of the Pi 5 board. It represents the aggregation 
of my own testing and information available on the Internet.


## Replacement Sourcing
The primary power management chip on the PI 5 is a DA9091 which seems to have been
purpose built for the Raspberry PI and as a result is not a general purpose
component that you can source online.

That said, it does appear that [PI Hut](https://thepihut.com/products/da9091-pmic-5-pack)
 in the UK sells these.


## Pad Reference
These were taken from a non working board, so needs verification. Measurements
were taken on the board so you have to imagine the chip image was flipped 180 degrees
on either of its vertical axis.

Ground was established without power and testing continuity.

5.3v was measured with the board plugged in and nothing else.This initial mapping was
focused on what was connected directly to the USB C input. Its not an exhaustive list
of 5v pads, but rather those pads which are getting 5v directly from the input rail. 
These in theory represent the input power to the PMIC itself. 

<div style="display: flex; gap: 1rem; flex-wrap: wrap; ">
  <figure style="flex: 1; min-width: 150px; margin: 0; width: 150px">
    <img src="images/pi5_da9091_bottom_pads.jpg" alt="Pi 5 board top" style="width: 100%;">
     <figcaption style="text-align: center; font-size: 0.8rem;">Pad Photo</figcaption>
  </figure>
  <figure style="flex: 1; min-width: 150px; margin: 0; width: 150px">
    <img src="images/pi5_da9091_pad_reference.png" alt="Pi 5 board bottom" style="width: 100%;">
     <figcaption style="text-align: center; font-size: 0.8rem;">Aannotated Pad Photo</figcaption>
  </figure>
</div>

<br />
<br />

The following image was taken with the DA 9091 chip physically
removed from the board showing the pad layout that is on 
the underside of the chip. Measurements were taken with the USB-C
plugged in and the PMIC removed to try and highlight where 5v
enters the PMIC

<div style="display: flex; gap: 1rem; flex-wrap: wrap; ">
  <figure style="flex: 1; min-width: 150px; margin: 0; width: 150px">
    <img src="images/pi5_under_pmic_pads.jpg" alt="Board Photo" style="width: 100%;">
     <figcaption style="text-align: center; font-size: 0.8rem;">Board Photo</figcaption>
  </figure>
  <figure style="flex: 1; min-width: 150px; margin: 0; width: 150px">
    <img src="images/pi5_under_pmic_pad_voltages.png" alt="Annotated Board Photo<" style="width: 100%;">
     <figcaption style="text-align: center; font-size: 0.8rem;">Annotated Board Photo</figcaption>
  </figure>
</div>

## Area Breakout

![Indexed Component List](images/pi5_pmic_area_indexed.png)

<table>
  <tr>
    <th>#</th><th>Type</th><th>Package</th><th>Value</th><th>Power Rail</th><th>Links</th><th>Notes</th>
  </tr>
  <tr>
    <td>0</td>
    <td></td>
    <td>QFN</td>
    <td></td>
    <td>multiple</td>
    <td>
      <ul>
        <li><a href="https://thepihut.com/products/da9091-pmic-5-pack">Pi Hut Item</a></li>
      </ul>
    </td>
    <td>This is the PMIC itself. As of 2026-05-29 Pi Hut seems to be the only place to source one.
      <br />
      Can be either Renesas or Dialog
    </td>
  </tr>
  <tr><td>1</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>2</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>0.8v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>4</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>5</td>
      <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>6</td></tr>
  <tr><td>7</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>22µF</td>
    <td>5v</td>
    <td>
      <ul>
        <li><a href="https://www.digikey.com/short/d4jwf15w">DigiKey</a></li>
      </ul>
    </td>
    <td>Self measured</td>
  </tr>
  <tr><td>9</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>10</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>11</td></tr>
  <tr><td>12</td></tr>
  <tr><td>13</td></tr>
  <tr><td>14</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>15</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>16</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>0.8v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>17</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>1.1v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>18</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>19</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>20</td></tr>
  <tr><td>21</td></tr>
  <tr><td>22</td></tr>
  <tr><td>23</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>24</td></tr>
  <tr><td>25</td></tr>
  <tr><td>26</td></tr>
  <tr><td>27</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>28</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>0.6v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>29</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>30</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>31</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>32</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>1.1v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>33</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>1.8v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>34</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>35</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>36</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>4.7µF</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2284048#p2284119">Value Source</a>
    </td>
    <td>0402 4u7 6V3 X5R</td>
  </tr>
  <tr><td>37</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>4.7µF</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2284048#p2284119">Value Source</a>
    </td>
    <td>0402 4u7 6V3 X5R</td>
  </tr>
  <tr><td>38</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>39</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
  <tr><td>40</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>41</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td></td>
    <td>5v</td>
    <td></td>
    <td>self-measured</td>
  </tr>
  <tr><td>42</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>3.3v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>43</td>
    <td>Capacitor</td>
    <td></td>
    <td></td>
    <td>3.7v</td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=374141&start=25#p2240900">Voltage Source</a>
    </td>
    <td></td>
  </tr>
  <tr><td>44</td>
    <td>Inductor</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://magazine.raspberrypi.com/articles/raspberry-pi-5">Inductor Indentification</a>
    </td>
    <td></td>
  </tr>
</table>

## DA9091 Functional Reference

### External Reference

The [CM5 reverse engineering project](https://github.com/schlae/cm5-reveng) by Tube Time provides detailed pin-level documentation of the DA9091 PMIC. The Compute Module 5 uses the **identical DA9091** in the same QFN-71 (6×6mm, 0.4mm pitch) package, making this an invaluable cross-reference for Pi 5 repair work.

!!! note "Applicability"
    The following pin assignments are derived from the [CM5 reverse engineering project](https://github.com/schlae/cm5-reveng) which uses the identical DA9091 PMIC. While pin functions are confirmed shared, the specific external circuitry (capacitor values, inductor values, PCB routing) may differ between CM5 and Pi 5.

### Pin Function Summary (from CM5 reverse engineering)

| Parameter | Value |
|-----------|-------|
| Package | QFN-71, 6×6mm, 0.4mm pitch |
| I2C Address | 0x38 |

| Pin(s) | Function | Description |
|--------|----------|-------------|
| 7, 9 | +5V | Main power input |
| 8 | VREG_INT | Internal regulator output |
| 10 | VREF | 3.3V reference output (VREF_3V3) |
| 11 | PWR_BUT | Power button input |
| 21 | HOTSWAP_DRAIN | Senses drain of DMG7430LFG |
| 22 | HOTSWAP_GATE | Drives gate of DMG7430LFG |
| 24 | VLOGIC | Logic supply |
| 43 | CC2 | USB-C CC2 line |
| 44 | CC1 | USB-C CC1 line |
| 47 | VBAT | RTC battery input |
| 50 | SCL | I2C clock |
| 51 | SDA | I2C data |
| 52, 53 | OSC | 32 KHz crystal oscillator |
| 56 | INT | Open-collector interrupt output |
| 62 | RUN | Power good / status output |
| 63 | EN_LOAD_SW | Enables secondary 3.3V and 1.8V rails |
| 65 | PMIC_EN | PMIC enable input |

!!! info "Hot-swap function"
    The hot-swap function is built into the DA9091 — it directly controls the DMG7430LFG MOSFET gate (pin 22) while sensing the drain (pin 21), providing approximately 400 µs inrush current ramp-up time. This is not an external hot-swap controller; it is integrated into the PMIC silicon.

### Power Rail Output Assignments

| Converter | LX Pin | Output Pin | Rail | Voltage | Notes |
|-----------|--------|------------|------|---------|-------|
| Buck 1 | 2 | OUT1 (49) | VDD_3V7_WIFI | 3.7 V | WiFi module supply |
| Buck 2 | 5 | OUT2 (55) | 3.3V main | 3.3 V | Primary 3.3 V rail |
| Buck 3 | 13 | OUT3 (61) | 1.8V main | 1.8 V | Primary 1.8 V rail |
| Buck 4 | 16 | OUT4 (71) | VDD_0V6 | 0.6 V | LPDDR4 VDDQ |
| Buck 5 | 19 | OUT5 (64) | VDD_1V1 | 1.1 V | LPDDR4 VDD2 |
| Buck 6 | 28 | OUT6 (60) | VDD_1V1_RP1 | 1.1 V | RP1 southbridge |
| Buck 7 | 31 | OUT7 (54) | VDD_0V8_BCM | 0.8 V | BCM2712 auxiliary |
| VCx (4-phase) | 34, 36, 39, 41 | VC_OUT (45) | VDD_BCM_CORE | ~0.8 V (variable) | BCM2712 core, DVFS-controlled |
| LDO | — | 25 | VDD_HDMI | — | HDMI supply |
| LDO | — | 23 | Unknown | — | — |
| VREF | — | 10 | VREF_3V3 | 3.3 V | Reference voltage |
