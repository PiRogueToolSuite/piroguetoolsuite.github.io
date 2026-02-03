---
title: Monthly report n⁰45 - 2026-01
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "PiRogue owners can enroll now both physical and virtual instances into Colander, with automated network events collection, and remote configuration capabilities. Network flows and Suricata security alerts from PiRogue are now displayed directly in Colander."
date: 2026-01-31
lastmod: 2026-01-31
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

* We're thrilled to welcome Ragheb Ghandour as our new Product Manager. Ragheb will be reaching out to community members and stakeholders as he helps shape PTS's product strategy going forward.
* We attended FOSDEM 2026 where we shared our work on the PiRogue Tool Suite.
* Join us on Friday 27th February 2026 at 14h00 CEST on Google Meet for our monthly community call.
 
# 🎉 Impacts and results
* PiRogue owners can enroll now both physical and virtual instances into Colander, with automated network events collection, remote configuration capabilities, using user-level authorization tokens following the principle of least privilege.
* Real-time threat intelligence is now supported in Colander. Network flows and Suricata security alerts from PiRogue devices are now displayed directly in Colander. Users can query Threatr for threat intelligence on any IP address and import flows into their cases.
* The core functionality for deploying PiRogue as an emergency VPN server is now possible, enabling organizations to analyze network traffic from at-risk individuals who don't have physical access to a PiRogue device.
 
# 📒 Activity report
 
You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).
 
## 📦 US1 - PiRogue VPN
The PiRogue VPN project aims to facilitate the operational effectiveness of organizations in assisting individuals at risk. By deploying PiRogue as [an emergency VPN](https://www.civilsphereproject.org/emergency-vpn) server, people at risk can easily connect their device and security analysts can analyze the network traffic of the device. Alerts and DPI data will be sent to Colander for further analysis, and the management of both virtual and physical PiRogues will be centralized through Colander. This activity mainly consists in integrating [Wireguard](https://www.wireguard.com/). This feature will allow users at risk who do not have a physical PiRogue to get their phone’s network traffic analyzed by any organization running a PiRogue VPN service. The end-user simply has to install the Wireguard app on their device and flash the QR-code provided by the organization running the service.
 
### Overview of the different activities
* ✅ Display PiRogue alerts and DPI
* ✅ Manage a fleet of virtual and physical PiRogues
* ✅ Deploy a virtual PiRogue as a VPN server
* ✅ Send alerts and DPI findings to Colander
 
 
 
### Display PiRogue alerts and DPI
#### This month
Similarly to the dashboard of PiRogue, network flows and security alerts are now directly accessible from Colander. Users can effortlessly obtain threat intelligence regarding the IP addresses of a network flow by automatically requesting Threatr. It’s also possible to import the selected flow into the Colander case.
 
<img width="960" alt="Image" src="https://github.com/user-attachments/assets/7d0c892b-4086-4349-b731-b931db12b324" />
 
#### Next month
Nothing, as this task is now complete.
 
### Manage a fleet of virtual and physical PiRogues
#### This month
 
##### PiRogue Device Enrollment
PiRogue owners can now seamlessly enroll both physical and virtual instances into Colander, centralizing fleet management.
 
<img width="1137" height="909" alt="Image" src="https://github.com/user-attachments/assets/99d4a788-92f0-42ea-a405-e28614951093" />
 
<img width="1132" height="342" alt="Image" src="https://github.com/user-attachments/assets/7dcd39b3-9fa7-4cab-ac3d-cf01820b1fa8" />
 
##### Telemetry & Monitoring
Colander now implements automated status collection, maintaining a historical log of device health and operational metrics for improved diagnostics.
 
<img width="764" height="152" alt="Image" src="https://github.com/user-attachments/assets/9da5d777-9d65-4d78-b612-da3a6cdd2325" />
 
##### Granular Remote Authorization
We have introduced a remote authorization framework. PiRogue administrators can now issue and manage scoped user-level tokens, ensuring the principle of least privilege is applied to remote access.
 
<img width="661" height="701" alt="Image" src="https://github.com/user-attachments/assets/0bf8ad12-3a2c-42b3-b729-75047a0d131a" />
 
##### Remote Configuration Capabilities
Users are now empowered to perform remote device provisioning, allowing for the modification of PiRogue settings directly through the Colander interface without requiring direct physical access.
 
#### Next month
Nothing, as this task is now complete.
 
#### Challenges
The overhaul of **pirogue-admin** has highlighted several compatibility constraints tied to the transition to Debian Bookworm. Specifically, discrepancies between Python **setuptools**, **grpcio**, and **grpcio-tools** versions have created a complex deployment environment.
 
The primary challenge lies in maintaining a single codebase that remains compatible across three distinct targets: standard **PyPI** releases generated via GitHub CI, Debian package builds native to the **Bookworm** environment using **Python 3.11**, and direct pip installations within **Python 3.12** environments. Balancing these varying dependency requirements is essential for ensuring consistent behavior across all distribution channels.
 
 
### Send alerts and DPI findings to Colander
#### This month
PiRogue users are now able to send Suricata alerts and Deep Packet Inspection data (network flows) directly to Colander to be displayed. 
To implement this feature we had to rework the entire data collection mechanism, hence we developed a Python library [`mongoose`](https://pts-project.org/mongoose/) dedicated to the collection, enrichment, storage, and transmission of network events. 
 
**Mongoose** is a versatile Python-based framework designed for the collection, enrichment, and distribution of network security events and traffic flows. It acts as a central hub for processing data from various network monitoring tools, providing a modular and scalable pipeline for security analysts and researchers. Mongoose is based on a thread-safe pub-sub engine that allows for concurrent processing of different data streams. Data is collected from sources like [Suricata](https://suricata.io/) [EVE logs](https://docs.suricata.io/en/suricata-8.0.2/output/eve/eve-json-output.html) and [NFStream](https://www.nfstream.org/), published to specific topics, and then consumed by various modules for enrichment (e.g., [GeoIP](https://en.wikipedia.org/wiki/Internet_geolocation), [Community ID](https://github.com/corelight/community-id-spec)), persistent storage ([SQLite](https://www.sqlite.org/)), or forwarding to external endpoints via webhooks or local files.
 
Internally, PiRogue uses the [webhook data forwarding](https://pts-project.org/mongoose/source/mongoose.forward.webhook.html) feature to automatically send network events to Colander. 
 
#### Next month
Nothing, as this task is now complete.
 
 
 
 
 
 
 
 
 
## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.
 
#### This month
A review of the documentation have been done to start redefining its structure and purpose for the readers.
 
#### Next month
We will start reorganizing the documentation.
 
 
 
## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.
 
#### This month
The `pirogue-admin project structure has been reworked to comply with [pypi](https://pypi.org/) CI publication security restrictions:
- [pirogue-admin-api](https://github.com/PiRogueToolSuite/pirogue-admin-api) and [pirogue-admin-client](https://github.com/PiRogueToolSuite/pirogue-admin-client) now have their own Github repository
- [pirogue-admin-api](https://pypi.org/project/pirogue-admin-api/) and [pirogue-admin-client](https://pypi.org/project/pirogue-admin-client/) are now published to **pypi** 🎉
- the refactoring now allows any Python project to use **PiRogueAdminClient** as library
 
#### Next month
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.
 
 
 
## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.
 
We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.
 
#### This month
 
- We attended several events to which we presented and shared our work on PTS notably at [FOSDEM](https://fosdem.org/2026/).
- We built a plan to start engaging with our community better and more directly, we are planning to reach our to our community members with some news soon.
- Our next community meeting will be on Friday 27th of February 2026 at 14h00 CEST, [join us on Google Meet](https://meet.google.com/zqo-rwoq-nqx).
 
#### Next month
We will send a survey of satisfaction with tailored questions to identity precise needs to our community and the users of PTS.
 
 
 
 
## 📦 US103 - Governance
 
 
#### This month
We are more than happy to welcome a new member to our core team [Ragheb](https://pts-project.org/team/core/ragheb-ghandour/) as a Product Manager. You will hear more from him from now on as he will be reaching out to many of our community members and stakeholders. Very happy for our new addition to our growing team.
 
#### Next month
We will continue with our recurring activities.
 
 
 
## 📦 US104 - Product management
 
 
#### This month
 
- Discussions about the status of PiRogue and what it needs in terms of visualization as a next step to better enhance the user experience while handling data on the PiRogue dashboard.
- Started to set a product strategy after our new product manager addition who is trying to understand better the solution to suggest a clear next stages strategy to PTS.
 
#### Next month
- Provide the technical team with design and UI/UX suggestions.
 
 
 