---
title: "How to intercept and decrypt TLS traffic"
date: 2022-08-19
lastmod: 2022-08-19
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 950
toc: true
---

This recipe is dedicated to intrepid users 😎

PiRogue comes with a `pirogue-intercept-*` helpers to help you intercept encrypted TLS traffic from applications, even in presence of TLS certificate pinning.

These helpers are meant to:

* capture the network traffic
* instrument a specific application or any launched application

## Requirements
To follow this recipe, you need:

* an up-to-date PiRogue
* a rooted Android device 

## Procedure
First, SSH onto your PiRogue. Attach your smartphone to the PiRogue through USB and make sure "USB debugging" is on and working.

Make sure to enable ADB *Transfer files* by clicking on the *Android System* notification.

<center>
  <video height="480" controls>
    <source src="img/adb_config_out.mp4" type="video/mp4">
    <source src="img/adb_config_out.webm" type="video/webm">
  Your browser does not support the video tag.
  </video> 
</center>

Then check if the PiRogue *sees* your device by running the command:

```bash
adb devices
```

You should see your device listed. If not, be sure to use the right USB cable for your device. If the issue remains, check that you have the rights to interact with USB devices. To do so, run the command `groups` to list the groups you belong to and check if the group `plugdev` is listed. If not, execute the following command `sudo usermod -aG plugdev $LOGNAME` and reboot.

### Identify and install the application
Android applications are identified by their *package name*. As an example, the French weather forecast application is `fr.meteo`. You can get the package name either from Google Play URL or from any tool analyzing Android apps such as [Pithus](https://beta.pithus.org), [Virus Total](https://www.virustotal.com/gui/home/upload), etc. In our example, the Google Play URL looks like `https://play.google.com/store/apps/details?id=fr.meteo`, the package name of the application is specified after `id=`. 

Once you have identified the application you want to analyze, you have to download and install it on your target device. If you need to download the application from Google Play, we recommend to use [`apkeep`](https://github.com/EFForg/apkeep) (not installed by default on PiRogue).

Finally, to install the application, run the following command:
```bash
adb install <APK file>
```

If your application contains multiple APKs (like in XAPK), use the command `adb install-multiple <list all apks>`.

Don't launch the application.

### Instrument and intercept
Once the application to be analyzed is installed on your Android device, connect your device to the PiRogue Wi-Fi network and run the following command:
```bash
sudo pirogue-intercept-gated -o <path to the output directory>
```
Adapt the command according to your output directory of choice. Once started and showing `Waiting for data`, manually launch the application you want to analyze.

{{< img src="img/launch.png" alt="Command capturing TLS traffic" class="d-block mx-auto shadow" >}}

Now, interact with the application freely. When you are done interacting with the app, hit `Ctrl`+`C` on your keyboard to stop interception.


{{< callout context="caution" title="Caution" icon="alert-triangle" >}}
Make sure that the application you want to be analyzed is not running in background. You can, for example, force stop it in *Settings > Apps*, select the application and click on *Stop*.
{{< /callout >}}

### Decrypt the traffic
If we run the previous command with `sudo`, we have to fix the permissions of generated files by running:
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

{{< callout context="caution" title="Caution" icon="alert-triangle" >}}
The display of the stack trace has been added to `pirogue-cli` in version `1.0.5`. Be sure to upgrade your PiRogue.
{{< /callout >}}

If you face any issue, [join the Discord channel](https://discord.gg/qGX73GYNdp) to get help.

## Generated files
The commands `pirogue-intercept-single` and `pirogue-intercept-gated` generate the following files:

* `aes_info.json` contains all AES and RSA encryption/decryption operation with both cleartext and cyphertext
* `device.json` contains various information about the device such as IMEI, Android version
* `experiment.json` contains timing information such as the start and end date of the experiment
* `screen.mp4` contains the video recording of the device's screen
* `socket_trace.json` contains the stack trace of all operations on sockets (open, close, read, write...)
* `sslkeylog.txt` contains the TLS encryption keys in the [NSS key log format](https://firefox-source-docs.mozilla.org/security/nss/legacy/key_log_format/index.html)
* `traffic.pcap` contains the entire network traffic captured during the experiment

**NB**: you can open the PCAP file with Wireshark and specify the key log file in *Settings > Protocols > TLS*. This way, Wireshark will automatically decrypt TLS traffic.
