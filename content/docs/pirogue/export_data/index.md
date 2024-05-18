---
title: "Export data"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 70
toc: true
---

PiRogue deletes the data every 5 days for security reasons but to do a further analysis it is necessary to extract the alerts and flows as a result of the analysis, to export the data we need to do the following steps.

Once connected to the PiRogue, run the command 
```bash
$ influx -database 'suricata' -execute 'SELECT * FROM "suricata"."suricata_5d"."alert"' -format 'csv' > alerts-`date +"%Y-%m-%d"`.csv
```
to export all Suricata alerts in a CSV file.

Run the command 
```bash
$ influx -database 'flows' -execute 'SELECT * FROM "flows"."flows_5d"."flow"' -format 'csv' > flows-`date +"%Y-%m-%d"`.csv
```
to export all network flows in a CSV file.

You can then use scp to save these 2 files on your computer. Once you have retrieved your CSV files, you can open them with Excel, LibreOffice or any other software supporting CSV format.

The *influxdb* queries listed above are pretty simple but you can adapt them to your specific need, check out the [influxdb documentation](https://docs.influxdata.com/influxdb/cloud/query-data/influxql/explore-data/).

You can refine your request by filtering the following fields of the flows database:

* `time`: timestamp in nanoseconds on first flow bidirectional packet
* `application_category_name`: nDPI detected application category name
* `application_name`: nDPI detected application name
* `bidirectional_bytes`: flow bidirectional bytes accumulator
* `bidirectional_duration_ms`: flow bidirectional duration in milliseconds
* `city`: city determined by geoip based on the remote IP address
* `community_id`: community ID
* `community_id_b64`: community ID encoded in base64
* `country`: country name determined by geoip based on the remote IP address
* `country_iso`: country ISO code determined by geoip based on the remote IP address
* `dst2src_bytes`: flow destination to source bytes accumulator
* `dst_ip`: destination IP address string representation
* `dst_mac`: destination MAC address string representation
* `dst_port`: transport layer destination port
* `latitude`: latitude determined by geoip based on the remote IP address
* `longitude`: longitude determined by geoip based on the remote IP address
* `requested_server_name`: requested server name (SSL/TLS, DNS, HTTP)
* `src2dst_bytes`: flow source to destination bytes accumulator
* `src_ip`: source IP address string representation
* `src_mac`: source MAC address string representation
* `src_port`: transport layer source port

You can refine your request by filtering the following fields of the Suricata alerts database:

* `time`: timestamp in nanoseconds on detection
* `alert_category`: category of the triggered rule
* `alert_severity`: alert severity
* `alert_signature`: signature of the triggered rule
* `alert_signature_id`: unique identifier of the triggered rule
* `app_proto`: network protocol (dns, http…)
* `community_id`: community ID
* `community_id_b64`: community ID encoded in base64
* `dest_ip`: destination IP address string representation
* `dest_port`: transport layer destination port
* `in_iface`: network interface name
* `proto`: transport protocol (UDP, TCP)
* `src_ip`: source IP address string representation
* `src_port`: transport layer source port


---

*This documentation is based on the translation of a [tutorial originally written by niculcha](https://blog.codigosur.org/pirogue).*