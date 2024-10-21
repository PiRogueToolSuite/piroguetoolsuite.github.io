---
title: "System integration"
draft: true
images: []
menu:
  docs:
    parent: "pirogue"
weight: 717
toc: true
---

## Introduction

Historically the PiRogue environment supported only Raspberry Pi devices (Pi
3 and Pi 4), which featured a well-known hardware configuration. We would expect
the wired interface (`eth0`) to be used as the external interface, connected to
the internet, while the wireless interface (`wlan0`) would be used as the
isolated interface, configured as an access point.

A few Debian packages needed to perform some autodetection to set everything up
as required, which was done through `postinst` scripts.

In 2024, we started a project codenamed “ViRogue”, which is about virtualizing
the PiRogue and supporting more use cases. That means no longer relying on
Raspberry Pi devices, and being able to deploy the PiRogue operating system on
any `amd64` or `arm64` machine in *appliance* mode (e.g. using two Ethernet
interfaces) or even in a virtual machine in *VPN* mode. Of course, the
historical *access point* mode remains a possibility, e.g. on Raspberry Pi
devices or on laptops for example.

Supporting more use cases meant having some logic and heuristics to help users
pick a configuration that should work out of the box based on the detected
network interfaces and settings, that's why we introduced a new component called
`pirogue-admin` to coordinate autodetection (for the initial installation) and
configuration deployment.

Existing Debian packages were modified to integrate with this new component,
with one of them getting renamed to match its new versatility:

 - `pirogue-ap`, which became `pirogue-networking`
 - `pirogue-dashboard`
 - `pirogue-eve-collector`
 - `pirogue-flow-inspector`

**FIXME:** Maybe include details about versions (1.x → 2.x for ViRogue packages).


## Initial installation

### Package-level interactions

The `pirogue-admin` package features a `pirogue-admin` executable which is
primarily meant to be used by `postinst` scripts.

That executable features an `--autodetect` option which is used by
`pirogue-base.postinst` to generate a suitable configuration based on the
detected network interfaces and settings (see next section). The configuration
is displayed on the standard output, written to
`/root/pirogue-admin-autodetect.yml`, then passed to `pirogue-admin` again, this
time using the `--apply` option (and some others), to actually deploy the
configuration.

**Note:** Users may deploy a `/var/lib/pirogue/admin/user.config.yaml` file to
provision some variables, which is automatically taken into account by
`--autodetect`, which
[tries and merges settings](https://github.com/PiRogueToolSuite/pirogue-admin/issues/20),
sticking to the autodetected settings if anything goes wrong with user-provided
settings.

Example of user-provisioned variables:

```yaml
WIFI_SSID: ViRogueOne
WIFI_PASSPHRASE: AStarWarsStory
WIFI_COUNTRY_CODE: US
```


### Autodetection logic

Assuming the system is already set up to have internet access, a route check is
used to determine the external interface. If that fails, autodetection fails.

Otherwise, depending on the available interfaces, an operating mode is
determined:

 - If a wireless interface is present, the *access point* mode is suggested, and
   the first wireless interface is used.
 - Otherwise, if a wired interface is present, the *appliance* mode is
   suggested, and the first wired interface is used.
 - Otherwise, the *VPN* mode is the final fallback. In that case, a public IPv4
   address is determined using an external service, so that it can be included
   in the WireGuard peer configuration.

Until `pirogue-admin` client/daemon packages are made available, another
executable named `pirogue-admin-wireguard` makes it possible to manage WireGuard
peers, and make their configuration available as configuration files,
configuration archives, or QR codes.

**Note:** If the autodetected configuration doesn't fit (maybe there were
several interfaces to choose from; maybe some of them come and go, e.g. USB
adapters, tethering), updating the configuration might require cleaning up the
previous one. That's tracked as
[pirogue-admin#7](https://github.com/PiRogueToolSuite/pirogue-admin/issues/7).


### Upgrading existing Raspberry Pi devices

Initially, the autodetection was meant to be used only when `pirogue-base` gets
configured the first time. Since we want existing PiRogue users to be able to
upgrade their systems as usual, `pirogue-base.postinst` was modified to include
a version check to determine when the “PiRogue/ViRogue” transition happens, so
that autodetection can kick in. That should lead to the exact same network
settings for Raspberry Pi users, but this could lose any other settings that
could have been changed.

**FIXME:** Either document this might happen and how to fix, or
decide which settings should be preserved, see
[pirogue-admin#21](https://github.com/PiRogueToolSuite/pirogue-admin/issues/21#issuecomment-2335197215).
