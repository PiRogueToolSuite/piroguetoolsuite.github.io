---
title: Monthly report n⁰24 - 2024-01
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2024-01-31
lastmod: 2024-01-31
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
We are still in the process of freezing all the features of PiRogue. No major features or breaking changes, except for fixing bugs, will be introduced until March 2024.

We [fixed a bug](https://github.com/PiRogueToolSuite/deb-packages/commit/fb76cefb87ac26df8e5ad29a03010d5b497e25d2) occurring when upgrading the Linux kernel, our customs DTBs were ignored making the HAT no longer being recognized. This is now fixed in the package *pirogue-hardware-detection* version *1.1.1*.

We decreased the attack surface of the PiRogue by improving the firewall configuration. The network traffic, from a device connected to the PiRogue Wi-Fi access point, to the network the PiRogue is connected to is now entirely blocked. This is now fixed in the package *pirogue-ap* version *1.1.1*.

We published a new version (v1.0.3) of the package *python3-colander-client* which is now supporting the query and creation of *Observables*.

## Colander
We are still in the process of freezing all the features of Colander. No major features or breaking changes, except for fixing bugs, will be introduced until March 2024.

The REST API of Colander now supports operations on *Observables*. 

We added the possibility for the users to create, edit and delete the custom attributes of *Artifacts*, *Observables*, *Events* and *Devices*.

## Community and outreach
We continue working on the learning materials. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/). 

We published a new guide:

* [How to use Colander to analyze the network traffic of an app](https://pts-project.org/guides/g9/)

We have reorganized the entire documentation of the project and published a *WIP* version of [the documentation about Colander and case management](https://pts-project.org/docs/colander/overview/).

[@cryptax](https://twitter.com/cryptax), a mobile and IoT malware researcher, published [an article](https://cryptax.medium.com/organizing-malware-analysis-with-colander-example-on-android-wyrmspy-1f3ec30ae33b) explaining how she uses Colander to organize malware analysis. 

Finally, we applied for another round of funding. If successful, we will be following [the roadmap published on GitHub](https://github.com/orgs/PiRogueToolSuite/projects/3/views/3?layout=table).

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* publish the first stable release of both PiRogue and Colander (postponed)
* continue working on the learning materials
* continue working on the project documentation


# Challenges
Some of our users are facing issues with Android 13 we were not able to reproduce. We are still investigating.