---
title: "Capture network traffic"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 750
toc: true
---

With the PiRogue, it is quite easy to capture the entire network traffic of any device connected to its Wi-Fi network. To capture the network traffic, we use the command tcpdump.

[Have a look to the guide dedicated to capturing network traffic →](/guides/g2)

The command 
```bash
$ tcpdump -i wlan0 -w $(date +%Y%m%d%H%M)_capture.pcap
```
instructs the `tcpdump` utility to capture network traffic from the wireless interface `wlan0` and store the captured data in a file named `capture.pcap`.

**tcpdump** is a network packet analyzer that allows users to capture and inspect network traffic in real-time. It operates by directly interacting with the network interface card (NIC) and capturing the raw data packets that flow through it. These packets contain information about the source and destination of the communication, the type of protocol used, and the data being transmitted.

**PCAP** (Packet Capture) is a file format specifically designed for storing captured network traffic. It encapsulates the raw data packets in a structured format, preserving the packet headers, payload data, and timestamps. PCAP files serve as valuable sources of information for network troubleshooting, performance analysis, and security investigations.

In this specific command, `-i wlan0` specifies the network interface to monitor, which in this case is the wireless interface `wlan0` of the PiRogue. The `-w capture.pcap` option instructs tcpdump to write the captured packets to a file named `capture.pcap` in the PCAP format. Once the capture is complete, the resulting PCAP file can be analyzed using various network analysis tools such as Wireshark to gain insights into network behavior, identify anomalies, or investigate security incidents.