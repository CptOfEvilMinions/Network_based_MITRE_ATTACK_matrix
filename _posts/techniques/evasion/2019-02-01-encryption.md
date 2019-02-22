---
layout: post
enabled: true
title: Encryption
category: techniques
theme: Evasion
Id: 17
description: 'Threat actors may utilize encryption to thwart security controls from reading/interpreting the data in transit.'
prevention: false
detection: false
permalink: 'techniques/evasion/encryption'
---
{{ page. description }}



## Common types

## Malware/Threat actors

{% assign malwares = 'ETSO,Wild Neutron,Energetic Bear,Jaku,Dukes' | split: ',' %}
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


## Resources/Sources

* `[<Source name>](<Source link>)`