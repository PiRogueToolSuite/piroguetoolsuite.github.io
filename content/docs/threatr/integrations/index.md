---
title: "Integrations"
draft: false
images: []
menu:
  docs:
    parent: "threatr"
weight: 610
toc: true
---

In the Threatr administration panel, create new entries for the 3rd-party vendors in the *Vendor Credentials* menu.

{{< tabs "api_keys" >}}
  {{< tab "VirusTotal" >}}
  Use the vendor identifier `vt` and set the credentials
  ```json
  {"api_key": "your API key"}
  ```
  {{< /tab >}}
  {{< tab "OTX Alien Vault" >}}
  Use the vendor identifier `otx` and set the credentials
  ```json
  {"api_key": "your API key"}
  ```
  {{< /tab >}}
  {{< tab "Shodan" >}}
  Use the vendor identifier `shodan` and set the credentials
  ```json
  {"api_key": "your API key"}
  ```
  {{< /tab >}}
  {{< tab "Scarlet Shark" >}}
  Use the vendor identifier `scarlet_shark` and set the credentials
  ```json
  {"api_key": "your API key"}
  ```
  {{< /tab >}}
  {{< tab "MISP" >}}
  Use the vendor identifier `misp` and set the credentials
  ```json
  {"api_key": "your API key", "url":"url of the MISP server"}
  ```
  {{< /tab >}}
{{< /tabs >}}


{{< callout context="tip" title="Did you know?" icon="rocket" >}}
You can add multiple API keys for a same vendor, Threatr will do a round-robin on them. To do so, add multiple *Vendor Credentials* for the same vendor identifier. This does not apply to MISP.
{{< /callout >}}
