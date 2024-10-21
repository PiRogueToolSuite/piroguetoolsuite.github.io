---
title: "System integration"
draft: false
images: []
menu:
  docs:
    parent: "system_integration"
weight: 860
toc: true
---

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

# System integration details
## Package contents and metadata

Packages that need to be integrated with `pirogue-admin` must follow those
rules:

 - They ship a `/usr/share/pirogue-admin/<package>/` directory, with an
   `index.yaml` entry point which lists variables, files/templates, and possible
   actions.
 - They include a dependency on `pirogue-admin`, which can be versioned in case
   variables, conditions, etc. get added along the way.
 - They call `pirogue-admin --redeploy --commit` upon upgrades, to make sure the
   configuration is redeployed (as needed).


## Managing files

Each `index.yaml` entry point is expected to contain at least a `files` section
which describes which source file (found in the same directory) is expected to
be used as a template for which destination file, optionally relying on
variables which are substituted.

By default, variables are managed in the following way:

 - Mentioning a `VAR` variable means trying to replace `@VAR@` in the source
   file, but it's possible to specify a different `token` to make sure we are
   able to deal with any configuration file format.
 - Variable substitutions happen by replacing the token by the variable's value,
   but it's possible to specify a `type` to use a specific formatter, e.g.
   `nftables_list_of_networks` or `grafana_re_positive_match_network`. That must
   be implemented in the `pirogue-admin` package (see
   `pirogue_admin/package_config/formatters.py`).

When a given destination file is created or updated, the associated `actions`
are run.

Let's look at this example from `pirogue-networking`:

```yaml
files:
  - src: 10-pirogue-networking.conf
    dst: /etc/sysctl.d/
    actions:
      - systemctl restart systemd-sysctl
```

In this case, `systemctl restart systemd-sysctl` is run when
`/etc/sysctl.d/10-pirogue-networking.conf` is created or updated.

It's possible to specify a `condition` (singular), which must be implemented in
the `pirogue-admin` package (see `pirogue_admin/package_config/conditions.py`).
In that case, the file is set up and the actions are run as usual if the
condition is met. Otherwise, the commands listed in `actions_else` are run
unconditionally.

<abbr title="Don't Repeat Yourself">DRY</abbr>! An `actions` section can be used
when a lot of files have `actions` in common, to avoid repeating them again and
again. See `pirogue-dashboard` for an example.


## Managing variables

It's also possible to have a `variables` section listing variable names and
their default values.

For example, in the `pirogue-dashboard` case:

```yaml
variables:
  - name: DASHBOARD_PASSWORD
    default: PiRogue
```

Another example, in the `pirogue-networking` case:

```yaml
variables:
  - name: WIFI_SSID
    default: PiRogue1
  - name: WIFI_PASSPHRASE
    default: superlongkey
  - name: WIFI_COUNTRY_CODE
    default: FR
```

# Testing the system integration
The focus on this section is network-related tests. This includes, but isn't
limited to:

 - Network stacks: `ifupdown`, `systemd-networkd` (with or without
   `systemd-resolved`), `NetworkManager`, etc.
 - Operating modes: *access point*, *appliance*, and *VPN*.
 - Firewall management: `nftables` vs. `iptables`, etc.

It should be noted that none of the tested environments came with any `nftables`
or `iptables` rules. This was another reason for deciding to focus solely on
`nftables` support: we don't expect to have to deal with PiRogue-provided
`nftables` rules vs. something-else-provided `iptables` rules, which could have
been the case if some firewall tool with default rules would have been installed
via dependencies.

Packages were modified incrementally and published in the `debian-12-virogue`
PPA to avoid conflicting with existing PiRogue installations, leading up to
a number of `virogue-N` tags:

 - Up to `virogue-3`: Pi, VM, and baremetal tests.
 - Up to `virogue-6`: That was about finishing up the main tasks that had been
   identified.
    + Focus on `nftables` only.
    + Add support for upgrading existing PiRogue installations.
    + Add support for provisioning variables.

**Note:** Tests were not run again from scratch every time an updated package
was merged into the repository. It would make sense to run a few tests (if not
all of them) once an alpha ViRogue release is published, to make sure no
regressions managed to sneack in while iterating!


## Raspberry Pi

For the whole duration of the ViRogue project, testing new installation and also
upgrade on Raspberry Pi 3 and 4 has been the rule. Testing was extended to Pi 5,
which have been supported since the `arm64_v2.1.0` release.

With PTS images, we have the following setup:

 - `ifupdown` manages the network;
 - `nftables` is installed;
 - `iptables` is not installed.
 - *access point* is the operating mode.


## Virtual machine

People deploying virtual machines tend to use ready-to-use system images instead
of going through the whole installation process (using Debian Installer or
something else), so it made sense to look into
[Debian-provided Cloud images](https://cloud.debian.org/).

Some of them targets specific “big provider” like Amazon EC2 or Microsoft Azure,
but there's also a “plain VM” (`nocloud`) flavour that can be used inside QEMU
(with or without `libvirt`).

Two setups were tested:

 - single network interface: *VPN* is the operating mode. In this case, we are
   able to manage peers via `pirogue-admin-wireguard`, and provided the VM's UDP
   port 51820 is accessible from the determined public IPv4 address, phones can
   be configured to use it via the WireGuard client.
 - two network interfaces: *appliance* is the operating mode. In this case, we
   can analyze what other VMs are doing (having them on an isolated network,
   using the PiRogue VM as a DHCP and DNS server and as a gateway).

We have the following setup:
 - `systemd-networkd` and `systemd-resolved` manage the network;
 - `nftables` is not installed (until it's pulled by `pirogue-networking`);
 - `iptables` is installed;
 - *VPN* or *appliance* is the operating mode (see previous paragraph).

**Note:** A test was also performed using a CX22 machine at Hetzner, instead of
just relying on Cyril's own virtualization infrastructure. It can be considered
as successful overall but not entirely bullet-proof: Hetzner provides its own
Debian images, which rely on `dnsmasq` for DNS resolution. The configuration
deployed via `pirogue-networking` breaks DNS resolution, which was worked around
by manually modifying `/etc/resolv.conf` to include a `nameserver` directive
that doesn't point at `localhost`.


## Bare metal

Since we also want users to be able to deploy the PiRogue operating system on
any `amd64` or `arm64` machine running Debian 12, it made sense to perform a few
installations, with different components selected on Debian Installer's
`tasksel` screen. We could have insisted on performing a text-only installation,
but it would be best if users were able to deploy PiRogue tools e.g. on their
laptops.


### Operating mode: access point

The following tests were performed using a laptop featuring a wired interface,
used as the external interface (connected to the internet), and a wireless
interface, to be used as the isolated interface, with a test phone connecting
over Wi-Fi.

For all those tests, *access point* is the operating mode.

Without any desktop environment, the setup is:

 - `ifupdown` manages the network;
 - `nftables` is installed;
 - `iptables` is not installed.

With the GNOME, Xfce, KDE Plasma, Cinnamon, and Mate desktop environments, the
setup is:

 - `NetworkManager` manages the network;
 - `nftables` is installed;
 - `iptables` is not installed.

With the LXDE and LXQt desktop environments, the setup is different:

 - `ifupdown` manages the network;
 - `nftables` is installed;
 - `iptables` is installed.

And there are even bigger differences with LXDE and LXQt:

 - `pirogue-admin` detects `ifupdown` as the network stack but we also have
   a `ConnMan` daemon. Since the PiRogue environment could be set up without any
   further changes, it was decided not to try and augment `pirogue-admin` with
   `ConnMan` support. Depending on implementation details, users might get
   confused by the lack of `ConnMan` integration. In that case, we could either
   extend `pirogue-admin`, or just recommend against those two desktop
   environments: there are a lot of others to choose from!
 - Legacy tables exist: `filter`, `mangle`, and `nat` (as reported by
   `/proc/net/ip_tables_names`). This generates some warnings depending in
   `iptables-save` (which points to `iptables-nft-save`), which suggests running
   `iptables-legacy-save` as well.

Finally, an extra test was performed, starting from a text-only installation,
manually switching the network stack from `ipupdown` to `systemd-networkd` plus
`systemd-resolved`. This highlighted the fact that `dnsmasq` and `hostapd`
needed to be swapped in `pirogue-networking`'s `index.yaml`, since `dnsmasq`
might not be able to manage the wireless interface otherwise.


### Operating mode: appliance

Once all desktop environments were confirmed to be supported, the next step was
checking that it was possible to use the same laptop but with interfaces
swapped, meaning using the wireless interface as the external interface
(connected to the internet), and using the wired interface as the isolated
interface. This time, another laptop is used to validate the PiRogue environment
is usable.

This was actually tested twice:

 - once with a laptop featuring both interfaces;
 - once with a laptop only featuring a wireless interface, adding a USB/Ethernet
   adapter. It was confirmed to show up as a regular wired interface.

This was confirmed to be working fine in the `ifupdown` case and in the
`NetworkManager` one. The `systemd-networkd` plus `systemd-resolved` case had
already been tested successfully using virtual machines (with two network
interfaces).


### Operating mode: VPN

With another laptop, featuring only a wireless interface, it was verified that
the resulting operating mode is *VPN*. That being said, its usability hasn't
been verified, as it would have required setting up some NAT rules on the
ISP-provided router. Since we already know this works fine in a VM, there were
no reasons to doubt it would work on a laptop in the exact same way.
