---
layout: post
enabled: true
title: VPN tunneling
category: techniques
theme: Masquerade
Id: 34
description: 'Adversary reduces their footprint by using credentials to directly connect to the network and masquerade as VPN users instead of relying on the RAT.'
permalink: 'techniques/masquerade/vpn_tunneling'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'HURRICANE PANDA' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigations

`<Mitigation techniques>`

## Detections

* Monitor source IP addresses connecting to your VPN instance and compare these addresses to a GeoIP database. Your users should be connecting to your VPN from locations that relative to office locations.
* Monitor timestamps when connections are initiated to your VPN instance. Look for timestamps of users connecting to the VPN at irregular times.

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* `[<Source name>](<Source link>)`
