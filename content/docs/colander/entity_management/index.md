---
title: "Entity management"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 545
toc: true
---

## Entity creation
Colander offers 4 ways to create new entities, each of them offering different level of details. 

### Graph workspace
Users can create new entities, one at a time, directly from the knowledge graph. 

{{< figure src="img/kg_create_entity.png" alt="Create a new entity within the knowledge graph" caption="Create a new entity within the knowledge graph" class="d-block mx-auto shadow" >}}

### Collect workspace
Users can create new entities, multiple at the same time, directly from the *Collect* workspace. 

{{< figure src="img/quick_collect.png" alt="Quickly create multiple new entities" caption="Quickly create multiple new entities" class="d-block mx-auto shadow" >}}

### Entity creation form
Finally, users can create new entities, one at a time, using the different entity creation forms available in the *Collect* workspace. This way is the one offering the higher level of details.

{{< figure src="img/attributes.png" alt="Create a new entity" caption="Create a new entity" class="d-block mx-auto shadow" >}}

### REST API
Refer to the [RESP API documentation](/docs/colander/rest-api/).

## Entity attributes
Users can add custom attributes to entities of type:
* Artifact
* Device
* Observable
* Event

Some sub-types such as *IP v4* come with a set of suggested attributes such as *address block* or *asn*.

{{< figure src="img/attributes.png" alt="Overview of an entity having custom attributes" caption="Overview of an entity having custom attributes" class="d-block mx-auto shadow" >}}

Entities that were imported or enriched from the *Investigate* workspace usually come with additional attributes extracted from external services. 

Entity attributes are exported in feeds along with the all the other information about the entity they belong to.

## Types of entities
Each type of entity can be more precisely defined. For example, Colander comes with a set of sub-types such as Observable / IP v4, Artifact / Android backup, etc.

### Actors
Entities of this type represent individuals, organizations or groups that can perform actions in the digital environment.

{{< figure src="img/actor.png" alt="Create a new actor" caption="Create a new actor" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Device* is operated by an *Actor*
* *Observable* is operated by an *Actor*

### Artifacts
Entities of this type represent files or any digital trace left behind by actors or the execution of a software.

{{< figure src="img/artifact.png" alt="Create a new artifact" caption="Create a new artifact" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Artifact* has been extracted from a *Device*
* *Observable* has been extracted from an *Artifact*
* *Event* has been been extracted from an *Artifact*
* *Fragment of data* has been extracted from an *Artifact*

### Devices
Entities of this type represent computers, smartphones, tablets, and other electronic devices that store and transmit data.

{{< figure src="img/device.png" alt="Create a new device" caption="Create a new device" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Device* is operated by an *Actor*
* *Event* has been observed on a *Device*
* *Artifact* has been extracted from a *Device*

### Detection rules
Entities of this type represent sets of criteria used to identify suspicious activity or potential threats.

{{< figure src="img/detection_rule.png" alt="Create a new detection rule" caption="Create a new detection rule" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Event* has been detected by a *Detection rule*

### Threats
Entities of this type represent potential risks or harmful actions that can target individuals, organizations, or systems.

{{< figure src="img/threat.png" alt="Create a new threat" caption="Create a new threat" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Observable* indicates a *Threat*

### Observables
Entities of this type represent specific pieces of evidence or information that can be used to identify a technical information.

{{< figure src="img/observable.png" alt="Create a new observable" caption="Create a new observable" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Observable* is operated by an *Actor*
* *Observable* has been extracted from an *Artifact*
* *Observable* indicates a *Threat*
* *Event* involves a set of *Observable*

### Events
Entities of this type represent recorded occurrences of actions or changes in a system.

{{< figure src="img/event.png" alt="Create a new event" caption="Create a new event" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Event* involves a set of *Observable*
* *Event* has been detected by a *Detection rule*
* *Event* has been been extracted from an *Artifact*

### Fragment of data
Entities of this type represent small pieces of data that can be used to reconstruct a larger dataset or provide insights into the activities of actors or systems.

{{< figure src="img/fragment.png" alt="Create a new fragment of data" caption="Create a new fragment of data" class="d-block mx-auto shadow" >}}

#### Tight relationships
Colander supports the following tight relationships which represents the bare minimum level of information needed to represent relationships between entities:

* *Fragment of data* has been extracted from an *Artifact*

