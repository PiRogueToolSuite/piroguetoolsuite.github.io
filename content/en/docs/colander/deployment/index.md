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

We recommend to install Debian as is the operating system we know, and we will be able to guide you through all different steps for installation, maintenance and debugging. 

Your server must have a public IP address as well as a domain name.

## Deployment procedure
Once your server is up and running, download the Colander deployment package available on GitHub and decompress it on your server. To download the latest deployment package go to [the Github Actions page](https://github.com/PiRogueToolSuite/colander/actions?query=workflow%3ACI) and click on the latest successful build, you will find the package in the *Artifacts* section.

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

```text
bash gen.sh
```

The script will generate multiple files containing environment variables that will be passed to the different services.

### First boot
Now, you are ready to fire up the stack using `docker compose`:

```text
docker compose -f no-sso.yml build
docker compose -f no-sso.yml up -d 
```

The Colander stack is now starting, you can see the logs by running 

```text
docker compose -f no-sso.yml logs
```

Check with your web browser if Colander is up by browsing the domain name you configured.

### Admin user
Next, you have to create an admin user for both Colander and Threatr by running 

```text
docker compose -f no-sso.yml run --rm colander-front python manage.py createsuperuser
docker compose -f no-sso.yml run --rm threatr-front python manage.py createsuperuser
```

and follow the instructions.

**Don't forget to save the credentials in your favorite password manager!**

Note that the administration panels are accessible at random URLs specified in the files `.envs/.production/.colander` and `.envs/.production/.threatr`.

{{< alert icon="👉" context="warning" >}}
Don't forget to backup the `.envs` folder.
{{< /alert >}}

### Insert default data
Threatr comes with a set of predefined entity types, to load them, run the following command

```text
docker compose -f no-sso.yml run --rm threatr-front python manage.py insert_default_data
```

### Connect Colander to Threatr
In the administration panel of Threatr, create a regular user via the *Users* menu. Then, via the *Auth Token* menu, create a new API key for the user you just created. Next, via the menu *Vendor credentials*, create a new entry for each 3rd-party API key you have for Virus Total and/or OTX Alien Vault.

* for VirusTotal, use the vendor identified `vt` and for the credentials field, set 
    ```json
      {"api_key": "your VT API key"}
    ```
* for OTX Alien Vault, use the vendor identified `otx` and for the credentials field, set 
    ```json
      {"api_key": "your OTX API key"}
    ```

**NB** you can add multiple API keys for a same vendor    

In the administration panel of Colander, via the menu *Backend credentials*, create a new entry with `threatr` as backend identifier and for the credentials field, set 
```json
    {"api_key": "your Threatr API key"}
```

# Development environment

## Setup
The development environment relies on Docker Compose (or Podman). The file `local.yml` provides the entire stack you need.

```text
git clone https://github.com/PiRogueToolSuite/colander.git
cd colander
docker compose -f local.yml build 
docker compose -f local.yml up -d
docker compose -f local.yml run --rm django python manage.py createsuperuser 
docker compose -f local.yml logs -f -n 44 django  # to check the logs
```
Then, you should be able to browse and log-in Colander at [http://localhost:8000](http://localhost:8000).

To stop your Colander stack:
```text
docker compose -f local.yml stop
```