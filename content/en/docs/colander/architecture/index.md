---
title: "Architecture"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 505
toc: true
---

Colander relies on different services:
* `colander-postgres`: Postgres database
* `colander-front`: Gunicorn serving the pages of Colander
* `colander-worker`: Django Q2 cluster of workers
* `traefik`: Traefik reverse proxy ensuring TLS termination and routing
* `cyberchef`: CyberChef instance
* `playwright`: service using Playwright to take URL screenshot and capture the HAR
* `elasticsearch`: single node ElasticSearch server storing network traffic analysis
* `minio`: Minio S3-compatible object storage to store artifacts
* `redis`: Redis server ensuring the communication between the front and the workers for both Colander and Threatr
* `watchtower`: Watchtower service keeping the stack up to date

Colander comes with Threatr which relies on:
* `threatr-postgres`: Postgres database
* `threatr-front`: Gunicorn serving the pages of Threatr
* `threatr-worker`: Django Q2 cluster of workers