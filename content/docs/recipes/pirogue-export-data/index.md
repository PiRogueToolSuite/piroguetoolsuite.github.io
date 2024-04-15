---
title: "Export PiRogue data"
date: 2022-12-25
lastmod: 2022-12-25
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 960
toc: true
---

*This is the translation in English from Spanish of a [tutorial originally written by niculcha](https://blog.codigosur.org/pirogue).*

## What is PiRogue 

For a few months we have been testing PiRogue to perform network traffic analysis mainly on cell phones, so PiRogue becomes a super complete tool that contains many applications that help us to perform network traffic analysis, this hardware and software helps us to perform monitoring on intervention and network traffic.

One of the big challenges in forensic analysis is to know how to search the results, PiRogue deletes the data every 5 days for security reasons but to do a further analysis we need to extract the alerts and flows as a result of the analysis, to export the data we need to do the following steps.

## How to export data

First, connect to your PiRogue with SSH:
```bash
ssh -p22 pi@<PiRogue IP address> 
```

Then, export alert data in a CSV file:
```bash
influx -database 'suricata' -execute 'SELECT * FROM "suricata"."suricata_5d"."alert"' -format 'csv' > alerts-`date +"%Y-%m-%d"`.csv
```

Export flow data too:
```bash
influx -database 'flows' -execute 'SELECT * FROM "flows"."flows_5d"."flow"' -format 'csv' > flows-`date +"%Y-%m-%d"`.csv
```

Finally, copy 2 generated CSV files from PiRogue to your computer using `scp`. On your computed, use the following command:
```bash
scp pi@<iRogue IP address>:<path of the CSV file> .
```

Once you have retrieved your CSV files, you can open them with Excel, LibreOffice or any other software supporting CVS format.

## Going further

The queries listed above are pretty simple but you can adapt them to your specific need, check out [the influxdb documentation](https://docs.influxdata.com/influxdb/cloud/query-data/influxql/explore-data/).

You can refine your request by filtering the following fields of the `flows` database:
* `time`: timestamp in nanoseconds on first flow bidirectional packet
* `application_category_name`: nDPI detected application category name
* `application_name`: nDPI detected application name
* `bidirectional_bytes`: flow bidirectional bytes accumulator
* `bidirectional_duration_ms`: flow bidirectional duration in milliseconds
* `city`: city determined by `geoip` based on the remote IP address
* `community_id`: [community ID](https://github.com/corelight/community-id-spec)
* `community_id_b64`: community ID encoded in base64
* `country`: country name determined by `geoip` based on the remote IP address
* `country_iso`: country ISO code determined by `geoip` based on the remote IP address
* `dst2src_bytes`: flow destination to source bytes accumulator
* `dst_ip`: destination IP address string representation
* `dst_mac`: destination MAC address string representation
* `dst_port`: transport layer destination port
* `latitude`: latitude determined by `geoip` based on the remote IP address
* `longitude`: longitude determined by `geoip` based on the remote IP address
* `requested_server_name`: requested server name (SSL/TLS, DNS, HTTP)
* `src2dst_bytes`: flow source to destination bytes accumulator
* `src_ip`: source IP address string representation
* `src_mac`: source MAC address string representation
* `src_port`: transport layer source port

You can refine your request by filtering the following fields of the `suricata` database:

* `time`: timestamp in nanoseconds on detection
* `alert_category`: category of the triggered rule
* `alert_severity`: alert severity
* `alert_signature`: signature of the triggered rule
* `alert_signature_id`: unique identifier of the triggered rule
* `app_proto`: network protocol (dns, http...)
* `community_id`: [community ID](https://github.com/corelight/community-id-spec)
* `community_id_b64`: community ID encoded in base64
* `dest_ip`: destination IP address string representation
* `dest_port`: transport layer destination port
* `in_iface`: network interface name
* `proto`: transport protocol (UDP, TCP)
* `src_ip`: source IP address string representation
* `src_port`: transport layer source port
