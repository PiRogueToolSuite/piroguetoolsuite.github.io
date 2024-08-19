---
title: Monthly report n⁰6- 2022-07
description: "Third monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-07-31
lastmod: 2022-07-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project has expanded compatibility to include regular PCs, is actively engaging with NGOs for feedback, and is improving documentation and user experience."
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
We organized numerous other demo sessions and got feedback from some NGOs.

We have created a private mailing list dedicated to PTS for NGOs. Feel free to contact me if you want to take part of this ML.

## Software
### PiRogue Debian packages
Based on the needs expressed during the demo sessions, we compiled architecture-dependent packages for `amd64`. It is now possible to install PiRogue related packages on regular PCs with Debian already installed.

We now support the following architectures:
* `armhf`
* `arm64`
* `amd64`

### PiRogue configuration
Since we now offer a way to turn almost any computer having both ethernet and Wi-Fi capabilities into a PiRogue, we started working on an easy way for the user to configure it. Due to the number of different hardware setups that can be used as a PiRogue, we have to create a tool allowing the user to configure their PiRogue while minimizing the risk of errors.

# What we plan to do next month
- Write a guide "How to turn a PC into a PiRogue".
- Upgrade 3rd-party we package such as MVT.
- Continue working on PiRogue configuration tool.
- Continue working on TLS traffic interception and decryption.
- Organize more demo sessions in August and September.
- Bootstrap the *Tool Suite* boilerplate. 

# Challenges
Our English is not very good, we need to improve it. We also need to improve the way we present the project.