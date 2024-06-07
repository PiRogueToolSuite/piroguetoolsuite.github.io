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

Colander official Docker image is available [on GitHub](https://github.com/PiRogueToolSuite/colander/pkgs/container/colander). The stack we provide comes with the service [Watchtower](https://containrrr.dev/watchtower/) that will automatically update the version of Colander you deployed.

## Requirements
We suggest to use a dedicated server with at least:

* 4 cores
* 4GB of RAM
* 500GB of storage space

We recommend installing Debian because it's the operating system we're familiar with, and we can guide you through all the installation, maintenance, and debugging steps. 

Your server must have a public IP address as well as a domain name.

## Deployment procedure
Once your server is up and running, [download the latest Colander deployment package](https://github.com/PiRogueToolSuite/colander/releases/latest) available on GitHub and decompress it on your server.

### Configuration
The next step is to configure the stack to be deployed. To do so, edit the file `.envs/.tpl/.base` and set the following variables according to your production environment:

* `ACME_EMAIL`: the email address attached to the TLS certificate
* `ADMIN_NAME`: full name of the administrator
* `ADMIN_EMAIL`: email address that will receive notifications on crashes and unhandled errors
* `ROOT_DOMAIN`: the domain name pointing to your server 
* `DJANGO_DEFAULT_FROM_EMAIL`: the email address used for sending emails
* `EMAIL_HOST`: the host to use for sending email (can be the SMTP server of your email provider)
* `EMAIL_HOST_USER`: the username to use for the SMTP server
* `EMAIL_HOST_PASSWORD`: the password to use for the SMTP server 
* `EMAIL_PORT`: the port to use for the SMTP server 
* `EMAIL_USE_TLS`: `True` if the SMTP server uses TLS, `False` otherwise
* `EMAIL_USE_SSL`: `True` if the SMTP server uses SSL, `False` otherwise

Find more details about the email configuration in the [Django documentation](https://docs.djangoproject.com/en/4.2/ref/settings/#email-use-tls).

Once configured, you have to generate the entire configuration of the stack by running the following command:

```bash {title="Generate the configuration"}
bash gen.sh
```

The script will generate multiple files containing environment variables that will be passed to the different services.

### First boot
Now, you are ready to fire up the stack using `docker compose`:

```bash {title="Build and start the entire stack"}
docker compose -f no-sso.yml build
docker compose -f no-sso.yml up -d 
```

The Colander stack is now starting, you can see the logs by running 

```bash {title="Check the logs"}
docker compose -f no-sso.yml logs
```

Check with your web browser if Colander is up by browsing the domain name you configured.

### Admin user
Next, you have to create an admin user for both Colander and Threatr by running 

```bash {title="Create admin accounts"}
docker compose -f no-sso.yml run --rm colander-front python manage.py createsuperuser
docker compose -f no-sso.yml run --rm threatr-front python manage.py createsuperuser
```

and follow the instructions.

{{< callout context="danger" title="Backup" icon="alert-octagon" >}}
Don't forget to backup the credentials and the `.envs` folder.
{{< /callout >}}

### Insert default data
Threatr comes with a set of predefined entity types, to load them, run the following command

```bash {title="Insert the default data"}
docker compose -f no-sso.yml run --rm threatr-front python manage.py insert_default_data
```

### Connect Colander to Threatr
In the administration panel of Threatr, create a regular user via the *Users* menu. Then, via the *Auth Token* menu, create a new API key for the user you just created. Next, via the menu *Vendor credentials*, create a new entry for each 3rd-party API key you have for Virus Total and/or OTX Alien Vault.

* for VirusTotal, use the vendor identifier `vt` and for the credentials field, set 
    ```json
      {"api_key": "your VT API key"}
    ```
* for OTX Alien Vault, use the vendor identifier `otx` and for the credentials field, set 
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

## Development environment

### Setup
The development environment relies on Docker Compose (or Podman). The file `local.yml` provides the entire stack you need.

```bash {title="Setup the development environment"}
git clone https://github.com/PiRogueToolSuite/colander.git
cd colander
docker compose -f local.yml build 
docker compose -f local.yml up -d
docker compose -f local.yml run --rm django python manage.py createsuperuser 
docker compose -f local.yml logs -f -n 44 django  # to check the logs
```
Then, you should be able to browse and log-in Colander at [http://localhost:8000](http://localhost:8000).

To stop your Colander stack:
```bash {title="Stop all services"}
docker compose -f local.yml stop
```
