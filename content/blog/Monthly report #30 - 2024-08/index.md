---
title: Monthly report n⁰30 - 2024-08
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
date: 2024-08-27
lastmod: 2024-08-27
draft: false
weight: 50
summary: "We have integrated the SingleFile browser extension with Colander to streamline evidence collection and enhanced PiRogue's virtualization with secure deployment options, including WireGuard support. Our documentation has been updated to reflect improvements in Raspberry Pi 5 support and Suricata limitations, while maintenance efforts have focused on enhancing PiRogue’s reliability and extending Colander API functionality."
type: blog
outputs:
   - 'html'
   - 'email'
contributors: ["Esther Onfroy"]
categories: ['activity reports']
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
* Next month, we will attend the [Global Gathering](https://wiki.digitalrights.community/index.php?title=Global_Gathering_Agenda_2024) in Estoril, we can't wait to meet you there! 
* Each month, we'll be analyzing the Android app of your choice. Please fill in [the form](https://forms.gle/mbeigZL3sw7yXP5L9) to select the app to be analyzed in September.

# 🎉 Impacts and results
**Evidence collection:** By integrating SingleFile browser extension with Colander, we've streamlined the process of collecting and organizing online content. When released, investigators will be able to push unsorted content for later sorting and distribution within Colander.

**PiRogue virtualization:** Our efforts in virtualizing PiRogue have resulted in improved deployment options and enhanced security. We've integrated Nginx as a reverse proxy for secure access, integrated initial WireGuard support for VPN connectivity, and designed the communication protocol for remote administration.

**Documentation:** We've prioritized improving our project documentation to ensure accessibility and understanding. We've updated information about Raspberry Pi 5 support to reflect recent enhancements and documented limitations of Suricata support.

**Maintenance:** We've focused on maintaining PiRogue's reliability and security. We've improved the Colander API with new functionalities. The Colander Python client now supports metadata injection from evidence collection.

**Community and outreach:** We've initiated planning for a communication strategy, including social media and outreach efforts, to enhance our communication and engagement with users. 

**Governance:** We've taken steps to strengthen our governance and ensure the project's long-term sustainability. We've invited individuals to join our advisory committee and we are actively researching potential donors and funding models to secure future resources.


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
The choice was made to use [SingleFile](https://github.com/gildas-lormeau/SingleFile) as a first tool to collect content around the internet. It's a well-supported project and can be integrated as an extension third-party library.

On the Colander side, work has been done to receive such contents : a new endpoint has been introduced, working as a user 'dropbox'. This approach offers the advantage to extend naturally to any other third-party collector tool in the future.

As a first step, investigators will be able to push any kind of content, unsorted, with the **SingleFile** extension. As a second step, when getting back on Colander, investigators will be invited to sort and distribute *evidence* into corresponding cases.

#### Next month
We will extend the 'dropbox' endpoint to support direct case association as an investigation convenience.
We will start the implementation of a first version of the Colander 'dropbox' evidence triage interface.
We will try to package our first Colander browser extension with the **SingleFile** third-party library.

#### Challenges
Video content is still difficult to integrate seamlessly in the whole gathering experience. That said, we have good hopes this can be delegate to a third-party service while using our future Colander browser extension.


### Take a watermarked capture/recording of the phone screen [#21](https://github.com/PiRogueToolSuite/project-management/issues/21)
#### This month
The two commands responsible for intercepting TLS client randoms now utilize [friTap](https://github.com/fkie-cad/friTap). Given that friTap supports a broader range of TLS implementations compared to our initial implementation, we have decided to integrate friTap directly.

We have added the dynamic generation of hooks to the commands `pirogue-intercept-[gated|single]`. The different Frida hooks to be generated and injected are defined by the user in JSON format. This feature will be documented when the Debian package will be released.

The release of the Debian package has been postponed, more testing has to be performed before its first release.

#### Next month
We are planning to document and release this Debian package next month.

#### Challenges

None.


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
To minimize the attack surface while exposing PiRogue services to the Internet, we have opted to use [Nginx](https://nginx.org/) as a reverse proxy for the following types of deployment:

* physical and virtual PiRogue instances deployed on a local network
* virtual PiRogue instances exposed to the Internet

For Internet-exposed instances, Nginx will work in conjunction with [Certbot](https://certbot.eff.org/) to manage TLS termination and automate the renewal of TLS certificates issued by [Let's Encrypt](https://letsencrypt.org/). Local deployments will not support TLS.

Nginx will expose only two services:

* the dashboard
* the administration service for remote management

Both services will require user authentication via either a username and password or an authentication token. Users will have the capability to manage their PiRogue both locally and remotely. To ensure a consistent user experience, the same administration tool will be utilized for both local and remote administration. As part of the project roadmap, a web interface will be developed to simplify the administration and usage of the PiRogue, making it more accessible to users who are not familiar with the command line. This web interface will utilize the same administration tool as the command-line version, ensuring a seamless and consistent experience.

The communication protocol between the administration daemon and the administration client will be documented and published in the [pirogue-admin GitHub repository](https://github.com/PiRogueToolSuite/pirogue-admin). This protocol is defined using the gRPC Interface Definition Language (IDL).

#### Next month
Next month, we will refine the software architecture details, and document the final architecture and the technical choices.

#### Challenges
None.


### ViRogue - Debian packaging [#28](https://github.com/PiRogueToolSuite/project-management/issues/28)
#### This month
The initial integration of WireGuard into the `pirogue-networking` and `pirogue-admin` packages happened in August. The `pirogue-networking` side was rather easy as everything was already meant to be as generic as possible in that package, while `pirogue-admin` needed several updates. On one hand, the existing `pirogue-admin` CLI tool was extended to support suggesting VPN mode when autodetection is requested (that happens if the system only reports a single network interface). On the other hand, a new `pirogue-admin-wireguard` CLI tool was introduced to manage all WireGuard-related aspects separately; this includes generating configuration files and/or QR codes to configure the WireGuard application on the target phones.

The `pirogue-admin` CLI tool was also extended as scheduled, keeping the ability to auto-configure Raspberry Pi 3 and 4 as before (and also Raspberry Pi 5), in ACCESS POINT mode. Additionally, it can auto-configure WireGuard when running a VM with a single network interface, in VPN mode. Initial support for the APPLIANCE mode is also included (basically when several network interfaces are detected, but none of them is a wireless one).

#### Next month
A few issues were opened to keep track of proposed improvements and cleanup, but VPN support is considered to be feature-complete already.

The APPLIANCE mode needs to be extended to support as many use cases as possible. In this scenario, we expect users to deploy a Debian system on a generic machine, and we want to be able to deal with as many use cases as possible: there are multiple components that can manage the network (e.g. depending on the selected desktop environments) and we're only support `ifupdown` (used in the Debian-provided Raspberry Pi images we modify to generate PTS images) and `systemd-networkd` (used in Debian-provided Cloud images that are available for various cloud providers).

#### Challenges
A number of packages had been modified to fit into a `pirogue-admin`-based configuration. Some concepts were reworked and/or refined to match our needs once those became clearer.


### ViRogue - Local and remote administration [#29](https://github.com/PiRogueToolSuite/project-management/issues/29)
#### This month
The `proto` definition is near feature complete as a first version.

Python `daemon` and `client` parts are partially implemented and working together. This allowed us to validate our first end-to-end transactions. For remote invocation, we use [nginx](https://nginx.org/) as reverse proxy to ensure TLS encryption. We validated that local 'insecure' and remote 'secure' calls are handled correctly. Local and remote transactions require an authentication token.

#### Next month
We will package nginx and certbot as [pirogue managed dependencies](https://github.com/PiRogueToolSuite/deb-packages/tree/virogue). The reaming features will be implemented for the `daemon` and the `client`. 

#### Challenges
The more features are implemented, the more the whole development environment is tedious to deploy and test. We should find the time to think about a *one-click* solution to test the entire ecosystem.

### ViRogue - Tests [#30](https://github.com/PiRogueToolSuite/project-management/issues/30)
#### This month
The redesigned packages and the introduction of the `pirogue-admin` tool were tested repeatedly on Raspberry Pi 3, Pi 4, and Pi 5, to make sure the historical use case was still working fine. Additionally, they were tested in a virtual machine deployed on some public-facing hypervisor with the required network redirection, making it possible to validate the introduction of WireGuard support.

#### Next month
The Debian-provided Cloud image used to run tests in a virtual machine is expected to work in any QEMU/KVM-based environment, but we want to move to testing what happens with actual cloud providers. We will discuss which one(s) we want to be testing and maybe even advertise as being supported officially, and make sure everything runs fine there.

#### Challenges
None.


## 📦 US100 - Documentation [#36](https://github.com/PiRogueToolSuite/project-management/issues/36)
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
We have received feedback on the project documentation and have incorporated most of the suggestions. The [section on the Raspberry Pi 5](https://pts-project.org/guides/g1/#pick-a-raspberry-pi) has been updated to reflect improvements in its support. We are now providing the hardware drivers that are not available on the official Debian repository. 

Additionally, we have documented a [significant change regarding Suricata support](https://pts-project.org/guides/g1/#pick-a-raspberry-pi), which is now limited to devices with more than 2.5GB of RAM.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.

#### Challenges
None.


## 📦 US101 - Maintenance [#37](https://github.com/PiRogueToolSuite/project-management/issues/37)
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
The Colander API and the [Colander Python client v1.0.4](https://github.com/PiRogueToolSuite/colander-python-client/releases/tag/v1.0.4) now support querying *Teams*, creating *Cases*, and both querying and creating relationships between *Entities*. The Python client now supports the files `*.metadata.json`, generated by the [`pirogue-evidence-collector`](https://github.com/PiRogueToolSuite/pirogue-evidence-collector/), to inject the metadata in the attributes of the collected artifact. 

Regarding the distribution of the Debian packages we maintain, we have introduced an archive keyring which is the minimal collection of PGP keys. It provides the keys that are used when signing the release of the Debian packages we publish on our PPA.

Support for Raspberry Pi 5 was improved by merging the required packages in our repository and adjusting our image generation process accordingly. This means we're back to the original situation, just like in the case of Raspberry Pi 3 and Pi 4 images: users only need official Debian and PTS repositories (no more extra Raspberry OS repository).

#### Next month
No further work is planned regarding Raspberry Pi 5 support. We hope to have mainline and Debian support in the next major Debian release (Debian 13 “Trixie”, scheduled mid 2025), at which point the separate, experimental image for Raspberry Pi 5 can be retired.

We will continue the maintenance of all the Debian packages we maintain. 

#### Challenges
We don't want to stay on the same version of `linux-image-*` packages merged from Raspberry OS repositories forever. So the `deb-frido` tool — used to automate Frida packaging — was extended to monitor packages we care about (in Debian and in Raspberry OS repositories), so that PTS developers are notified of package updates.


## 📦 US102 - Community and outreach [#38](https://github.com/PiRogueToolSuite/project-management/issues/38)
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
As Khadija recently joined the team, a significant portion of the time was dedicated to help her get a better understanding of PTS intricacies, particularly focusing on Colander.
 
We initiated the planning process for a comprehensive strategic communication plan (thinking of a content calendar, new social media platforms and new outreach plan). This plan will guide our messaging and outreach efforts to ensure continuity of regular use of social media, given that there were no dedicated resources for communication. 

As part of the communication activities, two work sessions were live-streamed through Twitch:

* Resuming automated Frida packaging
* More packaging: `raspi-firmware`, `firmware-brcm80211`, and Frida

#### Next month
We plan to finalize the strategic communication plan and begin its implementation. We will distribute the feedback form to current users and begin analyzing the responses. The insights gained will be used to refine our communication strategies and improve user engagement. This will inform future activities for finding new users and reaching out to new organizations to start using PTS. 

Two major events for us will take place next month:
* We will be facilitating a workshop with the European DPAs organized by the [EDPB](https://www.edpb.europa.eu/). The goal it to explain the DPAs can use PiRogue to perform regulatory compliance audit of mobile applications.
* We will be attending the Global Gathering in Estoril. We booked a booth to demo the PiRogue Tool Suite project. Attendees will be able to test the PiRogue, ask questions about its usage and features, or get the network traffic of their mobile phone being analyzed. 

More live sessions are expected, in particular around `pirogue-admin`, demonstrating and testing support for various use cases: Raspberry Pi 3, Pi 4, and Pi 5 as usual (ACCESS POINT mode), virtual machine with a single interface (VPN mode, using WireGuard), but also generic machines with several network interfaces, none of which is a wireless one (APPLIANCE mode).

#### Challenges
None.


## 📦 US103 - Governance [#39](https://github.com/PiRogueToolSuite/project-management/issues/39)
#### This month
Three of the people we invited expressed an interest in joining the advisory committee. As August is a vacation month, we are hoping for more replies, positive or negative, next month.  

We began researching potential new donors and avenues for monetizing PTS, focusing on researching similar organizations and their funding models. This work included identifying potential strategies for planning and fundraising and monetization.

#### Next month
We will organize the first meeting with the members of the advisory committee.

#### Challenges
None.

