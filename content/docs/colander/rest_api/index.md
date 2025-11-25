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
