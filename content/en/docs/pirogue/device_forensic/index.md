---
title: "Consensual device forensic"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 80
toc: true
---

Consensual mobile device forensic analysis is the process of examining a mobile device with the owner's consent to identify signs of compromise or active spying. This involves analyzing data stored on the device, such as call logs, text messages, and browsing history, as well as examining installed apps and system configurations. The goal is to uncover any unauthorized access, surveillance activities, or malicious software that may be compromising the device's security and privacy. This process is often used by cybersecurity professionals, law enforcement agencies, and private investigators to gather evidence of digital intrusions or targeted attacks.

The PiRogue comes with [MVT](https://mvt.re) pre-installed. Amnesty International's Mobile Verification Toolkit (MVT) is an open-source software tool designed for consensual mobile device forensics. It helps investigators and security researchers analyze Android and iOS devices to detect potential signs of compromise, particularly from sophisticated spyware like Pegasus. The tool utilizes indicators of compromise (IOCs) to scan device backups and identify traces of spyware infection or targeting. It also assists in extracting forensically sound data for further analysis. MVT is primarily intended for technical experts and is not designed for end-user self-assessment. 

For more details about MVT, please check its official documentation: [https://docs.mvt.re](https://docs.mvt.re)

[Have a look to the guide dedicated to device backup →](/guides/g4)

[Have a look to the guide dedicated to MVT →](/guides/g7)

## Forensic analysis of an iOS device
Follows a quick overview of the different steps required to analyze an iOS device using MVT:

1. Connect the iOS device to the PiRogue. Use a USB cable to connect the iPhone or iPad to the PiRogue running MVT. Ensure the device is unlocked and trusted for data transfer.
2. Create an encrypted backup. Open a terminal window and navigate to your directory of choice. Use the command 
   ```bash
   $ mvt-ios backup --encrypted --password <backup_password> --output <backup_path>
   ```
   to create an encrypted backup of the device. Replace `<backup_password>` with a strong password and `<backup_path>` with the desired location for the backup file.

3. Decrypt the backup. Once the backup is complete, use the command 
   ```bash
   $ mvt-ios decrypt-backup --password <backup_password> --input <backup_path> --output <decrypted_path>
   ```
   to decrypt the backup file. Replace `<backup_password>` with the same password used for encryption and `<decrypted_path>` with the desired location for the decrypted files.

4. Analyze the decrypted backup. Use the command 
   ```bash
   $ mvt-ios check-backup --iocs <ioc_path> --output <report_path> <decrypted_path>
   ```
   to analyze the decrypted backup for indicators of compromise (IOCs). Replace `<ioc_path>` with the path to the IOCs file, `<report_path>` with the desired location for the analysis report, and `<decrypted_path>` with the path to the decrypted backup folder.

5. Review the analysis report. The analysis report will contain details of any potential IOCs found during the scan. Review the report carefully to identify any suspicious findings and determine if further investigation is necessary.

## Forensic analysis of an Android device
Follows a quick overview of the different steps required to analyze an Android device using MVT:

1. Enable USB debugging on the Android device. Go to *Settings > About Phone* and tap on the *Build Number* seven times to enable *Developer Options*. Then, go to *Settings > Developer Options* and enable *USB debugging*.

2. Connect the Android device to the PiRogue. Use a USB cable to connect the Android device to the PiRogue running MVT. Ensure the device is unlocked and authorized for USB debugging.

3. Analyze forensic data. Open a terminal and navigate to your directory of choice. Use the command
   ```bash
   $ mvt-android check-adb -f --iocs <ioc_path> --output <report_path>
   ```
   to analyze forensic data from the connected device. Replace `<ioc_path>` with the path to the IOCs file and `<report_path>` with the desired location for the analysis report.This will extract various information, including system logs, installed apps, and network connections.

4. Review the analysis report. The analysis report will contain details of any potential IOCs found during the scan. Review the report carefully to identify any suspicious findings and determine if further investigation is necessary.

Remember that MVT is a powerful tool for forensic analysis, but it requires technical expertise and careful interpretation of results. Consult with cybersecurity professionals or relevant authorities if you suspect your device has been compromised.