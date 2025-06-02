---
title: Monthly report n⁰39 - 2025-05
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigation platform."
summary: "With the release of Colander v1.2.3 users can better organize their investigations by creating a hierarchy of cases and creating multiple sub-graphs to help focus on specific findings. Uploaded artifacts are now automatically analyzed, the text content (if any) is extracted with OCR and metadata is parsed to reveal information such as geolocation. The decryption of TLS traffic has improved and is now saved in an HAR file and like any other HAR, it can be open directly in Colander."
date: 2025-05-31
lastmod: 2025-05-31
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
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and digital investigation platform.

* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
* Make sure to upgrade your PiRogue to get the latest security patch!
* The [analysis report](https://pts-project.org/blog/analysis-of-botim-v3.38.1/) of the *Botim v3.38.1* Android application is now public.
* The next community meeting will happen on Jun. 27 at 2pm CET.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).

# 🎉 Impacts and results
With the release of Colander `v1.2.3` users can better organize their investigations by creating a hierarchy of cases and creating multiple sub-graphs to help focus on specific findings. Uploaded artifacts are now automatically analyzed, the text content (if any) is extracted with OCR and metadata is parsed to reveal information such as geolocation. The decryption of TLS traffic has improved and is now saved in an HAR file and like any other HAR, it can be open directly in Colander. Talking about interoperability, it's now possible to import CSV files!

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).


## 📦 US2 - Better knowledge management
A significant improvement involves refining knowledge organization and representation within Colander. This includes establishing a hierarchical structure for cases, where parent cases inherit from child cases, enhancing the management of extensive investigations. Furthermore, Colander will support the creation of multiple graphs within a single case, allowing for diverse projections of a subset of the case knowledge graph. The inclusion of thumbnails on graph nodes will simplify the investigation by involving pictures.

### Overview of the different activities
* ✅ Create a hierarchy of cases
* ✅ Create multiple graphs
* ✅ Add thumbnails on graph nodes
* ✅ Batch import of knowledge
* ✅ Feature request: bulk add of observables



### Create a hierarchy of cases
#### This month
Colander now supports the creation of a hierarchy of cases, allowing zero or one ancestor per case. The user interface has been redesigned to highlight the case hierarchy, if any.

This feature has been released in Colander `v1.2.3`.

![](https://github.com/user-attachments/assets/9513d760-8f3c-4309-971a-28f7a62d409f)

#### Next month
Nothing, as this task is now complete.

### Create multiple graphs
#### This month
This feature has been released in Colander `v1.2.3`.

<div class="text-center">
<video src="https://pts-project.org/gallery/colander/assets/colander_sub_graphs.webm" controls width=720></video>
</div>


#### Next month
Nothing as this task is now complete

### Batch import of knowledge
#### This month
Colander now allows the user to load a CSV file and import each row as an entity. This feature has been released in Colander v1.2.3.

<div class="text-center">
<video src="https://pts-project.org/gallery/colander/assets/colander_csv_import.webm" controls width=720></video>
</div>


#### Next month
Nothing, as this task is now complete.

## 📦 US3 - Interoperability
The project seeks to enhance interoperability by enabling the import and export of knowledge in industry-standard format. This includes batch importing of knowledge, data interchange in MISP format, and the support for user-defined templates to generate custom knowledge feeds. PTS users must have the freedom to move their data and findings from and to other tools such as [OpenCTI](https://docs.opencti.io/latest/) or [MISP](https://www.misp-project.org/).

### Overview of the different activities
* 🔁 Import and export cases
* 🔁 Import and export knowledge from/to MISP format
* 🔁 Support user-defined templates to generate custom feeds
* ✅ Use HAR to store the decrypted network traffic



### Use HAR to store the decrypted network traffic
#### This month
The decryption of the traffic captured during a PiRogue experiment now creates an HAR file containing the decrypted traffic. This HAR can be open directly with Colander. This feature has been released in Colander `v1.2.3`.

<div class="text-center">
<video src="https://pts-project.org/gallery/colander/assets/colander_tls_traffic_decryption.webm" controls width=720></video>
</div>

#### Next month
Nothing as this task is now complete



## 📦 US5 - Offline artifact analysis
To bolster security measures and guarantee a sufficient level of confidentiality, Colander will allow the offline analysis of artifacts using antivirus software and user-defined Yara rules. In the context of forensic analysis, this is crucial to be able to locally analyze extracted files (without relying on 3rd-party services) to ensure case confidentiality.

### Overview of the different activities
* 🔁 Offline artifact AV analysis
* 🔁 Offline artifact analysis with user-defined Yara rules
* ✅ Offline artifact analysis with Apache Tika

### Offline artifact analysis with Apache Tika
#### This month
We have improved the offline analysis of artifacts. Now, Colander automatically analyzes uploaded artifacts with Apache Tika by invoking Mandolin. This analysis supports more than 200 file formats. It extracts text content with OCR when necessary, and extracts file metadata including location information. This feature has been released in Colander `v1.2.3`.

<div class="text-center">
<video src="https://pts-project.org/gallery/colander/assets/colander_artifact_analysis.webm" controls width=720></video>
</div>

#### Next month
Nothing, as this task is now complete.



## 📦 US100 - Documentation
Documenting the project is key in its usability. We are continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
We’ve updated the documentation’s installation steps for PiRogue to reflect recent changes, particularly after resolving the default SSH credentials issue.

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.


## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
A user preference system has been implemented. This allows the user to pin sub-graphs.
Many other minor UI and UX fixes and enhancements have been done, which includes: the addition of visual hints to represent the hierarchy of case, the improvement of the graph editor to fix the difference of rendering between WebKit and Gecko.

##### MVT
We have upgraded MVT, and is now available in version `2.6.0`.

##### Frida
We initially published the versions `16.7.13`, `17.0.1`, and `17.0.5`. Our users were facing issues with the latest version, and we have decided to unpublish the versions `17.0.*` as investigation is needed.

If you are experiencing issues with Frida, make sure to downgrade to the version `16.7.13` with the command `sudo apt install frida=16.7.13~pirogue1`.

##### pcapng-utils
We have released the version `1.0.9` of `pcapng-utils` to improve the support of IPv6 and to improve the handling of HTTP2 compressed multi-streams.

##### Mandolin
We have released the version `1.0.2` of `mandolin` and its Python client to reduce the number of Docker layers, to fix the improper handling of small size, and increase the timeout of requests to Apache Tika.

#### Next month
We will continue the maintenance of the tools, Debian packages we maintain and Colander ecosystem.


## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
The [analysis report](https://pts-project.org/blog/analysis-of-botim-v3.38.1/) of the *Botim v3.38.1* Android application has been published.

The PTS community meeting took place on May 30. It was a great opportunity to present the latest release of Colander. The next one will happen online on Jun. 27 at 2pm CET.

To expand our reach, we began announcing community meetings on other platforms like IFF Mattermost.

#### Next month
We will continue with our recurring activities.



## 📦 US103 - Governance


#### This month
The recent US aid cuts mean that our primary avenues for support are diminishing rapidly, placing the continued development, maintenance, and user support for PTS in jeopardy. We are working tirelessly behind the scenes, exploring every possible avenue to secure alternative and sustainable funding as quickly as possible. We are actively engaging with potential new partners and grant opportunities. However, the landscape is competitive, and the timeline for securing such support is often lengthy and uncertain. While we are doing our utmost to navigate this period and find new financial backing, the future remains precarious. If PTS is a valuable asset in your work, if it helps you conduct crucial investigations, research, or defend digital rights, we now earnestly ask for [your support](https://opencollective.com/pts).

We are continuing the implementation of the working plan with The Engine Room.

We’ve followed up with potential partners to explore different hosting options for our users.

#### Next month
We will submit a proposal to the [Spyware Accountability Initiative](https://stopspyware.fund/).

We will continue with our recurring activities.


# List of changes

## piroguetoolsuite.github.io
* @Esther [`#eefb59c`](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/commit/8bf4970b27422cbcaa1d3e63575f79dc4eefb59c)	Add short demo videos of Colander
* @Esther [`#ac87efc`](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/commit/4fe153c2bf986ef10736af7f9927f096dac87efc)	Refine PiRogue installation steps in documentation.
* @eq [`#6ed7bce`](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/commit/6eadcc5b34f4119911bdbe0419cd803a46ed7bce)	Add draft for Botim Analysis
* @Esther [`#8ce52d1`](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/commit/99a743786b4e2bbc2f9f094d9c3a452b38ce52d1)	Make it a bit more responsive
* @Esther [`#b7698ac`](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/commit/59c7ca7225d9498b6ea252fc9c1ffa58fb7698ac)	Update the landing page
* @Esther [`#8afda99`](https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/commit/16825912fe2f8241ccd1313da3f2045e08afda99)	Monthly report

## colander
* @Christophe Andral [`#c1d71b8`](https://github.com/PiRogueToolSuite/colander/commit/711a1d41a9036ba8461be80d778244160c1d71b8)	Fix comment list and form UI.
* @Esther [`#c81ad58`](https://github.com/PiRogueToolSuite/colander/commit/25271862c20bcf50aaf3648cb8d0a2dd9c81ad58)	Add functionality to generate HAR files from PiRogue experiments
* @Esther [`#a979ecc`](https://github.com/PiRogueToolSuite/colander/commit/69f7c24e82c89d72f18fc94fcfe4d4aa7a979ecc)	Slightly improve the UI
* @Esther [`#7e151af`](https://github.com/PiRogueToolSuite/colander/commit/bf3dd5a5a22351f7fb57f26079d34ee017e151af)	Add methods to retrieve Elasticsearch index IDs for artifacts and traffic data
* @Christophe Andral [`#86d9f8c`](https://github.com/PiRogueToolSuite/colander/commit/18eae218cf5339b500f0219d4da5df67786d9f8c)	User preferences foundation and pin/unpin SubGraphs features.
* @Christophe Andral [`#84a7eaf`](https://github.com/PiRogueToolSuite/colander/commit/b42470df113f66a023be90fbd5b80365e84a7eaf)	Minor database migration script (descriptions and django stuffs)
* @Christophe Andral [`#f0f491c`](https://github.com/PiRogueToolSuite/colander/commit/d1d0b4ae3f730cd961d9ecf508a2b68d1f0f491c)	Fix Webkit/Gecko graph node size mismatches.
* @Christophe Andral [`#6a18e8d`](https://github.com/PiRogueToolSuite/colander/commit/c6826f7c98fffe31d8d04cf5163888c326a18e8d)	Fix UI feedback Case accessibility rights
* @Christophe Andral [`#db6dd64`](https://github.com/PiRogueToolSuite/colander/commit/840053fc86b3d1c9c5f2ac91f73417e43db6dd64)	Harmonize thumbnail size
* @Esther [`#9dc955f`](https://github.com/PiRogueToolSuite/colander/commit/9a0eebad7a227820fc2405fc49f3d8bc29dc955f)	Use Mandolin to automatically generate the thumbnail of pictures
* @Esther [`#4f47f35`](https://github.com/PiRogueToolSuite/colander/commit/26c8fa88d50d689ab932cd824232a0e674f47f35)	A bit of cleanup and error logging
* @Esther [`#c0c289c`](https://github.com/PiRogueToolSuite/colander/commit/816de92593e7998697ec6f02043729d5fc0c289c)	Add pcapng-utils dependency
* @Esther [`#22afdbf`](https://github.com/PiRogueToolSuite/colander/commit/0b9c4397c7a11a23f07339e34e1aab98d22afdbf)	Update mandolin-python-client to version >= 1.0.2
* @Esther [`#e9c4d29`](https://github.com/PiRogueToolSuite/colander/commit/ba96cba49ef33f874f8c0f4af497041d4e9c4d29)	Remove useless button in the CSV importer
* @Christophe Andral [`#4d6d186`](https://github.com/PiRogueToolSuite/colander/commit/0928732fb26ebbca40b471a79d39dc62c4d6d186)	Foundation for PiRogueToolSuite/project-management#8
* @Christophe Andral [`#f3f1ddb`](https://github.com/PiRogueToolSuite/colander/commit/82ecd53b824bf20210e6dd6e93c288344f3f1ddb)	Fix documentation toggler position
* @Esther [`#cbdd33e`](https://github.com/PiRogueToolSuite/colander/commit/a9ba11666fa7458a3067352b2a7ac5191cbdd33e)	Don't set the extra attributes when not supported by the model
* @Esther [`#80fd495`](https://github.com/PiRogueToolSuite/colander/commit/02314518a00ea0306605439ac52f9664580fd495)	Move the import of entities to another REST endpoint
* @Esther [`#a01eeac`](https://github.com/PiRogueToolSuite/colander/commit/d0ab36f93b9a0e6d133134036a5792e68a01eeac)	Import entities from CSV files
* @Esther [`#8f37e31`](https://github.com/PiRogueToolSuite/colander/commit/4ff8552338f53c3da442a09da62ff66c38f37e31)	Display a world map showing the location extracted from an artifact
* @Esther [`#ab4fca1`](https://github.com/PiRogueToolSuite/colander/commit/97bbbf6d8102a4c9b85be485cb5c59d36ab4fca1)	Change the default size of the HAR viewer
* @Esther [`#40817ec`](https://github.com/PiRogueToolSuite/colander/commit/604702bb811e57e7d89c910b214e642f440817ec)	Set a longer timeout for Mandolin
* @Esther [`#fb4cfdd`](https://github.com/PiRogueToolSuite/colander/commit/682131b4a16f387e0fd30bd5c9ebe3a21fb4cfdd)	WIP: import CSV file
* @Esther [`#e0e1e25`](https://github.com/PiRogueToolSuite/colander/commit/7c305da70aef18752a79fa8bb96f1f37ce0e1e25)	Force the maximum size of artifact overview
* @Esther [`#bb66708`](https://github.com/PiRogueToolSuite/colander/commit/8ed0064276fcc277a0ded1b53f8ef5b2fbb66708)	Add a geographic map Vue component
* @Esther [`#5c68513`](https://github.com/PiRogueToolSuite/colander/commit/cd5f018b661c934be314e479ef0745a575c68513)	Enable Mandolin in dev environment
* @Esther [`#31a3614`](https://github.com/PiRogueToolSuite/colander/commit/a6cc90ce7bf85aba7f18df36e5daa895a31a3614)	Remove the magnifier icon
* @Esther [`#be9a9a9`](https://github.com/PiRogueToolSuite/colander/commit/dc8bfc5572652912681dc484014fd05dabe9a9a9)	Rework the display of the thumbnails

## debian-12
* @Esther [`#fe4a1cf`](https://github.com/PiRogueToolSuite/debian-12/commit/453761d850ea0104a277888e1c2e7de15fe4a1cf)	Delete incompatible versions of Frida
* @Esther [`#94f09e6`](https://github.com/PiRogueToolSuite/debian-12/commit/6938fb04d2e561a7eb417d91b87f1ee2394f09e6)	Merge pull request #24 from PiRogueToolSuite/frida-17.0.5
* @Cyril Brulebois [`#57a3f08`](https://github.com/PiRogueToolSuite/debian-12/commit/afbbf1429a3dd78e7168a14ffcdcaab9657a3f08)	Publish frida packages.
* @Cyril Brulebois [`#ef2372c`](https://github.com/PiRogueToolSuite/debian-12/commit/011d87109ee1ed2f1f2d1e347faa395c2ef2372c)	Bump frida packages to 17.0.5 upstream.
* @Esther [`#7a5db36`](https://github.com/PiRogueToolSuite/debian-12/commit/50d1f0e985cf545d1799e0d5e812f3c517a5db36)	Release pirogue-admin v1.0.10
* @Esther [`#2f0be4e`](https://github.com/PiRogueToolSuite/debian-12/commit/598e4fc15bf25b0573c4288db93cc7b822f0be4e)	Merge #23
* @Cyril Brulebois [`#80e347e`](https://github.com/PiRogueToolSuite/debian-12/commit/2dbef3c4463075db3b89177b2a8601e5080e347e)	Bump mvt to 2.6.0 upstream.
* @Esther [`#3a5206f`](https://github.com/PiRogueToolSuite/debian-12/commit/3568bd1efaa07edd310630916c273fcae3a5206f)	Merge pull request #22 from PiRogueToolSuite/frida-17.0.1
* @Cyril Brulebois [`#ad77609`](https://github.com/PiRogueToolSuite/debian-12/commit/356ad7311acbf760c4f88ae6b4822cceaad77609)	Publish frida packages.
* @Cyril Brulebois [`#12ae304`](https://github.com/PiRogueToolSuite/debian-12/commit/e511b4a5fa736e4314be1c89a6b01495e12ae304)	Bump frida packages to 17.0.1 upstream.
* @Esther [`#630171d`](https://github.com/PiRogueToolSuite/debian-12/commit/6fdcdd4f3cb5bc93494e6cf12627bb5b0630171d)	Merge pull request #21 from PiRogueToolSuite/frida-16.7.13
* @Esther [`#6f33386`](https://github.com/PiRogueToolSuite/debian-12/commit/bf2cb7ebf79b2b7971354069db983d8606f33386)	Release pcacpng-utils v1.0.9
* @Esther [`#fadd8f1`](https://github.com/PiRogueToolSuite/debian-12/commit/0e3c7f978bf3d1be8db34c920fb91447afadd8f1)	Release pirogue-admin v2.0.9

## pirogue-admin
* @Cyril Brulebois [`#e552ee7`](https://github.com/PiRogueToolSuite/pirogue-admin/commit/e51322b40441c84c805e91d4d185c49f1e552ee7)	Make tag able to tag old releases.
* @Esther [`#10e4961`](https://github.com/PiRogueToolSuite/pirogue-admin/commit/661a9134f2642f74f97e526c92e313c6910e4961)	Force the udpate of the external networks when the external IP address has changed
* @Esther [`#e03f37b`](https://github.com/PiRogueToolSuite/pirogue-admin/commit/96359837926128bdc2d61d14726e6a60ae03f37b)	Redeploy the entire configuration when the external IP address has changed

## deb-frido
* @Cyril Brulebois [`#cec9d74`](https://github.com/PiRogueToolSuite/deb-frido/commit/64da90d0564fbf2a1870b04f3840ae99bcec9d74)	Add a note regarding repository indices.
* @Cyril Brulebois [`#723e2d7`](https://github.com/PiRogueToolSuite/deb-frido/commit/2f2f0609229272d13b44b93221672b620723e2d7)	Sync the suite directory explicitly.
* @Cyril Brulebois [`#20600f0`](https://github.com/PiRogueToolSuite/deb-frido/commit/33fd509b3649e6aca7fa8603533c9838720600f0)	Document how to clean up old releases.

## pcapng-utils
* @Esther [`#5627cd6`](https://github.com/PiRogueToolSuite/pcapng-utils/commit/1a0675d659c7b8aa88a47d1795f39ed6a5627cd6)	Update the changelog
* @Etienne Maheux [`#ed18116`](https://github.com/PiRogueToolSuite/pcapng-utils/commit/b573e926eea51c5a498b1cd231737aac0ed18116)	Prepare for 1.0.9 release
* @Etienne Maheux [`#f2d1fa8`](https://github.com/PiRogueToolSuite/pcapng-utils/commit/8976673f168a677d577b32b4e9d602b14f2d1fa8)	Properly handle IPv6
* @Etienne Maheux [`#f3ad820`](https://github.com/PiRogueToolSuite/pcapng-utils/commit/eaefc0fce744e80db72bd897727a9cdc4f3ad820)	CLI: flag to output tshark raw JSON + improve README (caveat regarding HTTP/2 compressed multi-stream data for tshark < 4.2)

## mandolin-python-client
* @Esther [`#d204b83`](https://github.com/PiRogueToolSuite/mandolin-python-client/commit/d9883869cf5d2e5501b4f99b06c9c01fcd204b83)	Clean up
* @Esther [`#2382555`](https://github.com/PiRogueToolSuite/mandolin-python-client/commit/cb5c6390472684d22ae6a82e2a670af1c2382555)	Automatic generation of the client for the version 1.0.2 of Mandolin

## mandolin
* @Esther [`#650c158`](https://github.com/PiRogueToolSuite/mandolin/commit/5b60e54e95b596d2a70bd98696e1db74a650c158)	Prepare the version 1.0.2
* @Esther [`#178e47e`](https://github.com/PiRogueToolSuite/mandolin/commit/d7ffd2da10e4916da531063ee583b5fb3178e47e)	Specify a return type to the thumbnail converter
