# Board Identification

## Software Identification (Booting Board)

If the board boots into an OS, you can identify the exact revision with a single command:

```bash
cat /proc/cpuinfo | grep Revision
```

Example output:

```
Revision	: c03115
```

The revision code tells you the model, memory size, manufacturer, and PCB revision. Look up your code in the [Raspberry Pi revision code documentation](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-revision-codes) to decode it fully.

### Common Revision Codes

| Code | Model | RAM | PCB Rev |
|------|-------|-----|---------|
| `a03111` | Pi 4 Model B | 1GB | 1.1 |
| `b03111` | Pi 4 Model B | 2GB | 1.1 |
| `c03111` | Pi 4 Model B | 4GB | 1.1 |
| `b03112` | Pi 4 Model B | 2GB | 1.2 |
| `c03112` | Pi 4 Model B | 4GB | 1.2 |
| `d03114` | Pi 4 Model B | 8GB | 1.4 |
| `b03115` | Pi 4 Model B | 2GB | 1.5 |
| `c03115` | Pi 4 Model B | 4GB | 1.5 |
| `d03115` | Pi 4 Model B | 8GB | 1.5 |
| `c04170` | Pi 5 | 4GB | 1.0 |
| `d04170` | Pi 5 | 8GB | 1.0 |

!!! tip
    The full list is maintained by the Raspberry Pi Foundation. For a comprehensive lookup, see the [official revision code table](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-revision-codes).

## Non-Booting Board

When a board won't boot, you can still determine the revision by inspecting physical characteristics on the PCB. Each model's overview page includes a **Revision Identification** section with distinguishing attributes to help narrow down the revision visually.
