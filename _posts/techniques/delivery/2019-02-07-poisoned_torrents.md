---
layout: post
enabled: true
title: 'Poisoned torrents'
category: techniques
theme: 'Delivery'
Id: 08
description: 'The technique of threat actors deploying torrent files onto torrent sites that are pre- infected with malware has not been widely seen before, especially with respect to BitTorrent-types of attack. This behavior is difficult to trace and track and is indiscriminate in its infection pattern unless it has some means of targeting desired demographics.'
prevention: false
detection: false
permalink: 'techniques/delivery/poisoned_torrents'
---
{{ page. description }}


## Malware/Threat actors

{% assign malwares = 'Jaku,APT37,Dukes' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* `[<Source name>](<Source link>)`
