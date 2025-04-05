---
title: Analysis of Istanbul Senin
summary: "Istanbul Senin is a heavily protected Android application designed to give information about Istanbul and its many activities. The app is heavily protected and asks for a lot of concerning permissions."
lead: ""
date: 2025-03-31
lastmod: 2025-03-31
draft: false
weight: 50
toc: true
contributors: ["Emy Canton"]
images: []
categories: ["analysis reports"]
---

**Istanbul Senin** is an Android application created by the city of Istanbul, it is aimed to give information on the city and help its people find points of interest and important locations. It is designed as an application providing many "mini-apps", that are specialised applications for various purposes. There's a mini-app for viewing some public city webcams, one to get the Ramadan calendar with the sunset and sunrise hours, another to connect to the city's public WiFi, and many more. Most of those mini-apps requires to create an account and login.
The analysis could not be very thorough because of the heavy protection mechanisms and the necessity to have a Turkish phone numbner to create an account.

## Android Sample

We’ve analyzed the following version of the app `com.tr.gov.ibb.istanbulsenin`:

- MD5: ` 0c3145df662c88a914d2291748210d91`
- SHA1: ` af2d4a1ea66d540218eda11830250abc93132ed3`
- SHA256: ` 97532c13351b91b1fc558da6fe4e918373151420eefbdb11ea51c91a6a6a3817`

## APK Analysis

### Application Info

- Application name: `İstanbul Senin`
- Package: `com.tr.gov.ibb.istanbulsenin`
- Version name: `15.24.4`
- Version code: `16156`

### Certificate Info

- MD5: `d960647e286b874a522946bdda045266`
- SHA1: `4663b2b59e85bc81349315ae2826561d72bf03c0`
- SHA256: `54a41f86f590b7f97f66db5e847d043e94f9b1527a6b37281b26fe8b8eaba66e`
- Issuer: `Organization: Google Inc.`
- Not before: `2020-10-12 06:59:52+00:00`
- Not after: `2050-10-12 06:59:52+00:00`

### Dangerous permissions (Google classification)

This application requests the following permissions:

#### High risk

- `android.permission.ACCESS_FINE_LOCATION`: Access fine location sources, such as the Global Positioning System on the phone, where available. Malicious applications can use this to determine where you are and may consume additional battery power.
- `android.permission.CAMERA`: Allows application to take pictures and videos with the camera. This allows the application to collect images that the camera is seeing at any time.
- `android.permission.POST_NOTIFICATIONS`: Allows an app to post notifications
- `android.permission.READ_EXTERNAL_STORAGE`: Allows an application to read from external storage.
- `android.permission.READ_MEDIA_AUDIO`: Allows an application to read audio files from external storage.
- `android.permission.READ_MEDIA_IMAGES`: Allows an application to read image files from external storage.
- `android.permission.READ_MEDIA_VIDEO`: Allows an application to read video files from external storage.
- `android.permission.READ_PHONE_STATE`: Allows the application to access the phone features of the device. An application with this permission can determine the phone number and serial number of this phone, whether a call is active, the number that call is connected to and so on.
- `android.permission.RECORD_AUDIO`: Allows application to access the audio record path.
- `android.permission.WRITE_EXTERNAL_STORAGE`: Allows an application to write to external storage.

#### Low risk

- `android.permission.ACCESS_NETWORK_STATE`: Allows an application to view the status of all networks.
- `android.permission.ACCESS_WIFI_STATE`: Allows an application to view the information about the status of Wi-Fi.
- `android.permission.CHANGE_NETWORK_STATE`: Allows applications to change network connectivity state.
- `android.permission.CHANGE_WIFI_MULTICAST_STATE`: Allows an application to receive packets not directly addressed to your device. This can be useful when discovering services offered nearby. It uses more power than the non-multicast mode.
- `android.permission.CHANGE_WIFI_STATE`: Allows an application to connect to and disconnect from Wi-Fi access points and to make changes to configured Wi-Fi networks.
- `android.permission.INTERNET`: Allows an application to create network sockets.
- `android.permission.MODIFY_AUDIO_SETTINGS`: Allows application to modify global audio settings, such as volume and routing.
- `android.permission.USE_BIOMETRIC`: Allows an app to use device supported biometric modalities.
- `android.permission.USE_FINGERPRINT`: This constant was deprecated in API level 28. Applications should request USE_BIOMETRIC instead.
- `android.permission.VIBRATE`: Allows the application to control the vibrator.
- `android.permission.WAKE_LOCK`: Allows an application to prevent the phone from going to sleep.
- `com.google.android.c2dm.permission.RECEIVE`: Allows an application to receive push notifications from cloud.
- `com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE`: A custom permission defined by Google.
- `com.google.android.gms.permission.AD_ID`: This app uses a Google advertising ID and can possibly serve advertisements.

#### Unknown permissions

- `android.permission.AUDIO_CAPTURE`
- `android.permission.VIDEO_CAPTURE`
- `com.tr.gov.ibb.istanbulsenin.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`
- `com.tr.gov.ibb.istanbulsenin.permission.PROCESS_PUSH_MSG`
- `com.tr.gov.ibb.istanbulsenin.permission.PUSH_PROVIDER`

## Application analysis

### Tracker SDKs

The application is bundled with a few well-known tracker SDKs:

- Adjust
  > Mobile Retargeting
  > Retargeting users is a proven way to drive growth, but it can be challenging to gather all the necessary data required for partners to carry out retargeting campaigns. What should be a day-long task can take much longer. With Audience Builder, you can define audiences using your Adjust data and act immediately upon them.
- Huawei Mobile Services
  > HMS Core is a collection of tools made for Huawei’s partners and app developers. It includes Ads Kit, Analytics Kit, Location Kit, and more.
- Segment
  > Collects behavioral data
- Sentry
  > Sentry's Android SDK reports an error automatically whenever a thrown exception goes uncaught in your application causing the application to crash.

### Code obfuscation and protections

The application uses the [Kobil Framework](https://www.kobil.com/)

> KOBIL App Security is a combination of app and server side security functions, to protect your app and the identity of the user of your app.
> It provides
> protection against other apps on same device ('App Shielding hardens your app')
> secure communication to server
> secure user registration
> secure user account activation and login ('Trusted Login')
> secure user transaction confirmation ('Transaction Signature' - 'TMS')
> secure communication to web server ('Trusted WebView' - 'TWV')
> secure IDP-Token ('Single Sign On') - only with KOBIL Shift Lite solution

It is unclear if the use of the kobil framework is responsible for the heavy obfuscation I faced during static analysis of the application, but it is definitely responsible for breaking all the Frida scripts I could try to throw at it.

The application code is also heavily obfuscated, with the use of xored string obfuscation, dead code, redundant code and misleading branching.

## Traffic analysis

Unfortunately, the application usage of Kobil made it impossible to decrypt the network traffic without doing a very intensive reverse engineering work beforhand.

However, we could observe that the app comunicates with the following domains:

### Tracking domains:

- o1052226.ingest.sentry.io

### Kobil server

These domains are part of the Kobil SDKs, a kobil app is always connected to a dedicated server.

- ibb03.api.ibb-prod.istanbulsenin.kobil.com
- telemetry.ibb-prod.istanbulsenin.kobil.com
- smartscreen.ibb-prod.istanbulsenin.kobil.com
- icerik-web.miniapp-prod.istanbulsenin.kobil.com

### Istanbul services

These domains are contacted when we open the "mini-apps" on the application. These "mini-apps" are basically webviews that opens inside the Istanbul Senin app, providing various services, from air quality levels, to trees locations, where to get water, and much more.
This list is only a few domains contacted, there are a lot more, but it wouldn't make much sense copying them all here.

- hamidiyesu.istanbulsenin.istanbul
- icerik.istanbulsenin.istanbul
- anitagac.istanbul
- ...

### Governement services:

In the middle of all the domains contacted, a few of them belongs to the Turkish government.

- services.ibb.gov.tr
- haritaservis.ibb.gov.tr

## Conclusion

The analysis of **İstanbul Senin v15.24.4** reveals a heavily secured and coomplex application that provides a huge amount of services. While our analysis did not prove that the application is inherently malicious, it shows a concerning amount of shady behaviors.

The permissions asked are very concerning, however they seem to be used in specific scenarios by specific "mini-apps", but our analysis could not be thorough enough to ensure they are not misused. Asking for `ACCESS_FINE_LOCATION`, `CAMERA`, `RECORD_AUDIO`, `READ_EXTERNAL_STORAGE`, and `READ_PHONE_STATE` could make for the perfect spyware. Along with the fact that it is necessary to install the application to access the city's public WiFi ([as shown here](https://isttelkom.istanbul/hizmetlerimiz/kablosuz-ag-hizmetleri/)), it seems that they want to push the population to install the application.

The fact that some domains belonging to the Turkish government are directly contacted by the applications may raise concerns too.

Overall, with the heavy protection mechanisms, the permissions asks and the ties to the Turkish governement, İstanbul Senin is an app you may not want to install on your phone.
