---
title: "Useful commands"
date: 2022-03-07
lastmod: 2022-03-07
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 60
toc: true
---

## Find the IP address of your PiRogue
On your computer connected to the same network as your PiRogue, run the following command:

```bash
ping -c1 raspberrypi.local
```

Example of output, in this example, the IP address of the PiRogue is `192.168.0.11`:
```text
PING raspberrypi.local (192.168.0.11) 56(84) bytes of data.
64 bytes from raspberrypi.home (192.168.0.11): icmp_seq=1 ttl=64 time=0.319 ms

--- raspberrypi.local ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.319/0.319/0.319/0.000 ms
```

## Connect to your PiRogue with SSH
*This section is largely inspired by the [Raspberry Pi official documentation](https://www.raspberrypi.com/documentation/computers/remote-access.html).*

You can use SSH to connect to your PiRogue from a Linux desktop, another PiRogue, or from an Apple Mac without installing additional software.

Open a terminal window on your computer replacing `<PiRogue IP address>` with the IP address of the PiRogue you’re trying to connect to,

```bash
ssh -p22 pi@<PiRogue IP address>
```

When the connection works you will see a security/authenticity warning. Type `yes` to continue. You will only see this warning the first time you connect.

{{< alert icon="👉" >}}
If you receive a `connection timed out` error it is likely that you have entered the wrong IP address for the PiRogue. 
{{< /alert >}}

Next you will be prompted for the password for the `pi` login: the default password on PiRogue OS is `raspberry`.

For security reasons it is highly recommended to change the default password on the PiRogue (also, you can not login through ssh if the password is blank). You should now be able to see the PiRogue prompt, which will be identical to the one found on the PiRogue itself.

If you have set up another user on the PiRogue, you can connect to it in the same way, replacing the username with your own, e.g. `eben@192.168.1.5`

```
pi@raspberrypi ~ $
```

You are now connected to the PiRogue remotely, and can execute commands.


## Change the password of user `pi`
On your PiRogue, run the following command and answer the different questions:

```bash
passwd
```

## Check if your PiRogue is running properly
On your PiRogue, run the following command:

```bash
sudo systemctl list-units pirogue* grafana* suricata* influxdb*
```

Example of output, in this example, everything is `running` properly:
```
  UNIT                            LOAD   ACTIVE SUB     DESCRIPTION
  grafana-server.service          loaded active running Grafana instance
  influxdb.service                loaded active running InfluxDB is an open-source, distributed, time series database
  pirogue_eve_collector.service   loaded active running PiRogue collector for Suricata alerts
  pirogue_infos_screen.service    loaded active running PiRogue screen
  pirogue_inspect_flows.service   loaded active running PiRogue DPI flow inspection
  suricata.service                loaded active running Suricata IDS/IDP daemon                                      
  pirogue_daily_maintenance.timer loaded active waiting Run PiRogue maintenance daily

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.
7 loaded units listed. Pass --all to see loaded but inactive units, too.
To show all installed unit files use 'systemctl list-unit-files'.
```

If one or several services are not running, restart them with the following command:

```bash
sudo systemctl restart <service name>.service
```

## Restart PiRogue services
On your PiRogue, run the following command:

```bash
sudo systemctl restart pirogue*
```

## Restart your PiRogue
On your PiRogue, run the following command:

```bash
sudo reboot
```

## Shutdown your PiRogue
On your PiRogue, run the following command:

```bash
sudo halt
```