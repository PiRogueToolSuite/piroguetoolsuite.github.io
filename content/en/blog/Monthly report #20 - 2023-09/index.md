---
title: Monthly report n⁰20 - 2023-09
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-09-30
lastmod: 2023-09-30
draft: false
weight: 50
contributors: ["Esther Onfroy"]
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
We continue testing Debian 12 PiRogue packages on both Raspberry Pi 3B and Raspberry Pi 4. Those packages will be released and published at `https://pts-project.org/debian-12/` along with the corresponding OS image.

## Colander
We continue improving the UI and UX of Colander. Among others, we added the possibility to specify TLP and PAP levels for cases. Those levels are then used as default values for all created entities. It is still possible to define other TLP and PAP levels for each entity. All description and comment fields now support Markdown. Users can now download the case documentation as a Markdown file and the graph as a PNG file.

## Community and outreach
We continue working on the learning materials. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/).

We onboarded Sereen Dhamshi as a graphic designer, she is currently working on the illustrations of our learning materials.

We have open 15 time slots in October to present the latest improvements of Colander, slots that anyone can attend. If you want to learn more about the different key features of Colander, feel free to book a demo session at [https://calendly.com/pirogue-tool-suite/demo](https://calendly.com/pirogue-tool-suite/demo).

During these sessions, we will be focusing on:

* how to use Colander to analyze data processing (traffic decryption) in the context of legal cases;
* how to use Colander to get threat intelligence based on observables;
* how to use the Colander graph editor;
* how to use Colander feeds to export findings, IOCs and detection rules.

[>> Book a demo session.](https://calendly.com/pirogue-tool-suite/demo)

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on improving Colander UI and UX
* continue working on the learning materials
* continue doing demo sessions of Colander for community partners
* continue testing PiRogueOS 12

# Challenges
We are still facing a technical issue related to the OS upgrade. More precisely, PiRogue specific `udev` rules are not correctly deployed after Linux kernel updates.