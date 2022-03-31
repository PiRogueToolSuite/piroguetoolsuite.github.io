---
title: Monthly report n⁰2 - 2022-03
description: "Second monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-03-30
lastmod: 2022-03-30
draft: false
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
  - more generally assess if a mobile device is spied/compromised by utilizing detection rules such as Suricata and others

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
You can check out our work on GitHub at [https://github.com/PiRogueToolSuite/](https://github.com/PiRogueToolSuite/) or on our website at [https://piroguetoolsuite.github.io/](https://piroguetoolsuite.github.io/).

## Communication

### Graphical design
[_lila*](https://lila.ink/) has finished her work on the project's logo and graphical design.

![PTS final logo](img/logo.png)

### Community
We opened a Discord channel allowing anyone to join and ask for help or propose to contribute. This Discord channel is available at https://discord.gg/Tve3SP26QS

We onboarded our first technical contributor [@CyrilBrulebois](https://twitter.com/CyrilBrulebois). Cyril works on improving the Debian packaging.

We started doing live streams (14 hours) on Twitch about different aspects of the project:
* how to use Frida to intercept TLS encryption keys
* what Debian packaging is
* celebrate the closing of FinFisher

### Outreach
This project is community driven, to build a community around it, we are still working with Misfit on communication strategy. We also continued to work on a video presenting the project.

### Documentation
We have published:
* hardware design and manufacturing documents
* how to build a PiRogue
* how to use a PiRogue

The documentation is available at [https://piroguetoolsuite.github.io/docs/prologue/introduction/](https://piroguetoolsuite.github.io/docs/prologue/introduction/).

# What we plan to do next month
- Document how to use a PiRogue with LTE connection.
- Start working on TLS traffic interception and decryption.
- Work on the presentation video.
- Work on a communication strategy.
- Organize future demo sessions.

# Challenges
While writing the documentation, we struggled at finding the appropriate level of details. To address this challenge, we will ask few people to test the documentation and then improve it based on testers' feedback.

# People we want to thank
* Cyril Brulebois - [@CyrilBrulebois](https://twitter.com/CyrilBrulebois)
* _lila* - [@lila_bliblu](https://twitter.com/lila_bliblu)
* Tek - [@tenacioustek](https://twitter.com/tenacioustek)