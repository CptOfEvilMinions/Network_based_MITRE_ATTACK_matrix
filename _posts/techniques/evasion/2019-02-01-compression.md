---
layout: post
enabled: true
title: Compression
category: techniques
theme: Evasion
Id: 13
description: 'Compression is the act of reducing the number of bits needed to represent data.'
prevention: false
detection: false
permalink: 'techniques/evasion/compression'
---
{{ page. description }}

Attackers may use compression to obfuscate the data being transferred, bundle malware and tools, or a faster upload during exfiltration.

## Malware/Threat actors

{% assign malwares = 'Nettraveler,Jaku' | split: ',' %}
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

* [Data compression](https://searchstorage.techtarget.com/definition/compression)