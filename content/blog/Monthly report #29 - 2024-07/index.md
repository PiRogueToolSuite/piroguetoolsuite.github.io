---
title: Monthly report n⁰29 - 2024-07
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
date: 2024-07-26
lastmod: 2024-07-26
draft: false
weight: 50
type: blog
outputs:
   - 'html'
   - 'email'
contributors: ["Esther Onfroy"]
summary: "The PTS Project secures funding, expands tool capabilities, and focuses on evidence collection from online content and mobile devices. Join the community and contribute to the project."
---

# Project overview
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows NGOs with limited resources to equip themselves at a low cost. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and digital investigation platform.

* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
We are thrilled to announce that PTS has just been granted the support from Internews for the next 3 months and from Open Technology Fund for the next 2 years to continue to improve the tools we provide and meet evolving needs.

The virtual community meeting will take place every last Friday of the month at 12:00 UTC. They will be announced on our mailing list and on CiviCERT's Mattermost.

Each month, we will analyze an Android application selected by the community. Details will be communicated soon on our mailing list and on CiviCERT's Mattermost as well.

# 🎉 Impacts and results
Adding support for the Raspberry Pi 5 facilitates project adoption, as an increasing number of users have transitioned to the latest version of the Raspberry Pi hardware.


# 📒 Activity report
You can find more details about the different activities in the  [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).

{{< user_stories >}}

## 📦 US4 - Evidence collection [#22](https://github.com/PiRogueToolSuite/project-management/issues/22)
Efforts will be directed towards the extraction and preservation of artifacts and evidence, particularly those extracted from online content and mobile devices. The system will automatically archive and index various forms of online content such as photos, videos, social media posts, and web pages. Additionally, the capability of saving a watermarked capture or recording of the victim’s phone screen will be added to the PiRogue. In the context of forensic analysis, it is crucial to not only collect potential evidence of a compromise but also collect its  context, such as the attack vector. As an example, retrieving and storing tweets was key in the [Citizen Lab investigation on Predator](https://citizenlab.ca/2023/10/predator-spyware-targets-us-eu-lawmakers-journalists/), retrieving and storing WhatsApp messages in the [Citizen Lab investigation on Tibetan groups being targeted](https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/).

### Overview of the different activities
* [ ] Archive and index online content [#20](https://github.com/PiRogueToolSuite/project-management/issues/20)
* [ ] Take a watermarked capture/recording of the phone screen [#21](https://github.com/PiRogueToolSuite/project-management/issues/21)


### Archive and index online content [#20](https://github.com/PiRogueToolSuite/project-management/issues/20)
#### This month
This month, we were evaluating the different existing tools and libraries we can reuse to implement online content retrieval and indexation. In order to test potential integration, we have developed mocks within Colander.

We have defined additional goals to be achieved:

* make the integration to the user's working environment easy
* allow the user to focus on collecting content by making the upload to Colander totally transparent to them

Even if we are still refining how this feature will be implemented, we think that providing the end-user with a web browser extension would offer a good user experience. In the background, this extension would take care of uploading the collected content directly to Colander.

#### Next month
We will select an off the shelf or adapt it to our content collection needs, supporting both static pages and medias.

#### Challenges
It is difficult to find an existing tool that support both static content (html, image, video poster) **and** video capture. Some tools we have tested could be extended to address the initial need.


### Take a watermarked capture/recording of the phone screen [#21](https://github.com/PiRogueToolSuite/project-management/issues/21)
#### This month
Along with a reorganization of the PiRogue Debian packages, we are introducing a new package [`pirogue-evidence-collector`](https://github.com/PiRogueToolSuite/pirogue-evidence-collector) creating the following entry points:

* `pirogue-android` to interact with an Android device and run commands on it.
* `pirogue-file-drop` to expose a web server allowing the user to upload files from their device to the PiRogue.
* `pirogue-extract-metadata` to extract metadata of a file and save it separately in `[original file name].metadata.json`.
* `pirogue-timestamp` to time stamp files by requesting a 3rd-party [RFC3161](https://www.ietf.org/rfc/rfc3161.txt) authority.
* `pirogue-intercept-[gated|single]` to instrument an Android application to analyze its network traffic.

#### Next month
We are planning to release this Debian package next month.

#### Challenges
The primary challenge was to establish a mechanism for offline timestamp verification exclusively reliant upon OpenSSL.


## 📦 US9 - PiRogue virtualization [#35](https://github.com/PiRogueToolSuite/project-management/issues/35)
We want to provide end users with OS images and installation procedure allowing them to deploy PiRogue in a virtual environment (VM, cloud...). One of the direct implication is supporting a vast variety of configuration such as:
* Eth - Eth
* Wi-Fi - Eth
* VPN - Eth
* Wi-Fi - USB tethering

### Overview of the different activities
* [ ] ViRogue - Design and architecture [#40](https://github.com/PiRogueToolSuite/project-management/issues/40)
* [ ] ViRogue - Debian packaging [#28](https://github.com/PiRogueToolSuite/project-management/issues/28)
* [ ] ViRogue - Local and remote administration [#29](https://github.com/PiRogueToolSuite/project-management/issues/29)
* [ ] ViRogue - Tests [#30](https://github.com/PiRogueToolSuite/project-management/issues/30)
* [ ] ViRogue - Documentation [#31](https://github.com/PiRogueToolSuite/project-management/issues/31)


### ViRogue - Design and architecture [#40](https://github.com/PiRogueToolSuite/project-management/issues/40)
#### This month
To support the virtualization of the PiRogue while ensuring it remains iso-functional with the physical PiRogue, have defined the overall software architecture allowing both remote and local administration. This architecture must ensure: 

* flexibility
* extensibility
* security
* full compatibility with physical PiRogue


<center>
<img width="500px" alt="image" src="https://github.com/user-attachments/assets/60f66511-665b-4b59-87c9-cc36c98dc785">
</center>
  
To achieve these goals, we are introducing two major software components:

* the administration daemon running on the PiRogue (physical or virtual)
* the administration client that interacts with the administration daemon

The administration client can be used locally by running it directly on the PiRogue and remotely by running it on a remote computer.


<center>
<img width="400px" alt="image" src="https://github.com/user-attachments/assets/899b974d-b558-4693-8480-b4683735c0eb">
</center>


The two software components are split in three different Debian packages, with `pirogue-admin-api` defining the communication contract between the client and the daemon.

#### Next month
Next month, we will refine the software architecture details such as the communication contract.

#### Challenges
None.

### ViRogue - Debian packaging [#28](https://github.com/PiRogueToolSuite/project-management/issues/28)
#### This month
Packages with hardcoded network-related settings or requirements (interface names, IP address/network, etc.) have been identified and modified to make those configurable. A new `pirogue-admin` tool is being introduced to orchestrate the initial configuration and further modifications in a centralized manner.

#### Next month
The next step is extending `pirogue-admin` so that it can still auto-configure Raspberry Pi 3 and 4 as before, while supporting Eth/Wi-Fi on other devices, as well as a new Eth/Eth mode as well.

#### Challenges
None.

### ViRogue - Local and remote administration [#29](https://github.com/PiRogueToolSuite/project-management/issues/29)
#### This month
The project is going to use gRPC `proto` language to describe, generate and implement the remote/local administration. For now, only a Python binding will be generated and implemented internally.

We have designed the RPC interface supporting elementary functionalities such as retrieving the PiRogue configuration and applying a new configuration. We have set up the development environment for `pirogue-admin-api`, `pirogue-admin-client` and `pirogue-admin-daemon`. 

#### Next month
We are planning to release a first alpha version of the `pirogue-admin` RPC environment to run smoke tests, at least. We will start documenting the development environment and how to set up it.

#### Challenges
Setting up a fully functional and secure development environment that includes root system mocks was challenging.

## 📦 US100 - Documentation [#36](https://github.com/PiRogueToolSuite/project-management/issues/36)
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
We have updated the documentation to reflect the relocation of the PiRogue OS images to a [new repository](https://github.com/PiRogueToolSuite/pirogue-images). Note that the [older repository](https://github.com/PiRogueToolSuite/pirogue-os) remains open.

#### Next month
We will continue to enhance the project documentation to accurately reflect ongoing changes and updates.

#### Challenges
None.


## 📦 US101 - Maintenance [#37](https://github.com/PiRogueToolSuite/project-management/issues/37)
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
While deploying officially supported Raspberry Pi 3 and Pi 4 devices, the outdatedness of the last PiRogue OS release became apparent. Since the historical tool used to turn Debian images for Raspberry Pi into PiRogue images was relicensed, it was replaced with another implementation.

After experimenting with the Raspberry Pi 5, the new tooling was extended to generate a different, experimental image to support it, alongside the official image supporting Pi 3 and Pi 4.

A new release [`arm64_v2.1.0`](https://github.com/PiRogueToolSuite/pirogue-images/releases/tag/arm64_v2.1.0) was published, catching up with Debian 12.6, supporting Pi 3 and Pi 4 officially, and Pi 5 experimentally and unofficially.

#### Next month
Support for the Raspberry Pi 5 requires some components outside the Debian and PiRogue ecosystems, which might make upgrades a little more complicated than usual. It would be best to perform test runs for scenarios that could be problematic, see if theoretical problems are likely to happen, making it possible to either avoid them entirely, or be ready to tackle them when they show up.

#### Challenges
Unfortunately, the Debian images for Raspberry Pi that are turned into PiRogue images are also outdated (compared to the updates in Debian 12). Until it's resolved on the Debian side, an independent image build has been set up, to ensure images are generated weekly.


## 📦 US102 - Community and outreach [#38](https://github.com/PiRogueToolSuite/project-management/issues/38)
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
We have identified various communication channels that we can leverage to enhance our outreach efforts.

Each month, we will analyze one Android app that has received the community's interest. We have set up all the tools we need to share the analysis report we will share with our community.

Each month, we will facilitate an online call open to the members of our community. We have set up all the tools we need to facilitate it.

Four work sessions were live-streamed through Twitch:
- Deploying PTS on a Raspberry Pi 4, and trying to virtualize it.
- Introducing `pirogue-admin`.
- Reworking PTS image generation, and adding initial support for Raspberry Pi 5.
- Solving intermittent network failures (`dhcpcd`), and improving Raspberry Pi 5 support.

Live at <https://www.twitch.tv/CyrilBrulebois>, every Friday at 12:00 UTC.

#### Next month
We will analyze the first Android app chosen by the community.

We will facilitate the first community monthly call.

Likely more live sessions around `pirogue-admin` (to support more than just Raspberry Pi devices), plus VPN/WireGuard at some point.

#### Challenges
None.


## 📦 US103 - Governance [#39](https://github.com/PiRogueToolSuite/project-management/issues/39)
#### This month
We have composed a document that delineates the scope and objectives of the advisory committee. This document also outlines the various strategic axes that we intend to address, leveraging the insights and recommendations provided by this committee. 

This document, along with an invitation to join the advisory committee, has been sent to five individuals from civil society who are highly regarded for their respective expertise in the following areas:

* Usability and accessibility
* Outreach and adoption strategy
* Training and documentation
* Sustainability
* Mobile device forensics

#### Next month
We anticipate receiving responses to our invitation next month. In the meantime, we will prepare and implement all the necessary tools and resources to facilitate the committee's activities. 

#### Challenges
None.



