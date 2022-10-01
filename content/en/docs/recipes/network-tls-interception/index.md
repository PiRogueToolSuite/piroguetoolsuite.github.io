---
title: "How to intercept and decrypt TLS traffic"
date: 2022-08-19
lastmod: 2022-08-19
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 550
toc: true
---

This recipe is dedicated to intrepid users 😎

PiRogue comes with a `pirogue-intercept-tls` helper to help you intercept encrypted TLS traffic from applications, even in presence of SSL certificate pinning.

This helper is meant to:

* capture the network traffic
* instrument a given application

## Requirements
To follow this recipe, you need:

* an up-to-date PiRogue
* a rooted Android device 

## Procedure
First, SSH onto your PiRogue. Attach your smartphone to the PiRogue through USB and make sure "USB debugging" is on and working.

### Identify and install the application
Android applications are identified by their *package name*. As an example, the French weather forecast application is `fr.meteo`. You can get the package name either from Google Play URL or from any tool analyzing Android apps such as [Pithus](https://beta.pithus.org), [Virus Total](https://www.virustotal.com/gui/home/upload), etc. In our example, the Google Play URL looks like `https://play.google.com/store/apps/details?id=fr.meteo`, the package name of the application is specified after `id=`. 

Once you have identified the application you want to analyze, you have to download and install it on your target device. If you need to download the application from Google Play, we recommend to use [`apkeep`](https://github.com/EFForg/apkeep) (not installed by default on PiRogue).

Finally, to install the application, run the following command:
```bash
adb install <APK file>
```

Don't launch the application.

### Instrument and intercept
Once the application to be analyzed is installed on your Android device, connect your device to the PiRogue Wi-Fi network and run the following command:
```bash
sudo pirogue-intercept-tls -U -f <application package name> -o <path to the output directory>
```
Adapt the command according to the application you want to analyze. It will launch the application for you and all collected data will be saved in the output directory you specified.

{{< img src="img/launch.png" alt="Command capturing TLS traffic" class="d-block mx-auto shadow" >}}

Now, interact with the application freely. When you are done interacting with the app, hit `Ctrl`+`C` on your keyboard to stop interception.

### Decrypt and view
Since we run the previous command with `sudo`, we have to fix the permissions of generated files by running:
```bash
chown -R pi:pi <path to the output directory>
```

Then enter the output directory with:
```bash
cd <path to the output directory>
```

{{< img src="img/permissions.png" alt="Command fixing file permissions" class="d-block mx-auto shadow" >}}

Next, we generate a PCAPNG file containing both the TLS keys and the captured traffic:
```bash
editcap --inject-secrets tls,sslkeylog.txt traffic.pcap decrypted.pcapng
```

Next, we export the decrypted traffic in JSON:
```bash
tshark -2 -T ek --enable-protocol communityid -Ndmn -r decrypted.pcapng > traffic.json
```

{{< img src="img/decrypt.png" alt="Command decrypting TLS traffic" class="d-block mx-auto shadow" >}}

Finally, to view the decrypted traffic, run: 
```bash
pirogue-view-tls -i traffic.json -t socket_trace.json
```

{{< img src="img/view+.png" alt="Command displaying TLS traffic" class="d-block mx-auto shadow" >}}

{{< alert icon="⚠️" context="warning" >}}
The display of the stack trace has been added to `pirogue-cli` in version `1.0.5`. Be sure to upgrade your PiRogue.
{{< /alert >}}

If you face any issue, [join the Discord channel](https://discord.gg/faBuCEUR) to get help.