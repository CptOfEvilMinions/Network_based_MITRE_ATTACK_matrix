---
layout: post
enabled: true
title: 'Trusted third party'
category: techniques
theme: 'Masquerade'
Id: 39
description: 'Attackers may compromise a subsidiary organization before moving into the parent organization.'
permalink: 'techniques/masquerade/trusted_third_parth'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'APT38' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigations

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* `[<Source name>](<Source link>)`
