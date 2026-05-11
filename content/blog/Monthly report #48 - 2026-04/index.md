---
title: Monthly report n⁰48 - 2026-05  
description: "This month's activities across the PiRogue Tool Suite project cover the migration of documentation to Docusaurus for improved accessibility, pirogue-admin-client improvements including connected client listing via Mongoose and a new profile-based access feature, and major updates to Octopus, the dynamic analysis framework for Android apps. On the governance side, a new proposal was submitted to OTF's Free and Open Source Software Sustainability Fund. The team held its monthly community meeting and is launching a community survey this month. The next community call is scheduled for May 28, 2026."  
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."  
summary: ""  
date: 2026-05-11  
lastmod: 2026-05-11  
draft: false  
weight: 50  
type: blog  
outputs:

*   'html'
*   'email'  
    contributors: \["Esther Onfroy"\]  
    categories: \['activity reports'\]  
    toc\_enabled: true  
    toc\_start\_level: 2  
    toc\_end\_level: 2  
    toc\_ordered: false
---

# Project overview

PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open source tool suite that provides a comprehensive mobile device forensics and digital investigations platform.

*   Website: [pts-project.org](https://pts-project.org)
*   Email: `hello [at] pts-project.org`
*   GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
*   Get support: [Discord](https://discord.gg/qGX73GYNdp)
*   Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements

🚀️ PTS Community Meeting on Friday, May 28th · 2:00 – 3:00pm CEST. We are looking forward to hearing from you — [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

🗳️ Expect to receive a survey from us this month, we are looking forward to hearing from you.

# 🎉 Impacts and results

*   pirogue-admin-client now supports connected client listing via Mongoose and introduces a new profile-based access feature, giving operators clearer visibility and control over what each connected device can access.
*   Major updates have been released for Octopus, our dynamic analysis framework for Android apps, expanding PTS capabilities for malware behavioral analysis.
*   PTS documentation is being migrated to Docusaurus, making guides and references better organized and easier to navigate for practitioners in the field.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).

## 📦 US100 - Documentation

Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month

*   We have started implementing a new format for our documentation based on [Docusaurus](https://docusaurus.io/). This step will make PiRogue Tool Suite documentation better sorted, organised and straight to the point where the information you would read would be easily accessible.

#### Next month

We will continue to improve the project documentation to accurately reflect ongoing changes and updates.

## 📦 US101 - Maintenance

#### This month

We focused on improving the **pirogue-admin-client** tool with new features and better stability.

*   **Connected client listing**: We have improved the implementation of listing connected clients to the isolated interface (thanks to the [mongoose](https://pts-project.org/mongoose/) project).
*   **New user access feature**: Added a new "Profile" like functionality, allowing connected clients to retrieve their specific scope of accessible features.
*   **Stability and cleanup**: Fixed several minor bugs to improve overall robustness. **pirogue-admin-api** interface cleaned up of experimental features.

#### Next month

We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.

## 📦 US102 - Community and outreach

Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.  
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community's feedback.

#### This month

*   This month we held our community meeting, and as always, the conversation was rich with questions, ideas, and real-world feedback from the field. Whether you have a technical issue, a feature idea, or just want to understand what's coming next, we want to hear from you.  
    We've also started reaching out directly to community members to get a sense of what you'd like to see in upcoming releases. If you haven't heard from us yet, you might soon.  
    Want to stay in the loop? Join our mailing list at [pts-for-ngo@googlegroups.com](mailto:pts-for-ngo@googlegroups.com) and be part of the conversation that shapes where PTS goes next.
*   The next PTS community meeting will happen on May 28th, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month

*   We will continue with our recurring activities.

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

## 📦 US104 - Product management

#### This month

This month we have focused on submitting a second round of funding support. We have put together Concept Notes, engagement to apply for the FOSS fund and the IFF fund. We believe that these funds would be very helpful to maintain and build a larger ecosystem for our community.

Major updates have been released for our dynamic analysis framework for Android apps, Octopus.

#### Next month

We will be still working on the documentation of PTS. Expecting to roll-out the new set of documents in a timeline of a month or two.

We will continue collaborating with the [Impact & Engagement Lab](https://github.com/PiRogueToolSuite/project-management/issues/www.opentech.fund/labs/impact-engagement-lab/) from OTF and enforcing this collaboration.