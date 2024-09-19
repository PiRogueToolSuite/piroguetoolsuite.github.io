---
title: Monthly report n⁰23 - 2023-12
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-12-31
lastmod: 2023-12-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project completed major UI/UX improvements for Colander and are focusing on releasing the first stable versions of both PiRogue and Colander in the coming month. Despite facing some user-reported issues with Android 13, the project made significant progress this year with increased user base and code contributions."
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
We are in the process of freezing all the features of PiRogue. No major features or breaking changes, except for fixing bugs, will be introduced until March 2024.

## Colander
We are in the process of freezing all the features of Colander. No major features or breaking changes, except for fixing bugs, will be introduced until March 2024.

We have released the final UI/UX rework of Colander. The deployment procedure for production environments has been published [on GitHub](https://github.com/PiRogueToolSuite/colander#production-environment).

## Community and outreach
We continue working on the learning materials. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/). 

We published a new guide:

* [Mobile application regulatory compliance audit methodology](https://pts-project.org/guides/g10/)

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* publish the first stable release of both PiRogue and Colander
* continue working on the learning materials
* continue working on the project documentation

# Few things to sum up this year
* 150+ users on our Discord server
* 50+ community members subscribed to our mailing list
* 20+ community members are testing Colander 
* 250+ commits on the project representing 140k+ lines of code
* 34 PiRogues shipped around the world
* 18 Debian packages
* migration of PiRogue OS to Debian 12 mainline
* 600+ downloads of PiRogue OS
* 350+ unique website visitors per month from 100+ different countries
* 8 learning guides published
* 30+ demo sessions

# Challenges
Some of our users are facing issues with Android 13 we were not able to reproduce. We are still investigating.