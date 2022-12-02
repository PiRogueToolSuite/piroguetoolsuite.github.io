---
title: Monthly report n⁰10- 2022-11
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2022-11-30
lastmod: 2022-11-30
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

## Software

### The *Tool Suite* 
The software meant to be deployed on NGO infrastructure has now a name: Colander. 

We have almost finished the implementation of the different entities managed by Colander and started working on observable enrichment and artifact analysis. Analysis and enrichment are defined in a separate service (colander-analyzers) that can be used without Colander. This service, for the enrichment part, is mainly based on [harpoon](https://github.com/Te-k/harpoon/) and will provide the integration with 3rd party services such VirusTotal, RiskIQ, etc. 

Colander-analyzers exposes a unified REST API allowing any other tool to request observable enrichment such has whois, VirusTotal report, etc and artifact analysis such as PCAP analysis (based on [NFStream](https://www.nfstream.org/) and [Suricata](https://suricata.io/)), APK analysis (based on [Pithus](https://beta.pithus.org/)) and more.

Finally, we also have defined the UI structure which is split in 4 workspaces:
* Live view: live view on the fleet of PiRogues (network flows, alerts, etc.)
* Collect: collect information and knowledge
* Analyze: analyze artifacts
* Investigate: document findings
* Report: export generated reports, generated rule-sets, etc.

{{< figure src="img/observables.png" >}}
{{< figure src="img/observable.png" >}}
{{< figure src="img/artifacts.png" >}}
{{< figure src="img/relations.png" >}}

# What we plan to do next month
- Continue working on Colander observable enrichment. 
- Continue working on Colander artifact analysis. 
- Start working on interfacing the PiRogue with Colander.

# Challenges
We are facing issues on the packaging of the latest version of Frida. Find more details at [https://github.com/PiRogueToolSuite/pirogue-os/issues/18](https://github.com/PiRogueToolSuite/pirogue-os/issues/18).