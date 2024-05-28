---
title: Monthly report n⁰28 - 2024-05
description: "Monthly report on the activities we have carried out this month on PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and digital investigation platform."
date: 2024-05-25
lastmod: 2024-05-25
draft: false
weight: 50
contributors: ["Esther Onfroy"]
---

# What we have done so far

## PiRogue
We have published the version `16.2.y` of [Frida](https://frida.re/), this new package is available on our [PPA for Debian 12](https://github.com/PiRogueToolSuite/debian-12) and can be installed by upgrading the PiRogue:

```bash
sudo apt update
sudo apt dist-upgrade
```

### Friendly reminder
We strongly recommend to use [the version `2.0.0` of PiRogue OS for Raspberry Pi](https://github.com/PiRogueToolSuite/pirogue-os/releases/tag/arm64_v2.0.0) which is based on Debian 12. This version is now the only one actively supported and maintained.

The current version of the OS can be found by running the following command on the PiRogue:

```bash
cat /etc/os-release | grep PRETTY_NAME
```

If the command does not return `PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"`, the latest version of PiRogue OS has to be installed, this guide explains [how to setup a PiRogue](https://pts-project.org/guides/g1/). We suggest to use another SD-card than the one already used by the PiRogue. Once the latest image has be flashed on a new SD-card, simply replace the "old" SD-card by the new one.

## Colander
Nothing noteworthy has been done this month.

## Community and outreach
We attended the CiviCERT in-person meeting and we've received countless positive feedbacks on PTS.

The documentation of the whole project is available on [our website](https://pts-project.org). 

We are grateful for the support of our community. To ensure the continued development and maintenance of this project, we have set up an [Open Collective page](https://opencollective.com/pts).

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

## What we plan to do next month
* do some cleanup and maintenance chores
* implement the optional support of [friTap](https://github.com/fkie-cad/friTap/) to improve the capture and the decryption of TLS traffic
