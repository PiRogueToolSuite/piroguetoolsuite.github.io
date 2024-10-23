---
title: "Changes from v1.x"
draft: true
images: []
menu:
  docs:
    parent: "version_2.x"
weight: 851
toc: true
---


## Existing concepts and features
* Administration tool: `pirogue-admin-client`
* URL of the dashboard: `http://<PiRogue IP address>/dashboard`
* WiFi and Dashboard default password : [retrieve them quickly](#default-generated-secrets)

## New concepts and features
New 'concepts' have been introduced and have a major impact on operations.
It's important to understand them before managing your PiRogue fleet.

* [Operating modes](/docs/pirogue/version_2.x/configuration/#operating-modes): `VPN` (Wireguard), `Appliance`, `Access Point` (WiFi)
* [Public accessibility](/docs/pirogue/version_2.x/configuration/#public-accessibility)

## Default generated secrets
Many default secrets are generated at installation, here are quick references to them:
* WiFi password : `pirogue-admin-client wifi get-configuration`
* Dashboard password: `pirogue-admin-client dashboard get-configuration`
* Remote administration token: `pirogue-admin-client external-network get-administration-token`
