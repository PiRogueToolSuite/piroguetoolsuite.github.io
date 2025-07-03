---
title: Monthly report n⁰40 - 2025-06
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
summary: "This month, we made significant progress toward interoperability by developing a Python package that enables seamless conversion of threat intelligence data between Colander, MISP, STIX 2, and Threatr formats, laying the groundwork for easier data exchange with industry-standard tools."
date: 2025-06-30
lastmod: 2025-06-30
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
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and digital investigation platform.

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



### Import and export cases
#### This month
We implemented a full-case export feature: users can now trigger the generation of a ZIP archive from the Case Details page, which contains everything related to a Colander case—entities, documentation, artifacts, thumbnails, and sub-graph data. Once the export completes, the ZIP becomes available for download directly within that same interface.

On the case creation workflow, we introduced an “Import Case” feature. When users opt to import, they’re first presented with a full review of the archive’s contents—file structure, metadata, and entity listings—so they can verify everything before proceeding. Only after confirming do they initiate the actual import.

#### Next month
We are planning to enhance user's experience for the export process. Once a case export completes, users will receive an in-app toaster notification if they’re still connected, and an email notification if they’ve verified their account, ensuring they’re promptly informed whether they stay logged in or go offline.

### Import and export knowledge from/to MISP format
#### This month
We began work on a [Python package](https://pts-project.org/colander-data-converter/) designed to transform and convert threat intelligence data for the PTS Colander platform. The package enables conversion to and from widely used formats—MISP, STIX 2, and Threatr. For context, [MISP](https://www.misp-project.org/) is an open‑source platform for storing, sharing, and correlating structured threat indicators across communities, while [STIX 2](https://docs.oasis-open.org/cti/stix/v2.1/cs01/stix-v2.1-cs01.html) is a standardized, machine-readable language for representing cyber threat intelligence to automate sharing and analysis.

#### Next month
We'll add support for using MISP as a live threat intelligence source: specifically, enabling users to query a MISP server directly and import the resulting data into a Colander case. On the export side, we'll build functionality to export Colander cases back into MISP format, completing bidirectional integration and enabling MISP to serve both as a data source and a target for Colander-managed intelligence.







## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skill development.

#### This month
Nothing significant has been carried out this month.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.



## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
We drafted and implemented an icon-set generation build workflow for Colander, centered on the [Iconify Design](https://iconify.design/) project. This tool aggregates icons from over 150 open-source sets—totaling more than 200,000 clean, optimized vector icons—into a centralized repository. The goal is to extract only the icons Colander actually uses, eliminating large, unnecessary monolithic icon packages and improving overall asset maintainability.

By automating cherry-picking via Node.js tooling, we now maintain a streamlined, lightweight icon-set that boosts build performance and reduces clutter. The workflow includes validation, cleanup, and updating mechanics drawn directly from Iconify’s cleanup pipeline, ensuring our icons stay lightweight and compliant with best practices.

#### Next month
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
At the request of the community, the analysis report of the Android application we have analyzed this month will not be published on our website, it will be shared in TLP:AMBER+STRICT. 

The PTS community meeting has been canceled for personal reasons. The next one will happen on Sep. 26 at 2pm CET. As the July and August meetings will not take place, we will use this time to discuss with the community the interoperability of Colander with MISP.

We will attend the Global Gathering in Estoril from September 8–10. 

#### Next month
We will continue with our recurring activities.



## 📦 US103 - Governance


#### This month
We have submitted a proposal to the [Spyware Accountability Initiative](https://stopspyware.fund/). If PTS is a valuable asset in your work, if it helps you conduct crucial investigations, research, or defend digital rights, we now earnestly ask for [your support](https://opencollective.com/pts).

We are continuing the implementation of the working plan with The Engine Room.

We’ve followed up with potential partners to explore different hosting options for our users.

#### Next month
We will continue with our recurring activities.



