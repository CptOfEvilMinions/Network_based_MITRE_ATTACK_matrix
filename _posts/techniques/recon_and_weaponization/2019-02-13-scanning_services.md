---
layout: post
enabled: true
title: 'Scanning services'
category: techniques
theme: 'Recon and weaponization'
Id: 38
description: 'Platforms like Shodan hunt for internet facing devices to perform scanning and enumeration.'
permalink: 'techniques/recon_and_weaponization/scanning_services'
---
{{ page. description }}

These scanning services provide mechanisms to search theirs databases for a particular attributes. These attributes can be a domain/IP range to get a list of publicly facing services for a particular target. Attacks can search for a particular service version which may be vulnerable.

## Common platforms

* Shodan

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'BlackEnergy' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigations

One mitigation is to block the IP addresses of these scanners. Shodan provides a [public list](https://wiki.ipfire.org/configuration/firewall/blockshodan) of these IP addresses.

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [How to block Shodan scanners](https://wiki.ipfire.org/configuration/firewall/blockshodan)
