---
title: Monthly report n⁰44 - 2025-11
description: "Monthly report of the activities on the PiRogue Tool Suite project"
lead: "PiRogue tool suite (PTS) is an open-source tool suite that provides a comprehensive mobile forensics and digital investigations platform."
summary: "PTS now supports data conversion between Colander, MISP, and STIX2 formats, and provides case import/export functionality via standard archives. The security of PiRogue was audited by NimKat, leading to the remediation of one critical and two high-severity risks."
date: 2025-11-29
lastmod: 2025-11-29
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
PiRogue Tool Suite (PTS) provides a platform combining analysis tools, knowledge management, incident response management, and artifact management, which allows civil society organizations with limited resources to equip themselves at a low cost. The project consists of an open source tool suite that provides a comprehensive mobile device forensics and digital investigations platform.
* Website: [pts-project.org](https://pts-project.org)
* Email: `hello [at] pts-project.org`
* GitHub: [Source code](https://github.com/PiRogueToolSuite) - [Roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4)
* Get support: [Discord](https://discord.gg/qGX73GYNdp)
* Support us: [OpenCollective](https://opencollective.com/pts)

---

# 📢 Announcements
* The next community meeting will happen on Jan. 30 at 2pm CET.
* Data conversion between [Colander, MISP, and STIX 2.1](https://pts-project.org/docs/colander/import-knowledge/) is now supported!
* Threatr now supports MISP, [self-host it](https://pts-project.org/docs/threatr/local-deployment/)!
* NimKat conducted a “crystal-box” audit of PiRogue, take a look at the [full report](https://www.opentech.fund/wp-content/uploads/2025/11/Final-Report-PiRogue-audit-V1.1.pdf) for more details.
* Fill in [the form](https://docs.google.com/forms/d/e/1FAIpQLScT-0cH8rwKMSEKO-WK-6ipoNKnhV5FdcIH-sGJXOE7et5eTg/viewform?usp=sf_link) to select the Android app for next month.
* To ensure we're meeting your needs and expectations, we kindly ask you to complete a [brief feedback form](https://forms.gle/Ajof3sfKGCeHEBSj8).


# 🎉 Impacts and results
This month delivered major technical improvements that make the PiRogue Tool Suite more interoperable, reliable, and efficient for investigators and analysts. We have removed barriers between PTS and the wider threat intelligence ecosystem. By improving the import / export capabilities of Colander, we ensure users are not locked into a single toolset.

Colander now supports importing knowledge from CSV, MISP, and STIX2 automatically merging new data with existing entities to enrich investigations. The new import/export mechanisms significantly streamline data exchange across tools such as Colander and MISP.

Threatr now supports MISP! It allows users to access aggregated and normalized threat data (from VirusTotal, Shodan, MISP, etc.) via a single API, providing a historical cache of Indicators of Compromise (IoCs).

Following a security audit by NimKat, we have successfully fixed all identified critical- and high-severity risks, significantly hardening PiRogue. We also deployed a security patch for old PiRogue images to enforce password expiration, ensuring that default credentials do not remain active on deployed systems.

# 📒 Activity report

You can find more details about the different activities in the [project roadmap](https://github.com/orgs/PiRogueToolSuite/projects/3/views/4).



## 📦 US3 - Interoperability
The project seeks to enhance interoperability by enabling the import and export of knowledge in industry-standard format. This includes batch importing of knowledge, data interchange in MISP format, and the support for user-defined templates to generate custom knowledge feeds. PTS users must have the freedom to move their data and findings from and to other tools such as [OpenCTI](https://docs.opencti.io/latest/) or [MISP](https://www.misp-project.org/).

### Overview of the different activities
* ✅ Import and export cases
* ✅ Import and export knowledge from/to MISP format
* ✅ Support user-defined templates to generate custom feeds
* ✅ Use HAR to store the decrypted network traffic



### Import and export cases
#### This month

##### Case export

The import and export tools are now integrated into the case management page. Users can easily import and export cases allowing them to transfer cases from one organization to another. Cases are exported as **Archives**.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/86f78bbb-bb40-4421-b544-99248a015462" />

The archive manager is also available on the front page of each case. It allows the users to download an archive that has already been generated or request the creation of a new one. It produces `zip` archives with easy-to-understand names, *e.g.* `Name of my case - 2025-11-27T18_36+00_00.zip`.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/7e100ab6-3e2e-4354-bc9c-3d7b3e5408d0" />

##### Case import
The new archive tool allows the users to import a case they have previously downloaded.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/76abe10d-5374-4dd6-9f6f-309e43ff18bc" />

The importer checks the integrity of the archive and shows the items that will be imported.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/8d880791-4d05-48bd-a5f8-eb394f73b542" />

The import process can be monitored in real time. Once the import is complete, the user can import new archives.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/1d9f0937-2dfe-454c-ac32-162bedbec917" />

#### Next month
Nothing, as this task is now complete.


### Import and export knowledge from/to MISP format
#### This month
It’s now possible to share findings across multiple Colander servers, multiple MISP servers, and any other tools that support either JSON, MISP or STIX2 formats.

<img width="800" alt="Image" src="https://github.com/PiRogueToolSuite/colander-data-converter/raw/main/docs/_static/img/conversions.png"/>

##### Colander Data Converter
[`colander_data_converter`](https://github.com/PiRogueToolSuite/colander-data-converter) is a Python library that enables interoperability between cyber threat intelligence (CTI) platforms by converting structured threat data between different formats — notably MISP, STIX 2.1, and Colander. Colander data format is an opinionated data format focused on usability and interoperability.

It supports conversion between [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html), [STIX 2.1](https://pts-project.org/colander-data-converter/data_types/stix2.html), and [Colander](https://pts-project.org/colander-data-converter/data_types/colander.html) data formats. Check out [the conversion matrix](https://pts-project.org/colander-data-converter/data_types/conversion_matrix.html) for more details. Data can be [exported](https://pts-project.org/colander-data-converter/export_data.html) in CSV, [Mermaid](https://www.mermaidchart.com/) and [Graphviz](https://graphviz.org/) DOT formats. The library also supports [user-defined templates](https://pts-project.org/colander-data-converter/export_data.html#template).

One of the main objectives of this project is to minimize the loss of information between data formats. To improve the support of MISP, two new objects will be added to the MISP data model to include [*Colander Events*](https://pts-project.org/colander-data-converter/data_types/colander.html#event-events) and [*Colander Data Fragments*](https://pts-project.org/colander-data-converter/data_types/colander.html#datafragment-data-fragments). Check out [the definition](https://pts-project.org/colander-data-converter/data_types/misp_definitions.html) of these new MISP objects for more details.

This project is fully [documented](https://pts-project.org/colander-data-converter/index.html) and [tested](https://github.com/PiRogueToolSuite/colander-data-converter/actions/workflows/test.yml/) achieving [>90% of code coverage](https://app.codecov.io/gh/PiRogueToolSuite/colander-data-converter).

We warmly thank **Raphaël Vinot** from [CIRCL](https://www.circl.lu/) and [Yoyodyne IT](https://www.yoyodyne-it.eu/) for their invaluable help.


##### Threatr
[**Threatr**](https://pts-project.org/docs/threatr/overview/) is an API-first threat-intelligence aggregator that unifies data from platforms like VirusTotal, OTX, Shodan, Scarlet Shark, and **MISP** into a single, [standardized format](https://pts-project.org/colander-data-converter/data_types/threatr.html). It delivers consistent, enriched threat intelligence through a simple and powerful REST API. It aggregates and normalizes threat data from multiple providers in one place. Threatr delivers a [consistent data model](https://pts-project.org/colander-data-converter/data_types/threatr.html) for fast, reliable analysis across security workflows. Threatr keeps a **persistent cache** of all intelligence collected about an Indicator of Compromise. Each lookup enriches and updates the stored data, giving long-term visibility into how an IoC evolves over time.

<img width="430" alt="Image" src="https://github.com/user-attachments/assets/cb255de3-b19c-4c32-8923-53552a559e51" />

Check the documentation to learn how to [self-host Threatr](https://pts-project.org/docs/threatr/local-deployment/), how to configure [MISP integration](https://pts-project.org/docs/threatr/integrations/), and how to use [Threatr API](https://pts-project.org/docs/threatr/rest-api/).

It has never been that easy to get aggregated and normalized threat-intelligence:

```bash
curl -X POST --location "[Threatr URL]" -H "Authorization: Token [Api-Key]" \
  -d "{
     \"super_type\": \"observable\",
     \"type\": \"sha256\", \
     \"value\": \"854774a198db490a1ae9f06d5da5fe6a1f683bf3d7186e56776516f982d41ad3\", \
     \"force\": false}"
```


##### Colander
[**Colander**](https://pts-project.org/docs/colander/overview/) is a web-based case management, digital investigations and knowledge-building platform. It seamlessly integrates with PiRogue and other data sources, allowing users to structure their investigative findings, visualize complex relationships, collaborate securely with their team, and share findings with other organizations.

###### Import knowledge
Colander now supports the import of data from different formats such as [MISP, STIX2 and CSV](https://pts-project.org/docs/colander/import-knowledge/). Colander automatically merges imported data with the case entities. Check the documentation to know how Colander [converts data](https://pts-project.org/colander-data-converter/data_types/conversion_matrix.html) from [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html) and [STIX2](https://pts-project.org/colander-data-converter/data_types/stix2.html).

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/ddd83a2b-9902-47db-bae7-bc9fd479dfc2" />

By default, the workspace **Import** proposes to import a [Colander feed](https://pts-project.org/docs/colander/share_knowledge), but users can choose other formats like CSV, MISP or STIX2, load the file or paste JSON data (MISP event, STIX2 bundle or Colander feed).

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/84480153-61fa-4bf4-a9a3-d1d1c294082f" />

To import data from a CSV file, users need to select the CSV file to load, select the entity type (*e.g.,* Observable or Actor), and assign a subtype to each row (*e.g.,* URL or Domain name). Finally, each column must be mapped it to the corresponding entity property (*e.g.,* Name or Description). Any column data that does not match the Colander data model can be placed in the entity’s _Extra attributes_.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/5522f236-e853-45e4-b952-1275216f32bb" />

###### Share knowledge
Facilitating the exchange of knowledge among investigators, both within the same organization and across different organizations, is crucial for promoting learning and continuous improvement. This can be achieved through formal knowledge sharing feeds. Colander supports export feeds accessible via a password-protected URL giving access to the knowledge in different formats such as JSON, STIX2, MISP, CSV, dot/Graphviz, and Mermaid.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/5fb47353-bddd-4ee2-8ff2-3cb0038a2294" />

The workspace **Feeds** is dedicated to the management of knowledge feeds. Check the documentation to know how Colander [converts data](https://pts-project.org/colander-data-converter/data_types/conversion_matrix.html) to [MISP](https://pts-project.org/colander-data-converter/data_types/misp.html) and [STIX2](https://pts-project.org/colander-data-converter/data_types/stix2.html).


#### Next month
Nothing, as this task is now complete.

### Support user-defined templates to generate custom feeds
#### This month
Colander now supports template-based feeds. It uses [Jinja](https://jinja.palletsprojects.com/en/stable/) to render user-defined templates *Feed templates*. Templates are rendered in a security sandbox which prevents them from accessing Python functions.

The template context exposes the variable `feed` which contains all entities stored in the case. You can find examples of templates on [GitHub](https://github.com/PiRogueToolSuite/colander-data-converter/tree/main/colander_data_converter/data/templates) or check the documentation to learn more about [the data structure](https://pts-project.org/colander-data-converter/data_types/colander.html).

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/2a8c1237-30d7-4237-b28e-88c6abcfe3b4" />

#### Next month
Nothing, as this task is now complete.








## 📦 US101 - Maintenance
We manufacture PiRogues to supply organizations, while taking care of its maintenance. We will include OS upgrades, improvement of the documentation, and fixing bugs. Regarding Colander and Threatr, we maintain the public Colander server, upgrade dependencies, improve the documentation, and fix bugs.

#### This month
Since the fix for [PiRogue images](https://github.com/PiRogueToolSuite/pirogue-images/issues/8) was released (2.3.0), new PiRogue systems deployed using our Pi images make it mandatory to update the password, so that the default one doesn't stay. We've published a security patch for systems deployed prior to that get a similar behavior.

This [patch](https://github.com/PiRogueToolSuite/deb-packages/commit/217c2b5546b4d9c771c3544526d1e8b62972b3b1) detects systems deployed using our PiRogue OS images from specific releases (`arm64_v2.0.0`, `arm64_v2.1.0`, and `arm64_v2.2.0`). Those didn't feature an expired password (new in `arm64_v2.3.0`), and a security audit flagged this as a problem needing a fix.

This is why we're introducing the following scenario:

* when upgrading from pirogue-base versions strictly earlier than `2.0.6` (which introduces this check);
* when there is a line for the `pi` user in `/etc/shadow`;
* when this line matches one of the reference lines (extracted from affected images);
* then we conclude there were no changes regarding the password for the `pi` user, and we expire its password to force an update the next time it's used.

#### Next month
We will continue the maintenance of the tools, Debian packages we maintain, and Colander ecosystem.




## 📦 US103 - Governance


#### This month
OTF’s [Security Lab](https://www.opentech.fund/labs/security-lab/) partner, **NimKat**, conducted a “crystal-box” audit of PTS. A crystal-box audit provides the tester with complete access to source code, system architecture, and documentation, allowing for a top-to-bottom security assessment of hardware and software elements. This comprehensive approach is essential given that PTS serves individuals in repressive information contexts who are often targeted by sophisticated, well-resourced authorities.

The security assessment encompassed comprehensive testing of network rules, system fingerprinting, vulnerability scanning, and exploitation attempts targeting the various components that comprise the PTS ecosystem. Auditors found one critical-severity risk (with the potential for systemic compromise) and two high-severity risks (with the potential for significant data exposure or unauthorized control). Upon retesting, auditors found that the PTS team fixed all critical- and high-severity vulnerabilities. Take a look at the [full report](https://www.opentech.fund/wp-content/uploads/2025/11/Final-Report-PiRogue-audit-V1.1.pdf) for more details.

The next step for us with **NimKat** is to define the scope of Colander security audit.

We are actively engaging with potential new partners and grant opportunities. However, the landscape is competitive, and the timeline for securing such support is typically lengthy and uncertain. While we are doing our utmost to navigate this period and find new financial backing, the future remains precarious. If PTS is a valuable asset in your work, if it helps you conduct crucial investigations, research, or defend digital rights, we now earnestly ask for [your support](https://opencollective.com/pts).

#### Next month
We will continue with our recurring activities.



