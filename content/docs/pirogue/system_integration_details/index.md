---
title: "System integration — Details"
draft: false
images: []
menu:
  docs:
    parent: "pirogue"
weight: 718
toc: true
---

## Package contents and metadata

Packages that need to be integrated with `pirogue-admin` must follow those
rules:

 - They ship a `/usr/share/pirogue-admin/<package>/` directory, with an
   `index.yaml` entry point which lists variables, files/templates, and possible
   actions.
 - They include a dependency on `pirogue-admin`, which can be versioned in case
   variables, conditions, etc. get added along the way.
 - They call `pirogue-admin --redeploy --commit` upon upgrades, to make sure the
   configuration is redeployed (as needed).


## Managing files

Each `index.yaml` entry point is expected to contain at least a `files` section
which describes which source file (found in the same directory) is expected to
be used as a template for which destination file, optionally relying on
variables which are substituted.

By default, variables are managed in the following way:

 - Mentioning a `VAR` variable means trying to replace `@VAR@` in the source
   file, but it's possible to specify a different `token` to make sure we are
   able to deal with any configuration file format.
 - Variable substitutions happen by replacing the token by the variable's value,
   but it's possible to specify a `type` to use a specific formatter, e.g.
   `nftables_list_of_networks` or `grafana_re_positive_match_network`. That must
   be implemented in the `pirogue-admin` package (see
   `pirogue_admin/package_config/formatters.py`).

When a given destination file is created or updated, the associated `actions`
are run.

Let's look at this example from `pirogue-networking`:

```yaml
files:
  - src: 10-pirogue-networking.conf
    dst: /etc/sysctl.d/
    actions:
      - systemctl restart systemd-sysctl
```

In this case, `systemctl restart systemd-sysctl` is run when
`/etc/sysctl.d/10-pirogue-networking.conf` is created or updated.

It's possible to specify a `condition` (singular), which must be implemented in
the `pirogue-admin` package (see `pirogue_admin/package_config/conditions.py`).
In that case, the file is set up and the actions are run as usual if the
condition is met. Otherwise, the commands listed in `actions_else` are run
unconditionally.

<abbr title="Don't Repeat Yourself">DRY</abbr>! An `actions` section can be used
when a lot of files have `actions` in common, to avoid repeating them again and
again. See `pirogue-dashboard` for an example.


## Managing variables

It's also possible to have a `variables` section listing variable names and
their default values.

For example, in the `pirogue-dashboard` case:

```yaml
variables:
  - name: DASHBOARD_PASSWORD
    default: PiRogue
```

Another example, in the `pirogue-networking` case:

```yaml
variables:
  - name: WIFI_SSID
    default: PiRogue1
  - name: WIFI_PASSPHRASE
    default: superlongkey
  - name: WIFI_COUNTRY_CODE
    default: FR
```
