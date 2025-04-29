---
title: "Get the certificate from browser"
---

{{< tabs "check-self-signed-certificate" >}}
{{< tab "Firefox" >}}
When accessing the service the first time:

1. Click on `View certificate` to examine the current certificate

{{< figure src="img/self-signed-warning-firefox-2.png" alt="Firefox view certificate details" caption="Firefox view certificate details" class="d-block mx-auto shadow" >}}

1. Then click on `PEM (cert)` to download and the certificate on your computer

{{< figure src="img/self-signed-warning-firefox-3.png" alt="Firefox download certificate" caption="Firefox download certificate" class="d-block mx-auto shadow" >}}

{{< /tab >}}
{{< tab "Chrome" >}}
1. Click on the `Not secure` badge
2. Click on `Certificate details`

{{< figure src="img/check-self-signed-warning-chrome-1.png" alt="Chrome accept security warning details" caption="Chrome accept security warning details" class="d-block mx-auto shadow" >}}

1. Click on the `Details` tab
2. Then click on the `Export...` button then save the certificate on your computer

{{< figure src="img/check-self-signed-warning-chrome-2.png" alt="Chrome accept security warning details" caption="Chrome accept security warning details" class="d-block mx-auto shadow" >}}

{{< /tab >}}
{{< tab "Safari" >}}
Unfortunately, there is not any simple way to retrieve trusted self-signed file.
Please refer to [Apple Safari documentation](https://support.apple.com/safari) to download the `.pem` file stored on your system.
{{< /tab >}}
{{< /tabs >}}
