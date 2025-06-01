---
title: Analysis of Botim v3.38.1
summary: "Botim [...]"
lead: ""
date: 2025-05-29
lastmod: 2025-05-31
draft: true
weight: 50
toc: true
contributors: ["Emy Canton"]
images: []
categories: ["analysis reports"]
---

**Botim** is an Android application that [...]


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

The application uses the following trackers SDKs:

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


POST to fp-aen.astratech[.]ae


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

Encrypted data "default" (entropy is 7.949)

```json
[
  {
    "_requestBody": [
      {
        "apdid": "I3CIkigMUn2MDHifQETxziVk1IzSAgqpQ4mB1e+6wW9tD2jn3xRteLKa",
        "dataMap": {
          "wbType": "1",
          "default": "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",
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

POST to ping.smnvc[.]com

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

## Conclusion

The analysis of **Botim v3.38.1** reveals a

