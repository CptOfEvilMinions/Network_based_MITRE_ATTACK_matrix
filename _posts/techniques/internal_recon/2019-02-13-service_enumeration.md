---
layout: post
enabled: true
title: 'Service enumeration'
category: techniques
theme: 'Internal recon'
Id: 37
description: 'Network enumeration is a process that involves gathering information about a network such as the hosts, network services, connected devices along with usernames, group information, and related data.'
prevention: false
detection: false
permalink: 'techniques/internal_recon/service_enumeration'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Naikon' | split: ',' %}
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

* [Network Enumeration](https://www.techopedia.com/definition/25405/network-enumeration)
