---
title: Monthly report n⁰52 - 2026-09
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "PiRogue Tool Suite completed several key activities under the OTF extension, including simplifying Colander deployment, restructuring the documentation around practical use cases, and creating a reusable workshop curriculum covering PiRogue, Colander and Octopus. The team also addressed all Critical and High security issues in Colander, expanded testing, continued maintenance and gathered valuable community feedback through events, meetings and the launch of UX research with The Engine Room."
date: 2026-09-28
lastmod: 2026-09-28
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

The new Colander quick-deploy package makes it possible to start the full PTS stack, or selected components, with Docker Compose and minimal configuration. Users no longer need to build Docker images locally, and can deploy Colander in rootless Docker environments on physical machines or virtual machines. [Read the quick-deploy instructions](https://pts-project.org/colander-ansible/).

We have also published a complete draft of the restructured PTS documentation. Migrated to Docusaurus and organized around practical use cases, the new documentation is designed to support civil society organizations and practitioners with different levels of technical experience. We invite community members to review the draft and share their feedback: [PTS Documentation](https://github.com/PiRogueToolSuite/docs).

A complete workshop curriculum covering PiRogue, Colander and Android application analysis with Octopus is now available. The package includes slides, supporting materials and hands-on exercises for both in-person and remote training.

Finally, The Engine Room has officially started its UX research on PTS and Colander, with support from OTF. The research will help us better understand user needs and identify ways to make the tools easier to adopt and use.


# 🎉 Impacts and results

This month’s work has made the PiRogue Tool Suite easier to deploy, learn and use.

- **Lower deployment barriers:** Users can now deploy the full PTS stack or individual components with Docker Compose, without building Docker images locally or requiring advanced infrastructure skills.
- **Improved accessibility:** The restructured documentation is organized around real-world use cases and practitioner workflows, making it more approachable for civil society organizations and non-technical users.
- **Stronger training capacity:** The new workshop curriculum provides facilitators with reusable slides, practical exercises and supporting materials for delivering PTS training in person or remotely.
- **Improved security:** All identified Critical and High security issues in Colander have been addressed, with the fixes undergoing validation and additional testing.
- **Better long-term maintainability:** The move to Docusaurus provides a more sustainable documentation platform and creates a foundation for future translations into Arabic, French and Spanish.
- **Stronger community feedback loops:** Engagement at CiviCERT, the Global Gathering and the monthly community meeting helped us gather feedback from current and potential users, including people working in heavily censored environments.
- **User-centered development:** The UX research led by The Engine Room will help identify barriers to adoption and guide future improvements to PTS and Colander.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).

## 📦 USX1 - Colander quick deploy


#### This month
- It is now quite easy to start the whole PTS stack or some chosen PTS components by just using the docker compose commands. By default, a `docker compose up` will start the whole stack. To start some components, user just need to pass one or more compose file to the `-f` argument of docker compose command. This work is available on a dedicated [static website](https://pts-project.org/colander-ansible/) where [you can find an archive ready to download](https://pts-project.org/colander-ansible/colander-quick-deploy.zip)
- Instructions to use this has been added to [`colander-ansible/docker/README.md`](https://github.com/PiRogueToolSuite/colander-ansible/blob/feat/compose-standalone/docker/README.md) as a quickly start for users discovering the project.
- Safe choices has been put in `compose/.env` file so user can just issue `up` commands and get things ready.
- Users do not need building Docker image on the user's environment anymore ; we do this in our CI pipelines.
- This has been tested on Docker rootless on linux on baremetal and virtual machines.

If you want to quickly test Colander, [check out the instructions](https://pts-project.org/colander-ansible/).

#### Next month
Nothing, as this task is now complete.




## 📦 USX2 - Documentation restructure


#### This month

Over the extension period, we completed the full restructuring of the PTS documentation. We migrated the documentation site from Hugo/Doks to Docusaurus and rebuilt its information architecture from the ground up, moving away from an organization based on technical components toward one built around concrete use cases and practitioner workflows. A complete draft of the new documentation is now publicly available on GitHub for review: [PTS Documentation](https://github.com/PiRogueToolSuite/docs)

This restructuring directly responds to the main gap identified in the most recent report by The Engine Room and consistently raised by our community. While the previous documentation was technically accurate, it was written for expert users and assumed familiarity with the underlying concepts, which made PTS harder to adopt for civil society organizations and practitioners without a technical background. In the new structure, each major use case has its own dedicated guide written in plain language. These guides walk readers through the workflow they actually need to carry out, step by step, rather than asking them to first understand how each component of the suite works.

Beyond the content itself, moving to Docusaurus gives us a more maintainable foundation. It makes the documentation easier for contributors to update through GitHub, improves navigation and search for readers, and its native internationalization support lays the groundwork for future translation into Arabic, French and Spanish.

Our next steps are to collect feedback on the draft from community members and practitioners, integrate their input, and then publish the new documentation as the official version [pts-project.org](https://pts-project.org)

#### Next month
This part is  completed. We will continue on our recurring tasks




## 📦 USX3 - Workshops preparation


#### This month

We built [a complete workshop curriculum](https://github.com/PiRogueToolSuite/pts-workshops) covering PiRogue, Colander and dynamic Android application analysis with Octopus, our dynamic analysis framework for Android applications, and have already delivered its modules in workshops. The package includes slides and supporting materials for each module, along with hands-on practical cases built around PiRogue and a Colander environment, forming a reusable, facilitator-ready package for both in-person and remote training with human rights organizations and digital security trainers.

The slides are written in Markdown and built with [Marp](https://marp.app/), which exports them to both PDF and HTML. This makes the presentations easy to edit, version and adapt, so facilitators can update the content or tailor it to their audience without needing dedicated presentation software.

#### Next month

We will deliver the same workshop, and keep refining the materials based on participants' feedback. We will also continue with our recurring activities.











## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
Colander's business logic has gained new low-level integrity functionalities and has been significantly secured.
We have covered all **Critical** and **High** security issues.
With the help of [SRLabs](https://srlabs.de/), all of our corrections are currently undergoing validation to ensure their compliance.
At the same time, test coverage has been expanded to ensure that even extreme modification scenarios are handled securely for Colander’s future developments.

#### Next month
We will continue to resolve remaining **Medium** or less reported security issues.
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month

We are happy to share that OTF has approved The Engine Room's scope of work, and the UX research on PTS and Colander has officially started. The first stage focuses on building a deeper understanding of the platform and the barriers users may be facing, through interviews with our team and hands-on exploration of the tool, before reaching out to users directly.

This month, we attended CiviCERT and the Global Gathering, where we met PTS users and members of the wider community and gathered their feedback on the tool. It was especially encouraging to hear from people who are already using PTS in heavily censored environments, and from others who shared that the project has inspired their own work. We will bring this feedback into our roadmap and into the ongoing UX research.

We held our monthly community meeting on Friday, September 25th. 

We have also released a new survey to collect testimonials, and were very happy about the quick response of our community. For this purpose we decided to keep on receiving your feedback. We promise it only takes 5 mins ! Please take your time to show your support and love and fill for us this form to better serve you [PiRogue ToolSuite - Testimonials](https://tally.so/r/zx6Y4q)

Our next community meeting is scheduled for October 23rd, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month

We will support The Engine Room through the first phase of the research, including in-depth interviews with four members of our team, sharing our existing documentation, survey results and user feedback, and providing access to the tool and any relevant demo environments. We will also collect community feedback on the documentation draft and iterate on it ahead of its official release. In parallel, we will continue with our recurring activities.

We will be attending [Bread&Net 2026](https://breadandnet.org/) at Beirut, Lebanon, so if you have questions do not hestitate looking for us.




## 📦 US103 - Governance


#### This month

Our work this month focused mainly on the OTF extension, and we completed the three tasks we committed to as part of it:

- **Colander quick deploy**: Deploying Colander used to require a public-facing IP address and solid infrastructure skills. We reworked how the PTS stack is packaged and deployed, so practitioners can now spin up a local Colander instance with minimal configuration, and deploy either the full stack or a single tool, such as Threatr, on its own.
- **Documentation restructure**: We rebuilt the PTS documentation from the ground up with Docusaurus, organizing it around concrete use cases and practitioner workflows, with plain-language guides for civil society organizations and non-technical practitioners. A draft is now available on [GitHub](https://github.com/PiRogueToolSuite/docs) for review. 
- **Workshop preparation**: We developed a complete, ready-to-deliver workshop curriculum covering PiRogue, Colander and dynamic Android application analysis with Octopus. It includes slides, supporting materials and hands-on practical cases built around PiRogue and a Colander environment, and is designed for both in-person and remote delivery.

Together, these deliverables significantly lower the barrier to entry for PTS, making it easier for new users to discover, try and learn the tools, whether on their own or through training.

#### Next month

We will gather community feedback on the new documentation draft ahead of its official release, follow up on our funding submissions under review, and continue with our recurring activities.





