[![dnscontrol-check](https://github.com/project-zot/dnscontrol/actions/workflows/dnscontrol-check.yml/badge.svg)](https://github.com/project-zot/dnscontrol/actions/workflows/dnscontrol-check.yml)
[![dnscontrol-push](https://github.com/project-zot/dnscontrol/actions/workflows/dnscontrol-push.yml/badge.svg)](https://github.com/project-zot/dnscontrol/actions/workflows/dnscontrol-push.yml)

# dnscontrol

This repo is where we manage the project-zot domains.  The current zones that are related to project zot are:

* **zotregistry.io**: To be used for the actual project as well as registries, signatures, etc.
* **zotregistry.net**: This is reserved for future use by a zotregistry SaaS offering.

## Tooling

We are using [hexonet](https://www.hexonet.net) as both the registrar and the authoritative name service.  

We are using stackexchange's [dnscontrol](https://stackexchange.github.io/dnscontrol/) dns management system, using a set of *GitHub Actions*.  The actions we are incorporating are [dnscontrol-action](https://github.com/koenrh/dnscontrol-action).  There are three actions that have been defined.

* [dnscontrol-check](https://github.com/project-zot/dnscontrol/.github/workflows/dnscontrol-check.yml) is run by a push to any branch other than the *main* branch.  This runs locally (no hexonet access) just to check for syntax errors.
* [dnscontrol-pr](https://github.com/project-zot/dnscontrol/.github/workflows/dnscontrol-pr.yml) is run when a pull request is made from another branch to main.  It generates a pr comment that contains a *dry run* output of dnscontrol's interaction with hexonet.
* [dnscontrol-push](https://github.com/project-zot/dnscontrol/.github/workflows/dnscontrol-push.yml) is run when there is a merge into *main* branch.  It actually commits the changes to hexonet.

Secrets are stored in this repo that authenticate to hexonet for API access.

## Process

Since github actions can not access secrets when they are called from a fork, all changes must be staged into a branch of this repo,  as opposed to a personal fork of this repo.

Please consult the [dnscontrol](https://stackexchange.github.io/dnscontrol/) documentation for an overview of dnscontrol's syntax.  It is worth noting that dnscontrol configurations are written in javascript.

If a domain needs to be added or removed, edits need to be made to the [dnsconfig.js](https://github.com/project-zot/dnscontrol/dnsconfig.js) file.  This file is also where you define reuseable macros for things like namesever selection, SOA data, *etc.*

If you need to make changes to a given zone, the zone's file needs to be edited, currently those zone files are:
* [zotregistry_io.js](`https://github.com/project-zot/dnscontrol/domains/zotregistry_io.js)
* [zotregistry_net.js](`https://github.com/project-zot/dnscontrol/domains/zotregistry_net.js)

