---
title: Analysis of APNA Tunnel Lite v27
summary: "Apna Tunnel Lite is a very simple application designed to provide free VPN access to its users, however the exit nodes servers may be a little shady."
lead: ""
date: 2025-04-23
lastmod: 2025-04-27
draft: false
weight: 50
toc: true
contributors: ["Emy Canton"]
images: []
categories: ["analysis reports"]
---

**APNA Tunnel Lite** is an Android application that provides free VPN utility. It has been created along with Apna Tunnel and Apna Tunnel Plus. From the Telegram channel, it appears that it was initially named AM Tunnel. The design is very minimalist, we are greeted with a screen to choose the VPN server we would like to connect to, and a big "START" button. Pretty straightforward. There is a LOT of server available to chose from, not all of them seems to be working for us, but most do.
There isn't a lot of information online regarding the application except from store pages, but found the website
https://apnatunnelvpn[.]com/ lost deep in the fourth or fifth page of our search engine's results. 


## Android Sample

We’ve analyzed the following version of the app `com.apnatunnel.lite`:

- MD5: `d8161a85ad42e6da94a81072f9c1d9cd`
- SHA1: `0b863fa913f189e6d34c88cff9b192d3b028f222`
- SHA256: `b3a35086b5f9ab998e14a4b30bb7f616b6fcd7d1f52de47853b642e06cec216e`

## APK Analysis

### Application Info

- Application name: `APNA Tunnel Lite`
- Package: `com.apnatunnel.lite`
- Version name: `APNA`
- Version code: `27`

### Certificate Info

- MD5: `a7770628bf69177d81ae6381ea417505`
- SHA1: `d110013b3d2d126d398e05071e5fbe78a4640144`
- SHA256: `81183630b83ec0f67515e2dcb0834d9f33b0ef0b4ad785b1b01d50f6fb683415`
- Issuer: `Organization: Google Inc.`
- Not before: `2023-03-19 14:09:25+00:00`
- Not after: `2053-03-19 14:09:25+00:00`

### Dangerous permissions (Google classification)

This application requests the following permissions:

#### High risk

- `android.permission.POST_NOTIFICATIONS`: Allows an app to post notifications.
- `android.permission.READ_EXTERNAL_STORAGE`: Allows an application to read from external storage.
- `android.permission.USE_CREDENTIALS`: Allows an application to request authentication tokens.

#### Medium risk

- `android.permission.ACCESS_ADSERVICES_AD_ID`: This ID is a unique, user-resettable identifier provided by Google's advertising services, allowing apps to track user behavior for advertising purposes while maintaining user privacy.
- `android.permission.ACCESS_ADSERVICES_ATTRIBUTION`: This enables the app to retrieve information related to advertising attribution, which can be used for targeted advertising purposes. App can gather data about how users interact with ads, such as clicks or impressions, to measure the effectiveness of advertising campaigns.
- `android.permission.ACCESS_ADSERVICES_TOPICS`: This enables the app to retrieve information related to advertising topics or interests, which can be used for targeted advertising purposes.
- `android.permission.RECEIVE_BOOT_COMPLETED`: Allows an application to start itself as soon as the system has finished booting. This can make it take longer to start the phone and allow the application to slow down the overall phone by always running.

##### Low risk

- `android.permission.ACCESS_NETWORK_STATE`: Allows an application to view the status of all networks. 
- `android.permission.FOREGROUND_SERVICE`: Allows a regular application to use Service.startForeground.
- `android.permission.FOREGROUND_SERVICE_SPECIAL_USE`: Allows a regular application to use Service.startForeground with the type "specialUse".
- `android.permission.INTERNET`: Allows an application to create network sockets.
- `android.permission.WAKE_LOCK`: Allows an application to prevent the phone from going to sleep.
- `com.google.android.c2dm.permission.RECEIVE`: Allows an application to receive push notifications from cloud.
- `com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE`: A custom permission defined by Google.
- `com.google.android.gms.permission.AD_ID`: This app uses a Google advertising ID and can possibly serve advertisements.

#### Unknown permissions

- `com.google.android.providers.gsf.permission.READ_GSERVICES`
- `com.apnatunnel.lite.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
- `com.android.launcher.permission.INSTALL_SHORTCUT`

## Application analysis

### Tracker SDKs

The application uses the following trackers SDKs:
- Facebook Ads
- Google AdMob
- Google CrashLytics
- Google Firebase Analytics

### Protection mechanisms

Anti-VM and anti-debug checks can be found in the application, as reported by mobSF.

We also detected root detection, which was automatically bypassed by the `pirogue-intercept-gated` script, as shown here:

```
08:04:06 INFO     ℹ Inject dynamic hooks
         INFO     ℹ Bypass test-keys check
         INFO     ℹ Bypass return value for binary: Superuser.apk
         INFO     ℹ Bypass return value for binary: su
```

#### Obfuscation

The application is obfuscated with a recent version of [LSparanoid](https://github.com/LSPosed/LSParanoid)

We tried to deobfuscate using [paranoid-deobfuscator](https://github.com/giacomoferretti/paranoid-deobfuscator), but the version used is too recent and not supported by this tool. Unfortunately our attempts to de-obfuscate the code through static analysis lead to out-of-range errors becaus of the algorithm for obfuscation. As it would taken a little too long to debug, we settled for a dynamic analysis option using a Frida script to dump the strings when they get used. This approach was a lot simpler to implement even though we could not get all the strings since it would require to explore all branches.

Here's the Frida's script we used:

```js
Java.perform(() => {

    let deobfuscator = Java.use("org.lsposed.lsparanoid.Deobfuscator$APNATunnelLite$app");
    deobfuscator["getString"].implementation = function (j) {
        let result = this["getString"](j);
        console.log(`${j} : ${result}`);
        return result;
    };
});
```

You will find in the Annex section a Python script used to replace the obfuscated data with the script's output.


### Files

#### Embedded libraries

The APK embeds several shared libraries, all of them were checked on VirusTotal, none of them raising any issues. 

```sh
7ebb29f727ec227baed056697ce37834  libovpn3.so
5194c64639938b1fc3282060c4c62d92  libpdnsd.so
1c00aabf7512d36850cde80d8b3ba504  libprinsipe.so
044557596c3805a7404d28e73378bd1a  libtoolChecker.so
e9c20316ea4cc0713fe81dff7ccf141a  libtun2socks.so
337fbd87c793564e138d7f1548d00348  libxposed_check.so
c19920ebe4a630935fd434e9fd6c6755  libxray.so
```

#### OpenVPN Configuration files

The application writes files to the file system, containing the openvpn configuration it uses. 

```sh
client
dev tun
remote 0.0.0.0 1194
nobind
cipher AES-128-GCM
auth none
auth-user-pass
redirect-gateway def1
setenv CLIENT_CERT 0
verb 3
<ca>
-----BEGIN CERTIFICATE-----
MIICMTCCAZqgAwIBAgIUAaQBApMS2dYBqYPcA3Pa7cjjw7cwDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAwwES29iWjAeFw0yMDA3MjIyMjIzMzNaFw0zMDA3MjAyMjIz
MzNaMA8xDTALBgNVBAMMBEtvYlowgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGB
AMF46UVi2O5pZpddOPyzU2EyIrr8NrpXqs8BlYhUjxOcCrkMjFu2G9hk7QIZ4qO0
GWVZpPhYk5qWk+LxCsryrSoe0a5HaqIye8BFJmXV0k+O/3e6k06UGNii3gxBWQpF
7r/2CyQLus9OSpQPYszByBvtkwiBAo/V98jdpm+EVu6tAgMBAAGjgYkwgYYwHQYD
VR0OBBYEFGRJMm/+ZmLxV027kahdvSY+UaTSMEoGA1UdIwRDMEGAFGRJMm/+ZmLx
V027kahdvSY+UaTSoROkETAPMQ0wCwYDVQQDDARLb2JaghQBpAECkxLZ1gGpg9wD
c9rtyOPDtzAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjANBgkqhkiG9w0BAQsF
AAOBgQC0f8wb5hyEOEEX64l8QCNpyd/WLjoeE5bE+xnIcKE+XpEoDRZwugLoyQdc
HKa3aRHNqKpR7H696XJReo4+pocDeyj7rATbO5dZmSMNmMzbsjQeXux0XjwmZIHu
eDKMefDi0ZfiZmnU2njmTncyZKxv18Ikjws0Myc8PtAxy2qdcA==
-----END CERTIFICATE-----
</ca>
```

## Traffic analysis

### Local network and VPN

As expected, when connecting to the VPN, a new tun interface is created along with a new route. 

```sh
41: tun0: <POINTOPOINT,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 500
    link/none 
    inet 123.45.0.135/22 scope global tun0
       valid_lft forever preferred_lft forever
    inet6 fe80::e3c2:1be5:c3d1:6adb/64 scope link stable-privacy 
       valid_lft forever preferred_lft forever
```

```sh
123.45.0.0/22 dev tun0 proto kernel scope link src 123.45.0.34 
```

However, there is now a port open for listening on `1724`, this is not a typical VPN client behavior.

```sh
Netid  State      Recv-Q Send-Q           Local Address:Port                          Peer Address:Port              
tcp    ESTAB      0      0                    127.0.0.1:37626                            127.0.0.1:1724                users:(("apnatunnel.lite",pid=6096,fd=178))
tcp    LISTEN     0      50                           *:1724                                     *:*                   users:(("apnatunnel.lite",pid=6096,fd=180))
tcp    ESTAB      0      0          [::ffff:10.8.0.148]:41614              [::ffff:104.18.189.228]:80                  users:(("apnatunnel.lite",pid=6096,fd=156))
tcp    ESTAB      0      0           [::ffff:127.0.0.1]:1724                    [::ffff:127.0.0.1]:37626               users:(("apnatunnel.lite",pid=6096,fd=182))
```

This port is opened by the `prince.open.vpn.service.InjectorService` class, as show here:

```java
@Override // java.lang.Runnable
public final void run() {
    WA wa;
    try {
        j(String.format("Listening to local port %s", Integer.toString(1724)));
        j("Listening for incoming connection");
        this.d = new ServerSocket(1724);
        int i = this.t;
        if (i == 3 || i == 5) {
            R7 r7 = this.r;
            if (r7 != null) {
                ServerSocket serverSocket = r7.a;
                if (serverSocket != null) {
                    serverSocket.close();
                }
                Socket socket = r7.b;
                if (socket != null) {
                    socket.close();
                }
                r7.c = false;
                r7.interrupt();
            }
            ?? thread = new Thread();
            thread.c = true;
            this.r = thread;
            thread.start();
        }
        this.b.sendEmptyMessage(2);
        while (u) {
            Socket accept = this.d.accept();
            this.e = accept;
            if (accept != null && !accept.isClosed() && g()) {
                this.e.setKeepAlive(true);
                SSLSocket sSLSocket = this.s;
                if (sSLSocket != null && sSLSocket.isConnected()) {
                    this.s.setKeepAlive(true);
                    this.f.setKeepAlive(true);
                    i(this.s);
                    Socket socket2 = this.e;
                    SSLSocket sSLSocket2 = this.s;
                    String string = "16384";
                    String string2 = "32768";
                    new WA(socket2, sSLSocket2, true, string, string2).start();
                    wa = new WA(sSLSocket2, socket2, false, string, string2);
                } else {
                    Socket socket3 = this.f;
                    if (socket3 != null && socket3.isConnected()) {
                        this.f.setKeepAlive(true);
                        i(this.f);
                        Socket socket4 = this.e;
                        Socket socket5 = this.f;
                        String string3 = "16384";
                        String string4 = "32768";
                        new WA(socket4, socket5, true, string3, string4).start();
                        wa = new WA(socket5, socket4, false, string3, string4);
                    }
                }
                wa.start();
            }
        }
    } catch (Exception e) {
        j(String.format("%s: %s", "Injector Exception", e.getMessage()));
    }
}
```

This piece of code seems to be doing some kind of port forwarding, redirecting the traffic to another socket. Correlating the port number and the application's functionalities, it seems this open port is used for the HTTP injector, aiming to bypass restrictions on the network.
Considering this, the mainly concerning point is that this port should probably not be listening on all interfaces, and could probably be set to localhost or vpn only. 

### External communications

The domain pullmerge[.]org is a part of the application's ecosystem. When the app is started it makes 2 similar request to `https://pullmerge[.]org/updater/1df3d3112f9077493387694d84b2de`, which is answered by a big base64 encoded data.
This data when decoded does not appear to be something intelligible, it's entropy is close to 8, with a score of `Shannon entropy: 7.999176221331905`. It is probably compressed or encrypted.

This request is the exact same of the one that is made when clicking the "Update online" button in the "Config Updater" of the application.


When connecting to the various VPN servers, we encounter various behaviors. Some connections are initiated with a websocket to a random subdomain of `frogflyer[.]xyz`, some other don't. Many of the connections we tried were not working. Some other connections instantly sent continuous data over the VPN but we couldn't figure out what it was. Another initiated a connection to `econet.zigssh[.]com`.


## Conclusion

The analysis of **APNA Tunnel Lite v27** reveals a simple application that provides free VPN services, however it seems very hack-ish in the way its servers are managed. It allows users to bypass internet restrictions and access the internet freely, and is particularly targeted for users in regions where internet access is limited or censored.

The permissions requested seems acceptable for such an application, except maybe for `android.permission.USE_CREDENTIALS` which may raise some questions. This permission is the older version of the `android.permission.ACCOUNT_MANAGER`, but it has been removed from Android since version `6.0`. On these versions, it would allow access to the [Account Manager](https://developer.android.com/reference/android/accounts/AccountManager) class.

Apart from this permission and the weird server management and connection, the application seems to be doing its job of providing free VPN access to users in countries with restricted internet.

### Annex

You will find below the python script we used to update the decompiled Java with the deobfuscated strings from the Frida script. 

Usage:

Start by decompiling the apk files with jadx, or using [APKlab](https://github.com/APKLab/APKLab) in vscode, then run the app with frida, and finally use the python script to update the decompiled java source code.

```shell
# Get decompiled java files using jadx
$ jadx -r -q -ds output_directory path_to_apk.apk

# Run the application with Frida and our script (see section Obfuscation)
$ frida -U -f com.apnatunnel.lite -l frida-deobfuscate-lsparanoid.js | grep ':' # grep to remove frida's output, there is probably a cleaner way to do that though

# update decompiled java files
$ python update_java.py output_directory/java_src 
```

```python
import pathlib
import sys
import re

if len(sys.argv) != 3:
    print(f"Usage: {sys.argv[0]} frida-output apk-java-dir")
    exit(1)

translations = {}
with open(sys.argv[1]) as f:
    for line in f.readlines():
        x = line.split(' : ')
        k = x[0]
        v = x[1]
        translations[k] = v.strip()

pattern = re.compile(r'Deobfuscator\$APNATunnelLite\$app\.getString\((-?\d+)L\)')

def replace(m: re.Match) -> str:
    i = m.group(1)
    if i in translations.keys():
        return f'"{translations[m.group(1)]}"'
    return m.group(0)

classes_dir = pathlib.Path(sys.argv[2])
for java_file in classes_dir.rglob("*.java"):
    new_file = []
    with open(java_file, "r") as f:
        for line in f.readlines():
            new_line = pattern.sub(replace, line)
            new_file.append(new_line)

    with open(java_file, "w") as f:
        f.write(''.join(new_file))
```
