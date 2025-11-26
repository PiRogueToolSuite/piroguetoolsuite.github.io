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

  {{< figure src="img/1.png" class="d-block mx-auto" >}}

**Threatr** is a web-based threat-intelligence aggregation platform designed to unify and normalize data collected from multiple external security sources. It centralizes information from services such as **VirusTotal**, **OTX AlienVault**, **Shodan**, **Scarlet Shark**, and **MISP**, and exposes all aggregated intelligence through a simple [**REST API**](/docs/threatr/rest-api).

Threatr’s primary purpose is to simplify and speed up the way security teams access, correlate, and analyze threat indicators. Instead of manually consulting multiple tools, analysts can query Threatr once and retrieve a consolidated, normalized representation of Indicators of Compromise (IoCs), enriched metadata, and contextual relationships from all connected sources.

Threatr enforces a [**well-defined, unified data model**](https://pts-project.org/colander-data-converter/data_types/threatr.html) that ensures consistent field names, types, and structures regardless of the originating provider. This unified schema allows seamless integration with SIEM, SOAR, and custom security automation workflows.

Built for extensibility, Threatr supports additional data connectors and scalable deployments. Because it is API-driven, organizations can integrate Threatr directly into existing pipelines, dashboards, and incident response tooling.

The workspace *Investigate* in Colander is the main entry point in Colander to acquire information from external services.
