---
title: Analysis ShamCash app v0.2.0
summary: "The analysis of ShamCash v0.2.0 reveals a fairly secure application designed to handle crypto and financial transactions."
lead: ""
date: 2025-02-28
lastmod: 2025-03-02
draft: false
weight: 50
toc: true
contributors: ["Emy Canton"]
images: []
categories: ["analysis reports"]
---

---

**ShamCash** is an Android application probably created by a Turkish company named NorthSoft. The application is a wallet for crypto currency and a platform designed to make financial transactions between its users. The application uses the Flutter framework, making it's analysis quite the hastle. Furethermore, it makes extensive use of cryptographic schemes, rendering it's internal working very obscure. In this analysis, we tried to get some information on these protection mechanisms.

## Android Sample

We’ve analyzed the following version of the app `com.shmacash.shamcash`:

- MD5: `eed4ad23e4ff4d3c87ed9065d605afa9`
- SHA1: `d649a552131f1710f69da1f68191ddf819070788`
- SHA256: `005f01a3ac5333558fdd39217ad6907910af168d984e89f5b04369c451438f95`

## APK Analysis

### Application Info

- Package: `com.shmacash.shamcash`
- Version name: `0.2.0`
- Version code: `4`
- Uses Flutter framework

### Certificate Info

- MD5: `bb0f201d8454afbbdea071ad48fb968e`
- SHA1: `6fbcbd2ffea9df604b571f818d65839cc95e7393`
- SHA256: `29aa4f05912c0eb2269320c230e0588cb1f9ce6320f4907b5f96cb8ffb0bf8d2`
- Issuer: `Organization: ShamCash, Common Name: NorthSoft`
- Not before: `2024-07-22T15:30:18+00:00`
- Not after: `2051-12-08T15:30:18+00:00`

### Dangerous permissions (Google classification)

This application requests the following permissions:

#### High risk

- `android.permission.CAMERA`: Allows application to take pictures and videos with the camera. This allows the application to collect images that the camera is seeing at any time.

This permission is asked in order to scan QRcodes to load a wallet address.

#### Medium risk

- `com.google.android.c2dm.permission.RECEIVE`: Permission for cloud to device messaging.

#### Low risk & unclassified

- `android.permission.USE_BIOMETRIC`: Allows an app to use device supported biometric modalities.
- `android.permission.USE_FINGERPRINT`: This constant was deprecated in API level 28. Applications should request USE_BIOMETRIC instead.
- `android.permission.ACCESS_NETWORK_STATE`: Allows an application to view the status of all networks.
- `android.permission.INTERNET`: Allows an application to create network sockets.
- `android.permission.WAKE_LOCK`: Allows an application to prevent the phone from going to sleep.
- `android.permission.POST_NOTIFICATIONS`: Unknown permission from android reference.
- `com.shmacash.shamcash.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`: Unknown permission from android reference.

## Traffic Analysis

The application was dynamically analyzed with PTS and custom frida scripts to decrypt flutter's HTTPS communications, this analysis showed that the application communicates exclusively with `shamcash.com`. The content of the requests seem to be themselves further encrypted with rolling AES keys, which are themselves encrypted using RSA 2048 in each requests.

Except for the login request, which is different, all other requests uses the same encrypted format.

### Login Request:

During the login request, a RSA 2048 public key is sent to the server, along with an AES 128 key.

```json
{
  "email": "[REDACTED]@[REDACTED].com",
  "_password": "[REDACTED]",
  "notify": "e-JttYgaRNSfJaWW1bH8w9:APA91bHZOx_J9iFwdd7yEPPEy7PbAfiO6Ubsi-n9HG57-nF-_GV--NA7ZYceQKAw3FsZp8yJoxHe99G5AennRn_oo8Iuarh4KC5_YFgw2wrGSqr-OI7yvb8",
  "refreshToken": "",
  "token": "",
  "publicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAzSiYIm/IqWcY/TUfTfzAQuXtWhyvBt59NR7a6wh0JnCyO2dtvtRF\nO/klvQIK/wlIaqcaefRRGfudwnMimR6T4n/MAkyycqkNxMnOr6TL0jx3v1UGrQvN\n5D5OJ0X8ufDgDMdrt2hfkpMaMiMrdekyIgci/1RfVXPjSu1owsupnd7LOqol3H8B\nao5noJjBO+k9W73pGXR0mfPjKfn+9fgGa1rbgTnywawwY4duVVMy/m5Xq5Fdbh0E\nbTEl6zCfyLuUOM9Y/FOXFcW/tehkDdMwoGB1l1MeP8ej4e8jKaaPUqHaRxMegBUm\nLwZdGNaVO1+lfKsOrFokDEzXf0V0NcjWDwIDAQAB\n-----END RSA PUBLIC KEY-----\n",
  "aESKey": "TvzYTvjN9Afl4hP7v0By3w=="
}
```

### Other Requests:

Every other requests are of the following format:

```json
{
  "datakey": "bYUJ8P8PZR/RvI51Fn6xINFYjkGhyNJikuWqT9bAvqrPGGNTzk1hCRMDA/50RHqBDwbCI8JLYCl37tH6l04GL75K6QeNNSv4Vet72zFW9oIQPFWW60JeD7GkzzUWFEO1UFIehiIjdzw0w5e5DpJr9KXDm/aarcVL3MRQPxMhmLPgphK1wNVKHv5wRjObqPQ4VtEeNYOsJb30n7evQAg+QCdyBXTP62fF53dnHUpmFbBfgBZUy8tlYT9dcOMeqTRLPsg6I9irrKq1STfpzL9YrBTWPRuO2PGmSmvBOB9zMdqbPFX6MeHzjqkiSHnmuWCIBKUyH2g589lSORbnU49qwQ==",
  "datavalue": "FOrncq9FD2nNJgNtfpiQhhzw3dHwh7I1rL3B8vfzSt6nYPlxUOlWNVeL1/ZwIXXIvUYo++0TdrnIpXHWjQjIgpehbuqwiT3dulros4yV5k+nuh7H1X5mlHYm8vy76Nn7iZdxoJU2mBZF/iUbwSSFHud54k/hinrR2Bg3nVliXX0jJdy3Tf/ABwZ48fBSqtnMaqBVzo6ZcYSl6X83LL/FyZziqECDSfd0CRDyCTgo9Amx1QU2fSicXllACQAVmwBZJt/Y5QTYqW/4BpjmDkqOktnSG3QVAy0MqtnAqscgWbw7eG5l1R4ykca2nzH80L528sqr6WXKwN3Jtb19Bw3l4kzERQ4UgK9DktwXC0nXR/r0qqqgI4KrEd4=.8lFfaaHdushEq1cF"
}
```

The server's response are of the same format, with new values everytime. Here are a few things to note about these cryptic values:

#### Datakey

`datakey` is always `2048` bytes long, it changes for **every** requests. We suppose this is the AES 128 key used to encrypt/decrypt the `datavalue`, this seems to be encrypted using RSA 2048.

#### Datavalue

`datavalue` always contains 2 distinct parts, separated by a `.`.
The first part of the message is of variable length, and varies with the length of the input request. For example, when changing our phone number, adding 1 byte to the phone number will consequently add 1 byte to the length of the first part of datavalue.

The second part is of fixed size and changes for every requests. This has a length of 12 bytes, i.e: `96 bits`. It would be the perfect length for a nonce for AES GCM.

### Triggering errors:

Since these values won't be easily decrypted without a proper reverse engineering of the flutter application, we tried to get a few more informations by triggering some errors from the server.

When messing up the json format, we get these errors:

```json
{
  "type": "https://tools.ietf.org/html/rfc9110#section-15.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "errors": {
    "$": [
      "Expected depth to be zero at the end of the JSON payload. There is an open JSON object or array that should be closed. Path: $ | LineNumber: 0 | BytePositionInLine: 781."
    ],
    "encryptParmInfo": ["The encryptParmInfo field is required."]
  },
  "traceId": "00-4131de92884f83bc6fc9779c2489228d-90768f33737c2aac-00"
}
```

Removing a `"`

```json
{
  "type": "https://tools.ietf.org/html/rfc9110#section-15.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "errors": {
    "encryptParmInfo": ["The encryptParmInfo field is required."],
    "$.datavalue": [
      "'0x0D' is invalid within a JSON string. The string should be correctly escaped. Path: $.datavalue | LineNumber: 0 | BytePositionInLine: 780."
    ]
  },
  "traceId": "00-45aa896660dae2f854096eae8dd6b03c-49e35f40a2c0e07c-00"
}
```

When removing or modifying one of `datakey` or `datavalue`, we receive an empty reply:

```json
{ "dataKey": null, "dataValue": null }
```

We were not successfull in getting more information out of those.

## Local Storage Analysis

With the usage of a private/public key pair, we expected to find a RSA private key somewhere in the application's storage.

The directory `/data/data/com.shmacash.shamcash/shared_prefs` contains a file called `FlutterSecureStorage.xml`, this files contains cryptographic informations, which unfortunately doesn't seem to be stored in cleartext.

```xml
<map>
    <string name="VGhpcyBpcyB0aGUgcHJlZml4IGZvciBhIHNlY3VyZSBzdG9yYWdlCg_refreshtoken">UlxFo490w0CxOeQbQvzGGUmenypc6S7S3s/6qhsXwu2Mzw2wsHACqNe2A3ptwxwqr9pesrmBdG4F&#10;WchAPbGMeQ==&#10;    </string>
    <string name="VGhpcyBpcyB0aGUgcHJlZml4IGZvciBhIHNlY3VyZSBzdG9yYWdlCg_privateKey">vai8R [...] kJ+9c3A== </string>
    <string name="FlutterSecureSAlgorithmStorage">AES_CBC_PKCS7Padding</string>
    <string name="VGhpcyBpcyB0aGUgcHJlZml4IGZvciBhIHNlY3VyZSBzdG9yYWdlCg_aeskey">qSUvLUekWEnP8hxyjij9ea3ObPDUIHdLrtYtKgsedJPRfBrFYfSZr6z+qN07cNjq&#10;    </string>
    <string name="FlutterSecureSAlgorithmKey">RSA_ECB_PKCS1Padding</string>
    <string name="VGhpcyBpcyB0aGUgcHJlZml4IGZvciBhIHNlY3VyZSBzdG9yYWdlCg_token">89fUd [...] XvfdI= </string>
    <string name="VGhpcyBpcyB0aGUgcHJlZml4IGZvciBhIHNlY3VyZSBzdG9yYWdlCg_sendKey">pd5TZyd6gsxYVXtM4sc5GLjidW1OHEJ7piqW+vUDN1KxbvwvpIwHXdo3M5JNJNiD </string>
</map>

```

## Conclusion

The analysis of **ShamCash v0.2.0** reveals a pretty straightforward application that seems to focus on doing its job in a fairly secure way. The layers of cryptographic schemes provides an opaque wall that would ward off many analysts. The foundations of this walls are themselves burried deep into the Flutter framework's inner working, which as the day of writing is a pain to reverse engineer.
However, despite all those layers of security, it is most probable that those protections would fall short before the might of a motivated analyst.

The only dangerous permissions (`android.permission.CAMERA`) asked is used to perform an acceptable actions in the application.

We did not observe any traffic to other domains than `shamcash.com`.

Overall the application appears to be designed for a specific purpose but uses very obscure ways of achieving this.
