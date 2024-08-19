---
title: Monthly report n⁰8- 2022-09
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-09-30
lastmod: 2022-09-30
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project has achieved a major milestone with their new tool for intercepting and decrypting TLS traffic from Android applications. The project is also building a scalable software suite for managing evidence, analysis, and reporting, while acknowledging challenges in keeping up-to-date with third-party libraries."
---

# Context of the project
PiRogue Tool Suite (PTS) is a reboot of [PiRanhaLysis project](https://github.com/PiRanhaLysis). PiRanhaLysis serves different use-cases, ranging from universities (the University of Yale as an example), activists, NGOs and although archived, still gets a lot of traction. In fact, too much traction for it to be maintained as a hobby project as it has been done until now. Currently, PiRogue Tool Suite is at the proof-of-concept stage. To get to wider adoption by the general public, the build process must be streamlined and the interface smoothened. Our goal is to make PiRogue Tool Suite accessible to anyone.

# The project
The problem: the lack of open-source tooling (hardware + software) to assess both the privacy and the security of mobile devices. Depending on Human Right Defenders' goals, the tooling should enable them to educate, conduct emergency assessment or off-the-field investigations.

The plan: As with all the other projects we do, we are the first users of the technologies we develop and we aim to provide open-source, low-cost, well maintained, easy to use and easy to build hardware and software. 

We have three modes for PTS:

- a kiosk mode for anyone who wants to know which servers a mobile device is communicating with
  - for non-profits who want to know if a victim is targeted by stalkerware
  - for educational purposes to highlight surveillance capitalism
  - more generally, assessing if a mobile device is spied on/compromised by utilizing detection rules such as Suricata

- an on-the-field mode
  - for emergency response (active spying, device tampering, ...) useful for responders in repressive environments
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

## Software

### TLS traffic interception and decryption
We finally released a tool allowing the user to intercept and decrypt the TLS traffic of a given Android application. This tool dumps:

* the TLS encryption keys 
* the entire network capture
* the different cryptographic operations 
* the different operations on sockets

Once dumped, user can use another command line tool to see each different network exchanges displaying:

* the source and destination of each payload
* the stack trace of each payload
* the decrypted payloads 

The documentation of this feature is available at [https://pts-project.org/docs/recipes/how-to-intercept-and-decrypt-tls-traffic/](https://pts-project.org/docs/recipes/how-to-intercept-and-decrypt-tls-traffic/).

### The *Tool Suite* 
The *Tool Suite* is a software stack, its architecture is distributed and easy to scale based on:

* Django (web Python framework)
* Postgresql
* Redis
* Minio
* ElasticSearch

This stack is not cloud-depend, that means it can be deployed on a *bare metal* server as well as on any cloud platform supporting Docker.

The *Tool Suite* is meant to offer the following features:

* fleet management (fleet of PiRogue obviously)
* evidence management 
* basic incident response management
* case and knowledge management
* custom reporting
* automatic evidence analysis (via third-party tools)
* automatic observable enrichment (via third-party tools)
* automatic data collection detection
* ensure reproducible analysis

# What we plan to do next month
- Continue working on the *Tool Suite* part of the project. 

# Challenges
It is difficult for us to keep the various third-party libraries we package up to date.
The PiRogue Tool Suite project has achieved a major milestone with their new tool for intercepting and decrypting TLS traffic from Android applications. They're also building a scalable software suite for managing evidence, analysis, and reporting, while acknowledging challenges in keeping up-to-date with third-party libraries.