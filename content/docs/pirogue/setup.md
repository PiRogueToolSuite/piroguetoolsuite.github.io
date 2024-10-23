---
title: "Installation"
date: 2024-04-30
lastmod: 2024-10-23
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 720
toc: true
---

## Installing PiRogue on a Raspberry Pi

Historically, PiRogue only targeted some Raspberry Pi models, offering Wi-Fi
connectivity for the isolated network. That is covered by a dedicated guide.

{{< link-card
  title="PiRogue installation"
  description="Learn how to install your PiRogue"
  href="/guides/g1/"
>}}


## Installing PiRogue on an arbitrary machine

The PiRogue ecosystem has been extended to cover more use cases, and it's now
possible to deploy it on a machine featuring **two interfaces**. The
requirements are the following:

 - a Debian 12 installation on a physical or virtual machine;
 - using the `amd64` or `arm64` architecture;
 - an initial network configuration allowing internet access.

The operating mode is selected automatically during the initial installation,
based on the available interfaces. Let's have a look at the logic:

 1. The external interface is determined by checking which interface is used to
    access some IP on the internet.
 2. If there's another interface that is tagged as a Wi-Fi one, then the “Access
    Point” mode is selected, and that interface is used for the isolated
    network.
 3. Otherwise, if there's another interface that is tagged as an Ethernet one,
    then the “Appliance” mode is used, and that interface is used for the
    isolated network.
 4. Finally, if there was only a single interface (meaning the requirements
    documented above weren't met in the first place), a fallback to “VPN” mode
    occurs. This mode is quite different, and is actually documented in the
    following section.

Installation steps can be split into 2 phases: making sure the system is
up-to-date to start with (this isn't specific to the PiRogue ecosystem), then
configuring the PiRogue PPA and installing PiRogue packages.

```shell {title="Make sure the system is up-to-date"}
sudo apt-get update
sudo apt-get dist-upgrade
```

```shell {title="Configure the PiRogue PPA and install PiRogue packages"}
sudo apt-get install wget
sudo wget -O /etc/apt/sources.list.d/pirogue.list https://pts-project.org/debian-12/pirogue.list
sudo wget -O /etc/apt/trusted.gpg.d/pirogue.gpg   https://pts-project.org/debian-12/pirogue.gpg
sudo apt-get update
sudo apt-get install pirogue-base
```

Afterwards, the complete configuration can be inspected using the following
command (no need to be `root`):

    pirogue-admin-client system get-configuration

Important variables:

 - `SYSTEM_OPERATING_MODE` confirms the operating mode.
 - `DASHBOARD_PASSWORD` is the password for the dashboard, generated during the install.
 - `WIFI_PASSPHRASE` is the passphrase used for the Wi-Fi network, when
   operating in “access point” mode, also generated during the install.
 - `EXTERNAL_ADDRESS` is where the dashboard is exposed, it's accessible at
   <http://$EXTERNAL_ADDRESS/dashboard>.

See [Configuration](/docs/pirogue/version_2.x/configuration/) for instructions
on how to change those generated secrets.

The main difference between “access point” and “appliance” modes is how the
connectivity is provided on the isolated network (with or without `hostapd` to
manage the Wi-Fi network).


## Installing PiRogue in VPN mode

The PiRogue ecosystem has also been extended to support another operating mode,
where a server is made accessible over the internet, offering VPN connectivity.
A typical installation would be a dedicated server or a VPS, with a single
interface exposed on the internet.

The requirements are the same as in the previous section:

 - a Debian 12 installation on a physical or virtual machine;
 - using the `amd64` or `arm64` architecture;
 - an initial network configuration allowing internet access.

With such a configuration, VPN is automatically selected as the operating mode,
and WireGuard is set up automatically.

The initial installation steps are the same as in the previous section:

```shell {title="Make sure the system is up-to-date"}
sudo apt-get update
sudo apt-get dist-upgrade
```

```shell {title="Configure the PiRogue PPA and install PiRogue packages"}
sudo apt-get install wget
sudo wget -O /etc/apt/sources.list.d/pirogue.list https://pts-project.org/debian-12/pirogue.list
sudo wget -O /etc/apt/trusted.gpg.d/pirogue.gpg   https://pts-project.org/debian-12/pirogue.gpg
sudo apt-get update
sudo apt-get install pirogue-base
```

Afterwards, the complete configuration can be inspected using the following
command (no need to be `root`):

```shell
pirogue-admin-client system get-configuration
```

There are two big differences though:

 1. Since the server is accessible from the internet, we want to secure the
    dashboard access with a TLS layer.
 2. We need to create WireGuard peers, and configure the VPN on e.g. phones to be
    analyzed.

Assuming a DNS record exists already, pointing to the public IP address of the
PiRogue, requesting a certificate and adjusting the web server configuration can
be done this way:

```shell
pirogue-admin-client external-network enable-public-access --domain pirogue.example.org --email contact@example.org
```

The dashboard is available at <https://pirogue.example.org/dashboard> afterwards.

To create a VPN peer, run the following commands, then scan the QR code using
the WireGuard application on the phone, and enable the VPN:

```shell
pirogue-admin-client vpn add-peer
pirogue-admin-client vpn get-peer-config 2 | qrencode -t ANSIUTF8
```

See [Configuration](/docs/pirogue/version_2.x/configuration/) for more details.