---
layout: post
enabled: true
title: 'Public scanning services'
category: techniques
theme: 'Recon and weaponization'
Id: 38
description: 'Platforms like Shodan hunt for internet facing devices to perform scanning and enumeration.'
prevention: true
detection: true
permalink: 'techniques/recon_and_weaponization/scanning_services'
---
{{ page. description }}

These scanning services provide mechanisms to search their database for particular attributes. These attributes can be a domain, an IP range, or a list of services publicly facing for a target. Additionally, attackers can search for a particular service version which has a known vulnerability.

## Common platforms

* Shodan

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'BlackEnergy' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

One mitigation is to block the IP addresses of these scanners. Shodan provides a [public list](https://wiki.ipfire.org/configuration/firewall/blockshodan) of these IP addresses.

## Detections

* First, you need a sensor monitoring the traffic in your DMZ. Next, with a tool like BRO analyze the `conn.log` file for source addresses that are known to be Shodan.
* Use the Shodan service to determine what Shodan knows about your IP range, domain, and etc.
* <a href="https://greynoise.io/">GreyNoise</a> can be used to confirm if a scan is a public scanner or not.

## Toolkit

* `eqllib query -s "Bro events" -f conn.log "bro_conn where source_address in ('<SHODAN public IPs>')`

## Similar techniques

{% include list_techniques.html %}


## References

* [How to block Shodan scanners](https://wiki.ipfire.org/configuration/firewall/blockshodan)
