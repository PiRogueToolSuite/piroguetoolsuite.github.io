---
title: Monthly report n⁰13 - 2023-02
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-02-28
lastmod: 2023-02-28
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project has released new functionalities to capture device screen recordings and implemented user authentication with 2FA for their Colander software suite. Colander also offers improved documentation editing, case entity creation, and CyberChef integration for network traffic analysis. To address the Raspberry Pi shortage, the project has expanded support to older models and designing new cases for them."
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

We have published a new release of pirogue-cli. The commands `pirogue-intercept-gated` and `pirogue-intercept-single` now automatically records the device's screen.

Since it is still really hard to buy Raspberry Pi 4, we decided to extend our support to:

* Raspberry Pi 3 model B;
* Raspberry Pi 3 model B+;
* Raspberry Pi 4B 1GB.

Suricata is disabled on devices having less than 1.5GB of RAM (this limitation is due to Suricata). You can find the [installation procedure on the PPA](https://pts-project.org/ppa/).

## Colander

Colander now handles and displays screencasts recorded by the PiRogue during experiment. Screencasts are handled the same way as any other type of artifact. 

Regarding authentication and user management, Colander supports 2 ways of registration:

* local account (account created on Colander);
* 3rd-party login (social login) such as GitHub.

Local users can enable 2FA to protect their account. For the moment, Colander only supports TOPT. 

{{< img src="img/2fa.png" caption="Screen showing how to setup 2FA." >}}

We have started working on the documentation markdown editor. Colander offers two ways when it comes to document a case:

* user can write documentation in panel displayed over Colander, this way it is possible to write documentation will navigating through any pages of Colander;
* user can write documentation in another browser tab.

{{< img src="img/doc-1.png" caption="Documentation editor opened in a panel." >}}
{{< img src="img/doc-2.png" caption="Example of rendered documentation." >}}

We have added a panel to quickly create new entities. Relations can then been created between these entities.

{{< img src="img/quick_add.png" caption="Form to quickly create new entities." >}}

Finally, we have integrated CyberChef directly into Colander. User can either open an empty CyberChef in another browser tab or send any raw data from the decrypted traffic to CyberChef.

{{< img src="img/cyberchef-1.png" caption="Send raw network payload to CyberChef." >}}
{{< img src="img/cyberchef-2.png" caption="Example of CyberCyber decoding network payload." >}}

## Hardware
We were able to buy 10 Raspberry Pi 3 model B for an almost reasonable price. We will have 10 PiRogues for sale as soon as the design of a proper case is completed. Due to the fact that the prices of electronic parts are constantly increasing, we have to reflect this increase on the final price of the PiRogue. PiRogues are sold at cost price to NGOs.

## Community and outreach
We will be giving a talk about PTS at [JDLL](https://jdll.org/) in April 2023 at Lyon (France).

# What we plan to do next month

* continue working on Colander's UI
* continue working on Colander's analyzers
* continue working on documentation management and generation
* start working on PiRogue tool to interact with Colander

# Challenges
Since we now support Raspberry Pi 3, we have to design the corresponding case and produce 10 of this type.