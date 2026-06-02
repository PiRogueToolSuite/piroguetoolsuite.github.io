---
title: Monthly report n⁰49 - 2026-05
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "This month's activities across the PiRogue Tool Suite project cover the completion and Colander integration of Mandolin, our new standalone service for offline artifact analysis, and the decoupling of PiRogue fleet management into two new dedicated modules. Our submission to OTF's UX & Discovery Lab was accepted, with The Engine Room set to conduct field user research and propose interface improvements for PiRogue and Colander. Major updates were also released for Octopus. The team held its monthly community meeting on May 28 and launched a community survey. The next community call is scheduled for June 26, 2026."
date: 2026-05-31
lastmod: 2026-05-31
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

OTF UX & Discovery Lab submission accepted — The Engine Room will conduct user research and propose interface improvements for PiRogue and Colander.

Our community survey is live and can be accessible [here](https://framaforms.org/piroguetoolsuite-community-survey-1778245628). Your inputs are appreciated.

The next PTS community meeting will happen on May, 28th 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz). We are very excited to see you and hear from you.

# 🎉 Impacts and results

Mandolin is complete and fully integrated with Colander for offline artifact analysis (AV, Yara, Tika) now available out of the box.

Major updates were released for Octopus.


# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).





## 📦 US5 - Offline artifact analysis
To bolster security measures and guarantee a sufficient level of confidentiality, Colander will allow the offline analysis of artifacts using antivirus software and user-defined Yara rules. In the context of forensic analysis, this is crucial to be able to locally analyze extracted files (without relying on 3rd-party services) to ensure case confidentiality.

### Overview of the different activities
* 🔁 Offline artifact AV analysis
* 🔁 Offline artifact analysis with user-defined Yara rules
* ✅ Offline artifact analysis with Apache Tika



### Offline artifact AV analysis
#### This month
The architecture of Colander is designed to be modular, relying on multiple reusable components and services. Instead of creating a monolithic service, the processing, and analysis of files and artifacts will be implemented as a standalone service called [Mandolin](https://github.com/PiRogueToolSuite/mandolin). Similar to [Threatr](https://github.com/PiRogueToolSuite/threatr), this service can be deployed alongside Colander or separately. This approach simplifies maintenance, enhances isolation and sandboxing, and enables other projects to integrate it without Colander.

Mandolin source code is available on [GitHub](https://github.com/PiRogueToolSuite/mandolin), it supports:

* the extraction of metadata and text from over a thousand different file types with [Apache Tika](https://tika.apache.org/)
* the binary analysis of files with [Yara](https://yara.readthedocs.io/en/latest/) rules
* the antivirus scan with [ClamAV](https://www.clamav.net/)

Those operations are exposed through a REST API and its corresponding Python client is already available on [PyPi](https://pypi.org/project/mandolin-python-client/) and [GitHub](https://github.com/PiRogueToolSuite/mandolin). The [specification of the API](https://pts-project.org/mandolin/) uses the [OpenApi standard](https://www.openapis.org/), this allows the automatic generation of clients in JavaScript, Go and many other programming languages.

Mandolin is now fully integrated with Colander, every uploaded artifacts are automatically analyzed, and analysis results are listed in the artifact details. 

<img width="1024" alt="Image" src="https://github.com/user-attachments/assets/34b336e4-a527-428e-9062-37fff8b669b7" />

<img width="1527" height="695" alt="Image" src="https://github.com/user-attachments/assets/7fe2cf30-67ac-4403-8115-ee3fd4890a4b" />

#### Next month
Nothing, as this task is now complete.


## 📦 US7 - PiRogue usability
To improve the overall usability of PiRogue, a web interface will
be developed. This interface will streamline configuration and operational
tasks, making it more accessible for new users. The goal of this feature is to
allow the users to use a graphical interface instead of command lines to
operate their PiRogue.

### Overview of the different activities
* 🔁 Web interface to configure and operate the PiRogue



### Web interface to configure and operate the PiRogue
#### This month
We worked on separating the PiRogue fleets management tools from the Colander codebase to make them more flexible and reusable.

##### Component decoupling
The existing VueJS component responsible for PiRogue management has been restructured. It is no longer a VueJS component of Colander, allowing for independent deployment and updates.

##### New project repositories
Two dedicated projects have been initiated to support this new architecture:
  * **pirogue-admin-vuejs**: A standalone VueJS component. This has been redesigned to communicate with a dedicated REST API via our Python adapter (pirogue-admin-client).
  * **pirogue-admin-web**: A lightweight, standalone web server powered by [Flask](https://flask.palletsprojects.com) that integrates the **pirogue-admin-vuejs** component for PTS independent use-cases.

##### Colander integration and rework
Colander has been refactored to use **pirogue-admin-vuejs** as a frontend dependency.

#### Next month
We will release an initial version of the new **pirogue-admin-vuejs** and **pirogue-admin-web** modules, respectively on an npmjs repository and our PiRogue Debian PPA, to verify that the refactoring is working properly.



## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
- We have started implementing a new format for our documentation based on [Docusaurus](https://docusaurus.io/). This step will make Pirogue ToolSuite documentation better sorted, organised and straight to the point where the information you would read would be easily accessible.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.
#### This month

We have continued working on the migration of our documentation to Docusaurus. Progress is being made, but the scope of this migration is significantly larger than what can be handled as a side task alongside the rest of the project activities. The documentation work requires dedicated time and focused effort to be done properly, and we will need to plan for that explicitly in the coming months.

#### Next month

We will continue the Docusaurus migration. We are evaluating how to allocate dedicated time to this effort so it can move forward at the pace it deserves.




## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month

- This month we held our community meeting, and as always, the conversation was rich with questions, ideas, and real-world feedback from the field. Whether you have a technical issue, a feature idea, or just want to understand what's coming next, we want to hear from you.
We've also started reaching out directly to community members to get a sense of what you'd like to see in upcoming releases. If you haven't heard from us yet, you might soon.
Want to stay in the loop? Join our mailing list at [pts-for-ngo@googlegroups.com](mailto:pts-for-ngo@googlegroups.com) and be part of the conversation that shapes where PTS goes next.
- The next PTS community meeting will happen on May, 28th 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month

- We will continue with our recurring activities.
#### This month
 
We held our monthly community meeting on May 28, 2026. 

We encourage you to fill out our community [survey](https://framaforms.org/piroguetoolsuite-community-survey-1778245628). It's structured around six areas: roles and demographics, usage patterns, pain points, feature priorities, security context, and documentation needs.

Our next community meeting is scheduled for Friday, June 26, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month
 
We will continue with our recurring activities.





## 📦 US103 - Governance


#### This month

We have submitted a new proposal to the [OTF Free and Open Source Software Sustainability Fund](https://www.opentech.fund/funds/free-and-open-source-software-sustainability-fund/).

PiRogue Tool Suite is free, open-source, and built entirely around one goal: giving frontline defenders the tools to detect and document surveillance against the people they protect.
We don't charge for access. We don't sell data. We rely on the community we serve.
Right now, that community is what keeps us going. We're actively pursuing grants and partnerships, but funding timelines are long and uncertain, and we can't wait to find out. If PTS has ever helped you investigate a threat, protect a source, or document an attack, this is the moment to give something back.
Every contribution, large or small, directly funds development, maintenance, and the ongoing work that keeps PTS reliable for practitioners in high-risk environments around the world.
[If PTS matters to your work, please support it.](https://opencollective.com/pts)

#### Next month
We will continue with our recurring activities.
#### This month
 
Our  submission to OTF's [UX & Discovery Lab](https://www.opentech.fund/labs/uxd-lab/) requesting support for a UX audit was accepted. The Engine Room will interview PTS users in the field, identify where PiRogue and Colander are hardest to use, and propose concrete interface improvements. They will also help us set up a lightweight process to keep collecting user feedback going forward.
 
#### Next month
 
We will follow up on OTF submissions and remain engaged with any review process that follows. We will continue identifying additional funding opportunities to sustain and grow the project infrastructure.
 



## 📦 US104 - Product management


#### This month

- This month we have focused on submitting a second round of funding support. We have put together Concept Notes, engagement to apply for the FOSS fund and the IFF fund. We believe that these funds would be very helpful to maintain and build a larger ecosystem for our community. 
- Major updates have been released on for our  dynamic analysis framework for Android apps, octopus.
- 
#### Next month

- We will be still  working on the documentation of PTS. Expecting to roll-out the new set of documents in a timeline of a month or two. 
-  We will continue collaborating with  the [Impact & Engagement Lab](https://github.com/PiRogueToolSuite/project-management/issues/www.opentech.fund/labs/impact-engagement-lab/)  from OTF and enforcing this collaboration. 

#### This month
 

We received a proposal from [Vaibhav Bhawsar](https://recombine.net) from the [Impact & Engagement Lab](https://www.opentech.fund/labs/impact-engagement-lab/) with a plan of work covering the PiRogue Grafana dashboard UX taking considerations of the previous survey conducted by TER, and after multiple exchanges on our user's base needs.
This is a concrete step toward structured UX investment in PTS and we are actively reviewing the proposed scope. On the technical side, major updates have been released for Octopus, our dynamic analysis framework for Android apps, expanding PTS capabilities for mobile malware behavioral analysis.


 
#### Next month
 
We will continue with our recurring activities.




