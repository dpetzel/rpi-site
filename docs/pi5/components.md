# Pi 5 Components

## Top

!!! tip "Top-side components have moved to the interactive Boardview"
    All top-side components, including their function, part numbers, replacement links and sources, are now on
    the **[Pi 5 Boardview](boardview/index.md)**. Click a part to see its details, search by reference or value
    (e.g. `J1`, `DA9091`, `AP22652`), and click a pad to highlight its net.

    The bottom side is still being mapped and remains listed below for now.

## Bottom
![PI 5 Bottom Components](/pi5/images/pi5_components_bottom_v2.png)

<table>
  <tr>
    <th>ID</th>
    <th>Official Label</th>
    <th>Type</th>
    <th>Package</th>
    <th>Value</th>
    <th>Replacement(s)</th>
    <th>Source(s)</th>
    <th>Notes</th>
  </tr>

  <tr>
    <td>1</td>
    <td>J9</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://www.digikey.com/short/cwcj9225">DigiKey</a>
    </td>
    <td></td>
    <td>Micro SD Card Slot</td>
  </tr>

  <tr>
    <td>3</td>
    <td></td>
    <td>N-Channel Mosfet</td>
    <td></td>
    <td></td>
    <td>
      <a href="https://www.digikey.com/short/9dd52j4n">DigiKey</a>
    </td>
    <td>
      <a href="https://github.com/schlae/cm5-reveng">CM5 Reverse Engineering</a>
    </td>
    <td>
      DMG7430LFG-7
      <br />
      Hot-swap / inrush current limiting MOSFET. Gate driven by DA9091 PMIC pin 22. Drain sensed by PMIC pin 21. ~400µs ramp-up time.
    </td>
  </tr>

  <tr>
    <td>8</td>
    <td></td>
    <td>N-Channel Mosfet</td>
    <td>DFN1006B-3</td>
    <td>20V</td>
    <td>
      <a href="https://www.nexperia.com/product/PMZB600UNEL">Nexperia</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400465#p2387100">Raspberry Pi Forum</a>
    </td>
    <td>PMZB600UNEL - 20 V, N-channel Trench MOSFET.</td>
  </tr>

  <tr>
    <td>11</td>
    <td></td>
    <td>N-Channel Mosfet</td>
    <td>DFN1006B-3</td>
    <td>20V</td>
    <td>
      <a href="https://www.nexperia.com/product/PMZB600UNEL">Nexperia</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=399702">Raspberry Pi Forum</a>
      <br />
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400465#p2383365">Raspberry Pi Forum</a>
    </td>
    <td>
      PMZB600UNEL - 20 V, N-channel Trench MOSFET. Used for fan PWM speed control.
      <br />
      Board can still be used without this if not using the fan, provided remaining solder is not shorting the pads (difficult to see in the photo).
    </td>
  </tr>

  <tr>
    <td>17</td>
    <td></td>
    <td>Ferrite Bead</td>
    <td>0402</td>
    <td>220 Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=378124#p2261274">Raspberry Pi Forum</a>
    </td>
    <td>
      Murata BLM15PX221SN1D 220 Ohms @ 100 MHz 1 Power Line Ferrite Bead 0402 (1005 Metric) 1.4A 100mOhm
      <br />
      Near TP65
    </td>
  </tr>

  <tr>
    <td>34</td>
    <td></td>
    <td>Capacitor</td>
    <td>0201</td>
    <td></td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2381538#p2381538">Raspberry Pi Forum</a>
    </td>
    <td>MLCC, 100n, 0201 (M0603), 6.3V, 10%, X5R</td>
  </tr>

  <tr>
    <td>66</td>
    <td>R46</td>
    <td>Resistor</td>
    <td>0201</td>
    <td>2K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>Near TP64</td>
  </tr>

  <tr>
    <td>67</td>
    <td>R47</td>
    <td>Resistor</td>
    <td>0201</td>
    <td>2K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>Near TP64</td>
  </tr>

  <tr>
    <td>68</td>
    <td>R17</td>
    <td>Resistor</td>
    <td>0201</td>
    <td>470 Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>Near TP64</td>
  </tr>

  <tr>
    <td>69</td>
    <td>R15</td>
    <td>Resistor</td>
    <td>0201</td>
    <td>470 Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>Near TP64</td>
  </tr>

  <tr>
    <td>72</td>
    <td>C234</td>
    <td>Capacitor</td>
    <td>0603</td>
    <td>22uF</td>
    <td>
      <a href="https://www.digikey.co.uk/short/5hfh7zcf">DigiKey</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>
       22uF 6V3 X5R 10%
       <br />
       Just north of TP26
    </td>
  </tr>

  
  <tr>
    <td>99</td>
    <td></td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>15µF</td>
    <td>
      <a href="https://www.digikey.com/en/products/detail/kyocera-avx/04026D156MAT2A/5964918">DigiKey</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=399917#p2384639">Raspberry Pi Forum</a>
    </td>
    <td>15µF ±20% 6.3V X5R 0402</td>
  </tr>

  <tr>
    <td>115</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td>18K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400465#p2387100">Raspberry Pi Forum</a>
    </td>
    <td>
      18K 1% 50mW 0201.
      <br />
      Associated with the status LED, so its absence should not affect board stability.
    </td>
  </tr>

  <tr>
    <td>116</td>
    <td>C263</td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>4u7</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>
       4u7 6V3 X5R 20% 0402
       <br />
       Near TP46
    </td>
  </tr>

  <tr>
    <td>117</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td>1K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400465#p2387100">Raspberry Pi Forum</a>
    </td>
    <td>1K 1% 50mW 0201.</td>
  </tr>

  <tr>
    <td>118</td>
    <td>R93</td>
    <td></td>
    <td>0201</td>
    <td>10K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2365706&hilit=PI+5+Component#p2352563">Raspberry Pi Forum</a>
    </td>
    <td>Near TP46</td>
  </tr>

  <tr>
    <td>123</td>
    <td></td>
    <td>Capacitor</td>
    <td>0603</td>
    <td>22uF</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2356885&hilit=PI+5+Component#p2356889">Raspberry Pi Forum</a>
    </td>
    <td>
      ceramic capacitor.
      22uF, 6.3V, X5R, 20%, 0603.
      <br />
      Near TP34
    </td>
  </tr>

  <tr>
    <td>229</td>
    <td></td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>4u7</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400233#p2385981">Raspberry Pi Forum</a>
    </td>
    <td>
      MLCC, 4u7, 0402, 6.3V, 20%, X5R
    </td>
  </tr>

  <tr>
    <td>230</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td></td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400233#p2385981">Raspberry Pi Forum</a>
    </td>
    <td>
      Resistor, Chip, 1R, 0201, 50mW, 1%
    </td>
  </tr>

  <tr>
    <td>285</td>
    <td></td>
    <td>Capacitor</td>
    <td>0201</td>
    <td>1uF</td>
    <td>
      <a href="https://www.digikey.com/short/q9bq50vc">DigiKey</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=399050#p2379907">Raspberry Pi Forum</a>
    </td>
    <td>
      Murata Electronics GRM033R60J105ME11D <br />
      Located between TP37 & TP8 <br /><br />
      Used to stabilise the Real Time Clock battery rail.
    </td>
  </tr>


  <tr>
    <td>301</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td>1K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2284048#p2284090">Raspberry Pi Forum</a>
    </td>
    <td>Midway between SD Slot and U12</td>
  </tr>
  <tr>
    <td>302</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td>10K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2284048#p2284090">Raspberry Pi Forum</a>
      <br />
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=399345#p2382002">Raspberry Pi Forum</a>
    </td>
    <td>
      Power button will not respond with this missing.
      <br />
      Midway between SD Slot and U12
    </td>
  </tr>
  <tr>
    <td>303</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td>2K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2284048#p2284090">Raspberry Pi Forum</a>
      <br />
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=399345#p2382002">Raspberry Pi Forum</a>
    </td>
    <td>
       If the red part of the status led works then this component is okay.
      <br />
      Midway between SD Slot and U12
    </td>
  </tr>

  <tr>
    <td>304</td>
    <td></td>
    <td>Resistor</td>
    <td>0201</td>
    <td>18K Ω</td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2259191#p2260470">Raspberry Pi Forum</a>
    </td>
    <td>Near TP2</td>
  </tr>

  <tr>
    <td>305</td>
    <td></td>
    <td>Mosfet</td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?p=2259191#p2260470">Raspberry Pi Forum</a>
    </td>
    <td>
      PMZB600UNELYL N-Channel 20 V 600mA (Ta) 360mW (Ta) Surface Mount DFN1006B-3
      <br />
      Near TP2
    </td>
  </tr>

  <tr>
    <td>180</td>
    <td></td>
    <td>Capacitor</td>
    <td>0402</td>
    <td>4u7</td>
    <td>
      <a href="https://www.digikey.co.uk/en/products/detail/murata-electronics/GRM155R60J475ME47D/3694656">DigiKey</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400610#p2387521">Raspberry Pi Forum</a>
    </td>
    <td>Murata GRM155R60J475ME47D — MLCC, 4u7, 0402 (M1005), 6.3V, 20%, X5R</td>
  </tr>

  <tr>
    <td>181</td>
    <td></td>
    <td>Ferrite Bead</td>
    <td>0402</td>
    <td>220 Ω</td>
    <td>
      <a href="https://www.digikey.co.uk/en/products/detail/murata-electronics/BLM15PX221SN1D/4421097">DigiKey</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400610#p2387521">Raspberry Pi Forum</a>
    </td>
    <td>Murata BLM15PX221SN1D — 0402 (M1005), 220R @ 100MHz, 100mR, 1.4A</td>
  </tr>

  <tr>
    <td>182</td>
    <td></td>
    <td>Capacitor</td>
    <td>0201</td>
    <td>10nF</td>
    <td>
      <a href="https://www.digikey.co.uk/en/products/detail/murata-electronics/GRM033R71A103KA01D/702460">DigiKey</a>
    </td>
    <td>
      <a href="https://forums.raspberrypi.com/viewtopic.php?t=400610#p2387521">Raspberry Pi Forum</a>
    </td>
    <td>Murata GRM033R71A103KA01D — MLCC, 10n, 0201 (M0603), 10V, 10%, X7R</td>
  </tr>

  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
