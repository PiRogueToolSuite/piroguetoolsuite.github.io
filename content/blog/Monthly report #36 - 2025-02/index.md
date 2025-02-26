---
title: Monthly report n⁰36 - 2025-02
description: "Monthly report of the activities on the PiRogue Tool Suite project"
summary: "We’re thrilled to announce a major milestone in the evolution of Colander, our digital investigation web platform for civil society organizations. After months of dedicated work, we’ve completely revamped our deployment procedure, making it easier to get Colander up and running, keep it updated, and ensure your data is safe."
date: 2025-02-26
lastmod: 2025-02-26
draft: false
weight: 50
type: blog
outputs:
   - 'html'
   - 'email'
contributors: ["Esther Onfroy"]
categories: ['activity reports']
toc_enabled: true
toc_start_level: 2
toc_end_level: 2
toc_ordered: false
---

# Project overview
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and digital investigation platform.

* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
* Deploy Colander in 10 minutes 🚀 More details in the [announcement](https://pts-project.org/blog/deploy-colander-in-10-minutes/).
* The next community meeting will happen on Mar. 28 at 2pm CET.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).

# 🎉 Impacts and results
We’re thrilled to announce a major milestone in the evolution of Colander, our digital investigation web platform for civil society organizations. After months of dedicated work, we’ve completely revamped our deployment procedure, making it easier than ever to get Colander up and running, keep it updated, and ensure your data is safe.

The Ansible playbooks [automate everything](https://pts-project.org/docs/colander/deployment/), from installing dependencies to deploying Colander.


# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).


## 📦 US2 - Better knowledge management
A significant improvement involves refining knowledge organization and representation within Colander. This includes establishing a hierarchical structure for cases, where parent cases inherit from child cases, enhancing the management of extensive investigations. Furthermore, Colander will support the creation of multiple graphs within a single case, allowing for diverse projections of a subset of the case knowledge graph. The inclusion of thumbnails on graph nodes will simplify the investigation by involving pictures.

### Overview of the different activities
* 🔁 Create a hierarchy of cases
* 🔁 Create multiple graphs
* 🔁 Add thumbnails on graph nodes
* 🔁 Batch import of knowledge
* 🔁 Feature request: bulk add of observables



### Add thumbnails on graph nodes
#### This month
A new thumbnail attribute has been added to entities that can be displayed with Colander’s graph editor. The thumbnail is shown on most entity management screens and in the graph editor, providing a visual representation of each entity.
Several prototypes for representing thumbnails on the graph editor are currently being tested. The most relevant and clear prototype will be selected and implemented after a familiarization period.

#### Next month
The thumbnail representation on the graph editor will be released. Users will be able to add, edit, and delete thumbnails directly within the graph editor. Additionally, the user will have the option to crop images when adding them.
The internal [Mandolin](https://github.com/PiRogueToolSuite/mandolin) service will optimize the display of all thumbnails based on the screens on which they appear.






## 📦 US8 - Colander deployment and administration
In an effort to ease the deployment and administration of Colander servers, functionalities such as importing and exporting entire cases, one-click deployment, and backup and restore tooling and procedures will be implemented, to enhance the overall manageability of the system. We would like to make it easier for end-users to deploy Colander since the [deployment procedure described on GitHub](https://github.com/PiRogueToolSuite/colander?tab=readme-ov-file#production-environment) can be tricky to follow if one does not have the technical expertise to do so.

### Overview of the different activities
* ✅ Easy deployment
* ✅ Backup and restore tools



### Easy deployment
#### This month
This month, we’ve released the initial version of the [Ansible playbooks](https://github.com/PiRogueToolSuite/colander-ansible) for Colander. The playbooks facilitate the effortless deployment and management of a Colander server. To guarantee maximum security and minimize the attack surface, Colander is deployed in an unprivileged sandbox context, with Docker configured in [rootless mode](https://docs.docker.com/engine/security/rootless/).

The initial deployment of Colander typically takes approximately 10 minutes and 3 commands. 

With those playbooks, the system administrator can perform the following actions on their server:
- **configure**: this action generates a configuration file that stores all the passwords and secrets, and then encrypts this file. This action must be performed only once during the initial setup of Colander.
- **deploy**: this action installs all the dependencies on the server, including Docker, deploys Colander, and starts it based on the configuration file generated in the previous step.
- **update**: this action updates the services that are flagged as upgradable and then restarts Colander.
- **back up**: this action automatically backs up all the services, such as Elasticsearch or Minio.
- **restore**: this manual action on the server restores a backup of Colander.
- **tear down**: this action completely uninstalls Colander and permanently deletes all containers, volumes, images, data, backups, configuration files.

🚀 To self-host your Colander server, check the [deployment procedure](https://pts-project.org/docs/colander/deployment/).

#### Next month
Nothing, as this task is now complete.

#### Challenges
Initially, we planned to offer our users a one-click deployment option for Colander. However, this feature is no longer feasible due to several reasons. Linode, which was our best candidate, no longer accepts submissions to their marketplace. Instead, they have introduced Akamai droplet images, which are virtual machine images. This approach is unsuitable for Colander because it requires hard-coding secrets and passwords within the image. Storing these secrets in the image poses a significant security risk.

Hosting providers actually offer 3 ways to deploy applications in one click:
- virtual machine images: not acceptable for obvious security reasons
- single container: not acceptable as Colander relies on multiple sandboxing containers
- Kubernetes: not acceptable because too complex

Kubernetes, a sophisticated stack deployment system widely adopted by cloud providers, necessitates the hiring of an expert for maintenance and management. However, the majority of our users lack the resources to employ a system administrator with this specialized profile.

Colander uses multiple sandboxing containers to make it flexible, scalable and secure. None of the hosting providers we’ve talked to offer a solution that combines security and accessibility.

### Backup and restore tools
#### This month
This month, we’ve released the initial version of the [Ansible playbooks](https://github.com/PiRogueToolSuite/colander-ansible) for Colander. These playbooks automatically deploy two bash scripts on the server: one for backing up the whole service stack and a second script for recovering a specific backup. Colander can be backed up and restored without requiring a shutdown, eliminating any downtime and allowing users to continue using it during the process. The playbook `backup-colander` is designed to initiate the backup.

```
ansible-playbook -J -i production.yml playbooks/backup-colander.yml
```

The backup script automatically creates a file structure that any automatic backup tool, like [Borg](https://www.borgbackup.org/), can easily ingest for off-site backup:

```
/home/colander/colander/backups/
`-- 2025_02_18-13_47_01
    |-- colander-db
    |   `-- backup_2025_02_18T13_47_02.sql.gz
    |-- elasticsearch
    |   `-- elasticsearch-2025_02_18-13_47_03.tgz
    |-- minio
    |   `-- minio-2025_02_18-13_47_03.tgz
    `-- threatr-db
        `-- backup_2025_02_18T13_47_03.sql.gz
```

For more details, check the [deployment procedure](https://pts-project.org/docs/colander/deployment/).

#### Next month
Nothing, as this task is now complete.


## 📦 US100 - Documentation
Documenting the project is key in its usability. We’re continuously documenting the different tools and features we develop and build new learning materials to facilitate skills development.

#### This month
We’ve enhanced the PiRogue documentation to provide clearer explanations of the prerequisites for making the PiRogue web services, particularly the dashboard, publicly accessible.

We’ve published the [deployment and administration documentation of Colander](https://pts-project.org/docs/pirogue/installation/).

#### Next month
We will continue to improve the project documentation to accurately reflect ongoing changes and updates.




## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation and fix bugs.

#### This month
The migration of Vue3 components is progressing smoothly. To support more modern component development, a new build workflow has been implemented. Additionally, the Colander front-end engine now declares a new components registry that can be queried globally by any widgets.

Minor low-level asynchronous processing in Colander has been improved.

#### Next month
The [HAR analyzer](https://github.com/PiRogueToolSuite/har-analyzer-vuejs) build workflow will be updated to conform to the Vue3 composition model and subsequently added to the Colander component registry.



## 📦 US102 - Community and outreach
Given the success of events, webinars and demos with members of the civil society, NGOs and security researchers, we continue with our outreach plan. We organize trainings and demonstration sessions as well as creating spaces for the community to share feedback and request new features via our mailing list, GitHub issues or Discord server.
We analyze one Android app that has received the community's interest (ex COP28 app) per month. The application to be analyzed is chosen by the community. The analysis report is first privately shared with the community and one month later it is publicly released.

We organize monthly calls open to all members of the community to share project updates and get the community’s feedback.

#### This month
The [analysis report](https://pts-project.org/blog/analysis-of-sham-cash-v0.2.0/) of the Sham Cash Android application will be published in a few days because its analysis is more complex than anticipated.

The PTS community meeting took place on Feb. 28. The next one will happen on Mar. 28 at 2pm CET.

Due to a bug in PiRogue, we’ve noticed an increase in support requests. We’re actively working on resolving the issue that arises when the PiRogue’s IP address changes. 

#### Next month
We will continue with our recurring activities.



## 📦 US103 - Governance


#### This month
We had our first meeting with [**The Engine Room**](https://www.theengineroom.org/) to discuss their assistance in conducting user research, mapping systems and audiences, and designing sustainable user feedback processes. We’re currently drafting a working plan which will be sent to the OTF for their approval. 

We’ve received the security audit report for PiRogue, and we’ll address the identified vulnerabilities within the next 90 days. These vulnerabilities only affect PiRogue when deployed on a Raspberry Pi. It’s worth noting that no show-stopping vulnerabilities were discovered, the most critical one is the default login and password for the user `pi`. **NimKat**’s audit and report were truly remarkable and highly valuable to us. 

We’ve followed up with potential partners to explore different hosting options for our users.

#### Next month
We will continue with our recurring activities.



