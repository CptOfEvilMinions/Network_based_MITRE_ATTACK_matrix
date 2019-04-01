---
layout: post
enabled: true
title: Defacement
category: techniques
theme: "Actions on objective"
Id: 01
description: 'Website defacement is an attack on a website that changes the visual appearance of the site or a webpage.'
prevention: false
detection: true
permalink: 'techniques/actions_on_objective/defacement'
---
{{ page.description }}

These are typically the work of defacers, who break into a web server and replace the hosted website with one of their own. Defacement is generally meant as a kind of electronic graffiti and, as other forms of vandalism, is also used to spread messages by politically motivated cyber protesters or hacktivists.


## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Operation Cleaver' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

* A continuous service that monitors your website for changes.
* A large number of HTTP requests to a new resource
* A change in packet size when requesting a resource
* Webserver making external requests for resources

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## Resources/Sources

* [Website defacement](https://en.wikipedia.org/wiki/Website_defacement)
