---
title: Monthly report n⁰7- 2022-08
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-08-31
lastmod: 2022-08-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
---

# Context of the project
PiRogue Tool Suite is a reboot of PiRanhaLysis project. Today, PiRanhaLysis is used by a lot of people ranging from universities (the University of Yale as an example), activists, NGOs and gets a lot of traction. Too much traction in fact to be maintained in our spare time as we have done until now. Currently, the project is at the proof-of-concept stage. To get to wider adoption by the general public, we need to streamline the build process and smooth the interface. Our goal is to make the project accessible to anyone.

# The project
The problem: the lack of open-source means (hardware + software) to assess both privacy and security of mobile devices. Depending on HRD goals, they should want to educate, conduct emergency assessment or off-the-field investigations.

The plan: As with all the other projects we do, we are the first users of the technologies we develop and we aim to provide open-source, low-cost, well maintained, easy to use and easy to build hardware and software. 

We have three functioning modes for PTS:

- a kiosk mode for anyone who wants to know which servers a mobile device is communicating with
  - useful for non-profit that want to know if a victim is targeted by stalkerware
  - useful for educational purposes to highlight surveillance capitalism
  - more generally assess if a mobile device is spied on/compromised by utilizing detection rules such as Suricata and others

- an on-the-field mode
  - for emergency response (active spying, device tampering, ...) useful for responders in repressive environment
  - conduct forensics analysis and network detection using a pre-installed set of tools

- an expert mode for technical people to:
  - determine the list of collected data
  - assess regulatory compliance
  - conduct penetration testing 
  - analyze malware's behavior
  - ensure reproducible analysis
  - generate comprehensive reports

The PiRogue is an open hardware device based on a Raspberry Pi operating as a network router (like any ISP router) analyzing network traffic in real time. 

# What we have done so far
You can check out our work on GitHub at [https://github.com/PiRogueToolSuite/](https://github.com/PiRogueToolSuite/) or on our website at [https://pts-project.org/](https://pts-project.org/).

## Communication

### Outreach
We organized few other demo sessions and got feedback from some NGOs. Few session time slots remain, [feel free to book a session](https://framadate.org/cHlg9UnuzL7LAErP).

Major updates are now announced on the project mailing list. Feel free to contact me if you want to take part of this ML.

### Documentation
We published documentation on:

* [how to upgrade your PiRogue](https://pts-project.org/docs/pirogue/operating-system/#upgrade)
* [how to configure your PiRogue](https://pts-project.org/docs/pirogue/configuration/)
* [how to turn a PC into a PiRogue](https://pts-project.org/docs/recipes/turn-a-regular-pc-into-a-pirogue/)
* [how to add your own Suricata rules](https://pts-project.org/docs/recipes/add-your-own-suricata-rules-to-pirogue/)

## Software

### PiRogue packages
We have upgraded the MVT package.

### PiRogue configuration
We finally released a tool allowing the user to configure their PiRogue and published [the corresponding documentation](https://pts-project.org/docs/pirogue/configuration/).

{{< img src="img/config.png" alt="Command managing PiRogue configuration" class="d-block mx-auto shadow" >}}

We also released a tool displaying the PiRogue status in a more human friendly way.

{{< img src="img/status.png" alt="Command displaying PiRogue status" class="d-block mx-auto shadow" >}}

# Note
{{< figure src="img/echap.png"  >}}

Thanks to the great work of [Echap](https://echap.eu.org) and [Amnesty International](https://www.amnesty.org/en/) the PiRogue can detect stalkerware in two ways:

* by [inspecting the network traffic with Suricata](https://pts-project.org/guides/g2/)
* by [inspecting a smartphone with MVT](https://pts-project.org/docs/recipes/device-forensics-with-mvt/)

You can browse [IOCs provided by Echap on GitHub](https://github.com/AssoEchap/stalkerware-indicators).

{{< img src="img/mvt.png" alt="MVT uses Echap's IOCs" class="d-block mx-auto shadow" >}}

# What we plan to do next month
- Continue working on TLS traffic interception and decryption.
- Continue working on the *Tool Suite* part of the project. 

# Challenges
Our English is not very good, we need to improve it. We also need to improve the way we present the project.
