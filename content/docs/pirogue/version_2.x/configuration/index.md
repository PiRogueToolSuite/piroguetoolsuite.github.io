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
```shell {title="PiRogue version 2.0.2 is installed"}
$ dpkg -l | grep pirogue-base
ii  pirogue-base    2.0.2    all    Install all PiRogue packages
```
{{< /callout >}}

## How the PiRogue administration works
The PiRogue functionalities are all controlled and configured by the `pirogue-admin` tool.
`pirogue-admin` uses and writes its configuration files in the system folder: `/var/lib/pirogue/admin`.

By default, on a first and fresh installation, `pirogue-admin` detects and generates the
best configuration for the current system.

However, modifying this configuration must be done using the `pirogue-admin-client` tool after the initial installation.

### Administration concepts
After the installation of the system, it's possible to get the current system configuration
with the following command:

```shell {title="Get the current system configuration"}
pirogue-admin-client system get-configuration
```

The result should look like:
```yaml {linenos=true,hl_lines=[1,16],title="Example of configuration"}
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

Under the hood, administrating a PiRogue consists in modifying these variables.
Subsequently, lots of system files are updated and
system services are started, stopped or reloaded accordingly.

With the wide variety of PiRogue's new network capabilities, it could be hard
to maintain a coherent and safe relationship between all the configuration variables,
the system files, and the services.

This is why PiRogue offers two level of administration:
* `pirogue-admin`: low-level administration tool (**used internally, and must not be used directly**)
* `pirogue-admin-client`: high-level administration tool aiming safety and ease of use

{{< callout context="danger" title="Never use `pirogue-admin`" icon="alert-triangle" >}}
`pirogue-admin` must do be used directly, use `pirogue-admin-client` instead.
{{< /callout >}}

### Administration tool
`pirogue-admin-client` is the tool to administrate high-level PiRogue features.
It allows you to configure many PiRogue components without having to deal
with the complexity of the system.

You can explore all its capabilities using the command line parameter `--help`, *e.g*:

```shell {title="List administration commands"}
pirogue-admin-client --help
```

The tool is subdivided in sections on which `--help` can be shown, *e.g*:
```txt {linenos=true,title="Example of administration commands"}
pirogue-admin-client wifi --help
pirogue-admin-client wifi get-configuration --help
pirogue-admin-client wifi set-configuration --help
pirogue-admin-client system --help
# ... and so on
```


## Operating modes
Depending on system capabilities, the PiRogue is configured automatically in the adequate mode.

PiRogue supports 3 different operating modes:
* **Wireguard mode**: when only one wired network interface is available on the system
* **Appliance mode**: when two wired network interfaces are available on the system
* **Access-Point mode**: when two different network interfaces are available, one of which has WiFi capabilities

{{< img src="pirogue_operating_modes" alt="PiRogue operating modes" class="d-block mx-auto" >}}

The following command will tell you in what mode your PiRogue is running:
```shell {title="Get the current operating mode"}
pirogue-admin-client system get-configuration | grep SYSTEM_OPERATING_MODE
```


## General configuration
The following commands applies to all operating modes. In the *appliance* operating mode, you can only configure the dashboard and open/close network ports.

### Dashboard configuration
The default username of the dashboard is `admin`.

As the password of the dashboard is randomly generated during the installation, the following command allows you to retrieve it.
```shell {title="Get the password of the dashboard"}
pirogue-admin-client dashboard get-configuration
```

The password of the dashboard can be changed with:
```shell {title="Change the password of the dashboard"}
pirogue-admin-client dashboard set-configuration --password 'mySuperSecretPassword!'
```

The dashboard is accessible on `http://<PiRogue IP address>/dashboard` when the PiRogue is running in the modes access-point or appliance.

### Network ports management
By default, the PiRogue blocks most of the network traffic coming from the isolated network except the traffic on the Internet. 
The PiRogue handles the DCHP and DNS requests from the devices connected to the isolated network. The network traffic from the 
isolated network to the external network is blocked.

{{< img src="pirogue_isolated_device" alt="Device connected to PiRogue isolated network interface" class="d-block mx-auto" >}}

However, in some cases, the administrator might want to provide
custom services hosted on the PiRogue to the devices connected to the isolated network.

To achieve this, the `pirogue-admin-client` offers the ability to open and close ports on the isolated network.

The following command list the open ports:
```shell {title="List the open ports on the isolated network"}
pirogue-admin-client isolated-network list-open-ports
```

And the result looks like (if any ports are open):
```yaml {linenos=true,title="Example of list of the ports that have been opened"}
- port: 8080
- port: 9090
```

As an example, if you want to open the port `8080` on the isolated network, use the command:
```shell {title="Open a port on the isolated network"}
pirogue-admin-client isolated-network open-port 8080
```

The administrator can close all the ports that have been manually opened at once with the command:
```shell {title="Close all ports"}
pirogue-admin-client isolated-network close-port
```

It is also possible to close a single port (e.g: `8080`):
```shell {title="Close a specific port"}
pirogue-admin-client isolated-network close-port --incoming-port 8080
```

## Access-Point mode
{{< callout context="note" title="WiFi access-point mode" icon="info-circle" >}}
This section only applies if the current [operating mode](#operating-modes) is **Access-Point** (*a.k.a* AP).

Check the output of this command to get the current operating mode your PiRogue is in:
```shell {title="Get the current operating mode"}
pirogue-admin-client system get-configuration | grep SYSTEM_OPERATING_MODE
```
{{< /callout >}}

By default, WiFi password is generated at installation. The passphrase of the WiFi access-point can be found in the WiFi configuration.

### Get WiFi configuration
To get the current WiFi configuration, use the following command:
```shell {title="Get the configuration of the WiFi access-point"}
pirogue-admin-client wifi get-configuration
```

The output looks like:
```yaml {linenos=true,title="Example of WiFi access-point configuration"}
country_code: FR
passphrase: superlongkey
ssid: PiRogue
```

Use this information to connect a device to the PiRogue access-point.

### Change the WiFi configuration
The following command allows you to change the WiFi SSID and password:
```shell {title="Configure the WiFi access-point"}
pirogue-admin-client wifi set-configuration --ssid 'Investigation_Lab' --passphrase 'Hard to guess passphrase !'
```

Use the following command to list the parameters that can be configured:
```shell {title="List of supported configuration parameters"}
pirogue-admin-client wifi set-configuration --help
```

## Wireguard mode
{{< callout context="note" title="Wireguard mode" icon="info-circle" >}}
Only applies if the current [operating mode](#operating-modes) is **VPN** (a.k.a Wireguard).

Check the output of this command to get the current operating mode your PiRogue is in:
```shell {title="Get the current operating mode"}
pirogue-admin-client system get-configuration | grep SYSTEM_OPERATING_MODE
```
{{< /callout >}}

### Manage Wireguard peers
Add a new Wireguard peer:
```shell {title="Add a Wireguard peer"}
pirogue-admin-client vpn add-peer
```

The result will look like:
```yaml {linenos=true,title="Example of a peer definition"}
idx: 3
private_key: YGe5EF//sIj6QF/2sglmx20b7jxgxFpV1sl8hXBDy34=
public_key: 8lSksu3/HF8vCGi5lCOktI3C9L68PsfNhzDwyuAtMQ0=
```

To get the a list of the currently configured peers, use the command:
```shell {title="List the Wireguard peers"}
pirogue-admin-client vpn list-peers
```

The result will look like:
```yaml {linenos=true,title="Example of list of Wireguard peers"}
- idx: 2
  private_key: oA3PBMH5yhBCIykx1odFPbnH+QKq18FBPmdPU1MrmEQ=
  public_key: hdlwEsh7SQ0lEPC5Qpl66y9slJkhH4wUYEpzvkEq6V4=
- idx: 3
  private_key: YGe5EF//sIj6QF/2sglmx20b7jxgxFpV1sl8hXBDy34=
  public_key: 8lSksu3/HF8vCGi5lCOktI3C9L68PsfNhzDwyuAtMQ0=
```

To delete a peer, you have to specify its index (`idx`):
```shell {title="Delete the peer #2"}
pirogue-admin-client vpn delete-peer 2
```

### Connect peers to the VPN
To connect a peer to the Wireguard VPN, you first need to get its configuration. The peer configuration is returned by the command:
```shell {title="Get the configuration of the peer #3"}
pirogue-admin-client vpn get-peer-configuration 3
```

The result looks like:
```ini {linenos=true,title="Example of peer configuration"}
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

You need to save the configuration of the peer in a `.conf` file to be loaded on the device. To do so, use the command: 
```shell {title="Save the configuration of the peer #3 in the file my-peer-3.conf"}
pirogue-admin-client vpn get-peer-configuration 3 > my-peer-3.conf
```

Alternatively, you can generate a QR-code to be scanned with the Wireguard mobile app:
```shell {title="Get the configuration of the peer #3 QR-code"}
pirogue-admin-client vpn get-peer-config 3 | qrencode -t ansiutf8
```

## Make the PiRogue accessible from the Internet
Opening the PiRogue to the Internet refers to the ability for a PiRogue to be reached via the Internet. This notion is crucial for security 
and PiRogue network configuration.

By default, the PiRogue dashboard and remote administration are not publicly exposed on the Internet.

{{< callout context="caution" title="Requirements" icon="info-circle" >}}
To make the PiRogue accessible from the Internet, you must have:
* a managed domain name
* a valid email address to register against certification authorities such as Let's Encrypt
{{< /callout >}}

Let's assume the following:
* you own a domain name: `my-domain.org`
* you have a valid administrative email address: `contact@my-domain.org`
* the IP address on the Internet of your PiRogue is `185.199.111.153`
* the domain `pirogue-lab.my-domain.org` resolves the IP address of your PiRogue: `pirogue-lab.my-domain.org. 3600	IN	A	185.199.111.153`

To Make the PiRogue accessible from the Internet, you have to run the following command on your PiRogue:
```shell {title="Make the PiRogue accessible from the Internet"}
pirogue-admin-client external-network enable-public-access --domain pirogue-lab.my-domain.org --email contact@my-domain.org
```

Once successfully done, the dashboard of your PiRogue is accessible on `https://pirogue-lab.my-domain.org/dashboard`.

## Remote administration
{{< callout context="caution" title="Warning" icon="info-circle" >}}
Network knowledge is required to configure the remote administration system.
{{< /callout >}}

Depending on the network topology in which the administrator
wants to perform remote administration, the configuration of
the PiRogue and the administrator's computer is different.

There are two main topologies possible:
* Local Area Network (LAN): usually at home or in organization internal network, connections will be routed within the private network.
* Wide Area Network (WAN): when the PiRogue is exposed on the Internet

### Administrator's computer setup
Regardless of the administration network topology, you must install `pirogue-admin-client` on the administrator's computer.
It can be done by adding our PPA and installing the required packages:
```shell {title="Install the administration client on the administrator's computer"}
# Install PiRogue PPA
sudo wget -O /etc/apt/sources.list.d/pirogue.list https://pts-project.org/debian-12/pirogue.list
sudo wget -O /etc/apt/trusted.gpg.d/pirogue.gpg   https://pts-project.org/debian-12/pirogue.gpg
sudo apt update
# Install pirogue-admin-client
sudo apt install pirogue-admin-client
# If we want to generate QR-codes
sudo apt install qrencode
```

### Administration over the Internet
First of all, make sure to open your PiRogue to the Internet, see the instructions above.

To connect to the PiRogue remotely, the administration client uses an authentication token. To get this token, use the command:
```shell {title="Get the administration authentication token"}
pirogue-admin-client external-network get-administration-token
```

The following command will reset the authentication token:
```shell {title="Reset the administration authentication token"}
pirogue-admin-client external-network reset-administration-token
```

On the administrator's computer, run the following command to configure the administration client:
```shell {title="Configure the administration client on the administrator's computer"}
pirogue-admin-client --save --host 'pirogue-lab.my-domain.org' --port 50051 --token <administration token>
```

And finally, test the communication between the administration client and the PiRogue with:
```shell {title="Example of remote administration from the administrator's computer"}
pirogue-admin-client system get-configuration
```
