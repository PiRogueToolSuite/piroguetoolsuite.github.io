---
title: "Overview"
draft: false
images: []
menu:
  docs:
    parent: "threatr"
weight: 605
toc: true
---

The main purpose of Threatr is to transform the entities from external services such as VirusTotal, MISP and OTX Alien Vault to knowledge graph. The workspace *Investigate* in Colander is the main entry point in Colander to acquire information from external services.

Even if it's designed to operate along with Colander, Threatr can be used standalone and users can interact with it via [its REST API](/docs/threatr/rest-api).

For now, Threatr supports requests on the following types of observables:

* `IPV4`
* `IPV6`
* `DOMAIN`
* `MD5`
* `SHA1`
* `SHA256`
* `EMAIL`

And returns various types of information such as threats, VirusTotal detection score or reports.
