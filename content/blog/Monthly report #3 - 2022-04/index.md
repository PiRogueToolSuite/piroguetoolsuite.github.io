---
title: Monthly report n⁰3 - 2022-04
description: "Third monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-04-30
lastmod: 2022-04-30
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project has made significant progress on packaging their PiRogue OS software and building a communication strategy. The project is facing a challenge dumping TLS keys from system applications with Frida and are actively investigating solutions."
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
You can check out our work on GitHub at [https://github.com/PiRogueToolSuite/](https://github.com/PiRogueToolSuite/) or on our website at [https://piroguetoolsuite.github.io/](https://piroguetoolsuite.github.io/).

## Communication

### Demos
We did a demo to few people of [Human Rights Watch](https://www.hrw.org/). 

### Outreach
The communication strategy is now done. We will now follow Misfit's recommendations.
We also continued working on a video presenting the project.

## Hardware & Software
We finally packaged all the PiRogue OS dependencies following Debian recommendations. All PiRogue's packages are available at [https://github.com/PiRogueToolSuite/deb-packages](https://github.com/PiRogueToolSuite/deb-packages) and distributed via [PTS's ppa](https://github.com/PiRogueToolSuite/ppa).

We also packaged all PiRogue OS 3rd-party for both `armhf` and `arm64` architectures:
* [Frida](https://github.com/PiRogueToolSuite/deb-frida)
* [NFstream](https://github.com/PiRogueToolSuite/deb-nfstream)
* [MVT and few other](https://github.com/PiRogueToolSuite/deb-python)

Feel free to reuse our packages. 

Regarding [PiRogue OS](https://github.com/PiRogueToolSuite/pirogue-os) the image is now available for both `armhf` and `arm64` architectures.

Things are moving faster than excepted on this topic and we plan to do our first public release in the coming weeks. It will be the opportunity for us to invite NGOs to test the first version of the PiRogue and share their feedback about it.

# What we plan to do next month
- Document how to use a PiRogue with LTE connection.
- Continue working on TLS traffic interception and decryption.
- Work on the presentation video.
- Implement the communication strategy.
- Organize future demo sessions.

# Challenges
We are facing issues dumping TLS keys from system applications with [Frida](https://frida.re/). We are still investigating on this topic. 

# People we want to thank
* Abir Ghattas from [Human Rights Watch](https://www.hrw.org/) - [@AbirGhattas](https://twitter.com/AbirGhattas)
* Cyril Brulebois - [@CyrilBrulebois](https://twitter.com/CyrilBrulebois)