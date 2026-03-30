---
title: Monthly report n⁰47 - 2026-03
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "This month's activities across the PiRogue Tool Suite project cover documentation improvements for Mongoose, new PiRogue Admin scheduling features, MongooseVueJS integration for unified network traffic monitoring, and IP66-based geoip enrichment. On the governance side, a new proposal was submitted to OTF's Internet Freedom Fund. The team also held its monthly community meeting and is preparing a user survey for April. The next community call is scheduled for April 24, 2026."
date: 2026-03-30
lastmod: 2026-03-30
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
🚀️ PTS Community Meeting on Friday, April 24 · 2:00 – 3:00pm CEST. We are looking forward to hear from you join us on Google Meet.

🗳️ Expect to receive a survey from us this month, we are looking forward to hearing from you.

# 🎉 Impacts and results
- We are reorganizing how we explain their tools, making them easier to understand and use. Soon, the guides will look different and be publicly available online.
- Status monitoring functionality, you can now see more clearly whether a PiRogue device is working or expired, so you know right away if something needs attention.
- Version checking, a PiRogue owner can quickly see if their device is up to date, without digging around.
- Access sharing, it's now easier to give your colleagues access to a PiRogue through Colander, which saves time when setting up team investigations.
- Simpler monitoring startup, starting a device monitoring session now requires fewer steps and less configuration, which means less friction when you need to move fast

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).



## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
![](https://github.com/PiRogueToolSuite/mongoose/raw/main/docs/_static/diagram.png)
We have improved the documentation of [mongoose](https://pts-project.org/mongoose/) to reflect latest improvements.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.



## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month

##### Better Network DPI and Alerts browsing
Based on our integration of [our new library MongooseVueJS](PiRogueToolSuite/mongoose-vuejs), users can now easily view device monitoring results. 

<img width="1387" height="921" alt="Image" src="https://github.com/user-attachments/assets/7d7f358b-cfca-4beb-817b-d7a37fe5ddc4" />

**MongooseVueJS** combinnes network traffic and related alerts in a single location.
<img width="1390" height="936" alt="Image" src="https://github.com/user-attachments/assets/f7d51e7e-8784-4857-b1c1-f4fdba81189a" />

##### Additional PiRogue Admin features
**PiRogue Admin** now includes ease of use tools for scheduling device monitoring, with or without device-focused filtering. These enhancements are available via the PiRogue Admin API and used seamlessly by **Colander**.

##### Mongoose network event collector
We have added the support of [IP66](https://ip66.dev) to enrich network events with geoip information. 

#### Next month
We will continue the maintenance of the tools, updating Debian packages and the Colander ecosystem.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month

- We had our monthly community meeting this month, to which some participants raised some questions. We are always committed to receive your questions, concerns and even if you are facing any technical difficulties. We also have reach out to some of our community folks to start sensing and gathering information about what they would like to see in our next updates. Do not hesitate subscribing to our mailing list on [pts-for-ngo@googlegroups.com](mailto:pts-for-ngo@googlegroups.com)
- The next PTS community meeting will happen on April, 24th 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month

- We are collecting some information and your output will be much appreciated. We will send a survey on our mailing lists to gather some key information for us to listen to your needs, and to think together about your priorities, difficulties and challenges you are facing with the different tools  of the Pirogue Tool Suite . Expect to receive our survey soon. 
- We will continue with our recurring activities.



## 📦 US103 - Governance


#### This month
We have submitted a new proposal to the [OTF Internet Freedom Fund](https://www.opentech.fund/funds/internet-freedom-fund/).

We are actively engaging with potential new partners and grant opportunities. However, the landscape is competitive, and the timeline for securing such support is typically lengthy and uncertain. While we are doing our utmost to navigate this period and find new financial backing, the future remains precarious. If PTS is a valuable asset in your work, if it helps you conduct crucial investigations, research, or defend digital rights, we now earnestly ask for [your support](https://opencollective.com/pts).

#### Next month
We will continue with our recurring activities.



## 📦 US104 - Product management


#### This month

- We have conducted some meeting and discussion points with [Impact & Engagement Lab](https://github.com/PiRogueToolSuite/project-management/issues/www.opentech.fund/labs/impact-engagement-lab/) . Our goal is to facilitate how you interact with our PiRogue Dashboard, make the information better accessible and UI/UI aligned. 
- A new time of documentation is available for you for our Mongoose tool. We have added Data Models documentation for better understanding how our Grafana dashboard works and what service is making the magic in the backscene. You can find it over here [Mongoose Data Models](https://pts-project.org/mongoose/data_models.htm).
- PTS documentation restructuring and redefinition, still working on it. We are experimenting with a better Documentation methods to make information more easily accessible and a better documentation flow.

#### Next month

- We will be still  working on the documentation of PTS. Expecting to roll-out the new set of documents in a timeline of a month or two. 
-  We will continue collaborating with  the [Impact & Engagement Lab](https://github.com/PiRogueToolSuite/project-management/issues/www.opentech.fund/labs/impact-engagement-lab/)  from OTF and enforcing this collaboration. 




