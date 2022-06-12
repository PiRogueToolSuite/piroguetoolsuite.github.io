---
title: Monthly report n⁰4 - 2022-05
description: "Third monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-05-31
lastmod: 2022-05-31
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

## Communication

### Outreach
We have started working on the first public release of PTS. We plan to reach out to around 10 NGOs to present the project and if they wish, to test it. The objective for us is to have regular feedback from them in order to better respond to their needs.

### Documentation
We have published two tutorials. The first one presents how to [use the PiRogue without wired connection](https://pts-project.org/docs/recipes/pirogue-without-ethernet-connection/) to the Internet (such as in a car). The second one explains [how to conduct forensic analysis with MVT](https://pts-project.org/docs/recipes/device-forensic-with-mvt/).

## Software
We started working on a program to [automate TLS interception and decryption](https://github.com/PiRogueToolSuite/pirogue-cli). It is still WIP but you can already test it on your PiRogue:
```
sudo apt-get update
sudo apt-get install pirogue-cli

pirogue-intercept-tls -U -f <package> -o <output dir>
```

You have to connect a rooted Android device to the PiRogue via USB and enable `adb`. Hit `Ctrl+C` when your experiment is done. The `output_dir` folder will contain a PCAP file and a key log file you can open in Wireshark.

# What we plan to do next month
- Continue working on TLS traffic interception and decryption.
- Work on the presentation video.
- Announce the first release of PTS.
- Organize future demo sessions.

# Challenges
We are facing issues dumping TLS keys from system applications with [Frida](https://frida.re/). We are still investigating on this topic. 

# People we want to thank
* Thomas Fourmeux - [@fourmeux](https://twitter.com/fourmeux)