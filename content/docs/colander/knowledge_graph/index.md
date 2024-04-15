---
title: "Knowledge graph"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 540
toc: true
---

In the realm of digital investigations, where the volume and complexity of data can be overwhelming, knowledge graphs emerge as a sophisticated tool for organizing, analyzing, and extracting meaningful insights. These structured representations of knowledge, akin to semantic networks, connect entities and their interrelationships, providing a cohesive framework for comprehending the intricacies of digital environments.

At the heart of knowledge graphs lies a network of interconnected nodes, each representing a distinct entity. These entities encompass a broad spectrum of real-world elements, encompassing actors (individuals or groups capable of actions), artifacts (digital traces left by actors or software), devices (ranging from computers and smartphones to IoT devices), detection rules (sets of criteria identifying suspicious activity), threats (potential risks or harmful actions), observables (evidence or information aiding threat identification), events (recorded occurrences of system changes), and fragments of data (pieces contributing to larger datasets).

The relationships between these entities, represented as edges within the knowledge graph, capture the intricate web of connections that underpin digital investigations. These relationships can be established based on various factors, such as "extracted from" "detected by," "associated with," or "related to."

By virtue of their graph-based representation, knowledge graphs offer a multitude of benefits for digital investigations, enabling investigators to:
* **Identify relationships between actors**: Uncover connections between individuals or groups involved in the investigation, such as communication patterns, file access permissions, or device usage, aiding in identifying collusion or malicious activities.
* **Track artifact movement**: Trace the path of digital artifacts, such as files or emails, across systems and networks, facilitating the identification of their origin and final destination.
* **Leverage contextual understanding of observables**: Gain insights into the significance of observables, such as IP addresses or malware signatures, by analyzing their associated entities and relationships, aiding in determining their relevance to known threats.
* **Infer missing data**: Utilize the relationships between known entities to extrapolate missing information, filling in gaps in evidence or predicting future events based on existing patterns.

Knowledge graphs serve as a powerful tool for digital investigators, enabling them to navigate the complexities of vast datasets and extract meaningful insights. Their ability to represent relationships between entities, track artifact movement, contextualize observables, and infer missing data proves invaluable in solving digital investigations and mitigating cyber threats. 

{{< img src="img/1.png" alt="Overview the graph editor" caption="Overview the graph editor" class="d-block mx-auto shadow mb-4" >}}

The graph editor of Colander allows the users to quickly add, edit, remove entities and relationships, and layout the graph in the way they want. 

## Graph editor actions

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