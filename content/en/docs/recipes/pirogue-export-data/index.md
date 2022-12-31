---
title: "Export PiRogue data"
date: 2022-12-25
lastmod: 2022-12-25
draft: true
images: []
menu:
  docs:
    parent: "recipes"
weight: 510
toc: true
---

*This is the translation in English from Spanish of a tutorial originally written by [Nikole Yanez](#), a French librarian. [Follow him on Twitter](https://twitter.com/fourmeux)!*

## What is PiRogue and how to export data?

For a few months we have been testing PiRogue to perform network traffic analysis mainly on cell phones, so PiRogue becomes a super complete tool that contains many applications that help us to perform network traffic analysis, this hardware and software helps us to perform monitoring on intervention and network traffic.

One of the big challenges in forensic analysis is to know how to search the results, PiRogue deletes the data every 5 days for security reasons but to do a further analysis we need to extract the alerts and flows as a result of the analysis, to export the data we need to do the following steps.

First, connect to your PiRogue with SSH:
```
ssh -p22 pi@<PiRogue IP address> 
```

Then, export alert data in a CSV file:
```
influx -database 'suricata' -execute 'SELECT * FROM "suricata"."suricata_5d"."alert"' -format 'csv'  alerts-`date +"%Y-%m- %d"`.csv
```

Export flow data too:
```
influx -database 'flows' -execute 'SELECT * FROM "flows"."flows_5d"."flow"' -format 'csv'  flows-`date +"%Y-%m- %d"`.csv
```

Finally, copy 2 generated CSV files from PiRogue to your computer using `scp`. On your computed, use the following command:
```
scp pi@<iRogue IP address>:<path of the CSV file> .
```

Once you have retrieved your CSV fies, you can open them with Excel, LibreOffice or any other software supporting CVS format.