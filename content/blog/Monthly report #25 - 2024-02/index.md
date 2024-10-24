---
title: Monthly report n⁰25 - 2024-02
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2024-02-29
lastmod: 2024-02-29
draft: false
weight: 50
contributors: ["Esther Onfroy"]
categories: ['activity reports']
---

# What we have done so far
You can check out our work on GitHub at [https://github.com/PiRogueToolSuite/](https://github.com/PiRogueToolSuite/) or on our website at [https://pts-project.org/](https://pts-project.org/). 

## PiRogue
We are still in the process of freezing all the features of PiRogue. No major features or breaking changes, except for fixing bugs, will be introduced until March 2024.

We [fixed a bug](https://github.com/PiRogueToolSuite/pirogue-cli/issues/11) occurring on certain devices running Android 13 when retrieving the screen recording. This is now fixed in the package *pirogue-cli* version *1.1.1*.

We continue testing and fixing bugs.

## Colander
We are still in the process of freezing all the features of Colander. No major features or breaking changes, except for fixing bugs, will be introduced until March 2024.

We fixed a usability issue in Colander. It is now easier for the end users to edit additional attributes of *Observables*, the UI also suggests common attributes depending on the type of observable to be created.

{{< img src="img/observable-attributes.png" alt="Example of common additional attributes of an IP v4 observable" caption="Example of common additional attributes of an IP v4 observable" class="d-block mx-auto shadow md-5" >}}

We continue testing and fixing bugs.

## Community and outreach
We continue working on the learning materials. The list is available at [https://pts-project.org/guides/](https://pts-project.org/guides/). 

We proposed a presentation of PTS at the [SSTIC symposium](https://www.sstic.org/).

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.


# What we plan to do next month
* publish the first stable release of both PiRogue and Colander (postponed)
* continue testing and fixing bugs
* continue working on the learning materials
* continue working on the project documentation

# Challenges
Some of our users are facing issues with Android 13 we were not able to reproduce. We are still investigating.