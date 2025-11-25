---
title: "Share knowledge"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 543
toc: true
---

Facilitating the exchange of knowledge among investigators, both within the same organization and across different organizations, is crucial for promoting learning and continuous improvement. This can be achieved through formal knowledge sharing feeds. Colander supports export feeds accessible via a password-protected URL giving access to the knowledge in different formats such as JSON, STIX2, MISP, CSV, dot and Mermaid.

The workspace "**Feeds**" is dedicated to the management of knowledge feeds. Check the documentation to know how Colander [converts data](https://pts-project.org/colander-data-converter/data_types/conversion_matrix.html) to [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html) and [STIX2](https://pts-project.org/colander-data-converter/data_types/stix2.html).

  {{< figure src="img/1.png" alt="Feed overview" caption="Feed overview" class="d-block mx-auto shadow" >}}

{{< callout context="note" title="Artifacts and private keys" icon="info-circle" >}}
Colander feeds will never disclose:
* artifact contents (the underlying file)
* the case's private key (used for signing artifacts)
{{< /callout >}}

## Authentication
Feeds are protected with a secret—a random string by default. The secret can be provided in two different ways when accessing the content of a feed:
* in the `secret` query parameter: `/feed/entities/9f351661-299a-4e83-9c44-60ece9478d50?secret=tiq4vf00xrjn38dw`
* in the `X-Colander-Feed` HTTP request header: `X-Colander-Feed: Secret tiq4vf00xrjn38dw`

{{< callout context="note" title="Feed secret" icon="info-circle" >}}
Changing the secret of a feed you already shared will block the access when the previous secret is used.
{{< /callout >}}


## Share entities
When creating a feed, you need to:
* choose a meaningful name and description
* select the types of entities you want to share
* set the maximum level of confidentiality

As an example, if you select *TLP:AMBER*, the entities with higher TLP level won't be shared.

After creation, the feed is accessible via its URL. The `format` query parameter allows users to choose the data format they want.
Colander supports the following formats:
* **JSON**, a Colander feed
* **STIX2**, a STIX2 bundle
* **MISP**, a MISP event
* **CSV**
* **dot** (Graphviz)
* **Mermaid**

{{< callout context="note" title="MISP" icon="info-circle" >}}
Your MISP organization name (`Orgc`) and its UUID (`Orgc UUID`) are required to enable feed conversion to MISP.
{{< /callout >}}


## Share detection rules
When creating a feed, you need to:
* choose a meaningful name and description
* select the types of rules you want to share
* set the maximum level of confidentiality

As an example, if you select *TLP:AMBER*, the entities with higher TLP level won't be shared.

After creation, the feed is accessible via its URL and provides all detection rules combined into a single text file.


## Custom format
Colander supports template-based feeds. It uses [Jinja](https://jinja.palletsprojects.com/en/stable/) to render user-defined templates *Feed templates*.
Templates are rendered in a security sandbox which prevents them from accessing Python functions.

The template context exposes the variable *feed* which contains all entities stored in your case.
Find examples of templates on [GitHub](https://github.com/PiRogueToolSuite/colander-data-converter/tree/main/colander_data_converter/data/templates) or
check the documentation to learn more about [the data structure](https://pts-project.org/colander-data-converter/data_types/colander.html).

{{< callout context="caution" title="Confidentiality" icon="alert-triangle" >}}
Colander does not filter entities based on their confidentiality level.
{{< /callout >}}

  {{< figure src="img/2.png" alt="Example of a simple template" caption="Example of a simple template" class="d-block mx-auto shadow" >}}

  {{< figure src="img/3.png" alt="How to include templates into another" caption="How to include templates into another" class="d-block mx-auto shadow" >}}
