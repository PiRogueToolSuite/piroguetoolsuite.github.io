---
title: "Import knowledge"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 542
toc: true
---

Colander supports multiple data formats that can be directly imported into a case:
* **JSON**, a Colander feed
* **STIX2**, a STIX2 bundle
* **MISP**, a MISP event
* **CSV**

The workspace "**Import**" is dedicated to the import of external data.

Colander automatically merges imported data with the case entities. Check the documentation to know how Colander [converts data](https://pts-project.org/colander-data-converter/data_types/conversion_matrix.html) from [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html) and [STIX2](https://pts-project.org/colander-data-converter/data_types/stix2.html).


## By default
By default, the workspace "**Import**" proposes to import a [Colander feed](/docs/colander/share_knowledge) but users can choose other formats like MISP or STIX2.

  {{< figure src="img/1.png" alt="Import a Colander feed" caption="Import a Colander feed" class="d-block mx-auto shadow" >}}

The user can manually select entities to import or import the whole feed. In addition, the *Quick view* button opens the details of the entity.

  {{< figure src="img/2.png" alt="Details of an entity" caption="Details of an entity" class="d-block mx-auto shadow" >}}


## CSV
Colander can import data from a CSV file. To import:
* Choose the CSV file to load
* Select the entity type, for example *Observable* or *Actor*
* For each row, choose the entity subtype, for example *URL* or *Domain name*
* For each column, map it to the corresponding entity property, for example *Name* or *Description*

Any column data that does not match the Colander data model can be placed in the entity's *Extra attributes*.


  {{< figure src="img/3.png" alt="Import a CSV file" caption="Import a CSV file" class="d-block mx-auto shadow" >}}
