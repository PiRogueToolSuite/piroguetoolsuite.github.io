---
title: "Knowledge management"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 531
toc: true
---

Knowledge management is an ongoing process of capturing, organizing, and sharing the knowledge and expertise gained from digital investigations. It aims to create a repository of best practices, guidelines, and case studies that can be leveraged by future investigators to improve their investigative techniques and decision-making processes.

### Knowledge repository
A central knowledge repository serves as the storage and organization hub for digital evidence, case files, investigative techniques, and lessons learned from past investigations. This repository allows investigators to quickly access relevant information, share knowledge with colleagues, and track the evolution of investigative practices.

  {{< img src="img/3.png" alt="Overview of different entities saved in Colander" caption="Overview of different entities saved in Colander" class="d-block mx-auto shadow mb-4" >}}

### Knowledge sharing
Facilitating the exchange of knowledge among investigators, both within the same organization and across different jurisdictions, is crucial for promoting learning and continuous improvement. This can be achieved through formal knowledge sharing feeds. Colander supports export feeds accessible via a password-protected URL giving access to the knowledge in different formats such as JSON, STIX 2 or CSV.

  {{< img src="img/4.png" alt="Overview of a feed exporting entities" caption="Overview of a feed exporting entities" class="d-block mx-auto shadow mb-4" >}}

### Knowledge codification
Knowledge can be represented in a way that is both understandable and usable by a wide range of people, regardless of their technical expertise. This is important for digital investigations, as it allows investigators to share knowledge with each other, even if they have different levels of technical knowledge. Colander uses standard and generic terminology and concepts. This helps to ensure that everyone is using the same language to describe the same things. 

Colander defines the following types of entity:

* **Actors**: Individuals or groups that can perform actions in the digital environment.
* **Artifacts**: Digital traces left behind by actors or the execution of software.
* **Devices**: Computers, smartphones, tablets, and other electronic devices that store and transmit data.
* **Detection rules**: Sets of criteria used to identify suspicious activity or potential threats.
* **Threats**: Potential risks or harmful actions that can target individuals, organizations, or systems.
* **Observables**: Specific pieces of evidence or information that can be used to identify a technical information.
* **Events**: Recorded occurrences of actions or changes in a system.
* **Fragments of data**: Small pieces of data that can be used to reconstruct a larger dataset or provide insights into the activities of actors or systems.

Each type of entity can be more precisely defined. For example, Colander comes with a set of sub-types such as Observable / IP v4, Artifact / Android backup, etc.

{{< img src="img/5.png" alt="Example of entity sub-types" caption="Example of entity sub-types" class="d-block mx-auto shadow mb-4" >}}

Colander defines two different types of relationships: loose and tight. Tight relationships are defined as attributes attached to an entity following a pre-defined ontology, they are not editable with the graph editor and are marked with a padlock. Loose relationships are any user-defined relationships.

Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:
* *Artifact* has been extracted from a *Device*
* *Device* is operated by an *Actor*
* *Observable* has been extracted from an *Artifact*
* *Observable* indicates a *Threat*
* *Observable* is operated by an *Actor*
* *Event* has been observed on a *Device*
* *Event* has been detected by a *Detection rule*
* *Event* has been been extracted from an *Artifact*
* *Event* involves a set of *Observable*
* *Fragment of data* has been extracted from an *Artifact*

The users are free to follow Colander’s ontology or to use their own. 