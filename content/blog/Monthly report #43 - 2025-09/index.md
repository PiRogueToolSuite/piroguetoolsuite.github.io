---
title: Monthly report n⁰43 - 2025-09
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "This month, we made significant progress toward interoperability by developing a Python package that enables seamless conversion of threat intelligence data between Colander, MISP, STIX 2, and Threatr formats, laying the groundwork for easier data exchange with industry-standard tools."
date: 2025-09-30
lastmod: 2025-09-30
draft: false
weight: 50
type: blog
outputs:
   - 'html'
   - 'email'
contributors: ["Esther Onfroy"]
categories: ['activity reports']
toc_enabled: true
toc_start_level: 2
toc_end_level: 2
toc_ordered: false
---

# Project overview
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open source tool suite that provides a comprehensive mobile device forensics and digital investigations platform.
* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
* The next community meeting will happen on Oct. 31 at 2pm CET.
* Our proposal to the [NLnet's NGI MobiFree program](https://nlnet.nl/mobifree/) has been accepted.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).

# 🎉 Impacts and results
This month, we made significant progress toward interoperability by improving the *colander-data-converter* package that enables seamless conversion of threat intelligence data between Colander and MISP.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).



## 📦 US3 - Interoperability
The project seeks to enhance interoperability by enabling the import and export of knowledge in industry-standard format. This includes batch importing of knowledge, data interchange in MISP format, and the support for user-defined templates to generate custom knowledge feeds. PTS users must have the freedom to move their data and findings from and to other tools such as [OpenCTI](https://docs.opencti.io/latest/) or [MISP](https://www.misp-project.org/).

### Overview of the different activities
* 🔁 Import and export cases
* 🔁 Import and export knowledge from/to MISP format
* 🔁 Support user-defined templates to generate custom feeds
* ✅ Use HAR to store the decrypted network traffic



### Import and export cases
#### This month
##### Backend
We have created an export management system to centralize the case export lifecycle. This system is easily extensible to support Colander's upcoming export features.
We have also created a notification management system, it only supports email notifications for now. This component allows us to easily keep track of all user notifications that have been sent by Colander.

##### Frontend
We have improved the user interface of the case importer to make it more user-friendly and consistent with Colander's core functionalities. It integrates concepts and color codes of Colander's ecosystem.

<img width="640" alt="Image" src="https://github.com/user-attachments/assets/64313142-a7bd-4d6d-b312-d22a86c13711" />

#### Next month
We will be putting all these features into pre-production.


### Import and export knowledge from/to MISP format
#### This month
We have improved the support of [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html). However, work remains to be done to minimize information loss during MISP feed import. The [colander_data_converter](https://github.com/PiRogueToolSuite/colander-data-converter) is a Python library has reached is first stable state, a [first stable version](https://github.com/PiRogueToolSuite/colander-data-converter/releases/tag/v1.0.0) was released and is available on [PyPi](https://pypi.org/project/colander-data-converter/). The Python library is not yet integrated into Colander, and we will have to wait for a new version of MISP before we can fully complete this task.

#### Next month
We will continue to improve support for MISP and integrate the data converter into Colander.

#### Challenges
MISP data format contains certain inconsistencies that make MISP support particularly challenging. For example, MISP does not allow IPv4 and IPv6 addresses to be represented in a way that distinguishes between them, a URL can be represented in two different ways...








## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
##### New HAR analyzer version
Thanks to [Etienne Maheux's contribution](https://github.com/PiRogueToolSuite/har-analyzer-vuejs/pull/3), the [Vue.Js HAR analyzer](https://github.com/PiRogueToolSuite/har-analyzer-vuejs/) gains new features and bug fixes. Entry size computation was made more robust, fixing undefined body size issues. Terminology was updated from “blocked request” to “aborted request” and logic now relies on response status. Visual indicators and badges for Ogre recipe matches were added, along with improved request/response body display and styling. The Decryption tab now shows size differences, uses a shared code component, and includes thread IDs. Multiple HAR files can be uploaded and viewed together, and URLs in the main view are split to highlight search parameters.

Those improvements have been released in [version 0.1.4](https://github.com/PiRogueToolSuite/har-analyzer-vuejs/releases/tag/v0.1.4)

##### First Colander Companion bug
Our users reported an [error](https://github.com/PiRogueToolSuite/colander-companion/issues/1) that sometimes occurs when capturing a web page. We did not manage to reproduce this bug, but we keep an eye on it.

#### Next month
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.

#### Challenges
Even with similar user setup, the Colander Companion bug can't be reproduced by our team.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
No Android apps were analyzed this month due to a lack of time.

We attended [Global Gathering](https://wiki.digitalrights.community/index.php?title=Global_Gathering_Agenda_2025) and facilitated a 2-hour workshop on Colander for 15 members of CiviCERT. This event was a great opportunity for us to meet potential new partners and donors. It also allowed us to meet PTS users and to demonstrate the latest improvements to Colander.

[ZoqueLabs](https://zoquelabs.xyz/) published [a write-up about *Seeker*](https://zoquelabs.xyz/threat_intel/2025/09/26/Experiment-0x02-Seeking-Seeker.html), one chapter explains how they have used Colander to document their research.

The next PTS community meeting will happen on Oct. 31 at 2pm CET, [join us on Google Meet](https://meet.google.com/zqo-rwoq-nqx).

#### Next month
We will continue with our recurring activities.



## 📦 US103 - Governance


#### This month
Our proposal to the [NLnet's NGI MobiFree program](https://nlnet.nl/mobifree/) has been accepted. This will help us improve PiRogue's capabilities by adding, for example, the ability to use Android emulators.

We are actively engaging with potential new partners and grant opportunities. However, the landscape is competitive, and the timeline for securing such support is often lengthy and uncertain. While we are doing our utmost to navigate this period and find new financial backing, the future remains precarious. If PTS is a valuable asset in your work, if it helps you conduct crucial investigations, research, or defend digital rights, we now earnestly ask for [your support](https://opencollective.com/pts).

#### Next month
We will continue with our recurring activities.



