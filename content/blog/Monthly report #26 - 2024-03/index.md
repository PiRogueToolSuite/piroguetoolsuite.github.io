---
title: Monthly report n⁰26 - 2024-03
description: "Monthly report of a 2-year journey on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensic and network traffic analysis platform."
date: 2024-03-31
lastmod: 2024-03-31
draft: false
weight: 50
contributors: ["Esther Onfroy"]
categories: ['activity reports']
---

# What we have done so far
You can check out our work on GitHub at [https://github.com/PiRogueToolSuite/](https://github.com/PiRogueToolSuite/) or on our website at [https://pts-project.org/](https://pts-project.org/). 

## PiRogue
We fixed a bug in the `pirogue-dashboard` package that occurred when connecting from Cuba. In fact, due to US restrictions, the PiRogue is unable to to download Grafana plugins. The fix was quite simple since the only plugin the package relies on is no longer needed since it has been introduced in the Grafana distribution. The fix is available in the package *pirogue-dashboard* version *1.1.1*.

We continue testing and fixing bugs.

## Colander
We proceeded to the feature freeze of all the features of Colander and released Colander in version *1.0.5*. We have also updated the deployment procedure accordingly.

We started the implementation of non-nominal test cases achieving the poor code coverage of 47%. However, the non-nominal test suite will never cover 100% of the code since it does not cover nominal branches.

We continue testing and fixing bugs.

## Community and outreach
We continue working on the documentation of the project, check it out on [the project website](https://pts-project.org). 

We created a dashboard keeping track of a few KPIs providing us with a rough estimation of the adoption of the project. 

{{< img src="img/community-dashboard.png" alt="Overview of the project adoption dashboard" caption="Overview of the project adoption dashboard" class="d-block mx-auto shadow md-5" >}}

We are hosting a beta version of Colander which is open to community members. Feel free to ask for an account.

# What we plan to do next month
* continue working on the implementation of a privacy-preserving telemetry for PiRogue and Colander users can opt out
* continue testing and fixing bugs
* continue working on the project documentation

# Challenges
Some of our users are facing issues with Android 13 we were not able to reproduce. We are still investigating.