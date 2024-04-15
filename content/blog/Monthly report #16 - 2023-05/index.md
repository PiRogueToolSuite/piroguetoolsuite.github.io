---
title: Monthly report n⁰16 - 2023-05
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-05-31
lastmod: 2023-05-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
---

# Context of the project
PiRogue Tool Suite is a reboot of PiRanhaLysis project. Today, PiRanhaLysis is used by a lot of people ranging from universities (the University of Yale as an example), activists, NGOs and gets a lot of traction. Too much traction in fact to be maintained in our spare time as we have done until now. Currently, the project is at the proof-of-concept stage. To get to wider adoption by the general public, we need to streamline the build process and smooth the interface. Our goal is to make the project accessible to anyone.

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
We have published a Debian package [`pirogue-colander-connector`](https://github.com/PiRogueToolSuite/pirogue-colander-connector) available on our PPA to transfer data from the PiRogue to Colander. This package relies on [`colander-python-client`](https://github.com/PiRogueToolSuite/colander-python-client), a Python module designed to interact with Colander REST API. The Colander Python client is available on [Pypi](https://pypi.org/project/colander-client/) and on our [PPA](https://pts-project.org/ppa/).

## Colander
We have added a new workspace named *Collaborate* allowing the users to manage their teams and share cases with multiple teams. This workspace will also allow users to create export/outgoing feeds supporting both JSON and CSV to share findings with external organizations and/or tools. 

We have implemented a first version of the REST API allowing external tools such as the PiRogue to interact with Colander. 

We have started working on the dynamic graph editor based on [Cytoscape](https://cytoscape.org/).

Finally, we continue improving UI and UX.

## Threatr
We have developed a Python client for Scarlet Shark. This Python module is available:
* as a [Python package on Pypi](https://pypi.org/project/scarlet-shark-client/) `scarlet-shark-client`
* as a [Debian package on our PPA](https://pts-project.org/ppa/) `python3-scarlet-shark-client`

This module will be then used by [Threatr](https://github.com/PiRogueToolSuite/threatr) to request the Scarlet Shark REST API.

## Community and outreach
We are now hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on the dynamic graph editor
* start working on outgoing feeds
* schedule demo sessions of Colander for community partners
* prepare the migration to Debian 12 mainline instead of Raspberry Pi OS

# Challenges
We are still experiencing serious issues with the Debian packaging of Frida. It is now a show stopper since the current version packaged within PiRogue does not support Android 13.