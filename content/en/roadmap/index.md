---
title: Roadmap
date: 2022-02-01
lastmod: 2022-12-26
draft: false
images: []
toc: true
---


# UX Design

## improve the PiRogue UI/UX

**Objective**: ensure usability/accessibility based on 4 buttons and a tiny  
The PiRogue has 4 press buttons and a tiny screen. The screen is meant to display:

* basic information (IP address, Wi-Fi SSID, capture status, ...)  
* a simple menu allowing the user to display a QR-code for automatic Wi-Fi configuration on the target device, start the kiosk mode, ...  

The 4 buttons are meant to allow the user to navigate through the information and menu.  
NB: all features and screens will be detailed before we start working on this.  
**Deliverable**: screen layout, font, colors and buttons disposition design specifications

**Objective**: get advices on how to design accessible device case  
The PiRogue is packaged into a 3D printed case, we want that case to be easy to handle and durable.  
**Deliverable**: conception guidelines

## improve the kiosk mode UI/UX

**Objective**: ensure usability/accessibility of the kiosk dashboard  
In kiosk mode, the PiRogue serves a Grafana dashboard showing in real-time:  

* the list of contacted servers  
* the list of companies operating the contacted servers  
* the network requests history  
* a world-map showing contacted servers location  
* an overall network activity graph  
* highlight suspicious/malicious servers  

NB: the kiosk mode exposes a Wi-Fi network anyone can connect to in order to get an overview of their device network activity. All features and screens will be detailed before we start working on this.  
**Deliverable**: screen layout, font, colors and user interactions design specifications

## improve the expert mode UI/UX

**Objective**: ensure usability/accessibility of the expert web application  
In expert mode, Colander (part of PTS) exposes a web application allowing users to:  

* manage their experiments  
* manage their detection rules  
* conduct advance network traffic analysis  
* extract evidence  
* investigate on application behavior  
* export findings and report  

NB: all features and screens will be detailed before we start working on this.  
**Deliverable**: screen layout, font, colors and user interactions design specifications

## PTS website

**Objective**: ensure usability/accessibility of the PTS website  
The PTS website is meant to host:  

* documentation  
* demos  
* tutorials  
* OS images  
* Docker images  
* …  

NB: all features and screens will be detailed before we start working on this.  
**Deliverable**: screen layout, font, colors and user interactions design specifications

# Software Development
    
## integrate PiRogue UI/UX improvements

**Objective**: integrate UI/UX materials and implement guidelines 
**Deliverable**: implementation of both screen and buttons behaviors

## integrate kiosk mode UI/UX improvements

**Objective**: integrate UI/UX materials and implement guidelines 
**Deliverable**: Grafana dashboard templates ready to deploy

## integrate expert mode UI/UX improvements

**Objective**: integrate UI/UX materials and implement guidelines 
**Deliverable**: implementation of all the different screens and user interactions

## improve network interception

✅ **Objective**: update dependencies  
In its current state, PTS out-dated of 2 years regarding its dependencies such as MitmProxy, hostapd, Frida, Grafana… Updating them will induce breaking chances we have to handle.  
**Deliverable**: updated code base and dependencies

✅ **Objective**: automate certificate pinning circumvention  
Modern mobile OSs and applications enforce certificate pinning, to conduct network analysis and identify collected data, we have to temporarily disable the certificate pinning. Once disabled, inspection of TLS encrypted traffic is possible.  
**Deliverable**: set of Frida scripts to disable certificate pinning + a script installing Frida on the device and running the appropriate Frida scripts

✅ **Objective**: automate cryptographic key exfiltration  
Stalkerware, malware and many SDKs encrypt data before transmission to a remote server even if the transport protocol is encrypted. To analyze this kind of traffic, it is necessary to retrieve, at least, encryption keys prior to further analysis. To do so, we use Frida to hook encryption natives and retrieve encryption keys and, when possible, clear texts.  
**Deliverable**: set of Frida scripts to encryption keys and clear texts + a script installing Frida on the device and running the appropriate Frida scripts

## improve network analysis

✅ **Objective**: integrate either Snort or Suricata for malicious traffic detection  
In order to detect suspicious and malicious network activities, we integrate Snort and/or Suricata which are well-known IDS tools. Both maintain crowd-sourced detection rules constantly updated. We also integrate stalkerware IOCs provided by Echap non-profit.  
**Deliverable**: PTS OS running automatically Snort and/or Suricata + automatically updates detection rules

**Objective**: improve Phorcys to decode common proprietary protocol such as MASF, GLS…  
Phorcys is a tool meant to recursively decode/decrypt proprietary protocols usually used to conceal data harvesting  
**Deliverable**: Phorcys plugins handling more protocols such as MASF and GLS.

**Objective**: apply Yara detection on request headers  
In its current state, Colander uses auto-generated Yara rules to detect data leaks in both URLs and request payloads. We have to apply them on request headers too.  
**Deliverable**: updated Colander detection module

**Objective**: collect and store evidences  
NGOs sometimes want to get evidences of suspicious or malicious network activity, we have to allow them to retrieve signed evidences they can bring in front of a court (images, flow files, PCAP file).  
**Deliverable**: updated Colander export module

## implement exportable reporting

**Objective**: allow users to export the analysis report in PDF and Markdown  
In its current state, Colander does not support report export. We have to allow users to export their report either in PDF or Markdown  
**Deliverable**: updated Colander export module

## implement screencast management

**Objective**: upgrade scrcpy dependency  
Scrcpy is used by PTS to capture a screencast of the mobile device when the operator conducts investigations on a specific application. Storing the screencast is useful when it is required to check if user’s consent is taken into account. In its current state, this dependency is outdated.  
**Deliverable**: updated Colander capture module handling breaking chances 

**Objective**: automate scrcpy installation on target device  
Scrcpy has to be installed directly on the target device. Due to the variety of target architecture and capabilities, we have to automate both installation and configuration of scrcpy to ensure both device usability and screencast quality.  
**Deliverable**: scrcpy installation and configuration scripts

**Objective**: synchronize touch events with screencast timecode  
When conducting investigations on a specific application, it is required to determine if a given network activity has been triggered by a user input (*e.g.* click/tap on a button). To do so, we have to listen inputs and save them along a timestamp to synchronize them with both screencast and network activity. Saving user inputs could also allow the operator to replay a given application usage.  
**Deliverable**: updated capture module + Colander analysis module

**Objective**: synchronize screencast timecode, user inputs and network packets  
Colander has to allow the operator to watch the screencast and see what are the user inputs and network packets that occurred at the same time.  
**Deliverable**: update Colander visualization module

## deliver pre-built RaspberryPi image for PiRogue

✅ **Objective**: customize the official RaspberryPi OS image  
To build the PTS OS image, we have to start with the official RaspberryPi OS image and customize it to include software running on the PiRogue. This image also includes the different 3-rd party tools for digital forensic, etc.  
**Deliverable**: set of scripts ensuring OS image customization and build

✅ **Objective**: use continuous integration to build new versions based on Git tags  
To ensure continuous updates, we use Git tags to trigger new OS image build.  
**Deliverable**: GitHub build scripts + Git hook configuration

✅ **Objective**: host the PTS OS images on the PTS server  
Once built, PTS OS images are retrieved from GitHub and hosted on the PTS server. Users can then download them directly from the PTS website.  
**Deliverable**: deployment scripts + PTS download web page

✅ **Objective**: deliver related documentation  
The download page has to point to the PiRogue installation procedure documentation.  
**Deliverable**: installation documentation + dedicated web page on the PTS website

## deliver pre-built Docker stack to easily self-host

**Objective**: provide docker compose file  
To allow anyone to host their PTS infrastructure, we have to create and provide a Docker Compose script. This single script describes the entire PTS server infrastructure, that allows the user to host and manage their PTS stack/infrastructure easily.  
**Deliverable**: a Docker Compose file + corresponding documentation on PTS website

**Objective**: use continuous integration to build new versions based on Git tags  
We use continuous integration to build new PTS stack versions (Docker images). 
**Deliverable**: GitHub build scripts + Git hook configuration

**Objective**: host the PTS Docker images on the PTS server  
To allow users to easily deploy their PTS stack, we host PTs Docker images on our own Docker Registry which is freely available.  
**Deliverable**: managed Docker Registry + corresponding documentation on PTS website

# Hardware Design
    
## improve PiRogue hat for RaspberryPi

**Objective**: design a better version of PiRogue hat  
The PiRogue is meant to host a fan + thermoregulation means (the Raspberry Pi has to be cooled to prevent unintended shutdown due to overheating), be compatible with 2 different screens (one small and one larger) and the 4 buttons for menu navigation.  
NB: PiRogue is not designed for being operated at an altitude higher than 2000 meters.  
**Deliverable**: schematic, layout and bill of material

## source low-cost and widely available parts

✅ **Objective**: create a list of trusted suppliers and materials  
To allow material sourcing in most countries as we can, we work with Fairphone to identify both easy-to-source electronic components and suppliers of trust in terms of both human rights and ecology.  
**Deliverable**: bill of material + list of trusted suppliers

# Manufacturing
    
## buy hardware for prototypes

✅ **Objective**: source hardware for prototypes  
During the conception phases, we have to build multiple versions of PiRogue prototypes. It allows us to debug but also to send a few prototypes to our partners for testing. To do so, we first have to buy a stock of the different electronic components such as RaspberryPi, fans, screens, buttons, etc.  
**Deliverable**: electronic components stock

## buy/replace lab equipments

**Objective**: upgrade lab equipment  
By now, our lab has limited capabilities. For this project, we have to buy new equipment such as 3D printers, 3D printing material, assembly tools, raw materials, etc.  
**Deliverable**: functional and calibrated lab equipment

## design 3D printable PiRogue case

✅ **Objective**: design a sturdy PiRogue case  
We have to design a sturdy PiRogue case ensuring both longevity and protection of the hardware even in rough environments.  
**Deliverable**: design + manufacturing files

**Objective**: design a lightweight PiRogue case  
For labs or for people having limited manufacturing capabilities, we design an easy to craft foldable (origami like) PiRogue case which can be either 3D printed or made of cardboard or plastic sheet.  
**Deliverable**: design + manufacturing files

## production of a first batch of 20 PiRogue hats

✅ **Objective**: produce 20 PiRogue hats  
To build our stock up, have to produce and test 20 PiRogue hats  
**Deliverable**: 20 tested PiRogue hats

## production of a first batch of 20 PiRogue cases

✅ **Objective**: produce 20 sturdy PiRogue cases  
To build our stock up, have to produce 20 sturdy PiRogue cases  
**Deliverable**: 20 sturdy PiRogue cases

## production of a first batch of 20 pre-assembled PiRogue

✅ **Objective**: produce 20 pre-assembled PiRogue  
To build our stock up, we have to produce and test 20 PiRogue we can send to our partners (Amnesty, Human Rights Watch, etc) including flashing 20 SD-cards with the PTS OS.  
**Deliverable**: 20 pre-assembled PiRogue

# Community, Communication, Outreach
    
## publish documentation

✅ **Objective**: publish project documentation  
We have to publish all:

* schematics  
* manufacturing files  
* manufacturing specifications  
* hardware integrity checklist  
* software integrity checklist  
* infographics  
* source code  
* etc.  

**Deliverable**: project documentation is available on the PTS website and/or GitHub

## give workshops, trainings and conferences

**Objective**: produce workshop materials  
We have to produce workshop materials and share them with the community. We work with Freedom of the Press Foundation on this topic.  
**Deliverable**: workshop materials

**Objective**: produce training materials  
We have to produce training materials and share them with the community. We work with Freedom of the Press Foundation on this topic.  
**Deliverable**: training materials

**Objective**: produce conference materials and give talks about PTS  
To raise awareness about this project, we have to produce conference materials and share them with the community. This will allow them to present PTS in conferences and events they attend. This will also allow users that live outside of Europe and the US to plan for local events and present PTS and also give demos on the tool. We will also be submitting talks and demos to multiple conferences such as rights Con, IFF, Pass The Salt, Mixit, etc. This allows any contributor to publicly talk about PTS.
**Deliverable**: conference materials

**Objective**: organize workshops with our partners  
We will plan for workshops with Civicert members, members of the First’s Threat intel coalition and other security researchers to present and demo PTS, collect feedback on the tool and the process and contribute in publishing more user guides.  
**Deliverable**: trained partners

✅ **Objective**: animate live streams  
We plan to animate live streams:  
* showing the different phases of the project development  
* explaining how we addressed technical challenges  
* featuring PTS during investigations on mobile applications selected by the audience  
**Deliverable**: increase visibility of the project

## organize testing groups

**Objective**: organize testing groups with our partners  
This will allow us to gather information, indicators with real life cases.  
**Deliverable**: get feedbacks from our partners

## host a PTS stack instance for the community

**Objective**: provide the community with a hosted instance  
We host a PTS stack in case they don’t have the resources to set one up.  
**Deliverable**: Hosted PTS

## create PTS website

✅ **Objective**: integrate UI/UX materials and implement guidelines 
**Deliverable**: creation of the PTS website

# Support
    
## write and publish overall documentation

✅ **Objective**: Publish documentation on PTS website  
PTS is an open source tool, creating documentation and maintaining it will help community members better use the tool or contribute to it.  
**Deliverable**: documentation available online

## open a forum allowing anyone to ask the community

✅  **Objective**: create the PTS forum  
We will host a Forum on PTS website for questions, comments from users and others interested in PTS and the research produced through it. This will complement the GitHub issues section where we will be addressing open issues, bugs and feature requests.  
**Deliverable**: PTS forum is accessible to community members

## record demo videos

**Objective**: demo Videos  
We will create step-by-step demo videos that cover from A to Z the PTS usage, features, installation, setup, capabilities and use cases.  
**Deliverable**: Demo videos hosted on PTS website and YouTube
