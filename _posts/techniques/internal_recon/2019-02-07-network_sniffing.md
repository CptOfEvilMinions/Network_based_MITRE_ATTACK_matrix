---
layout: post
enabled: true
title: Network sniffing
category: techniques
theme: Internal recon
Id: 21
description: "[Network Sniffing](http://www.valencynetworks.com/articles/cyber-security-attacks-network-sniffing.html) involves capturing, decoding, inspecting and interpreting the information inside a network packet on a TCP/IP network. The purpose is to steal information, usually user IDs, passwords, network details, credit card numbers, etc. Sniffing is generally referred to as a “passive” type of attack, wherein the attackers can be silent/invisible on the network. This makes it difficult to detect, and hence it is a dangerous type of attack."
prevention: false
detection: false
permalink: 'techniques/internal_recon/network_sniffing'
---
{{ page. description }}


## Malware/Threat actors

{% assign malwares = 'Operation Cleaver' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Cyber Security Attacks Network Sniffing](http://www.valencynetworks.com/articles/cyber-security-attacks-network-sniffing.html)
