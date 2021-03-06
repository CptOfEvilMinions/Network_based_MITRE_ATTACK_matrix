---
layout: post
enabled: true
title: 'Trusted third party'
category: techniques
theme: 'Impersonation'
Id: 39
description: 'Attackers may compromise a subsidiary organization before moving into the parent organization.'
prevention: false
detection: true
permalink: 'techniques/Impersonation/trusted_third_party'
---
{{ page. description }}

Third parties may need access to data on your network. Your team should have an idea of what type of data they need and where that data is located. Access control should be put in place to limit the third party.

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'APT38,APT28,menuPass,APT10' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

* Monitor the network mechanism between you and the third party for malicious activity. Make a detection ruleset of tuples(IP address, protocol, port) to detect if a connection does not follow these rules.

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## References

* [Ensuring Network Security When Working with Third Party Vendors: Part 2 of 2](https://www.algosec.com/blog/ensuring-network-security-working-third-party-vendors-part-2-2/)
* [Third parties leave your network open to attacks](https://www.networkworld.com/article/3194832/security/third-parties-leave-your-network-open-to-attacks.html)
