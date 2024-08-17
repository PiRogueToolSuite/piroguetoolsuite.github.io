---
title: "Cheatsheet"
date: 2022-03-07
lastmod: 2022-03-07
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 760
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
| Chronograph port   | `8888`         | `http://<PiRogue IP address>:8888`   |

To see your configuration, run

```bash {title="Check the PiRogue configuration"}
sudo pirogue-ctl config show
```

## Important files
| Name                   | Location                                 |
|------------------------|------------------------------------------|
| SSH configuration      | `/etc/ssh/sshd_config`                   |
| PiRogue configuration  | `/var/lib/pirogue/config/pirogue.env`    |
| Suricata rules         | `/var/lib/suricata/rules/suricata.rules` |
