---
title: "Tests"
draft: true
images: []
menu:
  docs:
    parent: "pirogue"
weight: 719
toc: true
---

The focus on this page is network-related tests. This includes, but isn't
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
