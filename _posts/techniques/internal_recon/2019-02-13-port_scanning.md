---
layout: post
enabled: true
title: 'Port scanning'
category: techniques
theme: 'Internal recon'
Id: 38
description: 'A port scanner refers to a software application program that scans a server for open ports. It enables auditors and network administrators to examine network security while attackers and hackers use it to identify open ports for exploiting and/or running malicious services on a host computer or server.'
permalink: 'techniques/internal_recon/port_scanning'
---
{{ page. description }}


## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Naikon' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigations

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Network Enumeration](https://www.techopedia.com/definition/25405/network-enumeration)

