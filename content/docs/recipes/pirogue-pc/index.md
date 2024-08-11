---
title: "Turn a regular PC into a PiRogue"
date: 2022-08-17
lastmod: 2022-08-17
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 940
toc: true
---

This recipe is dedicated to intrepid users 😎

## Requirements
To follow this recipe we need:
* a PC with one Ethernet interface, one wireless interface and Debian 12 freshly installed
* the wireless interface has to support the AP mode (access-point mode)
* the PC is connected to our local network via its Ethernet adapter
* the PC has an Internet connection

{{< callout context="danger" title="Danger" icon="alert-octagon" >}}
Don't install any desktop environment.
{{< /callout >}}

## Prepare the system
We will do everything by command line so, we connect to our PC and run the following command to upgrade it:

```bash
sudo apt update
sudo apt dist-upgrade
```

Then install `iw` to check if the wireless interface supports the AP mode:

```bash
sudo apt install iw
```

run `iw list`and scroll through its output to check if the wireless interface supports the AP mode. If so, it should look like

{{< img src="img/ap-mode.png" alt="Output of iw list" class="d-block mx-auto shadow" >}}

## Install the PiRogue packages
Next, we have to add the PTS PPA (repository containing all PiRogue packages) by running 

```bash
sudo curl -o /etc/apt/sources.list.d/pirogue.list https://pts-project.org/debian-12/pirogue.list
sudo curl -o /etc/apt/trusted.gpg.d/pirogue.gpg   https://pts-project.org/debian-12/pirogue.gpg
sudo apt update
```

Finally install the PiRogue features:

```bash
sudo apt install pirogue-base
```

## Check if everything runs properly
To check how healthy our PiRogue is, run

```bash
pirogue-ctl status 
```

{{< img src="img/status.png" alt="Output of pirogue-ctl status" class="d-block mx-auto shadow" >}}

If we see everything in a mix of purple and green, congrats! If not, [join the Discord channel](https://discord.gg/qGX73GYNdp) to get help.