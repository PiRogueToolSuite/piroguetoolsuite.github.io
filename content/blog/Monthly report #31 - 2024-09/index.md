---
title: Monthly report n⁰31 - 2024-09
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
date: 2024-09-29
lastmod: 2024-09-29
summary: This month, the project virtualized PiRogue, enabling remote network traffic analysis without specialized hardware, improving scalability and integration. The Investigate workspace in Colander now integrates Shodan, ScarletShark, VirusTotal, and OTX Alien Vault, providing unified threat intelligence. The Threatr API was improved, and the Colander Python client was updated to support downloading decrypted traffic. Development began on a tool to convert PCAPNG files to HAR for easier traffic analysis. Additionally, the team delivered a successful training session for European Data Protection Authorities, focusing on regulatory compliance audits with the PiRogue Tool Suite.
draft: false
weight: 50
type: blog
outputs:
   - 'html'
   - 'email'
contributors: ["Esther Onfroy"]
---

# Project overview
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows NGOs with limited resources to equip themselves at a low cost. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and digital investigation platform.

* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
* Each month, we'll be analyzing the Android app of your choice. Please fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the app to be analyzed in October.
* The first release of the virtualization of PiRogue is coming soon!

# 🎉 Impacts and results
By implementing the virtualization of the PiRogue, we provide users with the flexibility to monitor and analyze network traffic remotely, without the need for specialized physical hardware. This shift to a virtualized environment enhances accessibility and convenience, allowing users to perform detailed traffic analysis from virtually any location. It eliminates the dependency on dedicated devices, making it easier to scale and integrate PiRogue into existing network infrastructures.


# 📒 Activity report
You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).






## 📦 US6 - Third-Party Intelligence
This project aims to enhance intelligence gathering by integrating it with well-known third-party sources. This includes an integration of _ScarletShark_ and _Shodan_ and retrieving intelligence data from them. During the analysis of forensic dumps and extracted files from a potentially compromised device, analysts collect IOCs (Indicator Of Compromise). It is crucial for analysts to easily gather threat intelligence from 3rd-parties. As an example, one identifies a potential malicious network communication with a specific domain name, the next logical step is to know what has already been documented about it.

#### This month
We have released the integration of [Shodan](https://www.shodan.io/) and [ScarletShark](https://scarletshark.com/) to Theatr. Now, the workspace *Investigate* in Colander offers the users the ability to gather threat intelligence from Shodan, ScarletShark, VirusTotal and OTX Alien Vault. Data collected from these 4 3rd-parties is unified to represent information consistently and compatible with the representation of knowledge in Colander. 

Users can get the following types of information from Threatr:
* Observables such as IP addresses and domain names
* Devices such as servers exposed to the Internet
* Actors such as threat actors
* Documentation such as publicly available analysis reports
* Events such as passive DNS and sample submissions to VirusTotal


![image](https://github.com/user-attachments/assets/d2c4a8a7-703b-4011-9d71-237a25ab6dcd)


#### Next month
Nothing planned since the feature has been released. 

#### Challenges
None.





## 📦 US9 - PiRogue virtualization
We want to provide end users with OS images and installation procedure allowing them to deploy PiRogue in a virtual environment (VM, cloud...). One of the direct implication is supporting a vast variety of configuration such as:
* Eth - Eth
* Wi-Fi - Eth
* VPN - Eth
* Wi-Fi - USB tethering

### Overview of the different activities
* [ ] ViRogue - Design and architecture
* [ ] ViRogue - Debian packaging
* [ ] ViRogue - Local and remote administration
* [ ] ViRogue - Tests
* [ ] ViRogue - Documentation



### ViRogue - Debian packaging
#### This month
Many tests were run, using laptops, mixing wired and wireless interfaces, and testing all desktop environments that can be selected from the Debian Installer. Both `pirogue-admin` and `pirogue-networking` were patched to support the various network management tools that can be encountered in those environments, and it was confirmed we could focus on `nftables` only, dropping support for `iptables`.

#### Next month
No more work is scheduled on this topic.

#### Challenges
None.

### ViRogue - Local and remote administration
#### This month
Local and remote administration are done with the following features: Dashboard configuration, Wifi configuration and VPN peers management.
Documentation includes basic commands usage and examples.
By default, the remote administration is disabled. It can be enabled on private area network or publicly by providing a valid managed FQDN and an email address (both needed for certificate creation).

#### Next month
We will add command to get information about the overall status of the PiRogue such as system and services status, commands for system management and configuration will be added too. The documentation will be updated and published.

#### Challenges
None.

### ViRogue - Tests
#### This month
Many tests were run, using laptops, mixing wired and wireless interfaces, and testing all desktop environments that can be selected from the Debian Installer. Packages were patched incrementally to progressively support all use cases. A new page was prepared for the website in the [`virogue` branch](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/compare/v2...virogue).

The VPN feature was also tested using a virtual machine hosted at Hetzner.

#### Next month
No more work is planned.

#### Challenges
None.

### ViRogue - Documentation
#### This month
New developer-oriented pages have been written to cover the wide changes needed to support new use cases (“appliance” mode and “VPN” mode):
 - “System integration” gives an overview of the historical approach versus the new one, gives details about package-level interaction, and explains the “initial configuration” logic/heuristics.
 - “System integration — Details” gives more information about how packages can be integrated with `pirogue-admin`.
 - “System integration — Tests” details all the tests that have been performed, and sums up the (positive across the board) results.

 The end-user documentaton details the new way to administrate a PiRogue, explaining to the new local and remote administration capabilities. The legacy configuration method will be replaced by this documentation and archived in a dedicated section.

Those additions are staged in the [`virogue` branch](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/compare/v2...virogue), to be merged only when a release is published using the new set of packages.

#### Next month
No more work is planned on this.

#### Challenges
None.

## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
We have updated the documentation of Threatr to reflect the improvement we did this month. We have continued improving the project documentation by taking into account the users' feedback we received.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.

#### Challenges
None.



## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
We have improved the API of Threatr to support observability such as retreiving the status of the configuration and the size of its cache of a Threatr instance. The status of the Threatr service can be checked on the status page of Colander.


<img width="204" alt="image" src="https://github.com/user-attachments/assets/536cc2c1-2718-4b65-b026-1e80e3f52339">


We have released the version `v1.0.5` of the [Python client for Colander](https://github.com/PiRogueToolSuite/colander-python-client) to add a method to download the decrypted traffic of a PiRogue experiment.

We have started working on implementing a tool to convert [PCAPNG files to HAR](https://github.com/PiRogueToolSuite/pcapng-utils). The purpose is to make it possible to open the decrypted network traffic with the *Network* tab of the web browser developer tools.

We have published the version `16.5.2` of Frida.

#### Next month
We will continue the maintenance of all the tools and Debian packages we maintain.

#### Challenges
None.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
We have been facilitating a 3-hour training for the European [Data Protection Authorities](https://commission.europa.eu/law/law-topic/data-protection/reform/what-are-data-protection-authorities-dpas_en) during the bootcamp organized by the [European Data Protection Board](https://www.edpb.europa.eu/edpb_en). This training was focusing on the regulatory compliance audit of mobile applications with PiRogue Tool Suite. We have received very positive feedbacks.

The following topics have been covered:
* The installation procedure of the PiRogue 
* The theory of network traffic interception and decryption
* The auditing procedure and methodology
* The analysis of the decrypted traffic 
* The identification of the data processed and transmitted by the application to be audited

We have analyzed the application [NetGuard](https://play.google.com/store/apps/details?id=eu.faircode.netguard), the analysis report will be shared with community at the beginning of October. 

The PTS community meeting took place at the Global Gathering. We had a booth where we showcased PiRogue and Colander. 

#### Next month
We will continue with our recurring activities.

#### Challenges
None.



## 📦 US103 - Governance


#### This month
The first advisory committee meeting took place at the Global Gathering in Estoril.

#### Next month
We will organize the next meeting with the members of the advisory committee.

#### Challenges
None.



