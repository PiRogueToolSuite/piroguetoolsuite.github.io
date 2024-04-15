---
title: Beginner guide - How to handle a potentially malicious mobile app
weight: 30
toc: true
draft: false
contributors: ["Esther Onfroy"]
---

On a daily basis, we encounter potentially malicious applications in various forms. They can appear as seemingly harmless apps we intend to download from Google Play (although it's rare -- Google usually takes them down), or they may be disguised as links or APK files shared within chat groups, especially if we are human rights defenders operating in a high-surveillance environment. Additionally, these malicious applications can be found on compromised devices.

In this guide, we will explore how to deal with applications, primarily focusing on Android applications, that raise suspicion of being potentially malicious.

Some Android malware masquerade as a normal application. Those files are called APKs (Android Application Package), and the very large majority of your Android applications are APKs.

{{< callout context="note" title="Note" icon="info-circle" >}}
Because Google Play adds some information to most of the APKs when they are uploaded to the Play Store, it is possible to check for applications that come from it. This modification is called *frosting*. When you find an APK that is not frosted, you'd need to be extra careful with it. There are chances it is malicious.
{{< /callout >}}

In the next steps we will analyze a sample of a potentially malicious app and look for different indicators that can help us recognize a malicious app.

## Get the sample to be analyzed
First of all you need to get the sample for checking it. Malicious applications are commonly delivered through different types of channel:

* a link in a phishing email
* a link on chat groups
* a link on shady website
* on Google Play Store
* on alternative application stores

In some cases, the sample will have to be retrieved from a potentially compromised device. To do so, you can use [MVT](https://mvt.re) to [download the APK file from an Android phone](https://docs.mvt.re/en/latest/android/download_apks/).

If the application you want to analyze is available on Google Play Store, you can use [apkeep](https://github.com/EFForg/apkeep) to download it. Apkeep can be downloaded from [GitHub](https://github.com/EFForg/apkeep/releases/latest).

For this guide we will use an example sample that has been investigated before (fake Wire app) and available on Pithus. You can open and review the sample [here](https://beta.pithus.org/report/ae05bbd31820c566543addbb0ddc7b19b05be3c098d0f7aa658ab83d6f6cd5c8). 

To download the sample, follow [this link](/samples/sample_1.zip). You will get a ZIP archive protected by a password containing the sample APK. The password is `infected`.

## Compute the sample hash
After getting the sample you’ll need to securely store it, compute its [SHA256](https://en.wikipedia.org/wiki/SHA-2) hash and only work on copies of the original file. **This hash uniquely identify the sample file** based on its content. The SHA256 of two slightly different files will be totally different. SHA256 does not tell anything about how different the 2 files are. SHA256 (and other hashing functions) can be applied on any type of file.

It is advised to only work on copies of the original file and refrain from modifying it directly. A mobile application is essentially a zip archive that can be opened and unzipped. To initiate the reverse engineering process, you will need to open and modify a sample of the application. However, it is essential to ensure that you are working solely with copies of the original file. To accomplish this, store the original file, which you have received, in a designated folder on your computer. Alongside the file, store basic information about it, such as its SHA256 hash and package name. When you wish to perform in-depth analysis, create a duplicate of the file and commence working on this copy. Always remember to refrain from modifying the original file directly to preserve its integrity.

### Get the sample hash from Pithus
If you open the [Pithus report](https://beta.pithus.org/report/ae05bbd31820c566543addbb0ddc7b19b05be3c098d0f7aa658ab83d6f6cd5c8), you see in the *Fingerprints* workspace a section *File sums* specifying 3 different types of hash (MD5, SHA1 and SHA256). 

{{< img src="img/pithus_sha256.png" alt="SHA256 in Pithus" caption="SHA256 in Pithus" class="d-block mx-auto shadow md-5" >}}

### Compute the sample hash locally
You can compute the SHA256 of the sample directly on your computer with the following command line, replace `<my.apk>` by the path to the sample file:

{{< tabs "sha256" >}}
{{< tab "Linux" >}}
```bash
sha256sum <my.apk>
```
{{< /tab >}}
{{< tab "Windows" >}}
```bash
Get-FileHash .\<my.apk> -Algorithm SHA256 | Format-List
```
{{< /tab >}}
{{< tab "Mac OS" >}}
```bash
shasum -a 256 <my.apk>
```
{{< /tab >}}
{{< /tabs >}}

The SHA256 of the sample we use in this guide is: `ae05bbd31820c566543addbb0ddc7b19b05be3c098d0f7aa658ab83d6f6cd5c8`

{{< callout context="note" title="Note" icon="info-circle" >}}
When conducting reverse engineering on a mobile application, it is crucial to maintain the integrity of the original file.
Always mention the sample hash (SHA256) in your report.
{{< /callout >}}

## Identify the type of sample
**APK or XAPK for Android**: a file with the `.apk` file extension is an Android Package file that's used to distribute applications on Google's Android operating system. APK files are saved in the ZIP format and are typically downloaded directly to Android devices, usually via the Google Play Store, but can also be found on other websites.

**IPA for iOS**: a file with the `.ipa` file extension is an iPhone application archive file which stores an iPhone app. It is usually encrypted with Apple's FairPlay DRM technology. Each `.ipa` file is compressed with a binary for the ARM architecture and can only be installed on an iPhone, iPod Touch, or iPad.

{{< callout context="note" title="Note" icon="info-circle" >}}
Depending on your internal guidelines, you would have to digitally sign the sample with your PGP key for example.
{{< /callout >}}

## Retrieve basic information
Use tools to extract information that will help you identify the binary and its potential origin and behavior such as:

**Jadx**: is a software you can install on your computer to decompile Android application producing Java source code from Android Dex and APK files.

**Androguard**: is a software you can install on your computer to do reverse engineering and pentesting for Android applications.

**Pithus**: is an free and open-source online service that  statically analyze Android applications.

**VirusTotal**: is an online service that analyzes suspicious files and URLs to detect types of malware and malicious content using antivirus engines and website scanners.

{{< callout context="note" title="Note" icon="info-circle" >}}
Depending on your internal guidelines, and depending on the confidentiality of the case you’re investigating, it would be not allowed to share the sample (or even the sample hash) with third-party services like VirusTotal.
{{< /callout >}}

For this guide we will use two main tools to retrieve basic information for the example sample, Pithus and Jadx for exercising both options of analysis with online third party service and static offline analysis.

### With Pithus (online)

#### Application and package names
The application name is the name that will be displayed under the application icon on your phone. The package name is the technical name (identifier) of this application, the information that Android will be using to uniquely identify the application.

{{< img src="img/pithus_app_name.png" alt="Get both application and package names from Pithus" caption="Get both application and package names from Pithus" class="d-block mx-auto shadow mb-4 md-5" >}}

#### Signing certificate information

The certificate plays a crucial role in distinguishing between the original application and potentially suspicious ones. Once you have obtained the application name and package name (as mentioned in the previous section), you can search for it on the Google Play Store and compare the signing certificate fingerprints. It's important to remember that the digital signature of Android applications cannot be faked. Two applications can have the same name, the same package name and have been signed with two different certificates. 

{{< img src="img/pithus_malicious_cert.png" alt="Signing certificate of the malicious sample" caption="Signing certificate of the <b>malicious sample</b>" class="d-block mx-auto shadow mb-4 md-5" >}}

{{< img src="img/pithus_genuine_cert.png" alt="Signing certificate of the genuine Wire application" caption="Signing certificate of the <b>genuine Wire application</b>" class="d-block mx-auto shadow mb-4 md-5" >}}

#### Google Play *frosting* information
To check if the sample was *frosted* by Google Play Store (Android only), refers to the *Frosting* information in the Pithus report.

{{< img src="img/pithus_malicious_frosting.png" alt="Frosting flag of the malicious sample" caption="Frosting flag of the <b>malicious sample</b>" class="d-block mx-auto shadow mb-4 md-5" >}}

{{< img src="img/pithus_genuine_frosting.png" alt="Frosting flag of the genuine Wire application" caption="Frosting flag of the <b>genuine Wire application</b>" class="d-block mx-auto shadow mb-4 md-5" >}}

#### Requested permissions

Permissions can serve as an important indicator to determine whether an application is malicious or not. By reviewing the permissions requested, we can evaluate if they align with the legitimate purpose and functionality of the application. Take the example of the fake Wire application, which requests excessive permissions unrelated to its intended use as a communication application. This discrepancy raises suspicions about the application's integrity. If our assessment (and gut feeling) says that these are not legitimate permissions and there's something shady with them, then it's worth investigating.

{{< img src="img/pithus_permissions.png" alt="Requested permissions by the malicious sample" caption="Requested permissions by the malicious sample" class="d-block mx-auto shadow mb-4 md-5" >}}

### With jadx (offline)

First, you have to install jadx on your computer.To do so, follow the [documentation available on GitHub](https://github.com/skylot/jadx#download). If you are using Windows, we suggest to download the file named `jadx-gui-[version]-with-jre-win.zip` from the [releases page](https://github.com/skylot/jadx/releases/latest), decompress the downloaded ZIP archive and double-click on the `.bat` file to launch jadx.

{{< img src="img/jadx.png" alt="Jadx main view" caption="Jadx main view" class="d-block mx-auto shadow mb-4 md-5" >}}

Once launched, select and open your sample file. After a few seconds or minutes depending on the size of the APK, jadx will display the content of the Android application as a tree on the left part of the screen.

{{< img src="img/jadx_open.png" alt="Our sample opened with jadx" caption="Our sample opened with jadx" class="d-block mx-auto shadow mb-4 md-5" >}}

#### Application and package names

To get both application name and package name, double-click open the `AndroidManifest.xml` file listed in the tree. It will open it and show you its content in a human-readable way. To get the package name, look at the field `package` in the `AndroidManifest.xml` file.

{{< img src="img/jadx_package.jpeg" alt="Package name in jadx" caption="Package name in jadx" class="d-block mx-auto shadow mb-4 md-5" >}}

To get the application name, look at the field `android:label` of the element `application` in the `AndroidManifest.xml` file.

{{< img src="img/jadx_app_name.jpeg" alt="Application name in jadx" caption="Application name in jadx" class="d-block mx-auto shadow mb-4 md-5" >}}

#### Signing certificate information

To get the signing certificate information, double-click on `APK signature` listed at the bottom of the tree and look at the entry `SHA-256 Fingerprint`.

{{< img src="img/jadx_cert.jpeg" alt="Signing certificate information in jadx" caption="Signing certificate information in jadx" class="d-block mx-auto shadow mb-4 md-5" >}}

#### Requested permissions

To get the list of requested permissions, open the `AndroidManifest.xml` file and look at `uses-permissions` elements in it.

{{< img src="img/jadx_permissions.jpeg" alt="Requested permissions in jadx" caption="Requested permissions in jadx" class="d-block mx-auto shadow mb-4 md-5" >}}

The same thing we did with Pithus, here we can also review the permissions and assess if these are legitimate permissions for the app's purpose. If our assessment (and gut feeling) says that these are not legitimate permissions and there's something shady with them, then it's worth investigating.

## Check if the sample is malicious

If you have an anti-virus software installed on your computer (Windows comes with Windows Defender by default), you can use it analyze the sample and know if it is detected as malicious. If you have Windows Defender, right-click on the sample file and choose "Scan with Windows Defender", please refer the your anti-virus documentation otherwise.

If permitted by your internal guidelines, you can search for the SHA256 of the sample on multiple online services such as [VirusTotal](https://www.virustotal.com/). To search for our sample on VirusTotal, click on "Search" and paste the SHA256 of the sample.

{{< img src="img/vt_search.png" alt="Search for a SHA256 on VirusTotal" caption="Search for a SHA256 on VirusTotal" class="d-block mx-auto shadow mb-4 md-5" >}}

{{< img src="img/vt_report.png" alt="VirusTotal report for our sample" caption="VirusTotal report for our sample" class="d-block mx-auto shadow md-5" >}}

{{< callout context="caution" title="Reminder" icon="alert-triangle" >}}
If your sample is not detected as malicious does not mean that it is not malicious - it can be a false-negative. It only means that no already known threat or malware has been detected. In some cases, non-malicious samples are detected as malicious even if they are not - false-positives exist too!
{{< /callout >}}


## Static and dynamic analysis

What we just did with jadx was basic **static analysis**. This form of analysis is locally conducted analysis of source code without executing the application and without sharing information with third-party services like Pithus and VirusTotal. Static analysis is helpful mainly when we're not allowed to share the sample or any information around it with external services, and when it's risky to execute the application on our devices.

Static analysis is conducted with various tools to decompile the binary, such as jadx (the tool we used), and other tools like [radare2](https://rada.re/n/radare2.html), [rizin](https://rizin.re/), and [jeb](https://www.pnfsoftware.com/jeb/). You can also use tools such as [droidlysis](https://github.com/cryptax/droidlysis) to conduct automatic offline static analysis.

In contrast, **dynamic analysis** involves executing the application on a device (virtual or real). That means the binary code will run on the device, and this carries the risk of infecting the device with potential malware from the app we want to analyze. This analysis can disclose your location, your organization, and other identifiable information about you and your work. Therefore, it is preferable to work offline if possible to minimize the exfiltrated information.

If the case you are working on is not too sensitive and if your internal guidelines allow it, you can upload your sample on [VirusTotal](https://www.virustotal.com/) to get basic static and dynamic analyses.

Static and dynamic analysis are vital for investigating potentially malicious apps; however, they can be tricky, frustrating, and, in some cases, risky for beginner readers to conduct. So, if you have conducted static analysis and feel that a deeper investigation needs to be done, or if you want to conduct dynamic analysis but feel under-skilled and inexperienced for it, you can always ask for help and consult experts in analyzing and investigating potentially malicious apps. This will ensure thorough and trusted results.

## Going further

To go further, check out our other guide [How to statically analyze a potentially malicious Android app](/guides/g5/).

To learn more about Pithus, you can train yourself on [TryHackMe](https://tryhackme.com/room/androidmalwareanalysis).

You can also learn from:
* [https://www.ragingrock.com/AndroidAppRE/app_fundamentals.html](https://www.ragingrock.com/AndroidAppRE/app_fundamentals.html)
* [https://mobile-security.gitbook.io/mobile-security-testing-guide/overview/0x03-overview](https://mobile-security.gitbook.io/mobile-security-testing-guide/overview/0x03-overview)
