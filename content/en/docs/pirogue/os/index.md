---
title: "Operating system"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 30
toc: true
---

The PiRogue runs PiRogueOS which is based on Debian 12 by the time we are writing this document (Dec. 2023). Debian is a renowned Linux distribution recognized for its stability, reliability, and commitment to open-source principles. It serves as a foundational platform for numerous other distributions and is widely adopted in various industries, including enterprise environments, scientific research, and embedded systems. Debian's trustworthiness stems from its long-standing reputation for quality, its rigorous testing and development processes, and its commitment to open and transparent collaboration.

Debian's stability is attributed to its conservative approach to software updates, ensuring that only thoroughly tested and stable packages are included in its repositories. This emphasis on stability makes Debian a preferred choice for mission-critical systems where reliability is paramount.

Debian's commitment to open-source principles fosters a collaborative development model that leverages the expertise of a vast community of developers and users. This open approach promotes transparency, encourages peer review, and ensures that Debian remains a community-driven project with a focus on quality and security.

Pirogue Tool Suite uses a comprehensive set of software tools for network traffic analysis, device forensics, and threat intelligence gathering. These tools are categorized based on their functionalities:

* `tcpdump`: Captures network traffic and stores it in PCAP files for further analysis.
* `suricata`: Detects malicious traffic based on predefined rules and signatures.
* `nfstream`: Inspects network traffic in-depth to determine the specific applications involved in each data flow.
* `yara`: Applies detection rules to decrypted network traffic, identifying patterns and anomalies.
* `adb`: Provides a command-line interface for interacting with Android devices for forensic analysis.
* `libimobiledevice`: Enables communication and data extraction from iOS devices for forensic investigations.
* `mvt`: Conducts comprehensive device forensic analysis, identifying signs of compromise or spyware infection.
* `frida`: Injects code into running applications and processes on a device, enabling dynamic analysis through dynamic instrumentation.
* `sha256`: Computes file hashes to check data integrity.


## Hardware integration

PiRogue OS is a tailored version of Debian mainline, a popular Linux distribution known for its stability and reliability. However, the custom HAT (Hardware Attachment on Top) used in PiRogue requires additional configurations to integrate seamlessly with the Linux kernel. To achieve this compatibility, custom Device Tree Blobs (DTBs) and `udev` rules have been developed.

**Device Tree Blobs (DTBs)** are data structures that describe the hardware configuration of a device, providing the kernel with information about its components and their relationships. Custom DTBs for the PiRogue HAT enable the kernel to recognize and properly interact with the HAT's unique hardware components, such as the TFT screen, RTC, and fan control circuitry.

**`Udev` rules**, on the other hand, are configuration files that govern how the Linux kernel handles device events and assigns device permissions. Custom `udev` rules for the PiRogue HAT ensure that the kernel properly detects the HAT's devices, assigns them appropriate permissions, and triggers the necessary actions when events occur.

The definition of the different DTB overlays and `udev` rules can be reviewed on GitHub:
* [https://github.com/PiRogueToolSuite/deb-packages/tree/debian-12/pirogue-hat/linux/arm64](https://github.com/PiRogueToolSuite/deb-packages/tree/debian-12/pirogue-hat/linux/arm64) 
* [https://github.com/PiRogueToolSuite/deb-packages/tree/debian-12/pirogue-screen-st7789-240x240/linux/arm64](https://github.com/PiRogueToolSuite/deb-packages/tree/debian-12/pirogue-screen-st7789-240x240/linux/arm64) 

By implementing custom DTB overlays and `udev` rules, PiRogue OS ensures seamless integration between the Raspberry Pi, the custom HAT, and the Linux kernel. This tailored approach enables the PiRogue to operate smoothly within the Debian environment. The Linux Kernel uses the RTC as a reference of time and takes care synchronizing the system time with the RTC one at its boot if NTP is not available. 

The generation of the operating system image to be flashed on an SD-card is ensured by Packer. It takes the official Debian image and applies changes such as creating a default user and configuring a PPA. The modifications applied to the official Debian image is available on GitHub [https://github.com/PiRogueToolSuite/pirogue-os](https://github.com/PiRogueToolSuite/pirogue-os).

PiRogue features can be installed on a Raspberry Pi as well as on a regular computer equipped with a Wi-Fi interface and an Ethernet interface. 


## Packaging for PiRogue

All features and software installed on the PiRogue are packaged for Debian. These packages are published on 2 PPAs. One for Raspberry Pi OS 11 and one for Debian 12.

A Personal Package Archive (PPA) serves as a repository for software packages maintained by individuals or teams outside of the official Debian distribution. It allows developers to distribute and update their software independently, providing users with access to newer versions or packages not yet included in Debian's main repositories. PPAs offer a convenient way to access other software but require cautious use as they may not undergo the same rigorous testing as official Debian packages.

PTS’s PPAs contain both PiRogue-specific tools as well as external tools that are not available on official Debian repository.

By the time writing this document, PiRogue-specific packages are:
* `pirogue-ap` to setup the Wi-Fi access point
* `pirogue-base` is a meta-package to install all PiRogue-specific packages 
* `pirogue-cli` to install the PiRogue command line tools
* `pirogue-dashboard` to setup the PiRogue dashboard 
* `pirogue-eve-collector` to configure Suricata and setup the tools managing Suricata alerts
* `pirogue-flow-inspector` to setup the deep packet inspection 
* `pirogue-hat` to setup the HAT of the PiRogue
* `pirogue-maintenance` to setup the daily maintenance such as detection rules update
* `pirogue-screen-st7789-240x240` to setup the TFT screen of the HAT
* `pirogue-tools` to install all other necessary software such as MVT or Frida

We also packaged, for Debian, tools that are not maintained by PTS team:
* `python3-adb-shell`
* `python3-ahocorasick`
* `python3-communityid`
* `python3-geoip2`
* `python3-iosbackup`
* `python3-mvt`
* `python3-nskeyedunarchiver`
* `python3-nfstream`
* `frida`

All PiRogue-specific packages are defined in the GitHub repository [https://github.com/PiRogueToolSuite/deb-package](https://github.com/PiRogueToolSuite/deb-package) in 2 separate branches: one for Raspberry Pi OS 11 and one for Debian 12.

PiRogue Debian packages can be installed on any compatible hardware running Debian 12 (without graphical environment). The package hardware-detection will be taking care of installing the HAT drivers if the installation is done on a Raspberry Pi.


## Installation procedure

[Have a look to the guide dedicated to building a PiRogue→](/guides/g1)

To install PiRogue OS on a Raspberry Pi, it is necessary to download the OS image and to flash it on an SD-card. After the first boot on the SD-card, it is possible to connect to the PiRogue using SSH by running the command 
```bash
$ ssh pi@pirogue.local
```
the default SSH password is `raspberry`. 

Once connected, the operating system has to be upgraded and the PiRogue installation has been to be completed by running the commands
```bash
$ sudo apt update
$ sudo apt dist-upgrade
$ sudo apt install install pirogue-base
```

And finally reboot the PiRogue with the command 
```bash
$ sudo reboot
```

To convert a regular PC into a PiRogue, it requires Debian 12 being installed without any graphical environment and to add the PTS PPA with commands 
```bash
$ sudo curl -o /etc/apt/sources.list.d/pirogue.list    https://pts-project.org/debian-12/pirogue.list
$ sudo curl -o /etc/apt/trusted.gpg.d/pirogue.asc   https://pts-project.org/debian-12/Key.gpg
```

And finally install the PiRogue packages with the commands 
```bash
$ sudo apt update
$ sudo apt install install pirogue-base
$ sudo reboot
```

The upgrade of the PiRogue, is done using the command, the same way as a regular operating  system upgrade
```bash
$ sudo apt update
$ sudo apt dist-upgrade
$ sudo reboot
```

Instead of delegating the hardware detection to the corresponding package, it is also possible to provision a specific configuration **before** installing PiRogue packages by specifying the following parameters:

`WIFI_NETWORK_NAME`: SSID of the Wi-Fi network to created
`WIFI_NETWORK_KEY`: password required to connect to the PiRogue’s Wi-Fi network
`WIFI_COUNTRY_CODE`: 2-letter country code where the PiRogue is located
`ETH_IFACE`: the name of the network interface having access to the Internet
`WLAN_IFACE`: the name of the network interface to setup the Wi-Fi access point on

in the file `/var/lib/pirogue/config/pirogue.user.env`


## Upgrade
All PiRogue features are bundled as Debian packages. So, by upgrading Debian (which is the only supported operating system) you are also upgrading your PiRogue.

To upgrade both the OS and the PiRogue features, run the following two commands: 

```bash
sudo apt update
sudo apt dist-upgrade
```

This operation could take some time and would require a reboot to make your PiRogue operates properly.


### How often?
We advice you to upgrade your PiRogue **weekly**.


### Heavily customized PiRogue
Some users would want to customize their PiRogue by playing with the different configuration files of the system. If so, be sure to backup your changes BEFORE upgrading your PiRogue. The upgrade will override your customization.

The following configuration files are managed by the PiRogue packages:
* `/etc/hostapd/hostapd.conf`
* `/etc/dnsmasq.conf`
* `/etc/dhcpcd.conf`
* `/etc/iptables/rules.v4`
* `/etc/iptables/rules.v6`
* `/etc/suricata/suricata.yaml`
* `/etc/grafana/grafana.ini`
* `/etc/grafana/provisioning/datasources/datasources.yml`
* `/etc/grafana/provisioning/dashboards/grafana_dashboards.yml`
* `/var/lib/grafana/dashboards/pirogue-dashboard.json`
* `/var/lib/grafana/dashboards/pirogue-flow-details-dashboard.json`