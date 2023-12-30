---
title: "Network traffic analysis"
date: 2022-03-07
lastmod: 2022-03-07
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 50
toc: true
---

The PiRogue is designed to continuously analyze the network traffic of any device connected to its Wi-Fi network. This means that it is constantly monitoring and inspecting the data packets that are being transmitted and received by these devices. The purpose of this analysis is to identify any suspicious or malicious activity that may be taking place on the device.


The PiRogue employs two primary methods for analyzing network traffic: [NFStream](https://www.nfstream.org/) Deep Packet Inspection (DPI) and [Suricata](https://suricata.io/) rule-based IDS.


## Deep Packet Inspection (DPI)
DPI is a technique that allows the PiRogue to examine the contents of data packets in detail. This includes information such as the source and destination IP addresses, the ports being used, the type of data being transmitted, and even the identification of the application involved. By analyzing this information, we can identify patterns and anomalies that may indicate malicious activity.

The PiRogue relies on NFStream to carry out the DPI. NFStream is a Python-based framework designed for efficient and flexible network data analysis. It serves as a powerful tool for researchers and network engineers to process and extract insights from network traffic. Its deep packet inspection (DPI) capabilities enable it to delve into the contents of network packets, going beyond basic header information to analyze the payload data. This allows NFStream to identify applications, protocols, and specific content within the traffic flow. With its DPI engine, NFStream can classify encrypted traffic, extract metadata, and fingerprint applications, even when they are hidden within encrypted protocols like TLS or SSH. This deep inspection capability makes NFStream a valuable tool for network traffic classification, anomaly detection, and security analysis.


## Threat detection
An intrusion detection system (IDS) is a cybersecurity sentinel that monitors network traffic and system activities to identify potential intrusions or malicious activities. It acts as a vigilant guard, scrutinizing network packets, system logs, and user behavior to detect suspicious patterns or anomalies. IDSs employ various detection techniques, including signature-based, anomaly-based, and behavioral analysis, to identify both known and unknown threats. Upon detecting a potential intrusion, IDSs generate alerts, allowing security teams to investigate and respond promptly to safeguard the network and its assets.

The PiRogue relies on Suricata to detect and identify known threats. Suricata is an open-source intrusion detection system (IDS) and intrusion prevention system (IPS) designed to safeguard network environments against malicious activities. It functions as a vigilant sentinel, scrutinizing network traffic in real-time to detect and thwart potential threats. It employs a multi-faceted approach, combining signature-based detection with advanced anomaly-based techniques to identify both known and unknown threats. It leverages a comprehensive ruleset, continuously updated with the latest threat intelligence, to flag suspicious patterns and behaviors. Additionally, Suricata's deep packet inspection capabilities enable it to scrutinize the contents of network packets, uncovering hidden malware or exploit attempts.

The PiRogue comes pre-configured with rules from [ProofPoint Emerging Threat Open](https://community.emergingthreats.net/t/frequently-asked-questions/56) and [Echap](https://github.com/AssoEchap/stalkerware-indicators), two reputable sources of threat intelligence. The PiRogue update those rules on a daily basis.


## Visualizing analysis results
The results of the PiRogue’s automatic network traffic analysis can be visualized in the dashboard. This dashboard provides a graphical overview of the network traffic that has been analyzed, as well as any threats that have been detected. The dashboard also allows users to drill down into the details of specific network flows to learn more about them.

