---
title: "Upgrade a PiRogue"
date: 2022-08-17
lastmod: 2022-08-17
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 70
toc: true
# resources:
# - name: screen
#   src: img/screen.png
# - name: alerts
#   src: img/alerts.png
# - name: flows
#   src: img/flows.png
# - name: world_map
#   src: img/world_map.png
# - name: general_statistics
#   src: img/general_statistics.png
---

All PiRogue features are bundled in Debian packages. So, by upgrading Debian (which is the only supported operating system) you are also upgrading your PiRogue.

To upgrade both the OS and the PiRogue features, run the following two commands: 

```bash
sudo apt update
sudo apt dist-upgrade
```

This operation could take some time and would require a reboot to make your PiRogue operates properly.


## How often should I upgrade my PiRogue
We advice you to upgrade your PiRogue **weekly**.


### ⚠️ Note regarding heavily customized PiRogue
Some users would want to customize their PiRogue by playing with the different configuration files of the system. If so, be sure to backup your changes BEFORE upgrading your PiRogue. The upgrade will override your customization.

The following configuration files are managed by the PiRogue packages:
* `/etc/hostapd/hostapd.conf`
* `/etc/dnsmasq.conf`
* `/etc/dhcpcd.conf`
* `/etc/iptables/rules.v4`
* `/etc/iptables/rules.v6`
* `/etc/suricata/suricata.yaml`
* `/etc/grafana/grafana.ini`
* `/etc/grafana/provisioning/datasources/datasources.yml`
* `/etc/grafana/provisioning/dashboards/grafana_dashboards.yml`
* `/var/lib/grafana/dashboards/pirogue-dashboard.json`
* `/var/lib/grafana/dashboards/pirogue-flow-details-dashboard.json`