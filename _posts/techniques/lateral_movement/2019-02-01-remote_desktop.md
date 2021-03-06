---
layout: post
enabled: true
title: 'Remote Desktop'
category: techniques
theme: 'Lateral movement'
Id: 23
description: 'Attackers will use valid credentials to move laterally in the environment by utilizing remote desktop.'
prevention: false
detection: false
permalink: 'techniques/lateral_movement/remote_desktop'
---
{{ page. description }}



## Malware/Threat actors

{% assign malwares = 'Gh0st Rat,HURRICANE PANDA,Axiom,BlackEnergy,FIN5,TA505,Shell_Crew,BlackAtlas,Duqu Trojan' | split: ',' %}
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
