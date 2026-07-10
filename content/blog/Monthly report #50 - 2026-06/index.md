---
title: Monthly report n⁰50 - 2026-06
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "This month PiRogue launched its browser‑based Admin Web UI with token authentication, completed migration of documentation to Docusaurus, held the monthly community meeting (next on July 31, 2026), began the OTF UX audit and applied to the Spyware Accountability Initiative, and refined the admin client and API with a \"My Profile\" feature, client‑listing redesign, and removal of legacy endpoints."
date: 2026-06-30
lastmod: 2026-07-10
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

This is our 50th monthly report. Fifty months of building, documenting and shipping in the open, and we're grateful to everyone who has followed along, tested, reported bugs and pushed us to do better.

We have officially started working with The Engine Room, the OTF UX & Discovery Lab partner. Over the coming weeks, TER will reach out to members of our community for user research on PiRogue and Colander. If you receive an invitation, please consider taking part: this research will directly shape the usability improvements we make next. If you'd like to volunteer, get in touch with us on Discord or by email.

We are also pleased to announce that SRLabs has started a security audit of Colander. Their findings will feed directly into our security hardening work and help us make sure the platform investigators trust with their case data deserves that trust.

The next PTS community meeting will happen on July, 31th 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz). We are very excited to see you and hear from you.

Our community survey is still live and can be accessible [here](https://framaforms.org/piroguetoolsuite-community-survey-1778245628). Your inputs are appreciated, as it will help us better understand your needs and expectations from the PiRogue Tool Suite.


# 🎉 Impacts and results

The web interface announced as upcoming in our previous report is now released. The PiRogue Admin Web lets users manage their PiRogue directly from the browser, with token-based authentication and permission-scoped features. Administering a PiRogue no longer requires the command line, lowering the technical bar for the analysts and organizations we build for.

The Docusaurus migration, which we flagged last time as needing dedicated effort, is now complete. The documentation is easier to navigate, search and maintain, and the next phase can focus on structure and coverage of newer features rather than moving content.

On the sustainability side, we submitted an application to the Spyware Accountability Initiative, a step toward diversifying the project's funding base beyond OTF.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).

## 📦 Web interface to configure and operate the PiRogue

#### This month
The new **PiRogue Admin Web** has been released 🎉.
Existing **PiRogue** users can [upgrade their system](https://pts-project.org/docs/pirogue/operating-system/#upgrade) to discover this new feature.

Now, the user can manage a **PiRogue** directly from the browser.
The service is next to the `/dashboard` at the following address: `/admin`.

In order to login to the **PiRogue** administration interface, the user has to provide a valid pirogue-admin token. It supports administrator token or scoped user-access token. Features will be available depending on token associated permissions.
<img width="1024" alt="Image" src="https://github.com/user-attachments/assets/c4a6e91b-015f-450c-ad51-a3fe6629b777" />

This **pirogue-admin-vuejs** component is already a well-known tool to **Colander**'s users, this benefit is now extended to PiRogue users as well.
The major difference and key feature is the ability to customize the experience. As we can see here, **Pirogue Admin Web** adds a feature to manage authentication while **Colander** customizes the `Access` section to manage `Colander teams` association.
<img width="1024" alt="Image" src="https://github.com/user-attachments/assets/1e2f4b94-466f-4aa5-82ce-89c39f570f93" />

##### PiRogue deb packages
* **pirogue-external-exposure** has been extended to allow for modular web-service integration.
* **pirogue-admin-web** has been published to PPA and uses this new feature to provide its web-service.

#### Next month
Nothing, as this task is now complete.


## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month

The migration of our documentation to Docusaurus is complete. The next phase is less about moving content and more about making it usable, structuring and organizing what's there, and writing new documentation to cover recent PTS features that aren't documented yet.

#### Next month

A significant part of our work will go into this documentation effort, organizing the migrated content and closing the gaps on newer features.

## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
 
We held our monthly community meeting this month. Our community [survey](https://framaforms.org/piroguetoolsuite-community-survey-1778245628) hasn't received any responses yet, so we're asking again: please take a few minutes to fill it out, your feedback and opinions genuinely shape where we take the project next.
Our next community meeting is scheduled for Friday, July 31, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

#### Next month
 
We will continue with our recurring activities.

## 📦 US103 - Governance
#### This month
 
The Engine Room officially started work on the OTF UX audit, kicking off the collaboration and review of PiRogue and Colander that this grant was built around. We also submitted an application to the [Spyware Accountability Initiative (SAI)](https://stopspyware.fund/), a step toward diversifying DLA's funding base beyond OTF.
 
#### Next month
 
We will follow up on OTF submissions and remain engaged with any review process that follows. We will continue identifying additional funding opportunities to sustain and grow the project infrastructure.
 
## 📦 US104 - Product management
#### This month
 
Work with The Engine Room on the Grafana dashboard UX is now actively underway, following on from last month's proposal. On the technical side, pirogue-admin-client saw several improvements:, connected client listing was reworked against the isolated interface, thanks to the Mongoose project; a new "My Profile"-style feature now lets callers retrieve their specific scope of accessible features; and a round of minor bug fixes improved overall robustness. The pirogue-admin-api interface was also cleaned up, removing leftover experimental features.

#### Next month
We will continue with our recurring activities.









