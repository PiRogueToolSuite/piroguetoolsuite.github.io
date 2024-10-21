---
title: "Configuration (for v2.x)"
draft: true
images: []
menu:
  docs:
    parent: "configure"
weight: 731
toc: true
---

{{< callout context="note" title="Note" icon="info-circle" >}}
This documentation requires the package `pirogue-base` version `2.0.0`
or more recent being installed.

Not sure? [Upgrade your PiRogue](/docs/pirogue/operating-system/#upgrade).
{{< /callout >}}

## How the PiRogue administration works
The PiRogue functionalities are all controlled and configured by the `pirogue-admin` tool.
`pirogue-admin` uses and writes its configuration files in the system folder: `/var/lib/pirogue/admin`.

By default, on a first and fresh installation, `pirogue-admin` detects,
guesses and generates the best configuration for the current system.

However, modifying this configuration can be done using the `pirogue-admin-client` tool.

### Administration concepts
After a system installation, it's possible to get current applied and running configuration
with the following command :
```shell
pirogue-admin-client system get-configuration
```

The result looks like:
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

This is why PiRogue offers two level of administration tool :
* `pirogue-admin` : low-level administration tool (used internally, will not be covered by this documentation)
* `pirogue-admin-client` : high-level administration tool aiming safety and ease of use

### Safe and easy administration
`pirogue-admin-client` is the tool to administrate high-level PiRogue features.
It allows you to configure many PiRogue components without having to deal
with this dictionary of variables.

You can explore all its capabilities using the command line parameter `--help`, e.g:
```shell
pirogue-admin-client --help
```

The tool is subdivided in sections on which on can use `--help` parameter as well, e.g:
```shell
pirogue-admin-client wifi --help
pirogue-admin-client wifi get-configuration --help
pirogue-admin-client wifi set-configuration --help
pirogue-admin-client system --help
# ... and so on
```


## Operating mode
Depending on system capabilities, `pirogue-admin` has configured automatically
the PiRogue in the adequate mode.

Here are the different modes:
* VPN mode : when only one network interface is available on the system
* Appliance mode : when two different network interfaces are available on the system
* Access Point mode : when two different network interfaces are available, one of which has WiFi capabilities


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
title Supported Operating Modes

AddRelTag("wireless", $lineStyle = DashedLine())



Person_Ext(Operator2, "Operator")
Person(Admin2, "Admin")

System_Ext(device21, "Device 3", "Tested device")

System_Boundary(virogue2, "PiRogue - Access Point Mode") {
  Component(isolated_itf2, "WiFi", "network interface", "Wireless")
  Component(external_itf2, "External interface", "network interface", "Wired")
  Rel_L(isolated_itf2, external_itf2, "")
}

Rel_D(Admin2, external_itf2, "Administrate")
Rel_U(device21, isolated_itf2, "Connected To", $tags="wireless")
Rel_U(Operator2, device21, "Operate")



Person_Ext(Operator0, "Operator")
Person(Admin0, "Admin")

System_Ext(device01, "Device 1", "Tested device")

System_Boundary(virogue0, "PiRogue - Appliance Mode") {
  Component(isolated_itf0, "Isolated interface", "network interface", "Wired")
  Component(external_itf0, "External interface", "network interface", "Wired")
}

Rel_D(Admin0, external_itf0, "Administrate")
Rel_U(device01, isolated_itf0, "Connected To")
Rel_U(Operator0, device01, "Operate")



Person_Ext(Operator1, "Operator")
Person(Admin1, "Admin")

System_Ext(device11, "Device 2", "Tested device")

System_Boundary(virogue1, "PiRogue - VPN Mode") {
  Component(isolated_itf1, "VPN", "wireguard service", "Virtual")
  Component(external_itf1, "External interface", "network interface", "Wired")
  Rel_L(isolated_itf1, external_itf1, "")
}

Rel_D(Admin1, external_itf1, "Administrate")
Rel_U(device11, isolated_itf1, "Connected To")
Rel_U(Operator1, device11, "Operate")



@enduml
```

Depending on the operating mode, `pirogue-admin-client` offers different configuration tools.

## General configuration
The following commands applies to all operating modes.

### Dashboard configuration

First, of all, let's change the Dashboard password:
```shell
pirogue-admin-client dashboard set-configuration --password 'mySuperSecretPassword!'
```

Try connecting to the dashboard with your browser at the address : `http://pirogue.local/dhasboard`.
You should be able to log in with Username: `admin` and Password: `mySuperSecretPassword!`.

If you forget the dashboard password, you can always retrieve it with the following command:
```shell
pirogue-admin-client dashboard get-configuration
```

## **Access Point** mode related configuration
{{< callout context="note" title="Note" icon="info-circle" >}}
This section only applies if the current [operating mode](#operating-mode) is **Access Point** (a.k.a AP)
{{< /callout >}}

### Change WiFi configuration

Get the current WiFi configuration:
```shell
pirogue-admin-client wifi get-configuration
```

Result looks like:
```yaml
country_code: FR
passphrase: superlongkey
ssid: PiRogue1
```

Change WiFi SSID and password:
```shell
pirogue-admin-client wifi set-configuration --ssid 'Investigation_Lab' --passphrase 'Hard to guess passphrase !'
```

Explore WiFi configuration parameters:
```shell
pirogue-admin-client wifi set-configuration --help
```

## **VPN** mode related configuration
{{< callout context="note" title="Note" icon="info-circle" >}}
Only applies if the current [operating mode](#operating-mode) is **VPN** (a.k.a Wireguard)
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
You can get such configuration using the following command:
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


## Remote administration
{{< callout context="caution" title="Warning" icon="info-circle" >}}
Strong network knowledge are required to follows the remote administration configuration.
{{< /callout >}}

Depending on the network topology in which the administrator
wants to perform remote administration, the configuration of
the PiRogue and the administrator's computer is different.

There are two main topologies possible:
* Local Area Network (LAN) : usually home or entreprise network,
  connections will stay inside the network
* Wide Area Network (WAN) : likely over the internet, connections will travel through
  untrusted routers

### Administration device setup
Regardless of the administration network topology, we must install `pirogue-admin-client`.
It can be done via APT repository setup and a traditional deb installation:
```shell
# Install PiRogue PPA
sudo wget -O /etc/apt/sources.list.d/pirogue.list https://pts-project.org/debian-12/pirogue.list
sudo wget -O /etc/apt/trusted.gpg.d/pirogue.gpg   https://pts-project.org/debian-12/pirogue.gpg
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

By default, PiRogue installation will generate a self-signed certificate to secure transactions.
This certificate is needed and used by both daemon and client to communicate.

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

### WAN administration
{{< callout context="caution" title="Requirements" icon="info-circle" >}}
* a managed domain name or fully qualified named virtual machine
* a valid public email address to register against certification authorities
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
* the following DNS rule exists : `pirogue-lab.my-domain.org. 3600	IN	A	185.199.111.153`
* contacting port `50051` on ip address `185.199.111.153`
  is redirected to port `50051` on local ip address `192.168.1.37`

Enable public exposure and access on the PiRogue:
```shell
pirogue-admin-client external-network enable-public-access --domain pirogue-lab.my-domain.org --email contact@my-domain.org
```

On the administration device, we can run the following command to configure the remote administration client:
```shell
pirogue-admin-client --save --host 'pirogue-lab.my-domain.org' --port 50051 --token UH77iumyt64BSThL6N06667SuTcKkOq2EkR5ckvQ5Ww
```

Try the connection with:
```shell
pirogue-admin-client system get-configuration
```
