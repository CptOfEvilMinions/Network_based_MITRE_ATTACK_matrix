---
layout: post
enabled: true
title: 'Custom obfuscation'
category: techniques
theme: Evasion
Id: 14
description: 'Threat actors may create custom obfuscation(encryption, encoding, and hashing) mechanisms to thwart defenders.'
prevention: false
detection: true
permalink: 'techniques/evasion/custom_obfuscation'
---
{{ page. description }}



## Common types

* encryption
* obfuscation
* compression

## Malware/Threat actors

{% assign malwares = 'TeamSpy,Wild Neutron,Lazarus Group' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

During the encryption handshake in protocols like TLS, SSL, and SSH look for encryption suites and ciphers that are new to the environment.

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## Resources/Sources

* [Github - CyberMonitor/APT_CyberCriminal_Campagin_Collections](https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections)