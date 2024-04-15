---
title: "Graphical interface"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 510
toc: true
---

The graphical interface of Colander allows to navigate through the different workspaces as well as easily switching from one case to another or quickly searching for entities within a selected case or within all the user’s cases.

The graphical interface changes depending on a case as been selected or not. When no case is selected, the quick search bar will apply to all the cases the user has access to. In this mode, only 2 workspaces are accessible:
* **Cases** to create or edit cases
* **Collaborate** to create or edit teams

{{< figure src="img/1.png" alt="Overview of the Colander interface when no case is selected" caption="Overview of the Colander interface when no case is selected" class="d-block mx-auto shadow" >}}

When a case is selected, the quick search bar only applies to the current case. In this mode, 6 workspaces are accessible:
* **Collect** to create, edit, delete entities 
* **Graph** to open the graph editor
* **Document** to open the documentation Markdown editor
* **Feeds** to create, edit or delete export feeds 
* **Investigate** to quickly retrieve intelligence from [VirusTotal](http://virustotal.com/) or [OTX Alien Vault](https://otx.alienvault.com) via Threatr
* **CyberChef** to open to self-hosted [CyberChef](https://github.com/gchq/CyberChef) tool

{{< figure src="img/2.png" alt="Overview of the Colander interface when a case is selected" caption="Overview of the Colander interface when a case is selected" class="d-block mx-auto shadow" >}}

When a case is selected, the documentation editor can be opened within the current workspace. The documentation editor is then shown on the lower third of the page. 

{{< figure src="img/3.png" alt="Overview of the Colander graph and documentation editor" caption="Overview of the Colander graph and documentation editor" class="d-block mx-auto shadow" >}}
