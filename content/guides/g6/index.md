---
title: Intermediate guide - How to handle a potentially compromised device
weight: 60
toc: true
draft: false
license: CC-BY-SA
contributors: ["Esther Onfroy"]
---

## Objective

To provide comprehensive step-by-step guide for identifying and handling potentially compromised mobile devices.

## Introduction

Mobile devices have become an integral part of our daily lives, seamlessly integrating into our personal and professional spheres. However, this increased reliance on mobile devices also raises concerns about cybersecurity, as these devices are often targets for cyber-attacks.

It is crucial to ensure that organization's mobile devices are secure and that we have proper procedures in place to handle potentially compromised devices. This document outlines the steps to identify, isolate, and remediate compromised mobile devices to protect individuals and sensitive information.

## Identifying compromised devices

The first step in handling a potentially compromised mobile device is to identify if a compromise has occurred. Some indicators of a compromised device include:

1. Unusual or unexpected behavior: Sudden battery drain, excessive data usage, or random reboots can be signs of malicious activity or malware draining resources.

2. Unfamiliar apps or programs: Unrecognized apps or programs appearing on the device without the user's knowledge or consent could indicate unauthorized installation of spyware or other malicious software.

3. Suspicious pop-ups or redirects: Suspicious pop-ups or redirects while browsing may indicate the presence of adware or malware attempting to redirect users to malicious websites.

4. Unrecognized outgoing calls or messages: Unrecognized outgoing calls or messages could indicate that the device is being used to send spam or phishing attempts without the user's knowledge.

5. Signs of unauthorized access: Changed passwords, suspicious login attempts, or unauthorized transactions suggest that the device has been compromised and used to gain unauthorized access to sensitive information.

## Threats posed by compromised devices

A compromised mobile device can pose various threats to an organization's security and sensitive information. These threats include:

1. Data breaches: Attackers can steal sensitive data stored on the device, such as personal information, financial records, or confidential business documents. This can lead to identity theft, financial fraud, and reputation damage.

2. Malware infection: Compromised devices can be infected with malware, such as spyware, ransomware, or trojans, which can further compromise the device and spread to other systems. This can lead to data loss, system disruptions, active spying, and unauthorized access.

3. Unauthorized access: Attackers can gain unauthorized access to organizational accounts, networks, and resources using compromised devices. This can lead to data breaches, sabotage, and disruption of operations.

4. Identity theft: Compromised devices can be used to steal user credentials and personal information, leading to identity theft and financial fraud. This can damage the organization's reputation and harm individuals' finances and privacy.

## Isolating compromised devices

If you suspect that a mobile device has been compromised, immediately isolate the device from the network and any sensitive data sources. This may involve disabling Wi-Fi, Bluetooth, and cellular data connections.

Report the suspected compromise to the IT security team or designated incident response personnel. Provide as much detail as possible about the observed indicators and any potential causes for the compromise.

Isolating a compromised device is crucial to prevent further damage and limit the spread of malware or unauthorized access.

### Isolating an Android device

1. Disable Wi-Fi and Bluetooth: Swipe down from the top of the screen to access the Quick Settings panel. Tap the Wi-Fi and Bluetooth icons to disable them. This will prevent the device from connecting to any wireless networks or Bluetooth-enabled devices.

2. Disable cellular data: Go to *Settings > Network & Internet > Mobile Network*. Toggle the *Mobile data* switch to the off position. This will prevent the device from accessing the internet through the cellular network.

3. Enable airplane mode: Swipe down from the top of the screen and tap the *Airplane Mode* icon. This will put the device in a state where it cannot connect to any wireless networks or cellular data.

### Isolating an iOS device

1. Disable Wi-Fi and Bluetooth: Swipe up from the bottom of the screen to access the Control Center. Tap the Wi-Fi and Bluetooth icons to disable them. This will prevent the device from connecting to any wireless networks or Bluetooth-enabled devices.

2. Disable cellular data: Go to *Settings > Cellular*. Toggle the *Cellular Data* switch to the off position. This will prevent the device from accessing the internet through the cellular network.

3. Enable airplane mode: Swipe up from the bottom of the screen and tap the *Airplane Mode* icon. This will put the device in a state where it cannot connect to any wireless networks or cellular

## Procedure for sending compromised devices to the technical team

After isolating the compromised device, you should follow these steps to securely return the device to the organization's technical team for further analysis and investigation:

1. Power off the device: Turn off the device completely to prevent any further activity or potential data corruption.

2. Packaging and labeling:
    - Package the device securely in its original packaging or a suitable protective container to prevent damage during transport.
    - Label the package clearly with your name, contact information, and a brief description of the suspected compromise.

3. Secure shipping:
    - Use a trusted courier service or internal mail system for secure delivery to the technical team.
    - Ensure the package is insured for its full value in case of loss or damage.
    - Track the shipment and maintain records of the tracking information.

4. Notification and communication:
    - Inform the technical team in advance about the shipment and provide the tracking information.
    - Include a detailed incident report with the package, describing the observed indicators and potential causes for the compromise.
    - Maintain communication with the technical team for updates on the analysis and investigation process.

The security team you are working with will conduct a forensic analysis of the suspected device to determine the extent of the compromise and identify any malware or malicious activity. This may involve examining log files, network traffic, messages, and installed applications.

Based on the findings of the forensic analysis, the security team will determine the appropriate remediation steps. This may involve removing malware, resetting the device to factory settings, or even replacing the device entirely.

## Receiving compromised devices

1. Secure receipt: Upon receiving a package containing a potentially compromised mobile device, ensure that the package is intact and free from tampering. Verify the sender's identity and match it with the incident report.

2. Documentation: Document the receipt of the device, including the date, time, sender's information, and a brief description of the suspected compromise. Maintain a chain of custody log to track the device's handling and movement.

3. Storage and handling: Store the device in a secure location with restricted access, preferably an isolated environment to prevent potential network intrusion or data exfiltration. Handle the device with care to avoid data corruption or accidental activation of malware.

## Device analysis

In the realm of digital forensics, the forensic chain of custody, often referred to as the paper trail or chronological documentation of electronic evidence, is of paramount importance. It is a comprehensive record of the handling, movement, and possession of digital evidence, ensuring its integrity and admissibility.

Ensuring a proper forensic chain of custody when handling a potentially compromised device is crucial to maintaining the authenticity and reliability of the evidence extracted from the device. Here's an overview on how to ensure a proper chain of custody:

* Documentation and identification: Upon receiving the device, meticulously document the date, time, sender's information, and a brief description of the suspected compromise. Assign a unique identifier to the device and label it accordingly.

* Secure storage: Store the device in a secure location with restricted access, preferably an isolated environment to prevent potential network intrusion or data exfiltration. Use tamper-evident seals to ensure the device remains unaltered.

* Chain of custody log: Maintain a detailed chain of custody log, recording every instance of handling, transfer, or analysis of the device. Include the names, roles, and timestamps for each person who interacts with the device.

* Forensic imaging: Create a forensic image of the device's storage using specialized tools to preserve the integrity of the data for analysis. The forensic image should be timestamped and stored securely.

* Analysis and documentation: Perform forensic analysis on the forensic image, documenting every step of the process, including the tools used, findings, and conclusions.

* Evidence handling: Handle the device and any extracted evidence with care to avoid data corruption or accidental activation of malware. Use write-blockers to prevent any inadvertent alterations to the device's storage.

* Chain of custody transfer: When transferring the device or evidence to another party, document the transfer in the chain of custody log, including the recipient's information and purpose of transfer.

* Reporting and presentation: Prepare a detailed incident report summarizing the findings of the forensic analysis, remediation actions taken, and recommendations for further security measures. The report should include the chain of custody documentation.

Check out our other guides to learn more how to analyze a potentially compromised device and/or refer to your internal guidelines.


