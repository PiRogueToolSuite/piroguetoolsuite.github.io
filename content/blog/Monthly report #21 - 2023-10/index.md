---
title: Monthly report n⁰21 - 2023-10
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-10-31
lastmod: 2023-10-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project released a new Raspberry Pi OS and improved Colander's UI/UX. However, the project is facing a technical challenge where PiRogue's custom rules aren't working properly after OS upgrades."
---

# Context of the project
PiRogue Tool Suite is a reboot of PiRanhaLysis project. Today, PiRanhaLysis is used by a variety of users ranging from universities (e.g. the University of Yale), activists and NGOs, and received lot of interest. Too much traction in fact to be maintained in our spare time, as we have done until now. Currently, the project is at the proof-of-concept stage. To get to a wider adoption by the general public, we need to streamline the build process and smooth the interface. Our goal is to make the project as accessible as possible.

# The project
The problem: the lack of open-source means (hardware + software) to assess both privacy and security of mobile devices. Depending on HRD goals, they should want to educate, conduct emergency assessment or off-the-field investigations.

The plan: As with all the other projects we do, we are the first users of the technologies we develop and we aim to provide open-source, low-cost, well maintained, easy to use and easy to build hardware and software. 

We have the following functioning modes for PTS:

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

## PiRogue
We have release a new version of PiRogue OS based on Debian 12 mainline. The official image can be download from [GitHub](https://github.com/PiRogueToolSuite/pirogue-os/releases/tag/arm64_v2.0.0). This operating system image is compatible with Raspberry Pi 3B and Raspberry Pi 4. PiRogue packages corresponding to this version of PiRogue OS are released and published on [our PPA](https://pts-project.org/debian-12/).

## Colander
We continue improving the UI and UX of Colander. We started working on the deployment procedure. 

## Community and outreach
We continue working on the learning materials. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/). 

We published 3 new guides:

* [How to backup a mobile device for forensic analysis purpose](https://pts-project.org/guides/g4/)
* [How to statically analyze a potentially malicious Android app](https://pts-project.org/guides/g5/)
* [How to handle a potentially compromised device](https://pts-project.org/guides/g6/)

We organized 12 demo sessions during this month.

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on the deployment procedure of Colander
* continue working on improving Colander UI and UX
* continue working on the learning materials

# Challenges
We are still facing a technical issue related to the OS upgrade. More precisely, PiRogue specific `udev` rules are not correctly deployed after Linux kernel updates.