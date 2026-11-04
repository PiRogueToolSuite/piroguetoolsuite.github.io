---
title: Monthly report n⁰xx - 2026-10
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "In October, we completed the restructuring of the PTS documentation on Docusaurus, presented PTS at Bread&Net 2026 in Beirut, held the first UX research calls with The Engine Room, and released the new PiRogue Grafana dashboard in production."
date: 2026-10-31
lastmod: 2026-10-31
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
The new PTS documentation, migrated from Hugo/Doks to Docusaurus, is now publicly available as a draft on GitHub: [github.com/PiRogueToolSuite/documentation](https://github.com/PiRogueToolSuite/documentation). We will integrate community feedback before the official publication.
The new PiRogue Grafana dashboard, built by [Vaibhav Bhawsar](https://recombine.net/) from the [Impact & Engagement Lab](https://www.opentech.fund/labs/impact-engagement-lab/), is now available in production.
Our next community meeting is scheduled for Friday, November 27th, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

# 🎉 Impacts and results
The documentation is now organized around use cases and practitioner workflows, with step-by-step guides in plain language. This addresses the main gap identified by The Engine Room: the previous documentation was written for expert users and was hard for non-technical practitioners to adopt.
Docusaurus gives the documentation a more maintainable foundation, with better navigation and search, and native internationalization support for future translations into Arabic, French, and Spanish.
We presented PTS during a session at [Bread&Net 2026](https://breadandnet.org/) in Beirut, organized by [SMEX](https://smex.org/), showing how it can be used to analyze mobile devices.
We held several calls with The Engine Room as part of the first phase of the UX research on PTS.
We refined the workshop slides and practical cases for PiRogue, Colander and Octopus.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).



## 📦 USX2 - Documentation restructure


#### This month
We completed the full restructuring of the PTS documentation, migrating from Hugo/Doks to Docusaurus and rebuilding the information architecture around use cases and practitioner workflows instead of technical components.

A complete draft is now publicly available on GitHub: [github.com/PiRogueToolSuite/documentation](https://github.com/PiRogueToolSuite/documentation)

This directly addresses the main gap identified by The Engine Room that the previous documentation was written for expert users and difficult for non-technical practitioners to adopt. The new structure provides step-by-step guides in plain language for each major use case.

Docusaurus also provides a more maintainable foundation with improved navigation, search, and native internationalization support for future translations into Arabic, French, and Spanish.

We made additional modifications this month to reflect recent feature changes.

#### Next month
November is the final month of this extension. We will continue with recurring tasks and focus on integrating community feedback before official publication, we will also restructure the documentation based on [Diátaxis](https://diataxis.fr/)




## 📦 USX3 - Workshops preparation


#### This month

We presented the PiRogue Tool Suite during a session at [Bread&Net 2026](https://breadandnet.org/), the digital rights gathering organized by [SMEX](https://smex.org/). We also continued working on the workshop materials [github.com/PiRogueToolSuite/pts-workshops](https://github.com/PiRogueToolSuite/pts-workshops), refining the slides and practical cases for PiRogue, Colander and Octopus.

#### Next month

We will finalize the workshop materials and close this activity by the end of November. We will also continue with our recurring activities.














## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month

The restructuring of the PTS documentation on Docusaurus is complete, and the draft is publicly available on GitHub [github.com/PiRogueToolSuite/documentation](https://github.com/PiRogueToolSuite/documentation). This month we updated the content to reflect recent feature changes.

#### Next month

We will reorganize the documentation following the [[Diátaxis](https://diataxis.fr/)](https://diataxis.fr/) framework and integrate community feedback ahead of the official publication. We will also continue with our recurring activities.




## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month

We held several calls with The Engine Room as part of the first phase of the UX research on PTS.

We also attended [Bread&Net 2026](https://breadandnet.org/) in Beirut, where we presented the functionalities and how PTS could be really useful for analysis of mobile devices during a session.

Our next community meeting is scheduled for Friday, November 27th, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz)

#### Next month

The Engine Room will start reaching out to the partners and interested parties we identified, to collect their feedback and better understand how we can help our community. We will support them through this phase and continue with our recurring activities.






## 📦 US103 - Governance


#### This month
To maintain a structured workflow, Ragheb serves as the primary coordinator for the PiRogue Tool Suite. He manages several key areas including partner relations (CiviCERT), engagement with the community (demos, monthly meetings, and trainings), UX research with The Engine Room, dashboard improvements with Vaibhav Bhawsar, and the definition of project roadmaps and priorities. Additionally, he oversees documentation and co-writes grant applications with Esther. This management structure provides the team with clear focus; because Ragheb handles the overarching coordination and communication tasks, other team members, including Esther, can dedicate their time to their specific areas of work without distraction.

#### Next month
We will continue with our recurring activities.



## 📦 US104 - Product management


#### This month

[Vaibhav Bhawsar](https://recombine.net/) from the [Impact & Engagement Lab](https://www.opentech.fund/labs/impact-engagement-lab/) has completed his work on the new PiRogue Grafana dashboard, which is now available in production. We would like to thank Vaibhav for his support and wonderful work.

#### Next month

We will continue with our recurring activities.




