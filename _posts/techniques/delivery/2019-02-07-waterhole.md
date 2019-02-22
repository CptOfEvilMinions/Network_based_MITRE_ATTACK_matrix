---
layout: post
enabled: true
title: Watering hole
category: techniques
theme: Delivery
Id: 08
description: "A [watering hole attack](https://searchsecurity.techtarget.com/definition/watering-hole-attack) is a security exploit in which the attacker seeks to compromise a specific group of end users by infecting websites that members of the group are known to visit. The goal is to infect a targeted user's computer and gain access to the network at the target's place of employment."
prevention: true
detection: true
permalink: 'techniques/delivery/wateringhole'
---
{{ page. description }}


## Types

* Java exploits
* Flash exploits
* Internet Explorer(IE)
* JAR
* HTML

## Malware/Threat actors

{% assign malwares = 'Operation Dust Storm,ZooPark,Operation Cleaver,Epic Turla,Energetic Bear,APT38' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

* Keep all commonly used software and operating systems patched and updated to the latest versions
* Inspect all popular websites that employees visit and routinely inspect these sites for malware
* Configure browsers or other tools to use website reputation services to notify users of known, bad websites

## Detections

* Collect user-agents and alert on old versions of flash and IE

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Watering hole attack](https://searchsecurity.techtarget.com/definition/watering-hole-attack)
* [Network Security and Watering Hole Attacks](https://www.lastline.com/blog/network-security-and-watering-hole-attacks/)
