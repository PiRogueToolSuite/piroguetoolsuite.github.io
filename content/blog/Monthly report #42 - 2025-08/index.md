---
title: Monthly report n⁰42 - 2025-08
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "This month, we made significant progress toward interoperability by developing a Python package that enables seamless conversion of threat intelligence data between Colander, MISP, STIX 2, and Threatr formats, laying the groundwork for easier data exchange with industry-standard tools."
date: 2025-08-31
lastmod: 2025-08-31
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
* We will attend the Global Gathering in Estoril from September 8–10. 
* The next community meeting will happen on Sep. 26 at 2pm CET.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).

# 🎉 Impacts and results
This month, we made significant progress toward interoperability by developing a Python package that enables seamless conversion of threat intelligence data between Colander, MISP, STIX 2, and Threatr formats, laying the groundwork for easier data exchange with industry-standard tools. These advancements will soon allow users to import threat data directly from MISP servers and export Colander cases back into MISP, greatly enhancing collaboration and flexibility for organizations using PTS. Looking ahead, these improvements will empower our users to integrate PTS more effectively into their workflows, streamline investigations, and foster broader knowledge sharing across the threat intelligence community.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).



## 📦 US3 - Interoperability
The project seeks to enhance interoperability by enabling the import and export of knowledge in industry-standard format. This includes batch importing of knowledge, data interchange in MISP format, and the support for user-defined templates to generate custom knowledge feeds. PTS users must have the freedom to move their data and findings from and to other tools such as [OpenCTI](https://docs.opencti.io/latest/) or [MISP](https://www.misp-project.org/).

### Overview of the different activities
* 🔁 Import and export cases
* 🔁 Import and export knowledge from/to MISP format
* 🔁 Support user-defined templates to generate custom feeds
* ✅ Use HAR to store the decrypted network traffic



### Import and export knowledge from/to MISP format
#### This month
##### Colander Data Converter
[`colander_data_converter`](https://github.com/PiRogueToolSuite/colander-data-converter) is a Python library that enables interoperability between cyber threat intelligence (CTI) platforms by converting structured threat data between different formats — notably MISP, STIX 2.1, and Colander. Colander data format is an opinionated data format focused on usability and interoperability.

![](https://github.com/PiRogueToolSuite/colander-data-converter/raw/main/docs/_static/img/conversions.png)

It supports conversion between [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html), [STIX 2.1](https://pts-project.org/colander-data-converter/data_types/stix2.html), and [Colander](https://pts-project.org/colander-data-converter/data_types/colander.html) data formats. Check out [the conversion matrix](https://pts-project.org/colander-data-converter/data_types/conversion_matrix.html) for more details. Data can be [exported](https://pts-project.org/colander-data-converter/export_data.html) in CSV, [Mermaid](https://www.mermaidchart.com/) and [Graphviz](https://graphviz.org/) DOT formats. The library also supports [user-defined templates](https://pts-project.org/colander-data-converter/export_data.html#template).

One of the main objective of this project is to minimize the loss of information between data formats. To improve the support of MISP, two new objects will be added to MISP data model to include [*Colander Events*](https://pts-project.org/colander-data-converter/data_types/colander.html#event-events) and [*Colander Data Fragments*](https://pts-project.org/colander-data-converter/data_types/colander.html#datafragment-data-fragments). Check out [the definition](https://pts-project.org/colander-data-converter/data_types/misp_definitions.html) of these new MISP objects for more details. 

This project is fully [documented](https://pts-project.org/colander-data-converter/index.html) and [tested](https://github.com/PiRogueToolSuite/colander-data-converter/actions/workflows/test.yml/) achieving [>90% of code coverage](https://app.codecov.io/gh/PiRogueToolSuite/colander-data-converter).

We warmly thank **Raphaël Vinot** from [CIRCL](https://www.circl.lu/) and [Yoyodyne IT](https://www.yoyodyne-it.eu/) for their invaluable help.

⚠️ This project is currently under active development and is not suitable for production use. Breaking changes may occur without notice. A stable release will be published to PyPI once development stabilizes.

#### Next month
We will continue to improve support for MISP and STIX2.1 data formats, publish the first stable release of this project and integrate it into Colander.







## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
Nothing significant has been achieved this month.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.



## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
##### PiRogue evidence collector
The package [`pirogue-evidence-collector`](https://github.com/PiRogueToolSuite/pirogue-evidence-collector/) has been released in version `1.0.5`. This version retrieves Frida server release directly by tag name instead of listing the *n* latest ones.

##### PCAPNG utils
The package [`pcapng-utils`](https://github.com/PiRogueToolSuite/pcapng-utils/) has been released in version `1.0.10`. This version supports an option to set an arbitrary time shift. In case there was a systematic time shift between socket operations timestamps *vs.* network traffic timestamps, user may provide the `--time-shift SECONDS` flag to account for it. Indeed, socket operations timestamps come from phone date, whereas network traffic timestamps come from Pirogue date, which may be desynchronized. Positive shift means network traffic timestamps (PiRogue) were earlier than socket operations timestamps (phone).

#### Next month
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
At the request of the community, the analysis report of the Android application we have analyzed this month will not be published on our website, it will be shared in TLP:AMBER+STRICT.

We will attend the [Global Gathering in Estoril from September 8–10](https://wiki.digitalrights.community/index.php?title=Global_Gathering_Agenda_2025), and have a booth. Come by, the main PTS developer, along with an expert in information security, will be there to explain how it works and answer technical questions.

We have held several meetings with organizations to better understand their needs in terms of interoperability between MISP and Colander. This allowed us to discuss with CiviCERT member organizations, as well as CiviCERT's threat analyst. Two use cases emerged from these discussions. There is an urgent need for organizations to have a simple way to query a MISP server to retrieve threat intelligence about an observable (IP address, domain name...). MISP is widely used for information sharing, so organizations that have adopted Colander need to publish their IOCs in MISP in order to share them with the rest of their community.

The next PTS community meeting will happen on Sep. 26 at 2pm CET, [join us on Google Meet](https://meet.google.com/zqo-rwoq-nqx).

#### Next month
We will continue with our recurring activities.



## 📦 US103 - Governance


#### This month
We are continuing the implementation of the working plan with [The Engine Room](https://www.theengineroom.org/).

We are awaiting the final determination regarding our proposal to the [NLnet's NGI MobiFree program](https://nlnet.nl/mobifree/), our proposal to the [Spyware Accountability Initiative](https://stopspyware.fund/) has been rejected.

We are actively engaging with potential new partners and grant opportunities. However, the landscape is competitive, and the timeline for securing such support is often lengthy and uncertain. While we are doing our utmost to navigate this period and find new financial backing, the future remains precarious. If PTS is a valuable asset in your work, if it helps you conduct crucial investigations, research, or defend digital rights, we now earnestly ask for [your support](https://opencollective.com/pts).

#### Next month
We will continue with our recurring activities.



