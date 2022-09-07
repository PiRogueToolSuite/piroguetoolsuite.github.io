---
title: "How to: network TLS interception"
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

PiRogue tool suite comes with a `pirogue-intercept-tls` helper to help you intercept encrypted TLS traffic from applications, even in presence of SSL certificate pinning.

First, SSH onto your PiRogue appliance. Attach your smartphone to the PiRogue through USB and make sure "USB debugging" is on and working. You need a rooted smartphone for this recipe to work.

Then, execute the following commands:

```bash
$ # Replace com.example with your actual apk package name
$ # which can be found in Google PlayStore URLs for example.
$ PACKAGE_NAME="com.example"
$ # Start the application and log traffic and SSL keys. Interact with the app freely.
$ # All collected data will go to the "output" folder in current working directory.
$ sudo pirogue-intercept-tls -U -f ${PACKAGE_NAME} -o output
$ # When you are done interacting with the app, hit ^C to stop interception.
$ # Fix permissions
$ chown -R pi:pi output
$ # Decrypt traffic using the SSL key extracted from application memory.
$ cd output
$ editcap --inject-secrets tls,sslkeylog.txt traffic.pcap decrypted.pcap
```

You can now manipulate the resulting `decrypted.pcap` file with any tool of your choice, such as tshark:

```bash
$ tshark -2 -T ek --enable-protocol communityid -R "http or http2 or dns" -Ndmn -r decrypted.pcap > out.ek.json
```
