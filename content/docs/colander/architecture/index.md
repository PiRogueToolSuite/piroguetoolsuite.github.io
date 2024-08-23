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

Colander relies on several services:
* `colander-postgres`: Postgres database
* `colander-front`: Gunicorn serving Colander's pages
* `colander-worker`: Django Q2 cluster of workers
* `traefik`: Traefik reverse proxy ensuring TLS termination and routing
* `cyberchef`: CyberChef instance
* `playwright`: Service using Playwright to take URL screenshot and capture the HAR files
* `elasticsearch`: Single-node ElasticSearch server storing network traffic analysis
* `minio`: Minio S3-compatible object storage for store artifacts
* `redis`: Redis server for communication between the frontend and the workers for both Colander and Threatr
* `watchtower`: Watchtower service keeping the stack up-to-date

Threatr also relies on:
* `threatr-postgres`: Postgres database
* `threatr-front`: Gunicorn serving the pages of Threatr
* `threatr-worker`: Django Q2 cluster of workers

This architecture allows for a flexible and scalable deployment of Colander and Threatr.