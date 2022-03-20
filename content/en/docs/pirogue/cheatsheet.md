---
title: "Cheatsheet"
date: 2022-03-07
lastmod: 2022-03-07
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 50
toc: true
---

## Default configuration
| Name               | Value          |   Example of usage                   |
|--------------------|----------------|--------------------------------------|
| SSH port           | `22`           |   `ssh -p22 pi@<PiRogue IP address>` |
| SSH user           | `pi`           |                                      |
| SSH password       | `raspberry`    |                                      |
| Dashboard port     | `3000`         | `http://<PiRogue IP address>:3000`   |
| Dashboard user     | `admin`        |                                      |
| Dashboard password | `PiRogue`      |                                      |
| Wi-Fi SSID         | `PiRogue1`     |                                      |
| Wi-Fi password     | `superlongkey` |                                      |

## Important files
| Name                   | Location                                 |
|------------------------|------------------------------------------|
| SSH configuration      | `/etc/ssh/sshd_config`                   |
| Suricata configuration | `/etc/suricata/suricata.yaml`            |
| Suricata rules         | `/var/lib/suricata/rules/suricata.rules` |
| PiRogue screen         | `/etc/pirogue/pirogue_infos_screen.py`   |
