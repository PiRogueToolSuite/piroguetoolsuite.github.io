---
title: Monthly report n⁰46 - 2026-02
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "Real-time threat intelligence is now live in Colander, with network flows and Suricata alerts streaming directly from PiRogue devices, plus Threatr queries and flow imports straight into cases. We also enabled PiRogue as an emergency VPN server for supporting at-risk individuals without physical device access. On the maintenance side, we tightened up the UX across the board, better status monitoring, quick system version checks, simpler team access management, and a leaner device monitoring workflow."
date: 2026-02-28
lastmod: 2026-02-28
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
🚀️ PTS Community Meeting on Friday, March 27 · 2:00 – 3:00pm CEST. We are looking forward to hear from you [join us on Google Meet](https://meet.google.com/arx-tpra-euz)

# 🎉 Impacts and results
   - Real-time threat intelligence is now supported in Colander. Network flows and Suricata security alerts from PiRogue devices are now displayed directly in Colander. Users can query Threatr for threat intelligence on any IP address and import flows into their cases.
   - The core functionality for deploying PiRogue as an emergency VPN server is now possible, enabling organizations to analyze network traffic from at-risk individuals who don’t have physical access to a PiRogue device.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).










## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
We have started restructuring our documentation. In the coming month you will oversee changes on the documentation structure. 

#### Next month

- Continuous updates on the Documentation. 
- Pushing the changes to our public repo





## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month

##### Better PiRogue status monitoring consultation
We enhanced the display and the expiration of PiRogue statues.
<img width="1210" height="889" alt="Image" src="https://github.com/user-attachments/assets/36981d0a-315d-4fbf-b17a-de7cdd80efbc" />

##### At-a-glance overview of PiRogue system versions
A PiRogue owner can quickly check system updates.
<img width="1029" height="614" alt="Image" src="https://github.com/user-attachments/assets/9be75348-8383-4e94-8945-3a369dfea3ee" />

##### Better remote PiRogue User Access management
A PiRogue owner can now easily create and share accesses to **Colander** teams. **Colander** operators assigned to these teams will be able to use the access granted to them for their investigations.
<img width="1039" height="598" alt="Image" src="https://github.com/user-attachments/assets/18d01a8a-c3a3-4929-862d-510af5075392" />

##### Simplified device monitoring workflow
We have simplified the configuration and start-up of device monitoring. A **Colander** operator can now launch profiling with fewer fields and clicks.
<img width="1212" height="802" alt="Image" src="https://github.com/user-attachments/assets/2286756b-a0c1-469e-8871-67078d8c731d" />


#### Next month
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month

- No Android apps were analyzed this month due to a lack of time.
- We have received your feedback about PTS project from the research conduct by TheEngineRoom.
- The next PTS community meeting will happen on March, 27th 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month
We will continue with our recurring activities.




## 📦 US104 - Product management


#### This month

- We are happy to announce that our collaboration have started with the [Impact & Engagement Lab](www.opentech.fund/labs/impact-engagement-lab/) from OTF. We are closely collaborating together on imporving the User Experiences and looks and feel of different PTS products to better serve our community.
- We have received very community survey and interviews feedback conducted by [The Engine Room](https://www.theengineroom.org/librar). The feedback mainly focused on different aspects our community would like us to improve and work on on the next roll-outs of our products. We took them into account and will be happy to announce them soon.
- PTS documentation restructuring and redefinition 

#### Next month
- Continue working on the documentation of PTS
- Accelerating the collaboration with the Impact & Engagement Lab from OTF.




