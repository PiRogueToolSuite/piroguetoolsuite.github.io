---
title: Monthly report n⁰5- 2022-06
description: "Third monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-06-30
lastmod: 2022-06-30
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
We dedicated the month of June to the announcement of the first stable release of PTS. We reached out to several NGOs:
* Human Rights Watch
* Amnesty International
* Freedom of Press
* Nothing2Hide
* AccessNow
* Article19
* Guardian Project
* The Markup
* Frontline Defenders
* Digital Defenders Partnership
* Tibet Action Institute
* Threat Intel Coalition
* NOYB

We organized numerous demo sessions and started getting feedback from some NGOs listed above. Among other things discussed, we got the chance to get a better understanding of NGOs' needs. 

Two main needs were expressed. The first one is supporting other platform than Raspberry Pi, the chip shortage makes it really hard to buy Raspberry Pi. The second is related to security hardening of PiRogue OS.


# What we plan to do next month
- Supported cheap/mini PCs such as Intel NUC or Lenovo ThinkCentre. 
- Continue working on TLS traffic interception and decryption.
- Organize future demo sessions in August and September.

# Challenges
We are struggling to find an equilibrium between security of PiRogue OS and usability.
