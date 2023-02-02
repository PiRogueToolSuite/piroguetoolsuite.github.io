---
title: Monthly report n⁰12- 2023-01
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-01-31
lastmod: 2023-01-31
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

## PiRogue

We have published:
* a new release of pirogue-cli introducing `pirogue-intercept-gated` to instrument any spawned process
* a new release of pirogue-cli introducing `pirogue-intercept-single` equivalent to `pirogue-intercept-tls` which will be deprecated
* a new release of pirogue-dashboard fixing the list of devices used for filtering flows and alerts in the dashboard

We have manufactured 5 more PiRogues. They will be shipped next month.

## Colander

We have finished the basic implementation of the case management and quick search. Since Colander handles artifacts/evidences, we have implemented the automatic signature of all of them with a RSA key that belongs to the case (each case has its own signing key). A user can then easily verify the origin and the integrity of a given artifact/evidence. We have improved the traffic decryption UI. Finally, we have implemented a really basic graph representation of a case. This graph represents the semantic link between the different entities that belong to a given case.

{{< img src="img/artifact_integrity_check.png" caption="Screenshot showing how to check artifact integrity" >}}
{{< img src="img/traffic_decryption.png" caption="Screenshot showing how observable are enriched in the traffic decryption panel" >}}
{{< img src="img/stack_trace.png" caption="Screenshot showing how the raw stacktrace is displayed" >}}
{{< img src="img/quick_search.png" caption="Screenshot showing an example of search in a given case" >}}
{{< img src="img/case_graph.png" caption="Screenshot showing an example of case graph" >}}

## Communication & Outreach
We have slightly improved the website landing page by adding the list of the main capabilities of PiRogue and a 3D view of a PiRogue. We have also added privacy-preserving analytics on the project's website based on [Plausible.io](https://plausible.io).

{{< img src="img/landing_page.png" caption="Screenshot of the landing page" >}}


# What we plan to do next month

* continue working on Colander's UI
* continue working on Colander's analyzers
* start working on documentation management and generation

# Challenges
Raspberry Pi 4 model B shortage has a negative impact on project adoption. Even if it is possible to turn an old PC or laptop into a PiRogue, it is less convenient than having a tiny device that's easy to carry.