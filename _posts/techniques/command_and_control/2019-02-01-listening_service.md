---
layout: post
enabled: true
title: "Listening Service"
category: techniques
theme: "Command and control"
Id: 04
description: ""
prevention: false
detection: false
permalink: 'techniques/command_and_control/listening_service'
---
{{ page. description }}



## Malware/Threat actors

{% assign malwares = 'Gh0st Rat,Backdoor.Remsec' | split: ',' %}
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
