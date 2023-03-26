---
title: Monthly report n⁰14 - 2023-03
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-03-25
lastmod: 2023-03-31
draft: true
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

## PiRogue

We have published a new release (v1.11) of `pirogue-cli` improving the way we retrieve TLS keys from the device memory. We have changed to way we deliver the OS image for the PiRogue and updated the documentation accordingly. The new procedure is described [here](https://pts-project.org/docs/pirogue/build-a-pirogue/).

## Colander

Colander is able to recovers data that has been encrypted before being transmitted by looking at the different cryptographic operations that occurred during the execution of the target app. 
{{< img src="img/encrypted-data.png" caption="Example of data decryption." >}}

## Threatr

Threatr (previously known as Colander's analyzers) now supports retrieving intelligence from:
* Virus Total
* Alien Vault OTX

{{< img src="img/threatr-1.png" caption="Example of intelligence provided by Threatr." >}}
{{< img src="img/threatr-2.png" caption="Example of intelligence provided by Threatr." >}}
{{< img src="img/threatr-3.png" caption="Example of intelligence provided by Threatr." >}}

## Community and outreach
We will be giving a talk about PTS at [JDLL](https://jdll.org/) in April 2023 at Lyon (France).

# What we plan to do next month

* continue working on Colander's UI
* continue working on Threatr
* continue working on documentation generation
* continue working on PiRogue tool to interact with Colander
* prepare the migration to Debian 12 mainline instead of Raspberry Pi OS

# Challenges
We are still experiencing serious issues with the Debian packaging of Frida. It is now a show stopper since the current version packaged within PiRogue does not support Android 13.