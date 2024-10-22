---
title: Analysis of NetGuard v2.330
summary: "The analysis of NetGuard v2.330 reveals that, despite providing effective no-root firewall functionality, the app collects and transmits sensitive device and network data to Google without explicit user consent."
lead: ""
date: 2024-10-22
lastmod: 2024-10-22
draft: false
weight: 50
toc: true
contributors: ["Esther Onfroy"]
images: []
---

---

**NetGuard** is a popular Android application that provides users with a no-root firewall solution for managing and controlling network access on their devices. The app allows users to block both Wi-Fi and mobile data access on a per-application basis, giving them greater control over which apps can access the internet.

For more technical details, check the [analysis report of Pithus](https://beta.pithus.org/report/094b4d1f22886140709206a646f33fc945f01672c793a973060901ab0397a51a).

## Android Sample
The APK has been downloaded from the [GitHub release](https://github.com/M66B/NetGuard/releases/tag/2.330) page.

* MD5: `c20f0be04d40ef99cd1e1d06c40bba46`
* SHA1: `1eaad3706ca54769eebb45b384a7e73e988baca0`
* SHA256:	`094b4d1f22886140709206a646f33fc945f01672c793a973060901ab0397a51a`

## APK Analysis
### Application Info
* Package: `eu.faircode.netguard`
* Version name: `2.330`
* Version code: `2024090101`

### Certificate Info
* MD5: `b64ae8081c3c9c19d69e29004689da73`
* SHA1: `ef46f813d2c8a064d72c936b9b96d1cccc989378`
* SHA256: `e4a260a2dce7b7af23ee919c489e15fd0102b93f9e7c9d82b09c0b395000e4d4`
* Issuer: `Organization: faircode.eu`
* Not before: `2015-10-24T13:10:03+00:00`
* Not after: `2040-10-17T13:10:03+00:00`

### Permissions
This application requests the following permissions:
* `android.permission.READ_PHONE_STATE`: Allows the application to access the phone features and state of the device. An application with this permission can determine the phone number and serial number of this phone, whether a call is active, the number that call is connected to and so on.
* `android.permission.ACCESS_NETWORK_STATE`: Allows an application to view the status of all networks.
* `android.permission.ACCESS_WIFI_STATE`: Allows an application to view the information about the status of Wi-Fi.
* `android.permission.RECEIVE_BOOT_COMPLETED`: Allows an application to start itself as soon as the system has finished booting. This can make it take longer to start the phone and allow the application to slow down the overall phone by always running.
* `android.permission.WAKE_LOCK`: Allows an application to prevent the phone from going to sleep.
* `android.permission.INTERNET`: Allows an application to access Internet.
* `android.permission.VIBRATE`: Allows the application to control the vibrator.
* `android.permission.FOREGROUND_SERVICE`: Allows the application to create foreground services and keep running in the background.
* `android.permission.QUERY_ALL_PACKAGES`: Allows the application to query any package currently installed on the phone.
* `android.permission.POST_NOTIFICATIONS`: Allows the application to post notifications.
* `android.permission.FOREGROUND_SERVICE_DATA_SYNC`: Allows the application to create foreground services and keep synchronizing data in the background.
* `com.android.vending.BILLING`: Allows the application to support in-app purchase.

## Data Collection and Transmission
In the course of analyzing the Android application, it was observed that the app transmits a variety of device-specific and network-related data to Google. As the application supports in-app purchase with Android Billing (e.g. to purchase the PRO version), the application collects, without user's consent, the following information and transmits the information to `https://firebaselogging.googleapis.com/v0cc/log/batch`. The analysis of the `MANIFEST` confirms the integration of Android Billing since an activity `com.android.billingclient.api.ProxyBillingActivity` is declared.

The transmitted data includes:
* **Device Information:** This category encompasses details about the user's device, such as the model, manufacturer, and fingerprint. This information can be used to identify individual devices and track user behavior across different applications.
* **Country Level Location Data:** The application collects both the user's locale and country information. This data can be used to target advertisements and personalize content based on the user's geographic location.
* **Carrier Information:** The MCC and MNC codes (read from the SIM card) provide a unique identifier for the user's mobile carrier. This information can be used to track the user's network usage and potentially identify their location.
* **Network Metrics and Connection Type:** The application collects various metrics related to the user's network connection, including the type of connection (e.g., Wi-Fi). This data can be used to analyze network performance and identify potential issues.

It's important to note that the collection and transmission of this data may raise privacy concerns depending on the user's threat model, as it can be used to track and potentially identify individual users. Users may be unaware of the extent of data collection and transmission, and they may not have given explicit consent for their data to be used in this manner.

## Conclusion
The analysis of **NetGuard v2.330** confirms that the application provides users with an effective no-root firewall solution, enabling them to control which apps can access the internet via both Wi-Fi and mobile data. However, this functionality comes with privacy concerns. Despite the application's intent to protect users from unwanted network access by apps, our investigation reveals that NetGuard itself collects and transmits device-specific data to Google, including information such as device model, manufacturer, network details, mobile carrier information, and country-level location data. This data collection occurs without explicit user consent and is sent to Google's Firebase logging service, which is integrated into the app’s billing mechanisms.

Furthermore, the application requests a range of permissions that allow it to access sensitive device information, including `READ_PHONE_STATE` and `ACCESS_NETWORK_STATE`, among others. While some of these permissions are justified for the firewall's functionality, others—such as the ability to collect information from the SIM card—raise questions about potential overreach in terms of data access.

In light of these findings, while **NetGuard** remains a powerful tool for managing app network access without root privileges, users should be made aware of the data collection practices embedded within the application. Those with heightened privacy concerns, particularly around device tracking and personal data sharing with third parties like Google, may want to exercise caution. To maintain transparency and user trust, it would be advisable for future versions of NetGuard to provide clearer consent mechanisms and greater control over the data shared with third-party services.

# Annexes

## Call graph
{{< figure src="img/netguard_telephony.png" caption="Part of the application collecting information about telephony" >}}

## Java code of NetGuard data collection
```java
public static String eu.faircode.netguard.Util.getGeneralInfo(android.content.Context p8)
{
    StringBuilder v0_1 = new StringBuilder();
    Object[] v1_10 = ((android.telephony.TelephonyManager) p8.getSystemService(phone));
    int v3_11 = new Object[1];
    v3_11[0] = Boolean.valueOf(eu.faircode.netguard.Util.isInteractive(p8));
    v0_1.append(String.format("Interactive %B", v3_11));
    int v3_1 = new Object[1];
    v3_1[0] = Boolean.valueOf(eu.faircode.netguard.Util.isConnected(p8));
    v0_1.append(String.format("Connected %B", v3_1));
    int v3_3 = new Object[1];
    v3_3[0] = Boolean.valueOf(eu.faircode.netguard.Util.isWifiActive(p8));
    v0_1.append(String.format("WiFi %B", v3_3));
    int v3_5 = new Object[1];
    v3_5[0] = Boolean.valueOf(eu.faircode.netguard.Util.isMeteredNetwork(p8));
    v0_1.append(String.format("Metered %B", v3_5));
    int v3_7 = new Object[1];
    v3_7[0] = Boolean.valueOf(eu.faircode.netguard.Util.isRoaming(p8));
    v0_1.append(String.format("Roaming %B", v3_7));
    if (v1_10.getSimState() == 5) {
        int v3_10 = new Object[3];
        v3_10[0] = v1_10.getSimCountryIso();
        v3_10[1] = v1_10.getSimOperatorName();
        v3_10[2] = v1_10.getSimOperator();
        v0_1.append(String.format("SIM %s/%s/%s", v3_10));
    }
    String v4_22 = new Object[3];
    v4_22[0] = v1_10.getNetworkCountryIso();
    v4_22[1] = v1_10.getNetworkOperatorName();
    v4_22[2] = v1_10.getNetworkOperator();
    v0_1.append(String.format("Network %s/%s/%s", v4_22));
    int v3_14 = android.os.Build$VERSION.SDK_INT;
    String v4_24 = new Object[1];
    v4_24[0] = Boolean.valueOf(((android.os.PowerManager) p8.getSystemService(power)).isPowerSaveMode());
    v0_1.append(String.format("Power saving %B", v4_24));
    if (v3_14 >= 23) {
        Object[] v1_4 = new Object[1];
        v1_4[0] = Boolean.valueOf(eu.faircode.netguard.Util.batteryOptimizing(p8));
        v0_1.append(String.format("Battery optimizing %B", v1_4));
    }
    if (v3_14 >= 24) {
        Object[] v1_7 = new Object[1];
        v1_7[0] = Boolean.valueOf(eu.faircode.netguard.Util.dataSaving(p8));
        v0_1.append(String.format("Data saving %B", v1_7));
    }
    if (v0_1.length() > 2) {
        v0_1.setLength((v0_1.length() - 2));
    }
    return v0_1.toString();
}
```

## Java code of Android Billing data collection
```java
public final com.google.android.datatransport.cct.d.e0.s a(e0.s p6) 
{
    String v1_11;
    String v0_2 = this.b.getActiveNetworkInfo();
    e0.s v6_2 = p6.l();
    v6_2.a(android.os.Build$VERSION.SDK_INT, sdk-version);
    v6_2.c("model", android.os.Build.MODEL);
    v6_2.c("hardware", android.os.Build.HARDWARE);
    v6_2.c("device", android.os.Build.DEVICE);
    v6_2.c("product", android.os.Build.PRODUCT);
    v6_2.c("os-build", android.os.Build.ID);
    v6_2.c("manufacturer", android.os.Build.MANUFACTURER);
    v6_2.c("fingerprint", android.os.Build.FINGERPRINT);
    java.util.Calendar.getInstance();
    v6_2.b(((long) (java.util.TimeZone.getDefault().getOffset(java.util.Calendar.getInstance().getTimeInMillis()) / 1000)));
    if (v0_2 != null) {
        v1_11 = v0_2.getType();
    } else {
        v1_11 = d0.C.e.e();
    }
    String v0_3;
    v6_2.a(v1_11, net-type);
    if (v0_2 != null) {
        v0_3 = v0_2.getSubtype();
        if (v0_3 != -1) {
            if (d0.B.d(v0_3) == null) {
                v0_3 = 0;
            }
        } else {
            v0_3 = d0.B.f.e();
        }
    } else {
        v0_3 = d0.B.e.e();
    }
    v6_2.a(v0_3, mobile-subtype);
    v6_2.c("country", java.util.Locale.getDefault().getCountry());
    v6_2.c("locale", java.util.Locale.getDefault().getLanguage());
    String v0_10 = this.c;
    v6_2.c("mcc_mnc", ((android.telephony.TelephonyManager) v0_10.getSystemService(phone)).getSimOperator());
    try {
        int v2_12 = v0_10.getPackageManager().getPackageInfo(v0_10.getPackageName(), 0).versionCode;
    } catch (String v0_13) {
        J.h.o(CctTransportBackend, Unable to find version code for package, v0_13);
    }
    v6_2.c("application_build", Integer.toString(v2_12));
    return v6_2.d();
}
```
