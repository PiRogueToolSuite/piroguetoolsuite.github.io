---
title: Monthly report n⁰15 - 2023-04
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-04-30
lastmod: 2023-04-30
draft: false
weight: 50
contributors: ["Esther Onfroy"]
categories: ['activity reports']
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
We have published a new release (v1.14) of `pirogue-cli` improving the reassembly of HTTP2 payloads and support of Android 10.

## Colander
We onboarded [Christophe Andral](https://github.com/TontonSancho) as a senior software developer, he is working on improving Colander features and UI/UX.

We revamped the UI and UX of Colander to make it easier to use. We implemented on a new way to handle artifacts upload so that users experiencing Internet connection issues can upload very large files (up to 50GB). We also added a feature allowing the users to automatically take a screenshot of a given URL and dump in a HAR file the corresponding HTTP traffic. The service in charge of capturing a URL is open source and can used without Colander, anyone can deploy it locally or on a server by pulling the provided Docker image available at https://github.com/PiRogueToolSuite/playwright-rest-api/packages.

{{< img src="img/screenshot.png" caption="Example of screenshot and HAR automatically captured for a given URL." >}}

We have added the support of Yara rules in Colander. These user-defined rules can be automatically applied on the decrypted network traffic.

{{< img src="img/detections.png" caption="Example of detection summary." >}}

We started working on the implementation of the REST API allowing 3rd-party tools such as the PiRogue to interact with Colander (upload artifacts, retrieve entities...). We will provide a Python client for Colander in the next few weeks.

## Community and outreach
We onboarded [Shatha Sheikh Yousef](https://www.linkedin.com/in/shatha-sheikh-yousef-642104141) as a training development advisor, she is currently working on the training curricula and guides for PTS.

We helped [noyb](https://noyb.eu) to conduct the analysis of mobile applications with PTS in order to detect and identify unlawful collection of personal data.

We hosted a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* start working on the dynamic graph editor
* schedule demo sessions of Colander for community partners
* continue working on PiRogue tool to interact with Colander
* prepare the migration to Debian 12 mainline instead of Raspberry Pi OS

# Challenges
We are still experiencing serious issues with the Debian packaging of Frida. It is now a show stopper since the current version packaged within PiRogue does not support Android 13.