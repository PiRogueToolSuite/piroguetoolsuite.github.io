---
title: Monthly report n⁰22 - 2023-11
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-11-30
lastmod: 2023-11-30
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite released a new Raspberry Pi OS image compatible with latest Pi models and are improving Colander's UI/UX and deployment procedures."
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
The official image of the latest version of PiRogue OS can be download from [GitHub](https://github.com/PiRogueToolSuite/pirogue-os/releases/tag/arm64_v2.0.0). This operating system image is compatible with Raspberry Pi 3B and Raspberry Pi 4B. PiRogue packages corresponding to this version are released and published on [our PPA](https://pts-project.org/debian-12/).

## Colander
We continue improving the UI and UX of Colander. We continue working on the deployment procedure. 

## Community and outreach
We made few accessibility improvements of our website by adopting to a more legible font and correcting the color contrast.

We continue working on the learning materials. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/). 

We published a new guide:

* [How to use PTS to intercept the TLS and decrypt network traffic of an app](https://pts-project.org/guides/g8/)

We organized 2 demo sessions during this month. 

Defensive Lab Agency is now member of [CiviCERT](https://www.civicert.org/).

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on the deployment procedure of Colander
* continue working on improving Colander UI and UX
* continue working on the learning materials

# Challenges
Some of our users are facing issues with Android 13 we were not able to reproduce. We are still investigating.