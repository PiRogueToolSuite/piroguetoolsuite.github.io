---
title: Intermediate guide - How to use MVT to conduct the analysis of a mobile device and its backup image
weight: 70
toc: true
draft: false
contributors: ["Esther Onfroy"]
---

The [Mobile Verification Toolkit (MVT)](https://docs.mvt.re) developed by [Amnesty International's Security Lab](https://securitylab.amnesty.org/) is not a magic tool. This is a complex forensic framework designed to delve into the internals of Android and iOS devices, meticulously dissecting digital traces in search of malicious activities such as spyware.

It is imperative to emphasize that MVT is not intended for casual, self-directed investigation. It is not, by any means, a consumer-grade tool designed for recreational purposes, a personal "spyware detection" tool like the ones commonly distributed through mobile app stores. Utilizing MVT necessitates a profound understanding of both the underlying technical complexities and operational procedures associated with mobile device forensics. Such expertise significantly exceeds the capabilities of the average user.

{{< callout context="danger" title="Warning" icon="alert-octagon" >}}
**This guide provides a quick overview of what MVT is. If you are planning to use MVT, always refer to its official documentation: [https://docs.mvt.re](https://docs.mvt.re)**
{{< /callout >}}


## Strong expertise required
Interpreting MVT's findings requires navigating a labyrinth of digital forensics, data acquisition, and mobile device intricacies. Misinterpretations, like mistaking a harmless file for a threat, can lead to unnecessary panic and potentially corrupt crucial data. MVT delves deep, accessing sensitive information on your device. Using it haphazardly could inadvertently expose more than intended, putting your privacy at risk and potentially revealing information that would benefit malicious actors. Using MVT without proper knowledge could lead to accidental data corruption, adding to the problems instead of solving them.

MVT is designed for highly trained professionals. These individuals possess the deep understanding and experience to meticulously analyze data, interpret findings, and ensure accurate results. Their expertise lies in the nuances of Android and iOS systems, allowing them to extract meaningful insights from the device's digital traces. With knowledge of current malware threats and their signatures (Indicators of Compromise or IOCs), they can accurately interpret MVT's outputs and tailor the analysis to target specific threats.

MVT is a powerful tool for trained professionals, not a magic wand for self-diagnosis. While its potential to uncover hidden threats and protect privacy is undeniable, it requires specialized expertise and responsible use. 

## Consensual mobile device forensic
Consensual mobile device forensic analysis is the process of examining a mobile device with the owner's consent to identify signs of compromise or active spying. This involves analyzing data stored on the device, such as call logs, text messages, and browsing history, as well as examining installed apps and system configurations. The goal is to uncover any unauthorized access, surveillance activities, or malicious software that may be compromising the device's security and privacy. 

The PiRogue comes with MVT pre-installed. MVT is an open-source software tool designed for consensual mobile device forensics. It helps investigators and security researchers analyze Android and iOS devices to detect potential signs of compromise, particularly from sophisticated spyware like Pegasus. The tool utilizes indicators of compromise (IOCs) to scan device backups and identify traces of spyware infection or targeting.

For more details about MVT, please check its official documentation: [https://docs.mvt.re](https://docs.mvt.re)

[Have a look to the guide dedicated to device backup →](/guides/g4)

## MVT and Colander
By employing Colander within a digital investigation workflow, you have the capability to seamlessly integrate extracted Indicators of Compromise (IOCs) into MVT. This interoperability is achieved through the creation of a Structured Threat Information eXchange version 2 (STIX2) entity feed, a standardized format specifically designed for the communication of cyber threat intelligence. Essentially, Colander acts as a conduit, translating the findings of your investigation into a machine-readable format readily consumable by MVT.

The exported STIX2 feed serves as a repository of IOCs, encapsulating details such as file hashes, network indicators, and malicious domain names. This wealth of information empowers MVT to conduct in-depth examinations of mobile devices, potentially uncovering hidden threats or compromised data that may have eluded traditional detection methods. After creating your feed in Colander, execute the suggested commands on the computer running MVT. 

{{< img src="img/colander-feed.png"  caption="Example of entity feed in Colander" alt="Example of entity feed in Colander" class="d-block mx-auto shadow mb-4" >}}

It's crucial to emphasize that the effectiveness of this integration hinges upon the accuracy and completeness of the initial investigation conducted in Colander. Meticulous data collection and analysis are paramount to ensure the generated STIX2 feed accurately reflects the true scope of the cyber threat you are investigating.

Use the command `mvt-ios check-iocs --iocs <path to you STIX2 file>` or `mvt-android check-iocs --iocs <path to you STIX2 file>` to use the IOCs you downloaded from your Colander feed.

Use the command `mvt-ios download-iocs` or `mvt-android download-iocs` to automatically download the latest public indicator files.

## Overview of the analysis of an iOS device
Follows a quick overview of the different steps required to analyze an iOS device using MVT:

1. Connect the iOS device to the PiRogue. Use a USB cable to connect the iPhone or iPad to the PiRogue running MVT. Ensure the device is unlocked and trusted for data transfer.
2. Create an encrypted backup. Open a terminal window and navigate to your directory of choice. Use the command 
   ```bash
   idevicebackup2 backup encryption on -i
   idevicebackup2 backup --full <backup_path>
   ```
   to create an encrypted backup of the device. Replace `<backup_path>` with the desired location for the backup file.

3. Decrypt the backup. Once the backup is complete, use the command 
   ```bash
   mvt-ios decrypt-backup --password <backup_password> --input <backup_path> --output <decrypted_path>
   ```
   to decrypt the backup file. Replace `<backup_password>` with the same password used for encryption and `<decrypted_path>` with the desired location for the decrypted files.

4. Analyze the decrypted backup. Use the command 
   ```bash
   mvt-ios check-backup --iocs <ioc_path> --output <report_path> <decrypted_path>
   ```
   to analyze the decrypted backup for indicators of compromise (IOCs). Replace `<ioc_path>` with the path to the IOCs file, `<report_path>` with the desired location for the analysis report, and `<decrypted_path>` with the path to the decrypted backup folder.

5. Review the analysis report. The analysis report will contain details of any potential IOCs found during the scan. Review the report carefully to identify any suspicious findings and determine if further investigation is necessary.

## Overview of the analysis of an Android device
Follows a quick overview of the different steps required to analyze an Android device using MVT:

1. Enable USB debugging on the Android device. Go to *Settings > About Phone* and tap on the *Build Number* seven times to enable *Developer Options*. Then, go to *Settings > Developer Options* and enable *USB debugging*.

2. Connect the Android device to the PiRogue. Use a USB cable to connect the Android device to the PiRogue running MVT. Ensure the device is unlocked and authorized for USB debugging.

3. Analyze forensic data. Open a terminal and navigate to your directory of choice. Use the command
   ```bash
   mvt-android check-adb -f --iocs <ioc_path> --output <report_path>
   ```
   to analyze forensic data from the connected device. Replace `<ioc_path>` with the path to the IOCs file and `<report_path>` with the desired location for the analysis report.This will extract various information, including system logs, installed apps, and network connections.

4. Review the analysis report. The analysis report will contain details of any potential IOCs found during the scan. Review the report carefully to identify any suspicious findings and determine if further investigation is necessary.