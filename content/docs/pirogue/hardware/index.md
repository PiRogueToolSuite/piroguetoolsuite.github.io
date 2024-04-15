---
title: "Hardware"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 20
toc: true
---
The PiRogue's core hardware consists of a Raspberry Pi 4, a versatile single-board computer, enhanced with a custom-designed HAT (Hardware Attachment on Top). This HAT serves as an expansion board that seamlessly integrates with the Raspberry Pi, providing additional functionalities and enhancing its capabilities. It features a TFT screen, a Real-Time Clock (RTC), and cooling fan control circuitry.

## PiRogue HAT

The SPI TFT screen acts as a visual interface, displaying crucial information such as system status, network activity, and security alerts. It provides a real-time overview of the device's operation and facilitates monitoring and troubleshooting.

The I2C Real-Time Clock (RTC) ensures accurate timekeeping, independent of network connectivity or external time sources. This precision timing is essential for maintaining consistent timestamps for security events and ensuring the integrity of network traffic analysis.

The cooling fan control circuitry actively manages the Raspberry Pi's temperature, ensuring optimal performance and preventing overheating. This thermal management is crucial for maintaining system stability and preventing performance throttling under demanding workloads.

The RTC is a Maxim `DS3231M` that uses the I2C protocol to communicate with operating system though the following GPIOs:

* `SDA`: `BCM2`
* `SCL`: `BCM3`

The backup battery is a CR1220 button battery.

The screen is a `ST7789` 240x240px color TFT screen that uses the SPI protocol to communicate with the operating system through the GPIOs:

* `MOSI`: `BCM10`
* `SCK`: `BCM11`
* `RESET`: `BCM5`
* `DC`: `BCM6`

The cooling fan is controlled by the operating system using PWM though the GPIO `BCM13`.

### Manufacturing files

The current PiRogue HAT version is `v1.0_beta`. 

[Get the KiCad project and manufacturing files on GitHub  →](https://github.com/PiRogueToolSuite/pirogue-hat/tree/main/v1.0_beta)

{{< callout context="tip" title="Some info" icon="rocket" >}}
Precision regarding some parts:
* the 2x20 header has to be in the tall version, you can [buy one from Adafruit](https://www.adafruit.com/product/1979)
* use a SPI 240x240 IPS screen [like this one](https://www.aliexpress.com/item/32858069771.html)
* use CR1220 battery
{{< /callout >}}


{{< figure src="img/schematic.png"  caption="PiRogue HAT schematic" alt="PiRogue HAT schematic" class="d-block mx-auto shadow" >}}
{{< figure src="img/pcb.png"  caption="Overview of the HAT PCB" alt="Overview of the HAT PCB" class="d-block mx-auto shadow" >}}
{{< figure src="img/3D.png"  caption="3D view of the HAT" alt="3D view of the HAT" class="d-block mx-auto shadow" >}}

## PiRogue case
The current PiRogue case version is `v1.0_beta`.

[Get the manufacturing files on GitHub  →](https://github.com/PiRogueToolSuite/pirogue-case/tree/main/v1.0_beta)


To 3D print your PiRogue case, you will need:
* either the 4 separate STL files or the one containing the 4 part ready the slice
* a 3D printer
* PLA or PETG

### 3D printing parameters
* layer height: 0.2 mm
* infill: 20%
* no support
* material: PETG

The entire printing lasts around 3 hours for a complete case.

## Assemble the whole PiRogue
To assemble your PiRogue case, you will need:
* a Raspberry Pi 4
* the PiRogue case parts obviously
* 1 x M2.5 allen key
* 12 x M2.5 12mm hex socket bolts - [see an example on McMaster](https://www.mcmaster.com/bolts/18-8-stainless-steel-socket-head-screws-11/length~12-mm/)
* 4 x M2.5 25mm female threaded hex standoffs - [see an example on McMaster](https://www.mcmaster.com/female-threaded-hex-standoffs/thread-size~m2-5/length~25mm/system-of-measurement~metric/)
* 4 x M2.5 hex nuts - [see an example on McMaster](https://www.mcmaster.com/nuts/hex-nuts/system-of-measurement~metric/thread-size~m2-5/material~steel/)

4 M2.5 12mm bolts and 4 M2.5 nuts are used to secure the fan in place. The 4 standoffs are placed between the Raspberry Pi and the hat.


{{< youtube id="WDbZ6ZYWYD4" title="Pirogue's case assembly tutorial" >}}
