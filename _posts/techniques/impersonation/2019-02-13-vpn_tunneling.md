---
layout: post
enabled: true
title: VPN tunneling
category: techniques
theme: Impersonation
Id: 34
description: 'An adversary can reduce their footprint by using credentials to directly connect to the network as a legitimate user, instead of relying on the RAT.'
prevention: false
detection: true
permalink: 'techniques/Impersonation/vpn_tunneling'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'HURRICANE PANDA' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

* Monitor source IP addresses connecting to your VPN instance and compare these addresses to a GeoIP database. Your users should be connecting to your VPN from locations that relative to office locations.
* Monitor timestamps when connections are initiated to your VPN instance. Look for timestamps of users connecting to the VPN at irregular times.

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## Resources/Sources

* `[<Source name>](<Source link>)`
