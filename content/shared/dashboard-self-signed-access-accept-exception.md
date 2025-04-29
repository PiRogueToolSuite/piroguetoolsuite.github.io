---
title: "Accept the certificate exception"
---

Accepting a self-signed certificate differs depending on the browser we use:

{{< tabs "accept-security-warning" >}}
{{< tab "Firefox" >}}
1. **Optionally** `View certificate` to examine the current certificate
2. Click on `Accept the Risk and Continue`

{{< figure src="img/self-signed-warning-firefox-2.png" alt="Firefox accept security warning details" caption="Firefox accept security warning details" class="d-block mx-auto shadow" >}}
{{< /tab >}}
{{< tab "Chrome" >}}
1. Click on `Proceed to <SERVER_ADDRESS> (unsafe)`

{{< figure src="img/self-signed-warning-chrome-2.png" alt="Chrome accept security warning details" caption="Chrome accept security warning details" class="d-block mx-auto shadow" >}}
{{< /tab >}}
{{< tab "Safari" >}}
1. Click on `Visit this website`

{{< figure src="img/self-signed-warning-safari-2.png" alt="Safari accept security warning details" caption="Safari accept security warning details" class="d-block mx-auto shadow" >}}

1. Double confirm exception by clicking on `Visit website`

{{< figure src="img/self-signed-warning-safari-3.png" alt="Safari accept (bis) security warning details" caption="Safari accept (bis) security warning details" class="d-block mx-auto shadow" >}}

1. Enter your user password
2. Then confirm the security exception by clicking on `Update settings`

{{< figure src="img/self-signed-warning-safari-4.png" alt="Safari confirm security warning details" caption="Safari confirm security warning details" class="d-block mx-auto shadow" >}}

{{< /tab >}}
{{< /tabs >}}

{{< callout context="note" title="Going further" icon="info-circle" >}}
**Optionally**, learn how you can [double-check the self-certificate](/cookbooks/pirogue-verify-self-signed-certificate/)
served by the PiRogue
{{< /callout >}}

