---
title: Advanced guide - How to use Colander to analyze the network traffic of an app
weight: 90
toc: true
draft: false
license: CC-BY-SA
contributors: ["Esther Onfroy"]
---


This guide will walk you through a step-by-step procedure, focusing on the decryption and analysis of network traffic intercepted using the PiRogue.

# Objective
The primary objective of this guide is to provide a detailed walkthrough of the process involved in decrypting and analyzing network traffic from a mobile application intercepted with PiRogue. If you're interested in intercepting TLS traffic of a mobile app, consider checking out our guide on [using PTS for intercepting TLS traffic](/guides/g8/).

# Introduction
In the contemporary landscape of mobile applications, a clear understanding of network communication intricacies is essential for professionals in cybersecurity. This guide explores the functionalities of Colander, a tool designed for the decryption and analysis of network traffic from mobile applications. Throughout this tutorial, our aim is to provide insights into the dissection of network transmissions intercepted by the PiRogue. Mobile applications often conceal complex patterns within their network communications. Colander facilitates a detailed examination of this concealed realm.

This guide offers a roadmap for those exploring network traffic analysis. From transmission decryption to manual decoding and the formulation of detection rules, each section contributes to a practical understanding. Whether a seasoned analyst or an enthusiast, this journey aims to decipher the digital communication intricacies inherent in mobile applications using Colander. 


# In a hurry?
Can't remember the PiRogue commands you need? Don't worry! Here they are:
* Instrument the mobile device: `pirogue-intercept-gated -o output`
* Wait until it says `Waiting for data` and start the application to be analyzed
* Hit `Ctrl + C` when done with the app
* Upload the experiment to Colander: `pirogue-colander collect-experiment -c "<ID of your case>" output/`
* Upload an artifact to Colander: `pirogue-colander collect-artifact -c "<ID of your case>" <path of the file to be uploaded>`


# Mobile apps network traffic analysis
## Different types of data collected by mobile applications

Mobile applications are integral components of contemporary digital ecosystems, acting as conduits for the acquisition and transmission of diverse data types. This section dissects the multifaceted nature of personal and sensitive information amassed by mobile applications, spanning realms such as identity, location, device characteristics, biometrics, usage patterns, communication, finance, health, social integration, and multimedia. Each data category unravels unique privacy concerns, emphasizing the paramount need for robust security frameworks and heightened user awareness in the digital landscape.

**Personal identifiable information (PII):** Mobile applications routinely collect and process personal data, including full names, addresses, phone numbers, email addresses, social security numbers, passport details, driver's license information, and government-issued identification numbers. The vulnerability of such information to identity theft, fraud, and social engineering attacks heightens the importance of secure handling.

*Example:* In the payload of an HTTP POST request, a snippet might appear as follows:
```json
{
    "user": "JohnDoe",
    "email": "john.doe@email.com",
    "password": "hashed_password",
    "address": "123 Main St",
    "phone": "+1234567890"
}
```     

**Location data:** GPS coordinates, Wi-Fi access points, cell tower information, historical location trails, frequently visited places, travel routes, and geofencing details constitute location data collected by mobile applications. The potential for unscrupulous tracking poses a direct threat to personal safety and breaches privacy boundaries.

*Example:* A segment of a JSON payload within a POST request could resemble:
```json
{
    "latitude": 37.7749,
    "longitude": -122.4194,
    "accuracy": 10
}
```

**Device information:** Mobile applications gather an array of device-related details, encompassing device model, operating system version, unique device identifiers (IMEI or UDID), network information, device orientation, battery status, screen resolution, installed applications, and browser history. This data, when exposed, becomes a target for potential exploitation through targeted attacks.

*Example:* Extracting device details from the user-agent string in an HTTP header:
```txt
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1
```

**Biometric data:** Fingerprint scans, facial recognition data, voiceprints, retina scans, palm prints, gait analysis, keystroke dynamics, and vein patterns constitute the realm of biometric data collected by mobile applications. The compromise of such biometric information poses severe security threats, including unauthorized access and identity fraud.

*Example:* A snippet from a JSON payload containing biometric information:
```json
{
    "fingerprint": "SHA256_Hashed_Fingerprint",
    "facial_data": "Encrypted_Facial_Scan",
    "voiceprint": "Biometric_Voiceprint"
}
```

**Usage patterns and analytics:** Mobile applications meticulously track usage patterns, encompassing app usage statistics, session duration, feature interaction data, clickstream data, scroll patterns, time spent on specific features, and error logs. The malicious exploitation of usage patterns may lead to manipulative profiling or targeted attacks.

*Example:* Portion of a payload containing app usage statistics:
```json
{
    "app_name": "ExampleApp",
    "session_duration": 1800,
    "feature_interaction": {
        "login": 5,
        "search": 20,
        "purchase": 3
    }
}
```

**Communication data:** Call logs, text messages, contact lists, voicemail transcripts, call duration patterns, contact relationship analysis, and email communication metadata fall within the ambit of communication data. Unauthorized access to such data raises concerns about privacy breaches, extortion, eavesdropping, or identity manipulation.

*Example:* Extracting call logs from a payload:
```json
{
    "call_history": [
        {"contact": "Alice", "duration": 120, "timestamp": "2024-01-01T10:30:00"},
        {"contact": "Bob", "duration": 60, "timestamp": "2024-01-02T15:45:00"}
    ]
}
```

**Financial information:** Credit card details, banking information, transaction history, investment portfolios, credit score information, loan application details, and cryptocurrency transaction history form the spectrum of financial information handled by mobile applications. Unauthorized extraction of financial data opens avenues for fraudulent activities, impacting individual financial security.

*Example:* Segments of a payload containing financial data:
```json
{
    "credit_card": "**** **** **** 1234",
    "bank_account": "123456789",
    "transactions": [
        {"amount": 50.00, "vendor": "OnlineStore", "timestamp": "2024-01-03T12:00:00"},
        {"amount": 20.00, "vendor": "CoffeeShop", "timestamp": "2024-01-04T08:30:00"}
    ]
}
```

**Health and fitness data:** Fitness tracking, heart rate monitoring, health-related information, sleep patterns, calorie intake logs, medication adherence records, and medical appointment history constitute health and fitness data collected by mobile applications. Exploiting such data may lead to targeted attacks, health-related scams, or manipulation of insurance claims.

*Example:* An excerpt from a payload with health-related information:
```json
{
    "heart_rate": 75,
    "calories_burned": 300,
    "sleep_pattern": {"start": "2024-01-05T22:00:00", "end": "2024-01-06T06:00:00"}
}
```

**Social media integration:** The integration with social media platforms involves accessing profiles, friend lists, posts, direct messages, social connections' activity logs, shared multimedia content, and engagement metrics. Unauthorized access raises concerns about identity impersonation, social engineering attacks, and manipulation of an individual's online presence.

*Example:* Portion of a payload containing social media data:
```json
{
    "social_profile": "Username123",
    "friend_list": ["Alice", "Bob", "Charlie"],
    "posts": [
        {"content": "Having a great day!", "timestamp": "2024-01-06T12:30:00"},
        {"content": "Exploring new places!", "timestamp": "2024-01-07T09:45:00"}
    ]
}
```

**Camera and media files:** Photos, videos, audio recordings, location metadata in photos, facial recognition data in images, audio recordings of ambient sounds, and video surveillance footage contribute to the category of camera and media files. Intrusion into personal media files compromises individual privacy and can lead to blackmail, extortion, or unauthorized use of personal content.

*Example:* Extracting metadata from a photo's EXIF data:
```json
{
    "photo_metadata": {
    "location": {"latitude": 37.7749, "longitude": -122.4194},
    "timestamp": "2024-01-08T15:15:00",
    "camera_model": "SmartphoneModelX"
    }
}
```

## Writing detection rules with Yara

[Yara](https://yara.readthedocs.io/en/stable/) stands as an open-source tool and scripting language designed for the detection and classification of malware and malicious activities. Yara serves as a powerful resource for security researchers, analysts, and incident responders, enabling the creation of custom rules for the identification of specific patterns within files, memory, or network traffic.

**Structure of a Typical Yara Rule:**
The typical Yara rule structure consists of a set of conditions and associated actions, articulated in a human-readable format. These rules utilize patterns or characteristics for Yara to match against data. The anatomy of a Yara rule can be exemplified through an illustrative case:

In the example rule below, named "Detect_PII":

```txt
rule Detect_PII {
    strings:
        $social_security = /\d{3}-\d{2}-\d{4}/
        $phone_number = /\+\d{1,2}\s?\(\d{3}\)\s?\d{3}-\d{4}/
    condition:
        $social_security or $phone_number
}
```

The rule unfolds in distinct sections. First, the "strings" section defines patterns or regular expressions, such as `$social_security` for Social Security Numbers and `$phone_number` for international phone numbers. The subsequent "condition" section specifies when the rule triggers – in this case, if either a Social Security Number or a phone number is found.

Another example, "Detect_TLS_SSL", highlights the identification of TLS/SSL encryption in network traffic:

```txt
rule Detect_TLS_SSL {
    strings:
        $tls_version = /TLS\/\d\.\d/
    condition:
        $tls_version
}
```

This rule, named "Detect_TLS_SSL", checks for the presence of TLS/SSL encryption through the definition of a string pattern, `$tls_version`, and a condition requiring its existence.

**Components of Yara Rules:**
Each Yara rule comprises a rule name for identification, a strings section with defined patterns, and a condition section specifying the circumstances under which the rule triggers. Variables assigned in the strings section are referenced in the condition section, allowing for logical combinations.

**Additional Considerations:**
Yara rules can incorporate metadata, providing details about the rule, such as authorship or references. The utilization of wildcards, quantifiers, and the ability to import rules into other rule sets enhances the flexibility and scalability of Yara in cybersecurity endeavors.



## Analyzing and detecting data transmission

Analyzing and detecting data transmissions within network traffic during the usage of mobile applications requires a systematic approach integrating tools, methodologies, and ethical considerations.

**API endpoint analysis:** Reverse engineering the application unveils communication patterns with external servers. Analyzing API endpoints allows for correlating data transmission with distinct functionalities.

**Header information scrutiny:** Inspection of HTTP headers provides valuable information, including device type, user-agent details, and content type. Headers offer insights into the nature of the transmitted data.

**Encryption protocol identification:** Identifying encryption protocols and cipher suites used in data transmissions involves analyzing the TLS handshake and SSL/TLS certificates exchanged. This sheds light on the level of security applied to transmitted data.

**Frequency and volume analysis:** Quantitative analysis of data exchange patterns, considering factors such as high frequency or large volume, may indicate specific data types, including media files or analytics data.

**Data compression analysis:** Identification of data compression methods used in transmissions involves analyzing payload structure or headers. Recognition of compression algorithms enhances understanding.

**Use of specific ports:** Analyzing port usage in network traffic provides clues about the types of data transmitted. Different data may use specific ports, aiding in categorization.

**Payload size patterns:** Cluster analysis of payload sizes helps identify patterns. Distinctive payload sizes may be indicative of specific data types.

**Sequence and timing analysis:** Correlating the timing of data transmissions with user interactions offers context. Temporal patterns reveal periodic or event-triggered data exchanges.

**Behavioral analysis:** Mapping user actions to corresponding data transmissions aids in understanding context. Knowing when data is transmitted, such as during file uploads or messaging, enhances interpretation.

**Yara rules for data detection:** Crafting Yara rules based on patterns indicative of specific data types automates the analysis process. Yara rules can be created and refined for detecting various data, such as PII.

**Applying Yara rules to network traffic:** Utilizing Yara automates the application of rules to captured network traffic.

**Analyzing matches and refining rules:** Reviewing Yara output identifies matches. Refining rules based on false positives or negatives improves accuracy.

**Iterative improvement:** Regularly revisiting and refining Yara rules is imperative to adapt to changes in application behaviors and evolving data transmission methods.

**Ethical considerations:** Ensuring all analyses are conducted ethically, in compliance with your internal guidelines and with user's consent is paramount. 


# Network traffic analysis in Colander
Colander implements a graphical interface dedicated to traffic decryption, decoding and analysis of each network transmission. The purpose of this interface is to display information related to the network traffic as well as information related to the execution of the analyzed application. More precisely, this interface shows what part of an application was in charge of each network transmission.

{{< figure src="img/decrypted_traffic.png" alt="Example of decrypted network transmission" caption="Example of decrypted network transmission" class="d-block mx-auto shadow" >}}

The interface of each network transmission is composed of the following sections:
1. summary of the transmission listing:
    * the direction of the transmission, either inbound or outbound
    * the layer-7 protocol
    * the amount of data sent or received
    * the source and destination IP addresses (and their name resolution)
2. Exodus Privacy analysis of the stack trace listing:
    * the name of the detected SDK, nothing otherwise
    * the purposes of the detected SDK
3. list of detection rules matching on the current transmission
4. *geoip* information of the remote server listing:
    * the Community ID of the flow
    * the ASN and its block of IPs
    * the organization
    * the country
5. Android process information listing:
    * the timestamp of the termination of the transmission
    * the Android process name (usually the package name of the application)
    * the ID of the process
    * the ID of the thread
    * the ID of the socket
6. headers of the HTTP request, empty otherwise
7. stack trace indicating what part of the application was in charge of the corresponding socket operations
8. indicates if the transmitted data/payload has been encrypted before transmission or not
9. controls on the data/payload allowing to:
    * view the raw data (encoded in hex) or the decrypted data (if encrypted before transmission)
    * send to CyberChef the raw data (encoded in hex) or the decrypted data (if encrypted before transmission)
    * import manually decoded data/payload/content
10. decoded transmitted data

{{< callout context="danger" title="Limitations" icon="alert-octagon" >}}
PiRogue does not support all TLS libraries. This means that the PiRogue and Colander may not be able to capture some TLS traffic. Colander only displays HTTP traffic, do not forget to check the other protocols by opening your PCAP file with Wireshark.
{{< /callout >}}

{{< callout context="tip" title="Did you know?" icon="rocket" >}}
You can open the PCAP file with Wireshark and specify the key log file in *Settings > Protocols > TLS*. This way, Wireshark will automatically decrypt TLS traffic.
{{< /callout >}}

# Analysis procedure
## Import artifacts
The first step is to import the artifacts generated by the PiRogue into Colander. 

If it is the first time you are using PiRogue in combination with Colander, you have to link your PiRogue to your Colander account. To do so, in Colander, click on your username at the top-right of the interface and find the exact command you must execute on your PiRogue. 

This command looks like:

```bash
pirogue-colander config -u "<URL for your Colander server>" -k "<your API key>"
```

This command will configure the connector for Colander. 

If the command `pirogue-colander` is not found, install the package `pirogue-colander-connector` by running the following commands on your PiRogue:

```bash 
sudo apt update
sudo apt install -y pirogue-colander-connector
```

This will update the list of available packages and install the necessary tools to connect your PiRogue to Colander.

Once the Colander connector is configured, use the `pirogue-colander` command to upload all the files generated during the instrumentation and execution of the mobile app. The commands `pirogue-intercept-single` and `pirogue-intercept-gated` generate various files stored in the folder of your choice.

As a reminder, here is the typical content of the output folder:

```text
output/
|-- ad_ids.txt
|-- aes_info.json
|-- device.json
|-- experiment.json
|-- screen.mp4
|-- socket_trace.json
|-- sslkeylog.txt
`-- traffic.pcap
```

The command `pirogue-colander` uses the file `experiment.json` to determine the different files to be uploaded to Colander. In Colander, select or create the case you want to upload these artifacts into and click on *Collect / PiRogue experiment*. At the bottom of the PiRogue experiment creation form, you will find a command to be executed on your PiRogue.

This command looks like:
```bash
pirogue-colander collect-experiment -c "<ID of your case>" <path of the folder containing your experiment>
```

If you want to upload the APK or XAPK file corresponding you have used to install the app, specify its path in the `-t` parameter:
```bash
pirogue-colander collect-experiment -c "<ID of your case>" -t <path to the APK or XAPK file> <path of the folder containing your experiment>
```

The command `pirogue-colander collect-experiment` will automatically upload all the files to Colander and create a new PiRogue experiment with the name you provided when asked.

As an example, if the folder containing generated files is located at `my_experiment/output` and the APK at `my_experiment/my_app.apk`, the command to run on the PiRogue looks like:

```bash
pirogue-colander collect-experiment -c "<ID of your case>" -t my_experiment/my_app.apk my_experiment/output
```

This command will ask for the name of the experiment and, if you specified an (X)APK file, it will ask you to choose a type for this artifact, select `Android sample`. After completion, go back in Colander, in the *Collect* workspace, select *PiRogue experiment* and check the details of the newly created one.

If you want to upload other artifacts stored on your PiRogue, use the command:

```bash
pirogue-colander collect-artifact -c "<ID of your case>" <path of the file to be uploaded>
```

You can find this command listed in Colander *Collect / Artifact* at the bottom of the artifact creation form.

{{< figure src="img/experiment_graph.png" alt="Graph representation of a PiRogue experiment uploaded to Colander" caption="Graph representation of a PiRogue experiment uploaded to Colander" class="d-block mx-auto shadow" >}}


## Decrypt the network traffic
In Colander, open the details of your newly created PiRogue experiment and click on the button *Decrypt*. This will start the automatic traffic decryption in background, this could take a few minutes depending on the amount of traffic. 

Colander will be using the PCAP file `traffic.pcap` and the file `sslkeylog.txt` to decrypt the network traffic. Once decrypted, Colander will do the automatic enrichment. First, based on the [Community ID](https://github.com/corelight/community-id-spec) and time correlation, it will attach to each network flow the corresponding stack trace read from the file `socket_trace.json`. Each stack trace is then analyzed using [Exodus Privacy](https://exodus-privacy.eu.org/) detection rules to detect the SDK potentially involved in the transmission. Then, by comparing the raw payloads read from the decrypted traffic and the `in` and `out` payloads read from the file `aes_info.json` containing all cryptographic operations (not only AES), Colander will attach the corresponding cleartext. The purpose here is to decrypt payloads that were encrypted before being sent over TLS. Finally, ElasticSearch will automatically attach to each network flow the corresponding *geoip* information such as the country and the organization of the remote server.

After few minutes, refresh the page listing details of your experiment, you should see the decrypted traffic. 

{{< callout context="danger" title="Limitations" icon="alert-octagon" >}}
PiRogue does not support all TLS libraries. This means that the PiRogue and Colander may not be able to capture some TLS traffic. Colander only displays HTTP traffic, do not forget to check the other protocols by opening your PCAP file with Wireshark.
{{< /callout >}}

{{< callout context="tip" title="Did you know?" icon="rocket" >}}
You can open the PCAP file with Wireshark and specify the key log file in *Settings > Protocols > TLS*. This way, Wireshark will automatically decrypt TLS traffic.
{{< /callout >}}

## Decode payloads
The next step is to go through all network transmissions and manually decode the data/payload/content that has not been automatically decoded. To make easier for you, Colander can *send* the raw data (encoded in hex) or the decrypted data (if encrypted before transmission) to CyberChef. By default, the data is encoded in hexadecimal.

Write your recipe and once you are happy with its result, copy it, go back in Colander, click on *Import decoded content*, paste the output of your recipe and click on *Save*. Keep in mind that the detection rules will be applied on the decoded content your imported.

In some cases, Colander is not capable of identifying payloads that have been encrypted before been transmitted. If you encounter a payload you are not able to decode or you suspect it is encrypted, check the content of the file `aes_info.json` you uploaded at the first step of this guide. 

## Write detection rules
Once you have decoded all the transmissions, it is time for you to write your Yara detection rules. To do so, in *Collect / Detection rules* create a new Yara rule. You can declare as many rules as you want in the *Content* section. All the Yara rules you have added to your case will be applied on:
* the URL/URI
* the HTTP headers
* the HTTP decoded payload

As an example, here follows are 2 simple rules detecting the model and the brand of the mobile device:

```txt
rule device_model
{
  strings:
    $s = "SM-G965F" nocase
 condition:
    $s
}

rule device_brand
{
  strings:
    $s = "samsung" nocase
 condition:
    $s
}
```

Once you are happy if your detection rules, in the details of your PiRogue experiment, click on *Detect*. It will automatically apply all your rules. 

Please note you have to reapply your detection rules each time you modify them. Changes on the detection rules are not automatically taken into account.

## Generate the report
When comes the time to generate the detection report, in the details of your PiRogue experiment, click on *View report*. It will open in another tab and you can use the *print* functionality of your web browser to save it as PDF.

This report contains:
* all artifacts such as PCAP file containing traffic data or screen recording and their digital signatures
* the definition of the detection rules and the detection summary
* the list of all transmissions listing the source and destination host, IP address and organization, the technical part of the application that has been handling the given data transmission (internal application code or 3rd-party SDKs)
* the identification and classification of the transmitted data such as advertising ID, location data etc.
* when applicable, the inferred purpose (such as analytics or advertisement) of the data collection using [Exodus Privacy](https://exodus-privacy.eu.org/) tracker classification to identify the recipient company

Colander analysis and detection accuracy can be assessed by opening the PCAP file and the SSL keylog file in Wireshark and manually verifying each data transmission.
