---
title: Monthly report n⁰11- 2022-12
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-12-31
lastmod: 2022-12-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project has released a new tool for automatically intercepting TLS keys and is making significant progress on their Colander software suite. Colander offers case management, automatic analysis (like AV scans), and enrichment (without relying solely on expensive 3rd party services)"
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

We have been working on another command for TLS encryption keys interception. This command `pirogue-intercept-gated` automatically instruments all spawned processes. It is useful when it comes to dynamically instrument an application that spawns processes. This command also retrieve both socket and AES operations too. 

Side note: on Android, when an app wants to spawn a new process, it delegates it to Zigote. Most app processes running on Android are spawned by Zygote. 

## Colander

We continue working on different aspects of Colander such as UI and analyzers. 

### Case management

Colander’s entry point is a case. Each case, which can correspond to an incident or an investigation, contains only the information (observable, artifacts…) that relate to it. Several people can collaborate on the same case. We have almost completely implemented the features related to the case management.

### Automatic analysis and enrichment

Colander comes with a set of modules for AV analysis, type-specific artifact analysis and observable enrichment. These analyzers are reusable are implemented in a separate service that can be deployed and used without Colander. The goal is to provide a generic REST API for quick an easy integration into other projects. Since 3rd-party services such as VirusTotal are often too expensive for NGOs, we try to provide analyzers that are not dependent on those external services.

For the moment, we have implemented the TLS traffic decryption. The UI is largely perfectible but here is an overview:

{{< img src="img/colander-tls-decryption.png" caption="TLS traffic decryption and stacktrace correlation with Colander" >}}

## Communication

We have published an overview of the different activities done this year, feel free to check out [our review of 2022](https://pts-project.org/blog/year-2022-in-review/).

# What we plan to do next month

* finish the implementation of the case management
* continue working on Colander's UI
* continue working on Colander's analyzers

# Challenges
We are facing issues on the packaging of the latest version of Frida. Find more details at [https://github.com/PiRogueToolSuite/pirogue-os/issues/18](https://github.com/PiRogueToolSuite/pirogue-os/issues/18).