---
title: "Add your own suricata rules to PiRogue"
date: 2022-08-12
lastmod: 2022-08-12
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 50
toc: true
---

*This is a friendly contribution written by [evilcel3ri](https://evilcel3ri.github.io/), security researcher also developer for [Pithus](https://beta.pithus.org).[ Follow him on Twitter!](https://twitter.com/evilcel3ri)*

## Add your own suricata rules to PiRogue

You need:
* SSH access to your PiRogue
* Github knowledge
* Optional: if you want access to ET PRO you would need your Oink code

The easiest way to manage your Suricata rules is to have them on a Github repository or on a Web directory that can be checked out by `suricata-update`. Manually adding rules directly to the PiRogue is not recommended as it might get overwritten by an update.

Write your rules according to [Suricata's](https://suricata.readthedocs.io/en/suricata-6.0.0/rules/intro.html) documentation. Bare in mind, the rules you want to write are **alert** ones. Set them up on a Github repository (or a Web directory) that can be reached by your PiRogue.

*After being connected to your PiRogue.*

Add your new source in this fashion: 
```
sudo suricata-update add-source YOUR_NAME URL_TO_THE_DOT_RULES
```

Run 
```
sudo suricata-update update-sources
``` 
and then 
```
sudo suricata-update
```
and your rules must be updated 🙂

## Add an already published rule set such as ET Pro

While connected to your PiRogue:
Run
```
sudo suricata-update enable-source et/pro
```
insert your `oink-code` when prompted and finally run
```
sudo suricata-update update-sources
sudo suricata-update
```

In both cases, the PiRogue will grab the new version of your rules on a daily basis.
