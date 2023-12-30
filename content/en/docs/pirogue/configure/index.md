---
title: "Configuration"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 40
toc: true
resources:
- name: no_configuration
  src: img/no-configuration.png
- name: apply_configuration
  src: img/apply-configuration-1.png
- name: restore_configuration
  src: img/restore-configuration.png
---

{{< alert icon="⚠️" >}}
This documentation requires either
* the package `pirogue-base` version `1.0.2` or more recent being installed
* the package `pirogue-base-pc` version `1.0.0` or more recent being installed

Not sure? [Upgrade your PiRogue](/docs/pirogue/operating-system/#upgrade).
{{< /alert >}}

## How the PiRogue configuration works
PiRogue features come in Debian packages, each package manages some system configuration files:

* the package `pirogue-ap` creates the wi-fi access point, it manages:
  * `/etc/hostapd/hostapd.conf`
  * `/etc/dnsmasq.conf`
  * `/etc/dhcpcd.conf`
  * `/etc/iptables/rules.v4`
  * `/etc/iptables/rules.v6`
* the package `pirogue-dashboard` creates the dashboard, it manages:
  * `/etc/grafana/grafana.ini`
  * `/etc/grafana/provisioning/datasources/datasources.yml`
  * `/etc/grafana/provisioning/dashboards/grafana_dashboards.yml`
  * `/var/lib/grafana/dashboards/pirogue-dashboard.json`
  * `/var/lib/grafana/dashboards/pirogue-flow-details-dashboard.json`
* the package `pirogue-eve-collector` retrieve alarms from Suricata, it manages:
  * `/etc/suricata/suricata.yaml`

{{< alert icon="⚠️" context="danger" >}}
Any changes made manually in these files are overridden when these packages are installed and upgraded.
{{< /alert >}}

To ease the configuration of your PiRogue, we provide a tool `pirogue-ctl` which allows you to manage your configuration, create configuration backups, etc. 

`pirogue-ctl` will generate new configuration files for the different services running on your PiRogue and ensure that your configuration is not modified when you upgrade your PiRogue.

To install it, run the following command, it will tell you if the package is already installed:

```bash
sudo apt update
sudo apt install pirogue-cli
```

Once installed you can run:

```bash
sudo pirogue-ctl config show
```
If you have never applied any valid configuration, the command should display
{{< img src="no_configuration" alt="No configuration currently applied" class="d-block mx-auto shadow" >}}

## Create or modify my own PiRogue configuration
Once you have installed the `pirogue-cli` package and run `sudo pirogue-ctl config show` at least once, you can start reconfiguring your PiRogue. To do so, you first have to edit the appropriate configuration file:

```bash
sudo nano /var/lib/pirogue/config/pirogue.env
```

it will open a text editor (nano) showing your own configuration file. In this file you can safely change the following options:

* `WIFI_NETWORK_NAME` the name of the wi-fi network managed by your PiRogue, by default `PiRogue1`
* `WIFI_NETWORK_KEY` the passphrase required to connect to the wi-fi network, by default `superlongkey`. 
* `WIFI_COUNTRY_CODE` indicates the country (ISO/IEC 3166-1 format) in which your PiRogue is operating, by default `FR`
* `DASHBOARD_PASSWORD` the password asked when you log in the PiRogue's dashboard, by default `PiRogue` 

{{< alert icon="⚠️" context="danger" >}}
Do not use `"`, `#` or any emoji.
{{< /alert >}}


**Example**, we change the name of the wi-fi network for `PiRogue11`, our configuration file looks like:

```ini
WIFI_NETWORK_NAME=PiRogue11
WIFI_NETWORK_KEY=superlongkey
WIFI_COUNTRY_CODE=FR
WLAN_IFACE=wlan0
ETH_IFACE=eth0
DASHBOARD_PASSWORD=PiRogue
```

Press `ctrl`+`x` on your keyboard to exit nano, press y to save your modifications, press `n` otherwise. 

## Apply my configuration
Once you have edited the PiRogues's configuration file, run the following command to apply this new configuration:

```bash
sudo pirogue-ctl config apply
```

press `y` to apply your configuration, `n` otherwise.

{{< img src="apply_configuration" alt="Apply new configuration" class="d-block mx-auto shadow" >}}

Now your configuration has been succesfuly applied. You can see it by running `sudo pirogue-ctl config show`.

By default, your configuration and all the different configuration files modified by `pirogue-ctl` have been backed-up. 

At any time you can restore a previous configuration by running the command: 
```bash
sudo pirogue-ctl config restore
```

{{< img src="restore_configuration" alt="Restore a previous configuration" class="d-block mx-auto shadow" >}}

## Check if everything runs properly
To check how healthy your PiRogue is, run

```bash
pirogue-ctl status 
```

{{< img src="img/status.png" alt="Output of pirogue-ctl status" class="d-block mx-auto shadow" >}}

If you see everything in a mix of purple and green, congrats!