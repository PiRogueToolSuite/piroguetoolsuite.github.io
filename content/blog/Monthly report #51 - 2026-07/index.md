---
title: Monthly report n⁰51 - 2026-07
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "July was mostly spent on proposal writing, with applications submitted to OTF's FOSS Sustainability Fund and Internet Freedom Fund. The month still saw the release of PiRogue Admin Web, letting users manage their PiRogue from the browser, and the delivery of the SRLabs security audit report, now feeding into remediation planning."
date: 2026-07-31
lastmod: 2026-07-31
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
The new PiRogue Admin Web has been released. PiRogue users can now manage their device directly from the browser, no command line needed. Upgrade your system to discover this new feature, more details in the US7 section below.

Our next community meeting is scheduled for Friday, August 28, 2026 at 2pm CET, join us on [Google Meet](https://meet.google.com/arx-tpra-euz). As usual, it takes place on the last Friday of the month.

Our community [survey](https://framaforms.org/piroguetoolsuite-community-survey-1778245628) is still open, your feedback shapes where we take the project next.

# 🎉 Impacts and results
The release of PiRogue Admin Web marks the completion of US7, one of the long-standing usability goals of the project. Operating a PiRogue no longer requires the command line, which lowers the entry barrier for the non-technical users PTS is built for.

We also received the security audit report for Colander from SRLabs, conducted through [OTF's Security Lab](https://www.opentech.fund/labs/security-lab/). Having the platform independently reviewed is a result in itself, and the findings now feed directly into our remediation planning.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).



## 📦 US7 - PiRogue usability
To improve the overall usability of PiRogue, a web interface will
be developed. This interface will streamline configuration and operational
tasks, making it more accessible for new users. The goal of this feature is to
allow the users to use a graphical interface instead of command lines to
operate their PiRogue.

### Overview of the different activities
* ✅ Web interface to configure and operate the PiRogue



### Web interface to configure and operate the PiRogue
#### This month
The new **PiRogue Admin Web** has been released 🎉.
Existing **PiRogue** users can [upgrade their system](https://pts-project.org/docs/pirogue/operating-system/#upgrade) to discover this new feature.

Now, the user can manage a **PiRogue** directly from the browser.
The service is next to the `/dashboard` at the following address: `/admin`.

In order to login to the **PiRogue** administration interface, the user has to provide a valid pirogue-admin token. It supports administrator token or scoped user-access token. Features will be available depending on token associated permissions.
<img width="1129" height="830" alt="Image" src="https://github.com/user-attachments/assets/c4a6e91b-015f-450c-ad51-a3fe6629b777" />

This **pirogue-admin-vuejs** component is already a well-known tool to **Colander**'s users, this benefit is now extended to PiRogue users as well 😊.
The major difference and key feature is the ability to customize the experience. As we can see here, **Pirogue Admin Web** adds a feature to manage authentication while **Colander** customizes the `Access` section to manage `Colander teams` association.
<img width="1130" height="833" alt="Image" src="https://github.com/user-attachments/assets/1e2f4b94-466f-4aa5-82ce-89c39f570f93" />

##### PiRogue deb packages
* **pirogue-external-exposure** has been extended to allow for modular web-service integration.
* **pirogue-admin-web** has been published to ppa and uses this new feature to provide its web-service.

#### Next month
Nothing, as this task is now complete.




## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
No major progress on documentation this month. The team's attention went to proposal work. The plan stays the same, structure and organize the migrated content, and document recent PTS features.

#### Next month
We will get back to the documentation effort.



## 📦 US101 - Maintenance
We make PiRogues to supply organizations, while taking care of its maintenance. We  include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
##### Introduction of front-commons
As the user interfaces across the **PTS** ecosystem have expanded in terms of functionality and interactivity, several projects have naturally aligned around a shared design philosophy and identical utility components.

To improve long-term maintainability and ensure visual and functional consistency across the ecosystem, a new repository has been introduced: **front-commons**.

Key Objectives:
  * Centralization: Host non-business-logic utility components and core styling assets (color palettes, iconography, base themes).
  * Standardization: Establish a single source of truth for foundational frontend elements across the PTS porjects.
  * Optimization: Avoids duplication code and reducebuild size.

The **pirogue-admin-web**, **pirogue-admin-vue**, and **Colander** projects have been refactored to integrate **front-commons**.

#### Next month
Remaining frontend projects, including **mongoose-vuejs** and **har-analyzer-vuejs**, will be migrated in upcoming phases.

We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month

We have officially started working with The Engine Room on our UX Research plan. We held our monthly community meeting on July 24. Our community [survey](https://framaforms.org/piroguetoolsuite-community-survey-1778245628) is still open, please take a few minutes to fill it out, your feedback shapes where we take the project next.
Our next community meeting is scheduled for Friday, August 28, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month
We will continue with our recurring activities.






## 📦 US103 - Governance


#### This month
 
Most of our work this month went into proposal writing and redefinition. We submitted applications to OTF's [FOSS Sustainability Fund](https://www.opentech.fund/funds/foss-sustainability-fund/) and the [Internet Freedom Fund](https://www.opentech.fund/funds/internet-freedom-fund/). For the IFF concept note, we reworked the work packages following reviewer feedback, covering censorship resilience, security hardening, system engineering and interoperability. This took real time, but the result is a tighter and more coherent proposal.
 
#### Next month
 
We will follow up on submissions under review and keep identifying funding opportunities to sustain the project.



## 📦 US104 - Product management


#### This month
 
[Vaibhav Bhawsar](https://recombine.net/) from the [Impact & Engagement Lab](https://www.opentech.fund/labs/impact-engagement-lab/) has started working on the PiRogue Grafana dashboard UX, moving the proposal we received earlier into actual work. We also received the security audit report from SRLabs, conducted through OTF's [Security Lab](https://www.opentech.fund/labs/security-lab/). We are now going through the findings and planning the remediation work. Development activity was lighter this month, as most of the team's time went into proposal work.

#### Next month

We will work through the audit findings and follow the progress of the dashboard UX work.



