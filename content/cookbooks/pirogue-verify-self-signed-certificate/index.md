---
title: "Verify PiRogue self-signed certificate"
description: "Verify PiRogue self-signed certificate to access dashboard"
draft: false
toc: false
weight: 10
images: []
contributors: ["Christophe Andral"]
params:
  steps: [
    "dashboard-get-self-signed-certification-from-pirogue",
    "dashboard-get-self-signed-certification-from-browser",
    "dashboard-compare-self-signed-certificate",
  ]
type: 'cookbooks'
tags: ['pirogue', 'dashboard', 'security']
categories: ['cookbooks']
group: 'm. Miscellaneous'
---

{{< callout context="caution" title="Requirements" icon="info-circle" >}}
  - [PiRogue installation](/docs/pirogue/installation/) is done
  - `PUBLIC_EXTERNAL_ADDRESS` and `EXTERNAL_ADDRESS` are different (See [Administration concepts](/docs/pirogue/version_2.x/configuration/#administration-concepts))
  - Public external access is **not** enabled
{{< /callout >}}

During the process of [accessing the dashboard the first time](/cookbooks/pirogue-trust-self-signed-certificate/),
you may want to double-check the served certificate.

{{< recipe >}}
