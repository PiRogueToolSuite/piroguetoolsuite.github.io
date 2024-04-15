---
title: Monthly report n⁰17 - 2023-06
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-06-30
lastmod: 2023-06-30
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
We decided to switch from Raspberry Pi OS to Debian 12 mainline which provides almost all dependencies we need to upgrade Frida, MVT and NFStream. 

The major drawback of this move is that we need to rework the way the operating system is interacting with the HAT. If most of the job is done by Raspberry Pi OS and its vendor DTBOs, Debian 12 ships the mainline Linux kernel which only provides DTBs. To make the HAT fully functional, we had to write specific DTBOs for:

* the temperature control
* the I2C Real Time Clock
* the SPI TFT screen

We also had to port the screen driver from `Adafruit Blinka` (which relies on components that are specific to Raspberry Pi OS) to the `spidev` and `libgpiod` Python modules that work both on Raspberry OS and on Debian.

Regarding Frida, we finally managed to update, build and package it (version `16.0.19`) for Debian 12 mainline. 

We are reorganizing the PPAs (Debian packages repositories) to reflect the two different versions we will be supporting. So, `https://pts-project.org/debian-11/` is the repository containing all packages for Raspberry Pi OS 11 and `https://pts-project.org/debian-12/` for Debian 12 mainline.

The legacy PPA at `https://pts-project.org/ppa/` will be deprecated but kept online.

We are still porting all the other PiRogue packages to Debian 12. Those packages will be released and published at `https://pts-project.org/debian-12/` along with the corresponding OS image.

## Colander
We have added the ability to import entities from the *Investigate* workspace to the current case. A new  type of entity *Data fragment* to represent a piece of information extracted from another source has been added supporting the following types:

* Pattern
* Piece of code
* Piece of text
* Raw payload 

It is now possible to create export feeds for detection rules (for both Suricata and Yara). Suricata export feeds can be added to the PiRogue.

{{< img src="img/rule_feeds.png" alt="Example of export feeds for detection rules" class="d-block mx-auto shadow md-5" >}}

Entity export feeds now support STIX 2 format and those feeds can be consumed by MVT.

{{< img src="img/stix2_feed.png" alt="Example of STIX 2 export feeds" class="d-block mx-auto shadow md-5" >}}

Finally, we have released the first version of the graph editor supporting the following actions: 

* quickly create an entity (by right-clicking on the graph)
* show, edit, delete an entity (by right-clicking on it)
* create a new relation (by right-clicking on the source entity)
* edit, delete a relation (by right-clicking on it)
* export the graph in PNG (in tool bar)
* edit in fullscreen (in tool bar)

{{< img src="img/graph_editor.png" alt="Overview of the graph editor" class="d-block mx-auto shadow md-5" >}}

The graph editor is available in the *Collect* workspace.

## Community and outreach
We started publishing training guides at [https://pts-project.org/guides/](https://pts-project.org/guides/).

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on the dynamic graph editor
* continue working on the training guides
* schedule demo sessions of Colander for community partners
* continue the migration to Debian 12 mainline

# Challenges
Porting the HAT drivers to Debian 12 was a big deal, we want to warmly thank [Cyril Brulebois](https://debamax.com/) for his help and support.