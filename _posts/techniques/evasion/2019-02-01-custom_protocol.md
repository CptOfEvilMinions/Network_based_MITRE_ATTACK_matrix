---
layout: post
enabled: true
title: Custom protocol
category: techniques
permalink: 

layout: post
enabled: true
title: 'Custom protocol'
category: techniques
theme: Evasion
Id: 15
description: 'Threat actors may create custom protocols to thwart security controls from reading/interpreting the data in transit.'
permalink: 'techniques/evasion/custom_protocol'
---
{{ page. description }}

## Common types

* TCP
* Traffic over port 443 that is not HTTPS

## Malware/Threat actors

{% assign malwares = 'Wild Neutron,icefog,APT1,Duqu Trojan,Turbo' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigations

`<Mitigation techniques>`

## Detections

During the encryption handshake in protocols like TLS, SSL, and SSH look for encryption suites and ciphers that are new to the environment.

## Toolkit

`<Toolkit instructions, if applicable>`
