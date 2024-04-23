---
title: Advanced guide - Mobile application regulatory compliance audit methodology
weight: 100
toc: true
draft: false
license: CC-BY-SA
contributors: ["Esther Onfroy"]
---

## Objective 
This document describes the methodology that we propose that you follow when conducting a regulatory compliance audit of an Android application. This methodology is based on [NOYB's methodology](https://noyb.eu/sites/default/files/2023-09/Methodology_redacted.pdf). In the context of a regulatory compliance audit, it is crucial to ensure that the execution environment is reproducible and that the analyzed application is uniquely identified.


## Main principles
### Planning and preparation
#### Scope definition
The initial step involves defining clearly the scope of the audit. This includes identifying the specific regulatory requirements that will be assessed, the Android application or applications to be audited, and the timeframe for the audit. The scope should be tailored to the specific context of the application and the organization conducting the audit.

#### Risk assessment
This consists in conducting a preliminary risk assessment to identify potential areas of non-compliance and prioritize the audit activities accordingly. The risk assessment should consider the application's data processing activities, the sensitivity of the data being processed, and the potential impact of a data breach or regulatory violation.

### Evidence Collection and Analysis
#### Application documentation review
You should review the application's documentation, including its source code, design documents, and user manuals, to understand the application's data processing activities and data flows. These documents can provide valuable insights into the application's architecture, its data handling practices, and compliance considerations.

#### Static code analysis
You then utilize tools such as [Pithus](https://beta.pithus.org) to statically analyze the application source code and identify potential vulnerabilities or coding practices that could lead to data breaches or compliance violations. The static analysis of the source code can detect coding errors, insecure coding patterns, and potential vulnerabilities that could be exploited to compromise the application's security or data integrity.

#### Dynamic analysis
You perform the dynamic analysis of the application to observe its actual data handling behavior and identify any discrepancies between the documented behavior and the actual behavior. Dynamic testing can involve techniques such as penetration testing, vulnerability scanning, and network traffic analysis to uncover potential vulnerabilities or non-compliant data handling practices. You can use the PiRogue to capture all network communications and precisely determine what data has been transmitted.

#### Data flow mapping
Based on the dynamic analysis, you create a data flow map to visualize the collection, processing, storage, and transmission of personal data throughout the application. Data flow mapping helps to identify the various stages of data processing, the data repositories involved, and the potential points of risk or non-compliance.

#### Data privacy policy review
Review the application's privacy policy to ensure it accurately reflects the data processing practices and complies with the regulatory requirements. The privacy policy should be clear, transparent, and up-to-date, providing users with comprehensive information about the data being collected, the purposes for collection, and their privacy rights.

### Findings and reporting
#### Compliance gap identification
Identify any compliance gaps or non-conformities with the applicable regulatory requirements. This involves comparing the application's data processing practices and security measures against the specific requirements of the relevant regulations.

#### Root cause analysis
Conduct root cause analysis to understand the underlying causes of identified compliance gaps and develop recommendations for remediation. Root cause analysis helps to determine the factors that contributed to the non-compliance and identify systemic issues that may require broader corrective actions.

#### Audit report preparation
Prepare a comprehensive audit report that clearly documents the audit findings, identified compliance gaps, root cause analysis, and remediation recommendations. The audit report should provide a detailed overview of the audit process, the findings, and the proposed solutions to address the identified compliance issues.


## GDPR compliance audit
A GDPR compliance audit of an Android application is a meticulous evaluation process designed to assess the app's adherence to the stringent data privacy regulations outlined in the General Data Protection Regulation (GDPR). The GDPR, enforced across the European Union (EU), mandates specific requirements for organizations that handle personal data belonging to individuals within the EU. The regulation establishes a robust framework governing the collection, usage, storage, and transfer of personal data.

A GDPR compliance audit typically encompasses a series of crucial steps:

1. Personal data identification and inventory: The initial step involves identifying and comprehensively documenting all forms of personal data that the app collects, utilizes, or stores. This encompasses data such as names, email addresses, phone numbers, location data, browsing history, and any other identifiable personal information.

2. Data collection practice assessment: The auditor meticulously examines the app's data collection practices to ensure they align with the principles of lawfulness, transparency, and proportionality. This involves verifying that users are adequately informed about the data being collected, the purposes for collection, and that they have granted explicit consent to the collection process.

3. Data processing activity evaluation: The auditor scrutinizes the app's data processing activities to ensure compliance with the GDPR's fundamental principles. This includes verifying that data processing adheres to legitimate purposes, maintains accuracy and up-to-dateness, and is not retained beyond the necessary timeframe.

4. Data security measure review: The auditor thoroughly reviews the app's data security measures to ascertain their effectiveness in safeguarding personal data from unauthorized access, disclosure, alteration, or destruction. This involves assessing the implementation of appropriate technical and organizational measures, such as encryption, access controls, and data loss prevention mechanisms.

5. Compliance findings documentation: The auditor meticulously documents the audit's findings in a comprehensive report, outlining any identified compliance gaps and providing recommendations for corrective actions. The app developer is responsible for implementing these recommendations to bring the app into full compliance with the GDPR.

Beyond these core steps, the auditor may also conduct a thorough review of the app's privacy policy to ensure its accuracy, transparency, and ease of understanding. Additionally, practical testing of the app may be undertaken to verify its functionality and adherence to GDPR principles, ensuring that personal data is not inadvertently collected or processed in violation of the regulation.


## Tools
To achieve the set goal, this methodology relies on the PiRogue Tool Suite. The PiRogue in conjunction with Colander is designed to capture, detect and identify privacy violations in Android applications. The tool is built on top of the Android Debug Bridge (ADB) and Frida. ADB is a command line tool that allows developers to communicate with an Android device. PiRogue uses Frida to retrieve TLS encryption keys, socket activity, device screen recording and RSA/AES operations by instrumenting the operating system without modifying the behavior of the target application. Unlike tools such as MITM-proxy, PTS allows TLS traffic decryption without tampering the network traffic or introducing any application-level security vulnerability such as disabling certificate pinning.

The primary approach used to analyze the apps is traffic analysis. Traffic analysis involves capturing the data transmitted from mobile applications and analyzing the data transmissions for any privacy violations. The implementation of security good practices at the application level implies that most of the traffic is encrypted with TLS. With the use of the PiRogue toolkit it is possible to extract encryption keys from the Complainant’s device memory and to capture the entire network traffic that occurred during the run of the analyzed mobile apps. The network traffic can be subsequently decrypted with standard tools such as Wireshark by providing both the PCAP file and the SSL keylog file.

For convenience, we analyze the network traffic using another tool from the PiRogue Tool Suite, called “Colander”. Colander enables a user to quickly identify any suspicious network connections or data sharing practices by applying detection rules directly to the decrypted traffic. Colander can also recover data that has been encrypted before being transmitted by looking at the cryptographic operations that occurred during the execution of the target application. An analysis report is automatically issued listing:

* all artifacts such as PCAP file containing traffic data or screen recording and their digital signatures
* the definition of the detection rules and the detection summary
* the list of all transmissions listing the source and destination host, IP address and organization, the technical part of the application that has been handling the given data transmission (internal application code or 3rd-party SDKs)
* the identification and classification of the transmitted data such as advertising ID, location data etc.
* when applicable, the inferred purpose (such as analytics or advertisement) of the data collection using [Exodus Privacy](https://exodus-privacy.eu.org/) tracker classification to identify the recipient company

Colander analysis and detection accuracy can be assessed by opening the PCAP file and the SSL keylog file in Wireshark and manually verifying each data transmission.


## Mobile device
We strongly recommend using a consumer-grade mobile device such as one with the following
specifications:
* Device model: Samsung S9+ SM-G965F `star2lte`
* Android version: 10 (API level 29)
* Operating system (OS): /e/ Murena OS
* OS image: [https://images.ecloud.global/dev/star2lte/e-1.10-q-20230416280390-dev-star2lte.zip](https://images.ecloud.global/dev/star2lte/e-1.10-q-20230416280390-dev-star2lte.zip)
* Recovery image: [https://images.ecloud.global/dev/star2lte/recovery-e-1.10-q-20230416280390-dev-star2lte.img](https://images.ecloud.global/dev/star2lte/recovery-e-1.10-q-20230416280390-dev-star2lte.img)

The modified OS used on the mobile device creates a unique privacy enhanced environment with the following features:
* any feature or code that enables the transmission of data to Google servers disabled or at the very least the accesses are anonymized;
* Google Services is replaced by microG and by alternative services
* all Google apps are removed and replaced by equivalent Open Source applications;
* no use of Google servers to check connectivity;
* NTP servers that do not belong to Google used;
* geolocation using Mozilla Location Services in addition to GPS.

Since a standard Android phone does not come with the specific privacy features provided by /e/ Murena OS, it is decided to disable the “Advanced Privacy” /e/ Murena OS-specific feature turning off:
* the filtering of trackers network traffic (blocking the network traffic);
* the mocking of the geolocation (faking the real location);
* the mocking of the real IP address of the device (faking the IP address).

As mentioned in the previous section, the version of the Android OS on the device used an alternative to Google Play Services called “MicroG”. MicroG never returns the same Android advertising identifier. Every time a mobile app reads it, a new AdID is generated and returned. In other words, if a given mobile application reads the AdID three times, the OS will return three different advertising identifiers.

The device is rooted by flashing the OS image listed previously with the program “easy-installer” provided by [e foundation](https://doc.e.foundation/easy-installer). The OS image, also provided by e foundation, is rooted by default.

## Audit procedure

### Download the application
If the application you want to be analyzed is available on Google Play Store, use [apkeep](https://github.com/EFForg/apkeep) to download it with your Google account. Once downloaded, compute the SHA256 hash of the APK or XAPK and retrieve basic information about the app such as package name, version code and certificate signature. [This guide](https://pts-project.org/guides/g3/) will guide you through the different steps.

### Identify the application origin and version
Save the following information to ensure traceability and reproducibility: 
* the origin of the application (Google Play, F-Droid, …)
* the Google account you used for downloading the application
* the SHA256 hash of the application file (APK or XAPK) 
* the application package name 
* the application version code and version name
* the fingerprint of the certificate used to sign the application
* the model of the Android device
* the version of Android installed on the device
* the version of the operating system
* the SHA256 hash and the URL of the OS image
* the SHA256 hash and the URL of the recovery image 
* the phone number
* the IMEI
* the mobile carrier name

### Reproducible test environment
By using a uniquely identifiable Android operating system image on the device, you ensure that anyone wanting to verify your findings and conclusions will be able to reproduce the execution environment you used.

### Dynamically analyze the application
Follow [this guide](https://pts-project.org/guides/g8/) to execute the application in an instrumented environment. 

### Analyze data transmissions
Follow [this guide](https://pts-project.org/guides/g9/) to analyze the data transmissions.

Use the report generated by Colander to illustrate your findings and conclusions. If you are working on a complaint, be sure to provide the APK or XAPK you used, all the files generated by the PiRogue and the report issued by Colander. 