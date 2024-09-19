---
title: Monthly report n⁰18 - 2023-07
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2023-07-31
lastmod: 2023-07-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
summary: "The PiRogue Tool Suite project has made significant progress on Colander's knowledge graph editor with search and layout features, and are collaborating with the community for UI/UX improvements."
---

# Context of the project
PiRogue Tool Suite is a reboot of PiRanhaLysis project. Today, PiRanhaLysis is used by a lot of people ranging from universities (the University of Yale as an example), activists, NGOs and gets a lot of traction. Too much traction in fact to be maintained in our spare time as we have done until now. Currently, the project is at the proof-of-concept stage. To get to wider adoption by the general public, we need to streamline the build process and smooth the interface. Our goal is to make the project accessible to anyone.

# The project
The problem: the lack of open-source means (hardware + software) to assess both privacy and security of mobile devices. Depending on HRD goals, they should want to educate, conduct emergency assessment or off-the-field investigations.

The plan: As with all the other projects we do, we are the first users of the technologies we develop and we aim to provide open-source, low-cost, well maintained, easy to use and easy to build hardware and software. 

We have the following functioning modes for PTS:

- an on-the-field mode
  - for emergency response (active spying, device tampering, ...) useful for responders in repressive environment
  - conduct forensics analysis and network detection using a pre-installed set of tools

- an expert mode for technical people to:
  - determine the list of collected data
  - assess regulatory compliance
  - conduct penetration testing 
  - analyze malware's behavior
  - ensure reproducible analysis
  - generate comprehensive reports

The PiRogue is an open hardware device based on a Raspberry Pi operating as a network router (like any ISP router) analyzing network traffic in real time. 

# What we have done so far
You can check out our work on GitHub at [https://github.com/PiRogueToolSuite/](https://github.com/PiRogueToolSuite/) or on our website at [https://pts-project.org/](https://pts-project.org/). 

## PiRogue
We are still porting all the other PiRogue packages to Debian 12 and testing them on both Raspberry Pi 3B and Raspberry Pi 4. Those packages will be released and published at `https://pts-project.org/debian-12/` along with the corresponding OS image.

## Colander
We have improved the knowledge graph editor and added a side panel allowing to quickly search for a specific entity and locate it in the graph. 

{{< img src="img/graph_quick_search.png" alt="Quickly search in the graph" class="d-block mx-auto shadow md-5" >}}

Summary of the different graph editor actions:

* *mouse wheel*: zoom in and out
* *click + drag* on the background: move the whole graph
* *double click* on the background: open the quick search side panel
* *double click* on an entity: open the entity overview side panel
* *right click* on the background: open the graph menu to
  * quickly create a new entity
* *right click* on an entity: open the entity menu to
  * create a new relation
  * open the entity overview
  * quickly edit the entity
  * select the connected component
  * layout the neighbors 
* *right click* on a relation: open the relation menu to
  * rename the relation
  * delete the relation
  * select the connected component
* *ctrl + click* on entities: select multiple entities
* *ctrl + click + drag*: area selection
* *click + drag* on selected entities: move the selected entities
* *click* on the background: empty the selection

The padlock prefixing the name of a link between 2 entities indicates that this relation has been inferred from the details specified at the creation of one of the 2 related entities. For example, if we created an observable and specified that it has been extracted from a specific artifact, the relationship between the 2 entities cannot be changed in the graph preventing losing an important information.

{{< img src="img/entity_protected_link.png" alt="Protected link between two entities" class="d-block mx-auto shadow md-5" >}}
{{< img src="img/graph_protected_link.png" alt="Protected link between two entities" class="d-block mx-auto shadow md-5" >}}

By default, the layout of the graph is automatic and can make the graph hard to read. So, users can manually move entities and re-layout the entire graph. The layout done manually is saved so that it is not necessary to redo it each time the graph is opened.

We continue improving the overall UI and UX.

## Community and outreach
We continue working on the training guides. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/).

We started getting UI/UX feedback from the community and plan to take them into account in the next 2 months.

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on the knowledge graph editor
* continue working on the training guides
* continue doing demo sessions of Colander for community partners
* continue the migration of PiRogue to Debian 12 mainline

# Challenges
Porting the native drivers to Debian 12 was a big deal, we want to warmly thank [Cyril Brulebois](https://debamax.com/) for his help and support.