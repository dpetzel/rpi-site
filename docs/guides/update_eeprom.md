# Updating EEProm

> Since Raspberry Pi 4, Raspberry Pi flagship devices use an EEPROM bootloader. The main difference between these and previous products is that the second-stage bootloader is loaded from SPI flash EEPROM instead of the bootcode.bin file used on previous products.

[More Info](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)

You can update the eeprom via the following commands on a functioning/booted board:
```
sudo apt update
sudo apt full-upgrade -y
sudo rpi-eeprom-update -a
sudo reboot
```

## References
* [Raspberry Pi boot EEPROM](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-boot-eeprom)
* [EEPROM boot flow
](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#eeprom-boot-flow)