---
title: "PiRogue without ethernet connection"
date: 2022-05-25
lastmod: 2022-05-25
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 60
toc: true
resources:
- name: router-:counter
  src: img/router-*.jpg
---

*This is the translation in English of a tutorial originally written by [Thomas Fourmeux](https://biblionumericus.fr), a French librarian. [Follow him on Twitter](https://twitter.com/fourmeux)!*

## Context
This tutorial is for using the PiRogue in a situation where you don't have a wired connection to the Internet (such as in a car). Thanks to a travel router, you will be able to share (via USB) your smartphone's LTE/4G connection with the PiRogue.

## Requirements
In this situation, you need the following hardware:
* a PiRogue (*obviously*)
* a smartphone with a LTE/4G connection to the Internet
* a travel router GL-AR750 [available on Amazon](https://www.amazon.com/GL-iNET-GL-AR750S-Ext-Gigabit-pre-Installed-Included/dp/B07GBXMBQF)
* a laptop

## Setup
Follow these steps to connect all the pieces together:
1. connect your PiRogue to your travel router with an ethernet cable
2. power on both the travel router and the PiRogue
3. connect your smartphone (the one sharing its Internet connection) with a USB cable to the travel router
4. connect your laptop to the travel router's Wi-Fi network named `GL-AR750S-XXX`, the password is `goodlife` (it is also written on the back of the travel router)
5. on your laptop, open the travel router's administration panel in a Web browser, it is usually accessible at `http://192.168.8.1`

{{< alert icon="👉" >}}
Note that you have to enable the USB tethering in the settings of your smartphone.
{{< /alert >}}

## Configure the travel router
When you first connect, you must set the language and administrator password to secure access to the router. 

{{< img src="router-1" alt="Travel router administration panel" class="d-block mx-auto" >}}

In the *Internet* tab, enable connection sharing as follows:
We can connect the router in LAN via a cable, use the router in repeater mode, connect a 4G dongle or in connection sharing mode with a smartphone. It is this last option that interests us. After connecting the smartphone via USB, the router interface detects the device in the *Sharing* section with the `usb0` device and proposes to connect the two devices. We establish the connection by clicking on *Connect*. 

{{< img src="router-2" alt="Share the smartphone Internet connection" class="d-block mx-auto" >}}

Once the connection is established, the router shows the network configuration with its IP address, the netmask, the default gateway and the default DNS server.

{{< img src="router-3" alt="Connection details" class="d-block mx-auto" >}}

## Get the PiRogue's IP address
To be able to connect to your PiRogue dashboard, you need its IP address. To find it, just go to the *Clients* tab of the router's administration panel to list all the devices connected to it. The PiRogue is indicated in the column *Wired device* with the name `raspberrypi`.


{{< img src="router-4" alt="PiRogue's IP address" class="d-block mx-auto" >}}

Finally, the PiRogue network is operational. You can connect to the PiRogue's dashboard as you usually do just by browsing its IP address on port 3000 in your Web browser. The IP address is listed on the *Clients* page of the router, it should look like `192.168.8.xxx` 

