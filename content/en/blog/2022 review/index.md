---
title: Year 2022 in Review
description: ""
lead: "2022 was a very intense year since it was the resumption of the PTS project thanks to the funding by OTF. Mechanical design, software development, electronic design, packaging for Debian are the activities that kept us busy this year!"
date: 2022-12-31
lastmod: 2022-12-31
draft: true
weight: 50
toc: true
contributors: ["Esther Onfroy"]
images: []
---

## PiRogue
The PiRogue is an open hardware device based on a Raspberry Pi operating as a network router analyzing network traffic in real time. The PiRogue helps analysts to detect the potential compromise of a mobile device and to have more information allowing them to detect more easily the potential threats represented by a mobile application. In no case the PiRogue and all the tools we develop will replace the expertise and interpretation performed by a human. 

### Feature delivery
The PiRogue runs Debian operating system and all PiRogue-specific features are delivered as Debian packages for `armhf`, `arm64` and `amd64` architectures. These packages are delivered by the [PTS PPA](https://github.com/PiRogueToolSuite/ppa). In 2021, the pandemic caused an important electronic ship shortage which has a huge impact on Raspberry Pi availability. This had a limited impact on the project for 2 reasons:
* we managed to source 20 Raspberry Pi before it was almost impossible to buy a single one at a reasonable price;
* by packaging all features as Debian packages, almost any old laptop or tiny PC having both Ethernet and Wi-Fi connectivity can be turned into a PiRogue by installing the PiRogue packages on it.

Providing all features as Debian packages was a decisive choice allowing the project and its users not to be dependent on a specific hardware, but also to improve project maintainability by the community. Even if we officially support Raspberry Pi 4B, people from the project's community were able to run the PiRogue on Raspberry Pi 3 (not without serious performance issues), on ThinkCenter mini PC or on Virtual Machine. 

The PiRogue depends on various 3rd-party software, if most of them are already available on Debian, we have to package few others such as:
* MVT
* Frida
* NFStream

Frida being the most challenging one.

### Implemented features
By the time we are writing this report, most of the initially planned features have been implemented. Since Android represents around 80% of the mobile OS market share, we firstly focused our efforts on this OS. Network flows inspection (DPI), threat detection and device forensic are already available for both iOS and Android devices, application analysis only supports Android.

Since our goal is to lower technical barrier without neglecting security and reliability, we build tools on top of existing well-known and trusted products such as MVT, Wireshark, Suricata, NFStream and Grafana.

The PiRogue is meant to address different use-cases related to mobile security. It allows to easily determine which remote servers are contacted by the device to be analyzed. By leaving the device connected to the PiRogue for several days, it is possible to observe network activities that rarely occur such as keep-alive or synchronization request to a command and control server.

The PiRogue created an isolated Wi-Fi network dedicated to traffic analysis and implements basic countermeasures against malware lateral movement and network discovery.

#### Network flows inspection
The PiRogue, by design, constantly inspects the network flows of any device connected to its Wi-Fi access point. The deep packet inspection (aggregated at the level of network flows) is ensured by NFStream and the results of this inspection is stored in the internal database and automatically deleted after 5 days. For both performance and usability, each network flow is timed-out after 4 minutes. This timeout has 2 direct impacts:

* flows appear on the dashboard at most 4 minutes after their initialization, reducing this timeout would make flows appear quicker
* the database contains information about flows that could have been split into multiple 4-minute sub-flows, reducing this timeout would imply storing a lot more data inducing latency or storage issues

This feature does not require any modification of the target device. 

#### Threat detection
The PiRogue, by design, constantly applies threat detection rule sets on the network activity of any device connected to its Wi-Fi access point. This inspection is insured by Suricata using Emerging Threat and PTS detection rules. Each alert is stored in the internal database and automatically deleted after 5 days. 

Detection rules are automatically updated on a daily basis. Users can easily add their own rules as described in [this tutorial](https://pts-project.org/docs/recipes/add-your-own-suricata-rules-to-pirogue/). The analysis, filtering, interpretation and contextualization of alerts remain the responsibility of the user, who is the sole arbiter of whether an alert is relevant. As a reminder, rule-based detection can lead to false positives and can only detect known threats.  

This feature does not require any modification of the target device. 

#### Dashboard
Data generated by NFStream and Suricata stored in the internal database (InfluxDB) can be displayed on the PiRogue dashboard. This dashboard is based on Grafana and users can easily create their own dashboards. User defined dashboards can be easily shared and reused.

The dashboard offers basic search capabilities such as display the entire network activity for a given IP address or device. Suricata alerts are automatically linked to the network flow involved in the alert.

Data stored in the internal database can easily be exported for further investigation.

#### Device Forensic
Among other tools that are pre-installed on a PiRogue, MVT which is maintained by Amnesty International ensures the device forensic part of the project. The tools installed with MVT make it easy to create a backup of a mobile phone. MVT then analyzes the generated backup. The interpretation of the results provided by MVT must be done by a trained person.

#### Application analysis
One of the key feature of the PiRogue is to intercept encryption operations by instrumenting OS native libraries. Modern mobile apps rely on TLS for network communication and decrypting TLS traffic can be a challenging task. PiRogue comes with [a set of Frida scripts](https://github.com/PiRogueToolSuite/pirogue-cli/tree/main/pirogue_cli/frida-scripts). These scripts have the following purpose:
* retrieve TLS encryption keys from the device memory allowing traffic decryption a posteriori
* trace all AES operations allowing payload decryption when necessary
* trace all socket operations to identify what part of the mobile app is in charge of a given network communication

To facilitate the instrumentation of the device to be analyzed (an Android device that must be rooted), the PiRogue offers two commands that also capture network traffic:
* `pirogue-intercept-tls` for instrumenting a single Unix process
* `pirogue-intercept-gated` for instrumenting all spawned processes (useful for apps spawning processes)

It is possible to have the list of network packets for each SDK embedded in the application. This allows to easily determine which data are collected by each SDK.

We have chosen to retrieve the TLS encryption keys directly from the phone's memory, so it is not necessary to install an X509 certificate and disable certificate pinning (which can be really tricky). The objective of this feature is to provide efficient tools for traffic decryption without requiring the modification of the application to be analyzed and without altering the generated network traffic. The non-alteration of the application and its network access conditions are two important factors in the admissibility of the evidence collected.

Even if we do our best, the tools we provided are not silver bullets against advanced obfuscation.

## Colander
Colander is an incident response and knowledge management platform delivered as a cloud-agnostic Docker stack organizations can deploy. It takes events (such as network flows, Suricata alerts), artifacts (such as PCAPs, APKs), observables extracted from artifacts or from 3rd-party providers, and turns them into browsable knowledge. Organized in cases, knowledge can then be used for generating reports, detection rules and intelligence feeds.

Note that we are still at the early stage of development.

### Case management

### Artifacts management

### Automatic analysis and enrichment
Colander comes with a set of modules for AV analysis, type-specific artifact analysis and observable enrichment. These analyzers are reusable are implemented in a separate service that can be deployed and used without Colander. The goal is to provide a generic REST API for quick an easy integration into other projects. Since 3rd-party services such as VirusTotal, Censys are often too expensive for NGOs, we try to provide analyzers that are not dependent on those external services.

We plan to deliver modules for:
* PCAP, PCAPNG analysis with NFStream and Suricata
* APK analysis with Pithus
* Android backup analysis with MVT
* iOS backup analysis with MVT
* Anti-virus analysis with ClamAV
* File analysis such as mimetype and exif
* IP address enrichment such as geoip and reputation
* Domain enrichment such as whois and DNS records

## Community and Adoption
At the time of writing this report, we have provided 18 PiRogues to:
* the French ministry of education
* the French ministry of finance
* feminist helplines
* NGOs in Latin America, Europe, Middle East and Asia

We can not exactly know how many organizations use PiRogue since some have built their own PiRogues. 

We have presented the project to the following organizations:
* Human Rights Watch
* Amnesty International
* Freedom of Press
* Nothing2Hide
* AccessNow
* Article19
* Guardian Project
* The Markup
* Frontline Defenders
* Digital Defenders Partnership
* Tibet Action Institute
* First's Threat Intel Coalition
* NOYB
* CNIL

PiRogue is the tool used to analyze data collection by the mobile applications studied in the HRW report [“How Dare They Peep into My Private Life?”](https://www.hrw.org/report/2022/05/25/how-dare-they-peep-my-private-life/childrens-rights-violations-governments).

Finally, 100+ people have already subscribed to our Discord channel.