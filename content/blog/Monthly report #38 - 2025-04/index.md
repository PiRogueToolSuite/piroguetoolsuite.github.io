---
title: Monthly report n⁰38 - 2025-04
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
summary: "Two security vulnerabilities identified in PiRogue have been fixed. The dashboard is now accessible in HTTPS only and upon their first login to PiRogue, the user is now requested to change their password."
date: 2025-04-30
lastmod: 2025-04-30
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
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management, and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and digital investigation platform.

* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
* Make sure to upgrade your PiRogue to get the latest security patch!
* The [analysis report](https://pts-project.org/blog/analysis-of-apna-tunnel-lite-v27/) of *APNA Tunnel Lite v27* is now public.
* The next community meeting will happen on May 30 at 2pm CET.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).

# 🎉 Impacts and results
Two security vulnerabilities identified in PiRogue have been fixed. The dashboard is now accessible in HTTPS only and upon their first login to PiRogue, the user is now requested to change their password.

# 📒 Activity report
You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).


## 📦 US2 - Better knowledge management
A significant improvement involves refining knowledge organization and representation within Colander. This includes establishing a hierarchical structure for cases, where parent cases inherit from child cases, enhancing the management of extensive investigations. Furthermore, Colander will support the creation of multiple graphs within a single case, allowing for diverse projections of a subset of the case knowledge graph. The inclusion of thumbnails on graph nodes will simplify the investigation by involving pictures.

### Overview of the different activities
* 🔁 Create a hierarchy of cases
* ✅ Create multiple graphs
* ✅ Add thumbnails on graph nodes
* 🔁 Batch import of knowledge
* 🔁 Feature request: bulk add of observables


### Add thumbnails on graph nodes
#### This month
Thumbnails can now be managed directly with the entity creation/edition form or directly within the graph. From an investigation point of view, this feature significantly increases the readability and understanding of interconnections within a case.


### Batch import of knowledge
#### This month
We've created a Vue component that allows the user to import a CSV file with Colander and automatically create the entities represented in the CSV file. The rows correspond to the entities to create, and the columns correspond to the properties of the entity.  
To import a CSV, the user is invited to select a CSV file and select the type of entities they want to create in their Colander case. The user must assign a property to each column. This mapping defines what column contains the name of the entity, the description…  

This component allows the user to import observables, devices, actors, threats, and data fragments.

<img width="1624" alt="Image" src="https://github.com/user-attachments/assets/615ff806-f544-42a6-8917-c21a60d463a1" />
 
#### Next month
We will release this feature.


## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
In response to the audit's identification of [Vulnerability 2.4](https://github.com/PiRogueToolSuite/deb-packages/issues/43), the documentation has been updated. This update details the security and usability implications of requiring an HTTPS-only connection to the PiRogue dashboard.

Two cookbooks have been added:
* [Trust PiRogue self-signed certificate](https://pts-project.org/cookbooks/pirogue-trust-self-signed-certificate/)
* [Verify PiRogue self-signed certificate](https://pts-project.org/cookbooks/pirogue-verify-self-signed-certificate/)

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.


## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation, and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation, and fix bugs.

#### This month
##### Security
The [Vulnerability 2.4](https://github.com/PiRogueToolSuite/deb-packages/issues/43) impacting PiRogue has been fixed and released in the package `pirogue-external-exposure` version `2.0.4`. The dashboard is now accessible in HTTPS only, 2 cookbooks detail how to verify and trust the self-signed certificate: 

* [Trust PiRogue self-signed certificate](https://pts-project.org/cookbooks/pirogue-trust-self-signed-certificate/)
* [Verify PiRogue self-signed certificate](https://pts-project.org/cookbooks/pirogue-verify-self-signed-certificate/)

The [Vulnerability 2.3](https://github.com/PiRogueToolSuite/pirogue-images/issues/8) impacting PiRogue OS has been fixed and released in the PiRogue OS image version [`arm64_2.3.0`](https://github.com/PiRogueToolSuite/pirogue-images/releases/tag/arm64_v2.3.0). Now, upon their first login to PiRogue, the user is requested to change their password.

##### Improvements
The [HAR Analyzer](https://github.com/PiRogueToolSuite/har-analyzer-vuejs) has been published on [NPM repository](https://www.npmjs.com/package/har-analyzer-vue) and is available to anyone who wants to use it in their project. This component is already integrated into Colander artifact preview pages.

<img width="1614" alt="Image" src="https://github.com/user-attachments/assets/cb939c34-8def-4e05-90ff-1b41b5fc5c1a" />

With the integration of [Mandolin](https://github.com/PiRogueToolSuite/mandolin/), artifacts stored in Colander are automatically analyzed with [Apache Tika](https://tika.apache.org/). This analysis extracts artifact metadata like the geolocation information stored in a picture and the content of documents or images by leveraging [OCR](https://github.com/tesseract-ocr/tesseract) if necessary.

<img width="1614" alt="Image" src="https://github.com/user-attachments/assets/1d9fd126-c91c-49d7-950c-2908b32abc2f" />

<img width="1609" alt="Image" src="https://github.com/user-attachments/assets/38c466e7-59a7-48fa-8e89-547608ba84f6" />

#### Next Month
We will continue the maintenance of the tools, Debian packages we maintain, and Colander ecosystem.


## 📦 US102 - Community and outreach
Given the success of events, webinars, and demos with members of the civil society, NGOs, and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues, or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
The [analysis report](https://pts-project.org/blog/analysis-of-apna-tunnel-lite-v27/) of the *APNA Tunnel Lite v27* Android application has been published.

The PTS community meeting took place on Apr. 25. The next one will happen online on May 30 at 2pm CET.

This month, more than 40 virtual PiRogues have been deployed.

#### Next month
We will continue with our recurring activities.



## 📦 US103 - Governance
#### This month
The working plan we have defined with [The Engine Room](https://www.theengineroom.org/) has been approved by OTF. They are assisting us in conducting user research, mapping systems and audiences, and designing sustainable user feedback processes.

Our proposal to the [Calyx Institute's Sepal fund](https://calyxinstitute.org/projects/the-sepal-fund) has been rejected. 

We’ve followed up with potential partners to explore different hosting options for our users.

#### Next month
We will continue with our recurring activities.



