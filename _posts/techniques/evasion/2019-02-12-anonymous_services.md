---
layout: post
enabled: true
title: Anonymous services
category: techniques
theme: Evasion
Id: 29
description: 'Anonymous services like TOR can be used to mask the attackers identity and location'
prevention: false
detection: true
permalink: 'techniques/evasion/anonymous_services'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'GRIZZLY STEPPE,Dukes' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Services

* TOR

## Preventions

`<Mitigation techniques>`

## Detections

* TOR provides a public [list of exit nodes](https://check.torproject.org/cgi-bin/TorBulkExitList.py?ip=1.1.1.1) which includes IP addresses. This can be used to see if any computers in your environment are communicating with TOR

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## Resources/Sources

* `[<Source name>](<Source link>)`