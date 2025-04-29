---
title: "Trust PiRogue self-signed certificate"
description: "Trust PiRogue self-signed certificate to access dashboard"
draft: false
toc: false
weight: 3
images: []
contributors: ["Christophe Andral"]
params:
  steps: [
    "dashboard-self-signed-access-browse-to",
    "dashboard-self-signed-access-show-details",
    "dashboard-self-signed-access-accept-exception",
  ]
type: 'cookbooks'
tags: ['pirogue', 'dashboard']
categories: ['cookbooks']
group: 'a. Setup'
---

{{< callout context="caution" title="Requirements" icon="info-circle" >}}
  - [PiRogue installation](/docs/pirogue/installation/) is done
  - `PUBLIC_EXTERNAL_ADDRESS` and `EXTERNAL_ADDRESS` are different
     (See [Administration concepts](/docs/pirogue/version_2.x/configuration/#administration-concepts))
  - Public external access is **not** enabled
{{< /callout >}}

If we want to access the [PiRogue Dashboard](/docs/pirogue/dashboard/),
we must validate a security check the first time we browse the service.

{{< recipe >}}
