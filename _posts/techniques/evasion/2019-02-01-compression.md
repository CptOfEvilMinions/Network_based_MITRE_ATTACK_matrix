---
layout: post
enabled: true
title: Compression
category: techniques
theme: Evasion
Id: 13
description: 'Compression is the act of reducing the number of bits needed to represent data. Attackers may use compression to obfuscate the data being transfered, bundle malware and tools, or a faster upload during exfiltration'
permalink: 'techniques/evasion/compression'
---
{{ page. description }}

## Malware/Threat actors

{% assign malwares = 'Nettraveler,Jaku' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigations

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Data compression](https://searchstorage.techtarget.com/definition/compression)