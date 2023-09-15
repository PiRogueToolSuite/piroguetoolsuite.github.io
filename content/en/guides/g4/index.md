---
title: Beginner guide - How to backup a mobile device for forensic analysis purpose
weight: 40
toc: true
draft: true
---

Creating a backup of a mobile device is a crucial and standard procedure in forensic analysis. It provides us with a secure and unaltered copy of the data, enabling a thorough and reliable investigation.

The backup ensures that we have a copy of the data that can be analyzed without affecting the original evidence of a potentially compromised device. Mobile device backups contain a partial copy of the filesystem, including user data and service databases. The timestamps of files, folders, and database records allow us to reconstruct the events that occurred on the device. Additionally, having a backup serves as a safety net for data recovery if any issues arise during the examination.

Mobile devices also contain volatile data, which can be lost if the device is powered off or rebooted. Creating a backup allows us to capture and analyze this volatile data, such as running processes, open applications, and network connections, which can be valuable for the investigation.

By having a backup, we can cross-validate the data obtained from the mobile device with the data extracted during the forensic analysis, ensuring the accuracy and reliability of the findings.

Moreover, if the analysis escalates to a court investigation, creating a backup and documenting the process helps maintain a clear chain of custody, demonstrating that the data was handled correctly and not tampered with. In certain jurisdictions, it may even be a legal requirement to create a forensic backup before conducting an analysis to ensure the evidence's authenticity and validity in court.

In this guide, we will walk you through the steps of creating a device backup on PiRogue, using different tools that comes pre-installed on PiRogue. However, we will also include steps and documentation for backup creation for non-PiRogue users and alternative methods.

## Preparation
To prepare your mobile device for backup, make sure the following:
* Your device is fully charged.
* Your device is in *Airplane Mode* then turned off until backup time.
* The backup files can be really large, be sure to have enough space on your PiRogue by using a large SD card or an USB external drive.
* If you’re storing the backup on your computer make sure to have enough space.

## Backup an iOS device
There are two ways to backup an iOS device, it depends on what computer you’re creating the backup. If you have a MacOS device it would be easier for you to create the backup with iTunes, if not so you will need to create it with command line using a third party tool.

### Backup with iTunes on your computer
#### Prerequisites

* You need to have iTunes installed on your computer running MacOS.
* You need to have a USB cable to connect your iOS device to your computer.
* You need to create a folder on your computer where you want to save the backup file.

#### Backup instructions

* **Install iTunes**: If you don't have iTunes installed on your computer, download and install the latest version from the Apple website.
* **Connect your iOS device**: Use a USB cable to connect your iOS device (iPhone, iPad, or iPod touch) to your computer. Launch iTunes if it doesn't open automatically.
* **Trust the computer**: On your iOS device, you may see a prompt asking you to "Trust This Computer." Enter your device passcode and tap "Trust" to establish the connection.
* **Select your device**: In iTunes, you'll see an icon representing your iOS device in the upper-left corner. Click on it to access the device's summary page.
* **Choose backup method**: On the summary page, you have two backup options:
  * a. **Back up to iCloud**: This will back up your device to your iCloud account. Ensure that iCloud Backup is turned on in your device settings (Settings > [your name] > iCloud > iCloud Backup). If you want to back up to your computer, choose the next option.
  * b. **Back up to this computer**: This option will create a local backup on your computer.
* **Start the backup**: If you chose to back up to your computer, click on "Back Up Now" under the "Manually Back Up and Restore" section. iTunes will start the backup process, and you can monitor its progress on the top bar of the iTunes window.
* **Wait for the backup to complete**: The backup process may take some time, depending on the amount of data on your device. Make sure not to disconnect your device until the backup is complete.
* **Verify the backup**: After the backup is finished, you can verify it by going to iTunes Preferences (on Mac) or Edit > Preferences (on Windows) and selecting the "Devices" tab. You should see your device's backup listed there with the date and time.

On Windows, the backup can be stored either in `%USERPROFILE%\Apple\MobileSync\` or `%USERPROFILE%\AppData\Roaming\Apple Computer\MobileSync\`. On macOS, the backup is stored in `~/Library/Application Support/MobileSync/`.

You can also refer to the [MVT documentation](https://docs.mvt.re/en/latest/ios/backup/itunes/).

### Backup with command line on your computer or on your PiRogue
Backing up an iOS device with *libimobiledevice* allows you to perform backups without using iTunes. *libimobiledevice* is an open-source software library that provides communication and backup capabilities for iOS devices. 

#### Prerequisites

* You need to have [*libimobiledevice*](https://libimobiledevice.org/) installed on your computer, it is pre-installed on your PiRogue. If you don’t have it installed, follow the installation instructions [here](https://docs.mvt.re/en/latest/ios/install/).
* You need to have a USB cable to connect your iOS device to your computer.
* You need to create a folder on your computer where you want to save the backup file.

#### Backup instructions

* **Connect your iOS device**: Use a USB cable to connect your iOS device to your computer.
* **Unlock your iOS device**: Unlock your iOS device and, if prompted, tap "Trust" to establish a connection with your computer.
* **Open Terminal (macOS/Linux) or Command Prompt (Windows)**: You'll use the command line to execute the backup command.
* **Check device connection**: To ensure your iOS device is detected, run the following command: 
  
  ```idevice_id -l```
  
  If your device's UUID is displayed, it means the device is connected and recognized.
* **Turn backup encryption on by running the command**: 

  ```idevicebackup2 backup encryption on -i```
  
  {{< alert icon="👉" >}}
  Note that if a backup password was previously set on this device, you might need to use the same or change it. You can try changing password using `idevicebackup2 -i changepw`, or by turning off encryption (`idevicebackup2 -i encryption off`) and turning it back on again.
  {{< /alert >}}

* **Backup your iOS device**: To perform the backup, use the `idevicebackup2` command followed by the backup destination path:

  | Operating system      | Command                                                                             |
  |-----------------------|-------------------------------------------------------------------------------------|
  | on Linux              | `idevicebackup2 backup --full /path/to/backup/folder`                               |
  | on Windows Powershell | `idevicebackup2.exe backup --full /path/to/backup/folder`                           |
  | on Mac OS             | `idevicebackup2 backup --full /path/to/backup/folder`                               |

  Replace `/path/to/backup/folder` with the actual location on your computer where you want to save the backup.
* **Wait for the backup to complete**: The backup process may take some time, depending on the amount of data on your device.

#### Create a ZIP archive of the backup
`idevicebackup2` does not create a single file, it creates a folder instead. So, in order to later share the backup with an expert, you have to create a ZIP archive of it.

| Operating system      | Command                                                                             |
|-----------------------|-------------------------------------------------------------------------------------|
| on Linux              | `zip -r ~/my_backup.zip /path/to/backup/folder`                                     |
| on Windows Powershell | `Compress-Archive -Path D:/path/to/backup/folder -DestinationPath D:/my_backup.zip` |
| on Mac OS             | `zip -r ~/my_backup.zip /path/to/backup/folder`                                     |

Some additional explanations of the commands:

* The `Compress-Archive` command in Windows Powershell creates a new archive, or zipped file, from specified files and folders. The `-Path` parameter specifies the path to the files and folders to be included in the archive. The `-DestinationPath` parameter specifies the path to the output ZIP file.
* The `zip` command in Linux and MacOS creates a ZIP archive from the specified files and folders. The `-r` option tells the zip command to create a recursive archive, which includes all the files and folders in the specified directory, as well as any subdirectories.


You can also refer to the [MVT documentation](https://docs.mvt.re/en/latest/ios/backup/libimobiledevice/).

## Backup an Android device on PiRogue
### Prerequisites

* You need to have iTunes installed on your computer running MacOS.
* You need to have a USB cable to connect your iOS device to your computer.
* You need to create a folder on your computer where you want to save the backup file.

### Enabling Developer options on an Android device
To enable Developer options on an Android device, you need to go to the **Settings** app and then tap on **About phone**. Tap on the **Build number** seven (7) times in a row. You will be prompted to enter your PIN or pattern if you have one set. Once you have enabled Developer options, you will see a new **Developer options** menu in the **Settings** app.

### Enabling ADB
To enable ADB on an Android device, you need to go to the **Settings** app and then tap on **Developer options** and then toggle the **USB debugging** switch to On.

### Backup instructions
* Connect your Android device to your computer.
* Open a command prompt or terminal window on your computer.
* Navigate to the folder where you want to save the backup file.
* Run the following command to create the backup file:

  ```adb backup -apk -shared -all -f /path/to/backup/folder/backup.ab```

  This will create a backup file called `backup.ab` in the directory `/path/to/backup/folder`.
* Disconnect your Android device from your computer.

### Disabling Developer options
To disable Developer options on an Android device, you need to go to the **Settings** app and then tap on **Developer options**. Tap on the Developer options switch to Off.

There are some of the reasons why you might want to enable or disable Developer options on your Android device:
* **Enabling Developer options** gives you access to a number of advanced settings that are not normally available. This includes things like USB debugging, OEM unlocking, and the ability to change the animation speed.
* **Disabling Developer options** can help to protect your device from security threats. If you don't need to use the advanced settings that are available in Developer options, it's a good idea to disable them to reduce the attack surface of your device.

**Additional resources and documentation**

* [Android Developers - Test backup and restore](https://developer.android.com/guide/topics/data/testingbackup)
* [ADB backup command](https://stackoverflow.com/questions/74387730/back-up-android-with-adb-backup)
* [How to backup your Android device's data](https://9to5google.com/2017/11/04/how-to-backup-restore-android-device-data-android-basics/)

## Share and delete the backup
### Compute the SHA256 of the backup
You then have compute the SHA256 of the backup file with the following command line, replace `/path/to/backup/folder/backup.[ab|zip]` by the path to the backup file (`.ab` for Android, `.zip` for iOS):

| Operating system      | Command                                                                                   |
|-----------------------|-------------------------------------------------------------------------------------------|
| on Linux              | `sha256sum /path/to/backup/folder/backup.[ab\|zip]`                                       |
| on Windows Powershell | `Get-FileHash  D:/path/to/backup/folder/backup.[ab\|zip] -Algorithm SHA256 \| Format-List`|
| on Mac OS             | `shasum -a 256 /path/to/backup/folder/backup.[ab\|zip]`                                   |

### Share your backup
Ask the expert what is the preferable procedure for sending them the backup file. Below is a list of organizations that can offer support:

* [Human Rights Watch](https://www.hrw.org)
* [AccessNow](https://www.accessnow.org/help/)
* [Amnesty International](https://www.amnesty.org)
* [CiviCERT](https://www.civicert.org/help/)

### Delete the backup file
Once you have shared your backup file with the expert you are in touch with, securely delete your backup by running the following command:

| Operating system      | Command                                                                                   |
|-----------------------|-------------------------------------------------------------------------------------------|
| on Linux              | `shred -u /path/to/backup/folder/backup.[ab\|zip]`                                           |
| on Windows Powershell | `sdelete -p 3 -r -q  D:/path/to/backup/folder/backup.[ab\|zip]`                           |
| on Mac OS             | `srm /path/to/backup/folder/backup.[ab\|zip]`                                             |

Note that the commands listed above will securely delete the file by overwriting the deleted file with random data.