---
title: "Artifact management"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 550
toc: true
---

Colander streamlines the handling and preservation of digital evidence, maintaining chain of custody and maximizing admissibility in legal proceedings.

## Artifact upload

### Artifact creation form
Users can import files from the *Artifact* entry in the *Collect* workspace. 

{{< figure src="img/create.png" alt="Create a new artifact" caption="Create a new artifact" class="d-block mx-auto shadow" >}}

The file will be uploaded by chunks allowing the users to upload large files even if they rely on an instable or slow Internet connection.

### Colander client for PiRogue
Alternatively, users can easily import artifacts using the Colander client for PiRogue which is installed by default on the PiRogue. The command line to be used is listed in the artifact creation form. This command looks like

```bash
pirogue-colander collect-artifact -c "[case ID]" [path of the file to be uploaded]
```

### REAT API
Refer to the [RESP API documentation](/docs/colander/rest-api/).

## Artifact processing
Once uploaded, Colander will compute the mimetype, MD5, SHA1 and SHA256 of the artifact. Then, a detached digital signature will be computed using the private key of the case the artifact belongs to. Later, when sharing an artifact, its integrity can be checked by the recipient using `openssl`. To do so, the recipient needs:

* the public key of the case
* the signature of the artifact
* the artifact itself

{{< figure src="img/integrity.png" alt="Check the integrity of an artifact" caption="Check the integrity of an artifact" class="d-block mx-auto shadow" >}}


