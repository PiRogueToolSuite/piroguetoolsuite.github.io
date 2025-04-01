---
title: Monthly report n⁰37 - 2025-03
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
summary: "We have fixed a high-severity security vulnerability in PiRogue's network configuration and updated Colander dependencies like Django and Python. Significant progress was made in modernizing Colander front-end build system. We also submitted funding proposals to funding sources."
date: 2025-03-31
lastmod: 2025-03-31
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
* Update your PiRogue to get the latest security patch!
* The next community meeting will happen on Apr. 25 at 2pm CET.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).

# 🎉 Impacts and results
A particularly annoying problem that led to a high-severity security vulnerability has been fixed. Our users no longer have to manually reconfigure their PiRogue whenever its IP address has changed.

# 📒 Activity report
You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).


## 📦 US2 - Better knowledge management
A significant improvement involves refining knowledge organization and representation within Colander. This includes establishing a hierarchical structure for cases, where parent cases inherit from child cases, enhancing the management of extensive investigations. Furthermore, Colander will support the creation of multiple graphs within a single case, allowing for diverse projections of a subset of the case knowledge graph. The inclusion of thumbnails on graph nodes will simplify the investigation by involving pictures.

### Overview of the different activities
* 🔁 Create a hierarchy of cases
* 🔁 Create multiple graphs
* 🔁 Add thumbnails on graph nodes
* 🔁 Batch import of knowledge
* 🔁 Feature request: bulk add of observables

### Add thumbnails on graph nodes
#### This month
The thumbnail management has been done with cropping capabilities. This integrates perfectly with the new graph editor thumbnail look and feel. The heavy lifting of thumbnail normalization is done by the new form widget itself, this capability delayed the need to use [Mandolin](https://github.com/PiRogueToolSuite/mandolin).

#### Next month
Users will be able to add, edit, and delete thumbnails directly within the graph editor. The internal [Mandolin](https://github.com/PiRogueToolSuite/mandolin) service will be integrated as a server-side to ensure the management of entities thumbnail using its REST API.

#### Challenges
Managing thumbnails directly within the graph editor has been delayed due to the important rework needed to build system of Colander. As the new Colander's front-end guidelines are clear and in-place, the integration of new widgets will be easier and flawless.


## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
##### Security
The security audit has revealed a security issue affects PiRogue when the IP address of its external network changes. In fact, PiRogue's network configuration system struggles with adapting to network changes, particularly when DHCP IP reassignment or network reconfiguration occurs. This limitation stems from a static configuration design, where hardcoded IP addresses and dependencies on the initial network topology prevent dynamic adjustments. As a result, any network change can trigger cascading service failures, impacting multiple critical components. Security controls may stop functioning, the traffic monitoring dashboard can become inaccessible, and system monitoring capabilities may be compromised, making recovery difficult. These failures lead to a broader operational impact, including security boundary breaches, disruptions in traffic monitoring, service availability issues, and gaps in security oversight.

This security issue has [been fixed](https://github.com/PiRogueToolSuite/pirogue-admin/commit/6c20fb9c2026743c59d74403056275458df805ba) and a new version of `pirogue-admin` Debian package has been released (version 2.0.7) to include this security patch. We’ve implemented network configuration monitoring based on kernel events to detect changes and automatically reconfigure the PiRogue.

To address security vulnerabilities introduced by some dependencies of Colander, we've updated **Django** framework to version 4.2.20 and **Python** runtime to version 3.12.

##### Improvements
We've discovered that the implementation of `FileField` in Django when used with S3 storage could lead to storage space starvation. We've patched the file management internals to ensure stored files can be overwritten instead of being duplicated.

Minor flaws in the user interface layout have been identified and resolved. In certain edge cases, unnecessary scroll horizontal bars were appearing at the workspace level.

While the whole Colander front-end is progressively migrated to a modern framework like **Vue3**, a significant amount of rework has been done of the build system workflow. This allows us to proceed to a huge code base cleanup. Finally, the [HAR analyzer](https://github.com/PiRogueToolSuite/har-analyzer-vuejs) project has been patched to accommodate Colander integration and reworked to be used has a generic library by any **Vue3** projects.

#### Next month
[HAR analyzer](https://github.com/PiRogueToolSuite/har-analyzer-vuejs) will be published to NPM registry. We will continue cleaning up and modernizing the Colander front-end build workflow.


## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
The [analysis report](https://pts-project.org/blog/analysis-of-istanbul-senin-app/) of the *Istanbul Senin* Android application will be published in a few days because its analysis is more complex than anticipated.

The PTS community meeting took place on Mar. 28. The next one will happen online on Apr. 25 at 2pm CET.

Due to a bug in PiRogue, we’ve noticed an increase in support requests. We’re actively working on resolving the issue that arises when the PiRogue’s IP address changes. This issue is now fixed, and [a patch](https://github.com/PiRogueToolSuite/pirogue-admin/commit/6c20fb9c2026743c59d74403056275458df805ba) has been released.

#### Next month
We will continue with our recurring activities.


## 📦 US103 - Governance
#### This month
[Recent events](https://www.project2025.observer/) in the United States have had a considerable impact on a number of organizations, which have seen their funding suspended or even cancelled. We, too, have been impacted, but without seriously jeopardizing PTS. We are very grateful to OTF for their [determination, communication, and transparency](https://www.opentech.fund/news/open-technology-fund-files-lawsuit-to-contest-grant-termination-and-preserve-critical-mission/). Our sincere gratitude goes to our program manager for their help and support.

To diversify our funding sources, we submitted a proposal to [NLnet's NGI MobiFree program](https://nlnet.nl/mobifree/). We have also submitted a proposal to the [Calyx Institute's Sepal fund](https://calyxinstitute.org/projects/the-sepal-fund). These funds, if secured, will be used to enhance PiRogue's analysis capabilities, notably by enabling dynamic analysis of Android applications in a fully virtualized environment.

We’ve followed up with potential partners to explore different hosting options for our users.

#### Next month
We will continue with our recurring activities.
