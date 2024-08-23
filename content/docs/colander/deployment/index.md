---
title: "Deployment"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 506
toc: true
---

This guide walks you through deploying Colander on a dedicated server.

Colander's official Docker image is available [on GitHub](https://github.com/PiRogueToolSuite/colander/pkgs/container/colander). The stack we provide includes the [Watchtower](https://containrrr.dev/watchtower/) service, which automatically updates the deployed version of Colander.

## Requirements
We recommend using a dedicated server with at least:

* 4 cores
* 4GB of RAM
* 500GB of storage space

We recommend installing Debian, as it's the operating system we're most familiar with. We can guide you through the entire process, from installation to maintenance and debugging. 

Your server must have a public IP address as well as a domain name.

## Download Colander package
First, dowload the latest [Colander deployment package](https://github.com/PiRogueToolSuite/colander/releases/latest) from Github.

Decompress the package on your server.

### Configure the server
Next, configure the deployment by editing the file `.envs/.tpl/.base`. Set the following variables according to your production environment:

* `ACME_EMAIL`: Email address for to the TLS certificate
* `ADMIN_NAME`: Administrator's full name 
* `ADMIN_EMAIL`: Email address for crash and error notifications
* `ROOT_DOMAIN`: Domain name pointing to your server 
* `DJANGO_DEFAULT_FROM_EMAIL`: Email address used for sending emails
* `EMAIL_HOST`: Host for sending email (can be the SMTP server of your email provider)
* `EMAIL_HOST_USER`: Username for the SMTP server
* `EMAIL_HOST_PASSWORD`: Password for the SMTP server 
* `EMAIL_PORT`: Port for the SMTP server 
* `EMAIL_USE_TLS`: `True` if the SMTP server uses TLS, `False` otherwise
* `EMAIL_USE_SSL`: `True` if the SMTP server uses SSL, `False` otherwise

For detailed email configuration, refer to the [Django documentation](https://docs.djangoproject.com/en/4.2/ref/settings/#email-use-tls).

### Generete configuration 

Once configured, generate the entire stack configuration by running:

```bash {title="Generate the configuration"}
bash gen.sh
```

This script creates multiple files containing environment variables for different services.

### Start the stack 

Now, use `docker compose` to start the Colander stack:

```bash {title="Build and start the entire stack"}
docker compose -f no-sso.yml build
docker compose -f no-sso.yml up -d 
```

This starts the Colander services. You can view the logs with: 

```bash {title="Check the logs"}
docker compose -f no-sso.yml logs
```

### Access Colander 

Use your web browser to access Colander at the configured domain name.

### Admin user

Create admin users for both Colander and Threatr by using the following commands: 

```bash {title="Create admin accounts"}
docker compose -f no-sso.yml run --rm colander-front python manage.py createsuperuser
docker compose -f no-sso.yml run --rm threatr-front python manage.py createsuperuser
```

Follow the instructions to create the accounts.

{{< callout context="danger" title="Backup" icon="alert-octagon" >}}
Remember to backup your credentials and the `.envs` folder.
{{< /callout >}}

### Load Threatr data

Threatr includes predefined entity types. To load them, run:

```bash {title="Insert the default data"}
docker compose -f no-sso.yml run --rm threatr-front python manage.py insert_default_data
```

### Connect Colander to Threatr

To connect Colander to Threatr for threat intelligence, follow these steps:
* In the Threatr administration panel, create a regular user via **Users** menu and an API key for the user.

* Create new entries for your Virus Total and/or OTX Alien Vault API keys in Threatr's **Vendor Credentials** menu.

* For VirusTotal, use the vendor identifier `vt` and for the credentials field, set 
    ```json
      {"api_key": "your VT API key"}
    ```
* For OTX Alien Vault, use the vendor identifier `otx` and for the credentials field, set 
    ```json
      {"api_key": "your OTX API key"}
    ```

{{< callout context="tip" title="Did you know?" icon="rocket" >}}
You can add multiple API keys for a same vendor, Threatr will do a round-robin on them.
{{< /callout >}}

In the administration panel of Colander, via the menu *Backend credentials*, create a new entry with `threatr` as backend identifier and for the credentials field, set 
```json
    {"api_key": "your Threatr API key"}
```

{{< callout context="note" title="Administration panel URLs" icon="info-circle" >}}
Note that the administration panels are accessible at random URLs:
* for Colander: `https://${COLANDER_FQDN}/${DJANGO_ADMIN_URL}` with the variables set in  `.envs/.production/.base` and `.envs/.production/.colander`
* for Threatr: `https://${THREATR_FQDN}/${DJANGO_ADMIN_URL}` with the variables set in  `.envs/.production/.base` and `.envs/.production/.threatr`
{{< /callout >}}

## Development environment setup

Here's how to set up Colander for development:

Clone the Colander repository. Build and start the Colander stack using Docker Compose (or Podman). The `local.yml` provides the entire stack you need.

```bash {title="Setup the development environment"}
git clone https://github.com/PiRogueToolSuite/colander.git
cd colander
docker compose -f local.yml build 
docker compose -f local.yml up -d
docker compose -f local.yml run --rm django python manage.py createsuperuser 
docker compose -f local.yml logs -f -n 44 django  # to check the logs
```
Then, you should be able to access Colander at [http://localhost:8000](http://localhost:8000).

To stop the development envirnoment, use:

```bash {title="Stop all services"}
docker compose -f local.yml stop
```
