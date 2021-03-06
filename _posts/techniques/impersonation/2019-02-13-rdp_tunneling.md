---
layout: post
enabled: true
title: 'Reverse RDP tunnel'
category: techniques
theme: Impersonation
Id: 35
description: 'Reverse RDP tunneling is when an attacker initiates a connection outbound to a server. The attacker can use this server to perform actions on this host.'
prevention: false
detection: false
permalink: 'techniques/Impersonation/rdp_reverse_tunneling'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'HURRICANE PANDA' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## References

* `[<Source name>](<Source link>)`
