---
title: "REST API"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 620
toc: true
---

## Colander
A Python 3 library abstracting the REST API of Colander is [available on GitHub](https://github.com/PiRogueToolSuite/colander-python-client).

To use it, you have to specify your Colander API key you can find in your profile.

**Installation**
```bash {title="Install the Python library"}
pip install colander-client
```

**Basic usage**
```python
from colander_client.client import Client

base_url = 'https://my-colander-server'
api_key = 'my-user-api-key'

client = Client(base_url=base_url, api_key=api_key)

# Assuming the given case id:
case_id = 'current-case-id-im-working-on'
case = client.get_case(case_id)
client.switch_case(case)

def progress(what, percent, status):
    print(f"{what} is at {percent}%, currently it is: {status}")
    # in case of artifact upload progress 'what' is the given filepath

a_type = client.get_artifact_type_by_short_name( 'SAMPLE' )
# Assuming we have switched to a Case
artifact = client.upload_artifact(filepath='/tmp/captured.file', artifact_type=a_type, progress_callback=progress)
```

Find more details on [GitHub](https://github.com/PiRogueToolSuite/colander-python-client).

## Threatr
[Threatr](https://github.com/PiRogueToolSuite/threatr) is a bridge between Colander and various 3rd-party services such as VirusTotal and OTX Alien Vault. Even if it is designed to operate along with Colander, Threatr can be used standalone and users can interact with it via its REST API.   

By now, Threatr supports requests on the following types of observables:
* `IPV4`
* `IPV6`
* `DOMAIN`
* `MD5`
* `SHA1`
* `SHA256`

And can return various types of information such as threats, VirusTotal detection score or reports.

Threatr propagates user's requests to the different configured 3rd-parties and returns the aggregated entities along with the knowledge graph linking the different found entities with the requested one. Threatr stores the results in its internal database and will always return the data already stored unless the attribute `force` is set to `true`. By forcing the refresh of the data, Threatr will propagate the user's request to all the different 3rd-party configured.

The retrieval of the data from the 3rd-party is done asynchronously. Thus, it is necessary to replay the same request until the status is no longer `ENQUEUED`. 

{{< callout context="danger" title="Danger" icon="alert-octagon" >}}
Do not forget to reset the attribute `force` to `false` or Threatr will be constantly requesting the same information to the 3rd-party.
{{< /callout >}}

Once Threatr has retrieved all the information from the different 3rd-party, it will return a JSON document following this structure:
* `root_entity`: the requested entity 
* `entities`: the list of all retrieved entities (DNS records, etc.)
* `events`: the list of all retrieved events (Passive DNS, etc.)
* `relations`: the knowledge graph linking the entities all together, `root_entity` included
* `graph`: the Mermaid definition of the knowledge graph

Users can ask Threatr for threat intelligence by sending POST HTTP requests. In the following example, we ask Threatr to get threat intelligence about a given SHA256 observable.

```bash
curl -X POST --location "[threat URL]" \
  -H "Content-Type: application/json" \
  -H "Authorization: Token [api-key]" \
  -d "{\"super_type\": \"observable\", 
    \"type\": \"sha256\", \   # we provide a SHA256 observable
    \"value\": \"854774a198db490a1ae9f06d5da5fe6a1f683bf3d7186e56776516f982d41ad3\", \   # the SHA256
    \"force\": false}"
``` 

It returns a document JSON looking like:
```json
{
  "root_entity": {
    "id": "7c208f04-54f6-441c-8823-a125ee8d9151",
    "super_type": {
      "name": "Observable",
      "short_name": "OBSERVABLE",
      "description": null,
      "nf_icon": null
    },
    "type": {
      "name": "SHA256",
      "short_name": "SHA256",
      "description": null,
      "nf_icon": "nf-fa-hashtag"
    },
    "name": "854774a198db490a1ae9f06d5da5fe6a1f683bf3d7186e56776516f982d41ad3",
    "description": null,
    "source_url": null,
    "created_at": "2023-03-18T20:36:38.377497Z",
    "updated_at": "2023-03-20T15:06:31.046058Z",
    "tlp": "WHITE",
    "pap": "WHITE",
    "attributes": {
      "md5": "79ba96848428337e685e10b06ccc1c89",
      "sha1": "51b31827c1d961ced142a3c5f3efa2b389f9c5ad",
      "size": "3007920",
      "tlsh": "T18AD5338F15B14C4A94A719F7A1B6F2480D6D6BE1740C6342A32C6107B9D2F31AF6FC9B",
      "vhash": "32b92707c2fd75aba00c39dde6dc91f9",
      "sha256": "854774a198db490a1ae9f06d5da5fe6a1f683bf3d7186e56776516f982d41ad3",
      "ssdeep": "49152:rlaYuMuLPV74she6ZMKqvoWY9KqUoHLUfgP8csv5oJewBktwFcBVOhOUfFW:r0YhiqshtJqQWY9GEUoP8zv5f0kuFczJ",
      "filesize": "3007920",
      "vt_score": "39/76",
      "file_type": "Zip archive data, at least v2.0 to extract",
      "ZIP:ZipCRC": "0x2eb041f1",
      "file_class": "APK",
      "is_malicious": "True",
      "source_vendor": "OTX Alien Vault",
      "ZIP:ZipBitFlag": "0x0808",
      "ZIP:ZipFileName": "META-INF/MANIFEST.MF",
      "ZIP:ZipModifyDate": "2019:10:23 10:54:58",
      "ZIP:ZipCompression": "Deflated",
      "ZIP:ZipCompressedSize": "505",
      "ZIP:ZipRequiredVersion": "20",
      "ZIP:ZipUncompressedSize": "956"
    }
  },
  "entities": [
    {
      "id": "01ee1c48-8670-4535-b90f-b99070fd02e4",
      "super_type": {
        "name": "External documentation",
        "short_name": "EXT_DOC",
        "description": null,
        "nf_icon": null
      },
      "type": {
        "name": "Analysis report",
        "short_name": "REPORT",
        "description": null,
        "nf_icon": "nf-fa-file-lines"
      },
      "name": "FinSpy spyware found in Egypt, and Mac and Linux versions revealed",
      "description": "\"FinSpy is a commercial spyware suite produced by the Munich-based company FinFisher Gmbh. Since 2011 researchers have documented numerous cases of targeting of Human Rights Defenders (HRDs) - including activists, journalists, and dissidents with the use of FinSpy in many countries, including Bahrain, Ethiopia, UAE, and more.\"",
      "source_url": "https://www.amnesty.org/en/latest/research/2020/09/german-made-finspy-spyware-found-in-egypt-and-mac-and-linux-versions-revealed/",
      "created_at": "2023-03-18T20:36:40.807646Z",
      "updated_at": "2023-03-20T15:06:31.012557Z",
      "tlp": "WHITE",
      "pap": "WHITE",
      "attributes": {
        "tags": "linux,osx,finspy,android,backdoor,cobalt strike,spyware",
        "created": "2020-09-25 18:20:44.470000+00:00",
        "modified": "2020-10-25 00:02:49.937000+00:00",
        "source_vendor": "OTX Alien Vault"
      }
    },
    {
      "id": "be2a862c-30d6-468f-91c0-583c00286f83",
      "super_type": {
        "name": "Threat",
        "short_name": "THREAT",
        "description": null,
        "nf_icon": null
      },
      "type": {
        "name": "Trojan",
        "short_name": "TROJAN",
        "description": null,
        "nf_icon": "nf-fa-bug"
      },
      "name": "trojan.finspy/techfu",
      "description": null,
      "source_url": null,
      "created_at": "2023-03-20T11:52:05.535519Z",
      "updated_at": "2023-03-20T15:06:27.658068Z",
      "tlp": "WHITE",
      "pap": "WHITE",
      "attributes": {
        "tags": "apk,checks-gps,sudo,android,contains-elf",
        "source_vendor": "VirusTotal"
      }
    },
    {
      "id": "bbc19a6b-8b56-4efd-96d5-c56bb1128d59",
      "super_type": {
        "name": "External documentation",
        "short_name": "EXT_DOC",
        "description": null,
        "nf_icon": null
      },
      "type": {
        "name": "Analysis report",
        "short_name": "REPORT",
        "description": null,
        "nf_icon": "nf-fa-file-lines"
      },
      "name": "German-made FinSpy spyware found in Egypt, and Mac and Linux versions revealed",
      "description": "",
      "source_url": "https://github.com/AmnestyTech/investigations/blob/master/2020-09-25_finfisher/android_tlv_list.csv",
      "created_at": "2023-03-18T20:36:40.825174Z",
      "updated_at": "2023-03-20T15:06:31.025317Z",
      "tlp": "WHITE",
      "pap": "WHITE",
      "attributes": {
        "tags": "android finspy,backdoored,older linux,macos installer,linux finspy,older mac os",
        "created": "2020-09-25 16:28:05.448000+00:00",
        "modified": "2020-10-25 00:02:49.937000+00:00",
        "source_vendor": "OTX Alien Vault"
      }
    }
  ],
  "events": [
    {
      "id": "ba3180c7-6bb0-46c0-8d2b-ac2b853dec9c",
      "type": {
        "name": "AntiVirus detection",
        "short_name": "AV_DETECTION",
        "description": null,
        "nf_icon": "nf-oct-alert"
      },
      "first_seen": "2022-11-23T13:30:52Z",
      "last_seen": "2022-11-23T13:30:52Z",
      "count": 1,
      "name": "Latest analysis on VT",
      "created_at": "2023-03-20T15:58:23.694985Z",
      "updated_at": "2023-03-20T15:58:23.704958Z",
      "description": null,
      "attributes": {
        "source_vendor": "VirusTotal"
      },
      "involved_entity": "7c208f04-54f6-441c-8823-a125ee8d9151"
    },
    {
      "id": "ba7e49bb-bf7b-4c00-a9c9-0eced24890e2",
      "type": {
        "name": "Hit",
        "short_name": "HIT",
        "description": null,
        "nf_icon": "nf-mdi-white_balance_sunny"
      },
      "first_seen": "2019-11-27T03:50:05Z",
      "last_seen": "2023-01-11T09:34:41Z",
      "count": 11,
      "name": "Submission on VT",
      "created_at": "2023-03-20T15:58:23.694985Z",
      "updated_at": "2023-03-20T15:58:23.704958Z",
      "description": null,
      "attributes": {
        "source_vendor": "VirusTotal"
      },
      "involved_entity": "7c208f04-54f6-441c-8823-a125ee8d9151"
    }
  ],
  "relations": [
    {
      "id": "27f61e7e-0b3a-44fc-842c-2933c160105e",
      "name": "documents",
      "description": null,
      "created_at": "2023-03-18T20:36:40.821695Z",
      "attributes": {
        "source_vendor": "OTX Alien Vault"
      },
      "obj_from": "729c6a82-9fc7-4411-abcf-ebfb30d54e24",
      "obj_to": "7c208f04-54f6-441c-8823-a125ee8d9151"
    },
    {
      "id": "55d2bdac-41d9-4cb2-8a4e-acb101166bb7",
      "name": "documents",
      "description": null,
      "created_at": "2023-03-18T20:36:40.837011Z",
      "attributes": {
        "source_vendor": "OTX Alien Vault"
      },
      "obj_from": "1b994b04-870f-458a-8cb3-a3e3502e514d",
      "obj_to": "7c208f04-54f6-441c-8823-a125ee8d9151"
    },
    [redacted]
  ],
  "graph": "flowchart [redacted Mermaid diagram]"
}
```