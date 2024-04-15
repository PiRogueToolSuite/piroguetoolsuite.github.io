---
title: "External sources"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 550
toc: true
---

Colander allows you to retrieve information from 3rd-party services such as VirusTotal and OTX Alien Vault. To do so, Colander relies on [Threatr](https://github.com/PiRogueToolSuite/threatr) which operates as a bridge and translator between Colander an the external services. 

The main purpose of Threatr is to transform the entities available on external services to knowledge graph following the same codification as Colander. The workspace *Investigate* is the main entry point in Colander to request information to external services.

## Threatr
Even if it is designed to operate along with Colander, Threatr can be used standalone and users can interact with it via [its REST API](/docs/colander/rest-api/#threatr).

By now, Threatr supports requests on the following types of observables:

* `IPV4`
* `IPV6`
* `DOMAIN`
* `MD5`
* `SHA1`
* `SHA256`

And can return various types of information such as threats, VirusTotal detection score or reports.

Threatr propagates user’s requests to the different configured 3rd-parties and returns the aggregated entities along with the knowledge graph linking the different found entities with the requested one. Threatr stores the results in its internal database and will always return the data already stored unless the checkbox *Update results from vendors.* is checked. By forcing the refresh of the data, Threatr will propagate the user’s request to all the different 3rd-party configured.

## User interface

The user interface of the *Investigate* workspace is composed of 5 different sections:

* the search form
* the overview of the results
* the list of observables found
* the list of events associated with the requested observable

### Search
To search for an observable, select its type and specify its value. In the example below, we want to retrieve information about the *domain name* `sharefilesonline.live`.

  {{< img src="img/search.png" alt="Investigate search form" caption="Investigate search form" class="d-block mx-auto shadow md-5" >}}


### Summary
Once the results are available, Colander shows details retrieved about the requested observable and a summary of the results in the form of a knowledge graph.

  {{< img src="img/summary.png" alt="Overview of the results" caption="Overview of the results" class="d-block mx-auto shadow md-5" >}}

### Observables
The next section contains the list of all the observables that are related to the requested one. From this list, you can either pivot on a specific observable or add it to your current case.

  {{< img src="img/observables.png" alt="List of the related observables" caption="List of the related observables" class="d-block mx-auto shadow md-5" >}}

### Events
The next section contains the list of the events involving the requested observables. Those events can be detections, passive DNS resolutions, etc. From this list, you can import events directly into your current case.

  {{< img src="img/events.png" alt="List of the events" caption="List of the events" class="d-block mx-auto shadow md-5" >}}

## Search for an existing observable and enrich it
Alternatively to the search form, you can jump into the *Investigate* workspace directly from an existing observable by clicking on the button *Investigate* accessible in the details of the observable.

  {{< img src="img/observable-1.png" alt="A domain name we need information about" caption="A domain name we need information about" class="d-block mx-auto shadow md-5" >}}

Then, in the list of observable, the first one will always corresponds to the requested one. If you add it to your case, Colander will automatically merge the information already specified with the ones coming from the external services.

  {{< img src="img/observable-2.png" alt="A domain name with external information added" caption="A domain name with external information added" class="d-block mx-auto shadow md-5" >}}

## Import observables
When we import observables from the *Investigate* workspace to your current case, Colander will automatically merge the knowledge graph representing the results from the external services with your existing knowledge graph. As an example, let's imagine that your current case only contains one observable `sharefilesonline.live`, your knowledge graph contains only one node.

From the *Investigate* workspace, you add some observables, your knowledge graph now contains all the imported observables.

  {{< img src="img/import-1.png" alt="Import observables" caption="Import observables" class="d-block mx-auto shadow md-5" >}}

Your knowledge graph now contains all the imported observables.

  {{< img src="img/import-2.png" alt="Knowledge graph containing the imported observables" caption="Knowledge graph containing the imported observables" class="d-block mx-auto shadow md-5" >}}

## Import events
From the *Investigate* workspace, you can also import events.

  {{< img src="img/import-3.png" alt="Import events" caption="Import events" class="d-block mx-auto shadow md-5" >}}

Your knowledge graph now contains the events you just imported.

  {{< img src="img/import-4.png" alt="Knowledge graph containing the imported events" caption="Knowledge graph containing the imported events" class="d-block mx-auto shadow md-5" >}}

Now, in the details on the `sharefilesonline.live` observables, you will find the list of the related entities and the timeline containing all the information you imported.

  {{< img src="img/details.png" alt="Details of the observable" caption="Details of the observable" class="d-block mx-auto shadow md-5" >}}

