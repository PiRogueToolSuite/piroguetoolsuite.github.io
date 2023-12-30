---
title: "Useful commands"
date: 2022-03-07
lastmod: 2022-03-07
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 160
toc: true
---

## Find the IP address of your PiRogue
On your computer connected to the same network as your PiRogue, run the following command:

```bash
ping -c1 pirogue.local
```

Example of output, in this example, the IP address of the PiRogue is `192.168.0.16`:
```text
PING pirogue.local (192.168.0.16) 56(84) bytes of data.
64 bytes from pirogue.home (192.168.0.16): icmp_seq=1 ttl=64 time=0.319 ms

--- pirogue.local ping statistics ---
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

```bash
pi@pirogue ~ $
```

You are now connected to the PiRogue remotely, and can execute commands.


## Change your password
On your PiRogue, run the following command and answer the different questions:

```bash
passwd
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