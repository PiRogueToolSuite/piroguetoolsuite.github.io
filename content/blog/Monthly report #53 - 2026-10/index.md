---
title: Monthly report n⁰53 - 2026-10
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: summary: "In October, we released PiRogue 3.0.0 with support for Debian 13, integrated the new PiRogue dashboard, continued hardening Colander following its security audit, completed the restructuring of the PTS documentation on Docusaurus, and presented PTS at Bread&Net 2026 in Beirut."
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
PiRogue now supports Debian 13 (Trixie). We prepared a new PPA with updated PiRogue packages, versioned as 3.x for clarity, and released [brand new PiRogue images for Raspberry Pi](https://github.com/PiRogueToolSuite/pirogue-images/releases/tag/arm64_v3.0.0). The images and the installation instructions for all other setups were confirmed to give a fully functional PiRogue 3.0.0 environment on the Pi 4 (official image), the Pi 5 (experimental image), and a Scaleway-hosted VPS in the VPN operating mode. The experimental Pi 5 image no longer depends on any packages from the Raspberry OS project and uses Debian-provided Linux packages instead. More details are available in DEBAMAX's [PiRogue Tool Suite's Debian 13 edition](https://debamax.com/blog/2026/11/05/pirogue-tool-suite-the-debian-13-edition/) blog post.

The new PiRogue dashboard, built by [Vaibhav Bhawsar](https://recombine.net/) from the [Impact & Engagement Lab](https://www.opentech.fund/labs/impact-engagement-lab/), is now available in production. It greatly improves the accessibility and usability of the PiRogue and ships in version 2.0.3 for Debian Bookworm and version 3.0.0 for Debian Trixie of [the package `pirogue-dashboard`](https://github.com/PiRogueToolSuite/deb-packages/tree/debian-13/pirogue-dashboard). We would like to thank Vaibhav for his support and wonderful work.

The new PTS documentation, migrated from Hugo/Doks to Docusaurus, is now publicly available as a draft on GitHub: [github.com/PiRogueToolSuite/documentation](https://github.com/PiRogueToolSuite/documentation). We will integrate community feedback before the official publication.

Our next community meeting is scheduled for Friday, November 27th, 2026 at 2pm CET, [join us on Google Meet](https://meet.google.com/arx-tpra-euz).

# 🎉 Impacts and results
Following the security audit of Colander, we continued improving the security patches in close collaboration with SRLabs, who are validating the fixes. On the deployment side, we removed the Watchtower auto-update helper, tightened access permissions on installed files and folders, and made sure installation secrets are no longer displayed on screen or saved in accessible files. We also introduced an automatic scanner that checks our automation tools for known security flaws. To make deployments more stable, we locked all building-block software to specific, tested versions, and we moved the file-storage component from MinIO to [RustFS](https://rustfs.com/).

The documentation is now organized around use cases and practitioner workflows, with step-by-step guides in plain language. This addresses the main gap identified by The Engine Room, which found that the previous documentation was written for expert users and was hard for non-technical practitioners to adopt. Docusaurus also gives us a more maintainable foundation, with better navigation and search, and native internationalization support for future translations into Arabic, French, and Spanish.

We also made development and self-hosting easier. A first set of Makefile prototypes now builds, deploys, and installs all updated Debian packages onto a target VM with a single command. Colander quick deploy received several bug fixes, including one reported by the community. Traefik now logs incoming requests by default to help with troubleshooting, and the Playwright service can now be turned on or off during installation. While working on Debian 13 support, we fixed the broken Frida build locally and [reported the issue and fix upstream](https://github.com/frida/frida-tools/pull/207).

On the community side, we presented PTS during a session at [Bread&Net 2026](https://breadandnet.org/) in Beirut, organized by [SMEX](https://smex.org/), and showed how it can be used to analyze mobile devices. We held several calls with The Engine Room as part of the first phase of the UX research on PTS, and refined the workshop slides and practical cases for PiRogue, Colander and Octopus.

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












## 📦 US12 - System engineering and administration
The continuous infrastructure management keeps production systems stable and available through routine operational tasks, monitoring, and environment integrity checks, improving service reliability for hosted users and enhancing deployment packages for organizations that self-host their PTS stack.

### Overview of the different activities
* 🔁 D4-1 recurring system administration activities
* 🔁 D4-2 Kubernetes deployment support
* 🔁 D4-3 PiRogue isolation



### D4-1 recurring system administration activities
#### This month

##### Ansible
Last month, we adapted the installation tooling to Colander's new "standalone" design to ensure that future installations are easier and more reliable. To improve system stability, we locked all building-block software to specific, tested versions to prevent unexpected upstream changes from breaking deployments. We also transitioned the file-storage component from MinIO to [RustFS](https://rustfs.com/). Following the security audit, we implemented several critical hardening measures, including removing the Watchtower auto-update helper, tightening access permissions on installed files and folders, and ensuring that installation secrets are no longer displayed on screen or saved in accessible files. Finally, we introduced an automatic scanner to check our automation tools for known security flaws and refreshed several outdated components.

##### Colander quick deploy
We fixed a bug where the first-run setup created a settings folder instead of a file, updating backup and restore scripts for the new folder layout, and addressing a community-reported bug. We also improved the speed of communication between the tooling and servers while removing legacy files. On the infrastructure side, the Traefik web reverse proxy now logs incoming requests by default to assist with troubleshooting, and we implemented internal networking fixes to ensure all components can reliably communicate with one another. Additionally, the Playwright service is now optional and can be toggled during installation via a dedicated compose file. Finally, we improved the developer experience by making it easier to test on personal computers, adding detailed explanations to the example settings file, and performing general code cleanups.

#### Next month
We will continue with our recurring activities.




## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month

The restructuring of the PTS documentation on Docusaurus is complete, and the draft is publicly available on GitHub [github.com/PiRogueToolSuite/documentation](https://github.com/PiRogueToolSuite/documentation). This month we updated the content to reflect recent feature changes.

#### Next month

We will reorganize the documentation following the [[Diátaxis](https://diataxis.fr/)](https://diataxis.fr/) framework and integrate community feedback ahead of the official publication. We will also continue with our recurring activities.



## 📦 US101 - Software maintenance
Outdated dependencies carry unpatched vulnerabilities; unmaintained images eventually stop working. This work package encompasses support of core PTS components through timely updates, bug resolution, and dependency management, with particular emphasis on security updates.

### Overview of the different activities
* 🔁 D1-1 maintenance
* 🔁 D1-2 support Debian 13
* 🔁 D1-3 support Debian 14
* 🔁 D1-4 testing and qualification setup
* 🔁 D1-5 support Web extension Manifest v3



### D1-1 maintenance
#### This month

##### Security 
Following to the security audit of Colander, we have been improving the security patches in close collaboration with **SRLabs**, who is validating these fixes and helping us optimize our proposed solutions.

##### UI/UX
The PiRogue has been updated to integrate Vaibhav Bhawsar's dashboard which greatly improve the accessibility and usability. This update is available in the version 2.0.3 for Debian Bookworm and in the version 3.0.0 for Debian Trixie of [the package `pirogue-dashboard`](https://github.com/PiRogueToolSuite/deb-packages/tree/debian-13/pirogue-dashboard).

<img width="1024" alt="Image" src="https://github.com/user-attachments/assets/45082e89-da78-4fef-8f66-ccaea9cbf9f4" />


#### Next month
We will continue to resolve remaining opened security issues.
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.

### D1-2 support Debian 13
#### This month

The upgrade to Debian 13 basically meant preparing a new PPA with updated PiRogue packages (versioned as 3.x for clarity), fixing a few incompatibilities with the new Python version (upgraded from 3.11 to 3.13), and also taking some time to catch up with newer upstream releases of [Frida](https://frida.re/) and [NFStream](https://www.nfstream.org/). The experimental Pi 5 image was modified to no longer depend on any packages from the Raspberry OS project, and to use Debian-provided Linux packages instead.

More details can be found in DEBAMAX's [PiRogue Tool Suite's Debian 13 edition](https://debamax.com/blog/2026/11/05/pirogue-tool-suite-the-debian-13-edition/) blog post.

The [brand new PiRogue images for Raspberry Pi](https://github.com/PiRogueToolSuite/pirogue-images/releases/tag/arm64_v3.0.0) and installation instructions for all other setups were confirmed to result in a fully-functional PiRogue 3.0.0 environment with various setups: Pi 4 (official image), Pi 5 (experimental image), and Scaleway-hosted VPS (in the VPN operating mode).

#### Next month
Nothing as this task is now complete.

#### Challenges
Frida integration was challenging as the upstream build system has been broken for a while but we managed to deploy a fix locally (also [reporting the issue/fix upstream](https://github.com/frida/frida-tools/pull/207)). Also, since the DEBAMAX/Defensive Lab Agency sprint in April that validated the new approach for the experimental Pi 5 image, some regression actually broke Pi 5 support. Until [a full investigation](https://github.com/PiRogueToolSuite/pirogue-images/issues/9) is concluded, a temporary solution has been implemented and confimed to work transparently.

### D1-4 testing and qualification setup
#### This month
To facilitate the Debian ecosystem development process, an initial set of Makefile prototypes has been developed. First, these Makefiles track package changes and trigger builds as needed, leveraging project dependencies to propagate build commands across interrelated packages. Second, these Makefiles support deployment and installation onto a configurable target VM. As a result, running a single upstream command across all PTS projects (such as `make install TO=pirogue-example.local`) now automatically builds, deploys, and installs all updated debian packages onto the designated target.

#### Next month
The main goal for next month will be to automate VM creation and key life-cycle management tasks.

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




