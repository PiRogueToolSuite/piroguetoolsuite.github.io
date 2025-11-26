---
title: "Local deployment"
draft: false
images: []
menu:
  docs:
    parent: "threatr"
weight: 606
toc: true
---

{{< callout context="caution" title="Security" icon="alert-triangle" >}}
This section describes the procedure to self-host Threatr locally. It must not
be exposed to the Internet directly.
{{< /callout >}}

### Requirement
Docker and Docker Compose must be installed on the machine hosting Threatr.

### Initial deployment
###### 1. Download the Docker Compose file and the `.env`
```bash
wget https://raw.githubusercontent.com/PiRogueToolSuite/threatr/refs/heads/main/deployment/.env
wget https://raw.githubusercontent.com/PiRogueToolSuite/threatr/refs/heads/main/deployment/threatr-local.yml
```
###### 2. Change the secrets
Edit the `.env` file and replace the values of `DJANGO_SECRET_KEY` and `POSTGRES_PASSWORD` with a new randomly generated secret.

###### 3. Start Threatr
```bash
docker compose -f threatr-local.yml up -d
```

###### 4. Create the admin user
```bash
docker compose -f threatr-local.yml run --rm threatr-local-front python manage.py createsuperuser --username admin
```

###### 5. Create a new user and their API key
* connect to the administration panel `http://127.0.0.1:9080/admin`
* go to **Users** menu
* create a new regular user
* go to **Tokens** menu
* generate a new API key for the created user

###### 6. Configure integrations
Refer to [the documentation](/docs/threatr/integrations/).


### Update
```bash
docker compose -f threatr-local.yml pull
docker compose -f threatr-local.yml up -d
```

### Stop
```bash
docker compose -f threatr-local.yml stop
```
