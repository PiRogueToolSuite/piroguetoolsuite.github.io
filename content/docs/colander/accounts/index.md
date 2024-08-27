---
title: "Account administration"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 511
toc: true
---

# Administrator account
Once Colander is deployed and running, the system administrator has to create a first account with administrative rights for both Colander and Threatr. To do so, the system administrator has to run the following command on the server running Colander:

```bash {title="Create admin accounts"}
docker compose -f no-sso.yml run --rm colander-front python manage.py createsuperuser
docker compose -f no-sso.yml run --rm threatr-front python manage.py createsuperuser
```

Those credentials have to be securely stored and must not be shared.

This first administrator account is necessary to create others accounts. 

## Administration panel
Administrators can use the administration panel of Colander which is located at a random location. This location is defined in 2 separate files:

* `.envs/.production/.colander`, the variable `DJANGO_ADMIN_URL` defines the location of the administration panel of Colander
* `.envs/.production/.threatr`, the variable `DJANGO_ADMIN_URL` defines the location of the administration panel of Threatr

The administration panel of Colander is accessible at `https://[colander domain]/[DJANGO_ADMIN_URL]` and `https://[threatr domain]/[DJANGO_ADMIN_URL]` for Threatr.

# User accounts
## Account creation
**By now, the only way for a new user to get an account is requesting its creation to an administrator.** The administrator must use the administration panel to add a new user.

{{< figure src="img/create-user-1.png" alt="Menu of the administration panel showing the entry for managing the accounts" caption="Menu of the administration panel showing the entry for managing the accounts" class="d-block mx-auto shadow" >}}

Then, the administrator has to specify the username and password that will then be shared with the user.

{{< figure src="img/create-user-2.png" alt="Menu of the administration panel showing the user account creation form" caption="Menu of the administration panel showing the user account creation form" class="d-block mx-auto shadow" >}}

To grant the administrative rights to a specific user, an administrator has to select *Active*, *Staff status* and *Superuser status* options.

{{< figure src="img/create-user-3.png" alt="Menu of the administration panel showing the options to grant administrative rights" caption="Menu of the administration panel showing the options to grant administrative rights" class="d-block mx-auto shadow" >}}

Instead of deleting an account, administrators can deactivate a given account.

{{< callout context="danger" title="Raw passwords" icon="alert-octagon" >}}
Raw passwords are not stored, so there is no way to see the user’s password.
{{< /callout >}}


## Account verification
At their first login, a user has to set a primary email address by opening their profile (click on the username at the top right of Colander then *Manage* in the email address section) and has to go through the verification process. 

Having a verified primary email address linked is necessary to reset the password of the account.

## Password change
After having linked their email address, the user can logout, go back to the login page and click on *Forgot your password?*. An email detailing the procedure will be sent to the primary email address linked to the account.

## Multi-factor authentication
Users can set up 2-factor authentication by following the procedure in their profile, section *2FA*. By now, Colander only supports TOTP.

{{< figure src="img/create-user-4.png" alt="Overview of the form for setting up the 2-factor authentication" caption="Overview of the form for setting up the 2-factor authentication" class="d-block mx-auto shadow" >}}