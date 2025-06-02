---
title: Analysis of Botim v3.38.1
summary: "Botim is an instant messaging and VoIP application that asks for a lot of permissions and embeds a lot of trackers."
lead: ""
date: 2025-05-29
lastmod: 2025-05-31
draft: false
weight: 50
toc: true
contributors: ["Emy Canton"]
images: []
categories: ["analysis reports"]
---

**Botim** is an instant messaging and VoIP application developped by Algento. The company is branded as an american company with subsidiaries in Dubai on [Botim's website](https://botim.me/about/), but only Dubai is mentioned on [algento's website](https://algento.com/). The application looks like a common instant messaging app, but also have an "Explore" tab which seems to offer other functionalities, such as 
an online Quran, an AI chatbot, and a way to request a visa for the United Arab Emirates.


## Android Sample

We’ve analyzed the following version of the app `im.thebot.messenger`:

- MD5: `2833f5664d3d40ae54012832c1a91048`
- SHA1: `b57c5f46e6bd422520e0194c82e5271b61faa3d3`
- SHA256: `2acd1f823532837f000662b335673ae5063ee9f42b1f6ef415d5cd2bbec87193`

## APK Analysis

### Application Info

- Application name: ` Botim`
- Package: `im.thebot.messenger`
- Version name: `3.38.1`
- Version code: `3403`

### Certificate Info

- MD5: `e8b7294da232a68202f4d60e6f30a07b`
- SHA1: `6808c4792542c64ab35a4c8b9145f5bdadfa8dff`
- SHA256: `4a75cf385d6aa8530a1a34ba4ed089da6bf1ae6989f62757839fd01e4f2fcd99`
- Issuer: `Organization: BOT`
- Not before: `2017-08-07 07:47:20+00:00`
- Not after: `2044-12-23 07:47:20+00:00`

### Dangerous permissions (Google classification)

This time we're not going to list all the permissions the application requests, because that number is abbsolutely too high with a grand total of 77 permission requested. Instead we will focus only on the most dangerous ones. The full list of permissions can be found in the [exodus privacy report](https://reports.exodus-privacy.eu.org/en/reports/607104/)

#### High risk

- `android.permission.ACCESS_COARSE_LOCATION`: Access coarse location sources, such as the mobile network database, to determine an approximate phone location, where available. Malicious applications can use this to determine approximately where you are.
- `android.permission.ACCESS_FINE_LOCATION`: Access fine location sources, such as the Global Positioning System on the phone, where available. Malicious applications can use this to determine where you are and may consume additional battery power.
- `android.permission.ACTIVITY_RECOGNITION`: Allows an application to recognize physical activity.
- `android.permission.AUTHENTICATE_ACCOUNTS`: Allows an application to use the account authenticator capabilities of the Account Manager, including creating accounts as well as obtaining and setting their passwords.
- `android.permission.CALL_PHONE`: Allows the application to call phone numbers without your intervention. Malicious applications may cause unexpected calls on your phone bill. Note that this does not allow the application to call emergency numbers.
- `android.permission.CAMERA`: Allows application to take pictures and videos with the camera. This allows the application to collect images that the camera is seeing at any time.
- `android.permission.GET_ACCOUNTS`: Allows access to the list of accounts in the Accounts Service.
- `android.permission.GET_TASKS`: Allows application to retrieve information about currently and recently running tasks. May allow malicious applications to discover private information about other applications.
- `android.permission.MANAGE_ACCOUNTS`: Allows an application to perform operations like adding and removing accounts and deleting their password.
- `android.permission.POST_NOTIFICATIONS`: Allows an app to post notifications.
- `android.permission.READ_CONTACTS`: Allows an application to read all of the contact (address) data stored on your phone. Malicious applications can use this to send your data to other people.
- `android.permission.READ_EXTERNAL_STORAGE`: Allows an application to read from external storage.
- `android.permission.READ_MEDIA_IMAGES`: Allows an application to read image files from external storage.
- `android.permission.READ_MEDIA_VIDEO`: Allows an application to read video files from external storage.
- `android.permission.READ_MEDIA_VISUAL_USER_SELECTED`: Allows an application to read image or video files from external storage that a user has selected via the permission prompt photo picker. Apps can check this permission to verify that a user has decided to use the photo picker, instead of granting access to READ_MEDIA_IMAGES or READ_MEDIA_VIDEO . It does not prevent apps from accessing the standard photo picker manually. This permission should be requested alongside READ_MEDIA_IMAGES and/or READ_MEDIA_VIDEO, depending on which type of media is desired.
- `android.permission.READ_PHONE_STATE`: Allows the application to access the phone features of the device. An application with this permission can determine the phone number and serial number of this phone, whether a call is active, the number that call is connected to and so on.
- `android.permission.READ_PROFILE`: Allows an application to read the user's personal profile data.
- `android.permission.RECORD_AUDIO`: Allows application to access the audio record path.
- `android.permission.REQUEST_INSTALL_PACKAGES`: Malicious applications can use this to try and trick users into installing additional malicious packages.
- `android.permission.SYSTEM_ALERT_WINDOW`: Allows an application to show system-alert windows. Malicious applications can take over the entire screen of the phone.
- `android.permission.USE_CREDENTIALS`: Allows an application to request authentication tokens.
- `android.permission.WRITE_CONTACTS`: Allows an application to modify the contact (address) data stored on your phone. Malicious applications can use this to erase or modify your contact data.
- `android.permission.WRITE_EXTERNAL_STORAGE`: Allows an application to write to external storage.

## Application analysis

### Tracker SDKs

The application uses the following trackers SDKs, as reported by [Exodus Privacy](https://reports.exodus-privacy.eu.org/en/reports/607104/)

#### Profiling, Identification and location trackers

- AppLovin (MAX and Sparklabs)
- Countly
- Facebook Login
- Huawei Mobile Services (HMS) Core
- IAB Open Measurement

#### Advertisement trackers

- Amazon Advertisement
- Facebook Ads
- Pangle

#### Analytics trackers

- Adjust
- Google AdMob
- Google CrashLytics
- Google Firebase Analytics
- Facebook Analytics
- Yueying Crash SDK

#### Other trackers

- Facebook Share


### Protection mechanisms

Anti-VM and anti-debug checks can be found in the application, as reported by mobSF.

### Files

#### Embedded libraries

The APK embeds 51 (yes, 51) shared libraries, all of them were checked on VirusTotal, none of them raising any alerts. 

```sh
c226d5ce8b8956346e8bff2a05d83a09  libapminsighta.so
bdb424f16f6a7cff651ea3d85f6994b0  libapminsightb.so
287f99dd869f180dfb5011a11d8d5314  libapplovin-native-crash-reporter.so
f93e0fd7be32fef807488fba8931c059  libAPSE_8.0.0.so
0b4414a08c4a898190c018783446c59d  libaudio_util.so
a376edf3cb97c113a8958e2d35dad12a  libavrp.so
01e0613a69750a5a240096f3b80cbe92  libbangcle_crypto_tool.so
f4b58f8a9da68a2ae03783448c64203e  libbarhopper_v3.so
f6b3cdfed015ff595234e65310662a20  libBlinkID.so
9cf4913a94fbfa75d4b0c37398c04cc5  libbotim.so
c4fa9f5f462d5e05e7e3ce3ccd158dce  libbuffer_pg.so
41c8c782c90a2f60bd92039d8530a899  libcfcaMLog.so
0680c68db55faa4a99c5be1b4e42047b  libcnsse.so
d7b6754a9c6a3dbd26cd5e637dfa1f67  libconscrypt_jni.so
a3b07d5cff261115ea358aa7183ed0ce  libcs_avr.so
1be694162bad8dd8dc353f2bf38c91c1  libc++_shared.so
b323b9d549f27e89049a39b6fcb5fe15  libcs.so
373b607d637413f77215e878dd8a90cf  libdeamon.so
0e289e212a021caf08a87ba7e58a2247  libe2ee.so
6672917d731392ca79e40be8d60d0a3b  libEncryptorP.so
fd3e79d609543499a70b1321d7e45106  libfacial_action.so
fa8b62cb7dc0662bf1efc75367f2a529  libfile_lock_pg.so
79babd3dc85a0e3367a900737689488f  libfileuploadhelp.so
c3c3083a12eba7fdfda4d2d98310fbde  libgifimage.so
ee130bb431aeb3575979a986cfcda287  libhundun_android.so
4f3adda69e4a126a25cd92e4a9110bc9  libimagepipeline.so
0666c950647d60ce74d350122d917b2b  libimage_processing_util_jni.so
d16c063c502e32fa57f0c53c351d6336  libjingle_peerconnection_so.so
2e3452384d8b928816bc28053c00a899  liblitr-jni.so
51838f1a40061d8e7af2b1c1c7594243  libmmkv.so
c183df1083a7c5341304923087052caf  libmpaascpu.so
9d01854f9ee5890ada4308c12bb618a1  libnative-filters.so
44b26b725e0f76ea686aa942b4175807  libnative-imagetranscoder.so
ed73c4a0e40efb21759bf9265ddf68b6  libnms.so
a2d280b70478652eb6595f02c8fde6be  libomp.so
c5f68a4a843e414492ccdfe6cd6a396e  libpatcher.so
1dd848b6f5e4a653b7291820b30f8a17  libpl_droidsonroids_gif.so
f5d7d14948f4b2e37bce50ecfdf50e1d  libpps-jni.so
6173aef8323516db8789dc577f134e68  librenderscript-toolkit.so
3d873ea1e751f2eb899f849b04b9fb78  libsigner.so
dc617100f816f15caa256f5095afba8a  libSipCryptor.so
2a84ac3a2723571e468608eece0a2e36  libsmkernel_110f.so
9704ee47f5b49c29f8362722ec88f62f  libsqlcipher.so
ad3d30c4f425b28d25c0413bbf3a4c9c  libstatic-webp.so
fe4e03cc950cf73beb5fbf7814ed5656  libtensorflowlite_jni.so
bfb636945ffe5cee686d806c0a0d43d2  libtobEmbedPagEncrypt.so
a539b2eac80ecae8c3bd2f4cede06f62  libvideoconvert.so
94b960f6dcd43c018361eaefb2a33355  libvideotool.so
90f2c50604d24ef7b380b45897c27a54  libwhatrtc_jni.so
1f459fd2e0da0895ff3386da1afc683a  libxlog.so
32927f12bc12ee21e9432dbdd206b079  libyuv.so
```

## Traffic analysis

Given the number of trackers detected by Exodus Privacy, we would have expected a lot of outbound traffic, but there was surprisingly not that many requests. However, due to difficulties during the testing of the app, we couldn't get an in-depth exploration of the various functionalities, which may explain why that is.

That being said, we observed some interesting outgoing traffic, aiming at two main domains: fp-aen.astratech[.]ae and smnvc[.]com

### requests to fp-aen.astratech[.]ae

This request is being send regularly, and contain multiple technical informations about the device and it's network state, as we can see here, it sends the device's kernel version, local IP, mac address, wifi SSID, the router's mac adress, etc... Though some of this information might have a legitimate interest for setting up VoIP calls, we did not make a VoIP call during testing. 

```json
{

    conn: 3,
    initDataTime: 1748696278000,
    cpuModel: "-100",
    gsmLac: 0,
    switches: {
        mobileData: false,
        wifi: true,
        gps: true,
        bluetooth: true,
        wifiAp: false
    },
    language: "en,US",
    operator: "SFR",
    phoneModel: "SM-G965F",
    interIp: "10.8.0.76",
    permissions: {
        .AUTHENTICATE_ACCOUNTS: true,
        .BLUETOOTH: true,
        .UNINSTALL_SHORTCUT: true,
        .WAKE_LOCK: true,
        .VIBRATE: true,
        .NFC: true,
        .PUSH_PROVIDER: true,
        .RECEIVE: true,
        .READ_SYNC_STATS: true,
        .RECEIVE_BOOT_COMPLETED: true,
        .USE_CREDENTIALS: true,
        .CHANGE_NETWORK_STATE: true,
        .MODIFY_AUDIO_SETTINGS: true,
        .BLUETOOTH_ADMIN: true,
        .DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION: true,
        .READ_PROFILE: true,
        .INTERNET: true,
        .ACCESS_NETWORK_STATE: true,
        .ACCESS_WIFI_STATE: true,
        .FLASHLIGHT: true,
        .PROCESS_PUSH_MSG: true,
        .GET_TASKS: true,
        .FOREGROUND_SERVICE: true,
        .INSTALL_SHORTCUT: true,
        .USE_FULL_SCREEN_INTENT: true,
        .USE_FINGERPRINT: true,
        .READ_SYNC_SETTINGS: true,
        .WRITE_SYNC_SETTINGS: true,
        .MANAGE_ACCOUNTS: true
    },
    availMem: 2771857408,
    roam: false,
    brand: "samsung",
    gsmId: 0,
    wifiLevel: 4,
    adb: true,
    androidId: "1624b19d98032038",
    height: 2960,
    longitude: 0,
    bootTime: 1748693233540,
    appVer: "3.38.1",
    simState: "1-0",
    wifiSsid: "<unknown ssid>",
    timeZone: "GMT+01:00",
    customName: "Galaxy S9+",
    callState: 0,
    sto: 55841292288,
    wifiMask: "0.0.0.0",
    exSto: 55841292288,
    wifiFreq: 2437,
    phoneName: "star2ltexx",
    scaledDensity: 3.5,
    signature: "6808c4792542c64ab35a4c8b9145f5bdadfa8dff",
    latitude: 0,
    kernelVer: "4.9.218",
    exAvailSto: 54707752960,
    installTime: 1748696093501,
    battery: 68,
    chargeStatus: 2,
    routerMac: "02:00:00:00:00:00",
    availSto: 54573535232,
    mac: "12:13:b1:19:70:10",
    osVer: "10",
    mem: 5930467328,
    wifiDns: "10.8.0.1",
    cpuCore: 8,
    os: "Android",
    rotation: 0,
    wifiStatus: 3,
    cpuName: "-1",
    wifiGateway: "10.8.0.1",
    densityDpi: 560,
    exStoMounted: true,
    localTime: 1748696364001,
    brightness: 24,
    wlanMac: "12:13:b1:19:70:10",
    cpuMaxFreq: 2704000,
    inputMethod: "Android Keyboard (AOSP)",
    width: 1440,
    sdkVer: "vcp_change_67900885.2",
    wifiChannel: 6

}
```

Next is another request to the same domain, but this time it appears to be encrypted: the "default" parameter after being base64 decoded presents and entropy of 7.949, which is caracteristic of encrypted data. We couldn't decrypt it during the analysis.

```json
[
  {
    "_requestBody": [
      {
        "apdid": "I3CIkigMUn2MDHifQETxziVk1IzSAgqpQ4mB1e+6wW9tD2jn3xRteLKa",
        "dataMap": {
          "wbType": "1",
          "default": "pUDYUGRjHbJfrsE+A+Hm9W0V/9xUdnmGL4jaez1wcta+xkyh9V6yuRwELV3JIz0j28EOLikjqHwRFkrxWNsCuKjPVKh0PEolDwNAg1h6yDR/iGKSXgIynU38P3m/WlUfILTaJkLvi9T
          [...]
          +aNSc9kBNQMjpPAORY5DfXaQYRHx7ugTldD46iUYPyJE0D0h1e5FfEwI8nA==",
          "bizData": "AQAB_BEFORHjjxjdxAAAAUAAhAAAAAAAG/2wmlwEAAIJscszxkiimCIB60y0arJisz7KdyJ/KPY2ykUL2GASddAEqw+AKKgeWBePffl16PN6MoD3650tly6wdhmuF724RPL03BPFIw8OMZfTqAIGuAdnfxNS0Z77wO+dJtVPTnWW64HLHFPHxRCmMJh1o+SaI"
        },
        "dynamicKey": "VZNZNbdi2hsr97SqTKjPTpf5b35Qyw1yyqRpjtWJvbWVoEGqHjy3wvIcbCaXAQAA",
        "lastTime": "1748695198901",
        "os": "android",
        "priApdid": "I3CIkigMUn2MDHifQETxziVk1IzSAgqpQ4mB1e+6wW9tD2jn3xRteLKa",
        "token": "tHAgLPo0OxSjTFi3n+M+h4HIGcWjHK+PnLOq4tMXy+gvPGkmlwEAAA==",
        "umidToken": "",
        "version": ""
      }
    ]
  }
]
```


### requests to smnvc[.]com

We have a request ping.smnvc[.]com, sending information about the device model and brand, along with Botim's version and an uid.

```json
{
    devicetype: "1",
    version: "3.38.1",
    devicekey: "d31a4545-7256-43ec-b107-197a5ed9b9db",
    language: "en",
    devicetoken: "d__7EddAQeOIMDYVvbRIAU:APA91bGI5pcSkOO3qPxudQ5sxBWmhtR6IVOVH2GDs69aDnVKq9nbtf7vwRbFPYmYonRWlWXKFpkxYsgja1ET8esN1tzQtETlypdW8pvKcauBL7pntPx88PI",
    uid: "33621990882",
    supportsendsms: "true",
    countrycode: "33",
    model: "SM-G965F",
    brand: "samsung"
}
```

Another request is sent to record.smnvc[.]com, with a huge data chunk presenting high entropy, meaning it is probably compressed or encrypted.

### requests to fundingchoicesmessages.google[.]com

POST to fundingchoicesmessages.google[.]com

```json
{
  "admob_app_id": "ca-app-pub-7071340978991784~8964103268",
  "device_info": {
    "os_type": "ANDROID",
    "model": "SM-G965F",
    "android_api_level": 29
  },
  "language_code": "en-US",
  "tag_for_under_age_of_consent": false,
  "screen_info": {
    "width": 411,
    "height": 773,
    "density": 3.5
  },
  "app_info": {
    "package_name": "im.thebot.messenger",
    "publisher_display_name": "Botim",
    "version": "3403"
  },
  "sdk_info": {
    "version": "2.2.0"
  }
}
```

## Conclusion

The analysis of **Botim v3.38.1** reveals an application embedding a lot of trackers and asking for **a lot** of permissions, most of which can be pretty dangerous if used in a malicious way. The network traffic of the application while suprisingly not as bad as we expected still exports technical information to the UAE. 

The scary part really is about the permissions. Accessing location, activity, being able to record audio and video, manage contacts, and writing and reading to the file system is already too much. But it gets worse with the added permission to requests packages installation. Even though the application in itself might not be malicious, it seem like a good target for attacks, because gaining a first foothole through this apps allows for a lot of options to escalate the attack.

It is important to remind ourself that the app offers the possibility to ask for a Visa, implying the user will have to upload their passport. Dealing with this kind of sensitive information while being this lax on the permissions requested does not inspire trust.
