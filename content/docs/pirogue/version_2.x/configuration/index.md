---
title: "Configuration"
draft: false
images: []
menu:
  docs:
    parent: "version_2.x"
weight: 852
toc: true
resources:
- name: pirogue_isolated_device
  src: img/pirogue-isolated-device.png
- name: pirogue_operating_modes
  src: img/pirogue-operating-modes.png
---

{{< callout context="caution" title="PiRogue version >=2.0.0" icon="info-circle" >}}
This documentation only applies when the package `pirogue-base` version `>=2.0.0` is installed.

Use `dpkg -l` to check what version is installed:
```shell {title="pirogue version 2.0.2 is installed"}
$ dpkg -l | grep pirogue-base
ii  pirogue-base    2.0.2    all    Install all PiRogue packages
```
{{< /callout >}}

## How the PiRogue administration works
The PiRogue functionalities are all controlled and configured by the `pirogue-admin` tool.
`pirogue-admin` uses and writes its configuration files in the system folder: `/var/lib/pirogue/admin`.

By default, on a first and fresh installation, `pirogue-admin` detects and generates the
best configuration for the current system.

However, modifying this configuration can be done using the `pirogue-admin-client` tool after the initial installation.

### Administration concepts
After a system installation, it's possible to get current applied and running configuration
with the following command:
```shell
pirogue-admin-client system get-configuration
```

The result should look like:
```yaml
DASHBOARD_PASSWORD: PiRogue
ENABLE_DHCP: 'True'
ENABLE_PUBLIC_ACCESS: 'False'
EXTERNAL_ADDRESS: 192.168.1.37
EXTERNAL_INTERFACE: enp0s3
EXTERNAL_NETWORKS: 192.168.1.0/24
ISOLATED_ADDRESS: 10.8.0.1
ISOLATED_INTERFACE: wg0
ISOLATED_NETWORK: 10.8.0.0/24
PUBLIC_CONTACT_EMAIL: root@pirogue.local
PUBLIC_DOMAIN_NAME: pirogue.local
PUBLIC_EXTERNAL_ADDRESS: 185.199.111.153
SYSTEM_HOSTNAME: pirogue
SYSTEM_OPERATING_MODE: wireguard
WIFI_COUNTRY_CODE: FR
WIFI_PASSPHRASE: superlongkey
WIFI_SSID: PiRogue
```

Administrating a PiRogue consists in modifying these variables.
Subsequently, lots of system files are updated and
system services are started, stopped or reloaded accordingly.

With the wide variety of PiRogue's new network capabilities, it could be hard
to maintain a coherent and safe relationship between all the configuration variables,
system files, and services.

This is why PiRogue offers two level of administration:
* `pirogue-admin`: low-level administration tool (used internally, and must not be used directly)
* `pirogue-admin-client`: high-level administration tool aiming safety and ease of use

### Safe and easy administration
`pirogue-admin-client` is the tool to administrate high-level PiRogue features.
It allows you to configure many PiRogue components without having to deal
with the variables directly.

You can explore all its capabilities using the command line parameter `--help`, e.g:
```shell
pirogue-admin-client --help
```

The tool is subdivided in sections on which `--help` can be shown, e.g:
```shell
pirogue-admin-client wifi --help
pirogue-admin-client wifi get-configuration --help
pirogue-admin-client wifi set-configuration --help
pirogue-admin-client system --help
# ... and so on
```


## Operating modes
Depending on system capabilities, `pirogue-admin` has configured automatically
the PiRogue in the adequate mode.

Here are the different modes:
* **Wireguard mode**: when only one network interface is available on the system
* **Appliance mode**: when two different network interfaces are available on the system
* **Access-point mode**: when two different network interfaces are available, one of which has WiFi capabilities

{{< img src="pirogue_operating_modes" alt="PiRogue operating modes" class="d-block mx-auto" >}}

Depending on the operating mode, `pirogue-admin-client` offers different configuration tools.

## General configuration
The following commands applies to all operating modes.

### Dashboard configuration

The password of the dashboard can be changed with:
```shell
pirogue-admin-client dashboard set-configuration --password 'mySuperSecretPassword!'
```

The username of the dashboard remains `admin`.

If you have forgotten the dashboard password, you can always retrieve it with the following command:
```shell
pirogue-admin-client dashboard get-configuration
```

### Isolated port management
By default, a PiRogue system blocks most traffic on the **Isolated** network side.

By default, a PiRogue system controls DHCP and DNS requests
and allows internet access accordingly for devices connected
to the **Isolated** interface.

All other traffic is blocked, including devices connecting
to the PiRogue on local network.

{{< img src="pirogue_isolated_device" alt="Device connected to PiRogue Isolated network interface" class="d-block mx-auto" >}}

However, for specific investigations, the operator might want to provide
custom services hosted on the PiRogue to devices connected to the **Isolated** network.

To achieve this, the `pirogue-admin-client` offers the ability
to manage ports on the isolated interface.

(Note: In the following examples, port management is assumed to be related the isolated network interface.)

It's possible, to get a list of open ports :
```shell
pirogue-admin-client isolated-network list-open-ports
```

And the result looks like (if any ports are open):
```yaml
- port: 8080
- port: 9090
```

Open a port on isolated interface (e.g: `8080`):
```shell
pirogue-admin-client isolated-network open-port 8080
```

The administrator can close all open ports at once using the following command:
```shell
pirogue-admin-client isolated-network close-port
```

But, the administrator can close a single port (e.g: `8080`):
```shell
pirogue-admin-client isolated-network close-port --incoming-port 8080
```

## **Access Point** mode configuration
{{< callout context="note" title="WiFi access-point mode" icon="info-circle" >}}
This section only applies if the current [operating mode](#operating-modes) is **Access Point** (a.k.a AP)
{{< /callout >}}

By default, WiFi password is generated at installation.
To retrieve WiFi connection information, we have to get the current WiFi configuration.

### Get WiFi configuration

To get the current WiFi configuration, use the following command:
```shell
pirogue-admin-client wifi get-configuration
```

The result looks like:
```yaml
country_code: FR
passphrase: superlongkey
ssid: PiRogue
```

We can use these information to connect a device to the PiRogue access point,
using `ssid` and `passphrase`.

### Change the WiFi configuration

Change the WiFi SSID and password:
```shell
pirogue-admin-client wifi set-configuration --ssid 'Investigation_Lab' --passphrase 'Hard to guess passphrase !'
```

Explore the WiFi configuration parameters:
```shell
pirogue-admin-client wifi set-configuration --help
```

## **Wireguard** mode configuration
{{< callout context="note" title="Wireguard mode" icon="info-circle" >}}
Only applies if the current [operating mode](#operating-modes) is **VPN** (a.k.a Wireguard)
{{< /callout >}}

### Manage VPN peers

Add a new VPN peer:
```shell
pirogue-admin-client vpn add-peer
```

The result will look like:
```yaml
idx: 3
private_key: YGe5EF//sIj6QF/2sglmx20b7jxgxFpV1sl8hXBDy34=
public_key: 8lSksu3/HF8vCGi5lCOktI3C9L68PsfNhzDwyuAtMQ0=
```

Get a list of current active VPN peers:
```shell
pirogue-admin-client vpn list-peers
```

The result will look like:
```yaml
- idx: 2
  private_key: oA3PBMH5yhBCIykx1odFPbnH+QKq18FBPmdPU1MrmEQ=
  public_key: hdlwEsh7SQ0lEPC5Qpl66y9slJkhH4wUYEpzvkEq6V4=
- idx: 3
  private_key: YGe5EF//sIj6QF/2sglmx20b7jxgxFpV1sl8hXBDy34=
  public_key: 8lSksu3/HF8vCGi5lCOktI3C9L68PsfNhzDwyuAtMQ0=
```

Delete a peer, given its index:
```shell
pirogue-admin-client vpn delete-peer 2
```

### Connect peers to the VPN

To connect a VPN peer, we need to get its full configuration file.
You can get the configuration using the following command:
```shell
pirogue-admin-client vpn get-peer-configuration 3
```

The result looks like:
```ini
[Interface]
Address = 10.8.0.3/24
PrivateKey = YGe5EF//sIj6QF/2sglmx20b7jxgxFpV1sl8hXBDy34=
DNS = 10.8.0.1

[Peer]
EndPoint = 185.199.111.153:51820
PublicKey = YxtvfgfpgCpkQKTI9vcVz0LnXGHIwF83Z65OBWw4F0A=
AllowedIPs = 0.0.0.0/0
PersistentKeepAlive = 20
```

We can save this content to a `.conf` file and load it on the mobile device we want to connect.

It's also possible to generate a QR code to scan it with the mobile device Wireguard application:
```shell
pirogue-admin-client vpn get-peer-config 3 | qrencode -t ansiutf8
```

## Public accessibility

**Public accessibility** refers to the ability of a PiRogue
to be reached publicly via the internet.
This notion is crucial for security and PiRogue network configuration.

By default, PiRogue Dashboard and Remote administration are not accessible to the external world.

## Remote administration
{{< callout context="caution" title="Warning" icon="info-circle" >}}
Network knowledge is required to configure the remote administration system.
{{< /callout >}}

Depending on the network topology in which the administrator
wants to perform remote administration, the configuration of
the PiRogue and the administrator's computer is different.

There are two main topologies possible:
* Local Area Network (LAN): usually home or organization internal network,
  connections will stay inside the network
* Wide Area Network (WAN): when the PiRogue is exposed on Internet

### Administrator's computer setup
Regardless of the administration network topology, we must install `pirogue-admin-client` on the administrator's computer.
It can be done by adding our PPA:
```shell
# Install PiRogue PPA
sudo wget -O /etc/apt/sources.list.d/pirogue.list https://pts-project.org/debian-12/pirogue.list
sudo wget -O /etc/apt/trusted.gpg.d/pirogue.gpg   https://pts-project.org/debian-12/pirogue.gpg
sudo apt update
# Install pirogue-admin-client
sudo apt install pirogue-admin-client
# If we want to generate QR-Code
sudo apt install qrencode
```

### LAN administration

Let's assume the following topology:
```kroki {type=PlantUML}
@startuml

!$PERSON_BG_COLOR="#7122dc"
!$PERSON_FONT_COLOR="#ffffff"
!$SYSTEM_BG_COLOR="#7122dc"
!$SYSTEM_FONT_COLOR="#ffffff"
!$CONTAINER_BG_COLOR="#7122dc"
!$CONTAINER_FONT_COLOR="#ffffff"
!$COMPONENT_BG_COLOR="#7122dc"
!$COMPONENT_FONT_COLOR="#ffffff"
!$EXTERNAL_PERSON_BG_COLOR="#9C88B6"
!$EXTERNAL_PERSON_FONT_COLOR="#ffffff"
!$EXTERNAL_SYSTEM_BG_COLOR="#9C88B6"
!$EXTERNAL_SYSTEM_FONT_COLOR="#ffffff"
!$EXTERNAL_CONTAINER_BG_COLOR="#9C88B6"
!$EXTERNAL_CONTAINER_FONT_COLOR="#ffffff"
!$EXTERNAL_COMPONENT_BG_COLOR="#9C88B6"
!$EXTERNAL_COMPONENT_FONT_COLOR="#ffffff"

!include C4_Component.puml
HIDE_STEREOTYPE()


Enterprise_Boundary(prv_network, 'Private network') {

  Component(router, "Router", "192.168.1.0/24", "Entreprise LAN")

  System_Boundary(pirogue, 'Pirogue') {
    Component(pi_ext_itf, "External interface", "192.168.1.37")
    Component_Ext(pi_iso_itf, "Isolated part", "Depend on operating mode")
  }

  System_Boundary(computer, 'Computer') {
    Component(cp_itf, "Network interface", "192.168.1.25")
  }

  Person(admin, 'Admin')
  Rel_U(admin, computer, '')
  Rel_U(pi_ext_itf, router, '')
  Rel_U(cp_itf, router, '')
}

@enduml
```

By default, PiRogue installation will generate a self-signed certificate to secure the connections between the PiRogue and the administration client.
This certificate is needed to allow the administration daemon running on the PiRogue and by the administration client to communicate between each other securely.

Get the self-signed certificate:
```shell
pirogue-admin-client external-network get-administration-certificate > virogue-external.cert
```

Get configuration commands:
```shell
pirogue-admin-client external-network get-administration-clis
```

Results look like:
```yaml
# One time client configuration
pirogue-admin-client --save --host '192.168.1.37' --port 50051 --token UH77iumyt64BSThL6N06667SuTcKkOq2EkR5ckvQ5Ww
```

On the administration device, we can run the following command to configure the remote administration client:
```shell
# Replace <remote-user> by the user of your PiRogue installation
scp <remote-user>@192.168.1.37:~/virogue-selfsigned.cert .
pirogue-admin-client --save --host '192.168.1.37' --port 50051 --token UH77iumyt64BSThL6N06667SuTcKkOq2EkR5ckvQ5Ww --certificate ~/virogue-external.cert
```

Setup is done. Try running a first administration command:
```shell
pirogue-admin-client system get-configuration
```

### Online administration
{{< callout context="caution" title="Requirements" icon="info-circle" >}}
* a managed domain name or fully qualified named virtual machine
* a valid email address to register against certification authorities
{{< /callout >}}

Let's assume the following topology:
```kroki {type=PlantUML}
@startuml

!$PERSON_BG_COLOR="#7122dc"
!$PERSON_FONT_COLOR="#ffffff"
!$SYSTEM_BG_COLOR="#7122dc"
!$SYSTEM_FONT_COLOR="#ffffff"
!$CONTAINER_BG_COLOR="#7122dc"
!$CONTAINER_FONT_COLOR="#ffffff"
!$COMPONENT_BG_COLOR="#7122dc"
!$COMPONENT_FONT_COLOR="#ffffff"
!$EXTERNAL_PERSON_BG_COLOR="#9C88B6"
!$EXTERNAL_PERSON_FONT_COLOR="#ffffff"
!$EXTERNAL_SYSTEM_BG_COLOR="#9C88B6"
!$EXTERNAL_SYSTEM_FONT_COLOR="#ffffff"
!$EXTERNAL_CONTAINER_BG_COLOR="#9C88B6"
!$EXTERNAL_CONTAINER_FONT_COLOR="#ffffff"
!$EXTERNAL_COMPONENT_BG_COLOR="#9C88B6"
!$EXTERNAL_COMPONENT_FONT_COLOR="#ffffff"

!include C4_Component.puml
HIDE_STEREOTYPE()


Enterprise_Boundary(internet, 'Internet') {
  Component(untrusted_router, "Untrusted router", "")
}


Enterprise_Boundary(prv_network, 'Private network') {

  Component(router, "Router", "185.199.111.153\n192.168.1.0/24", "WAN Gateway\nEntreprise LAN")

  System_Boundary(pirogue, 'Pirogue') {
    Component(pi_ext_itf, "External interface", "192.168.1.37")
    Component_Ext(pi_iso_itf, "Isolated part", "Depend on operating mode")
  }

  Rel_U(pi_ext_itf, router, '')
}


Rel_L(untrusted_router, router, 'pirogue-lab.my-domain.org\nresolves to')

System_Boundary(computer, 'Computer') {
  Component(cp_itf, "Network interface", "ANY")
}


Rel_U(cp_itf, untrusted_router, '')

Person(admin, 'Admin')
Rel_U(admin,computer, '')

@enduml
```

Let's assume the following:
* we own a domain name: `my-domain.org`
* we have a valid administrative email address: `contact@my-domain.org`
* the following DNS record exists: `pirogue-lab.my-domain.org. 3600	IN	A	185.199.111.153`
* contacting port `80` on IP address `185.199.111.153`
  is redirected to the port `80` on local IP address `192.168.1.37`
* contacting port `50051` on IP address `185.199.111.153`
  is redirected to the port `50051` on local IP address `192.168.1.37`

Enable public exposure and access on the PiRogue:
```shell
pirogue-admin-client external-network enable-public-access --domain pirogue-lab.my-domain.org --email contact@my-domain.org
```

The authentication of the administration client uses a token. You can get the token with:
```shell
pirogue-admin-client external-network get-administration-token
```

Or, you can reset it with:
```shell
pirogue-admin-client external-network reset-administration-token
```

On the administrator's computer, we run the following command to configure the remote administration client:
```shell
pirogue-admin-client --save --host 'pirogue-lab.my-domain.org' --port 50051 --token <administration token>
```

Test the communication between the administration client and the PiRogue with:
```shell
pirogue-admin-client system get-configuration
```
