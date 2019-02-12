---
layout: post
enabled: true
title: Watering hole
category: techniques
theme: Delivery
Id: 08
description: "A [watering hole attack](https://searchsecurity.techtarget.com/definition/watering-hole-attack) is a security exploit in which the attacker seeks to compromise a specific group of end users by infecting websites that members of the group are known to visit. The goal is to infect a targeted user's computer and gain access to the network at the target's place of employment."
permalink: /techniques/delivery/wateringhole
---
{{ page. description }}


## Types

* Java exploits
* Flash exploits
* Internet Explorer(IE)
* JAR
* HTML

## Malware/Threat actors

{% assign malwares = 'Operation Dust Storm,ZooPark,Operation Cleaver,Epic Turla,Energetic Bear' | split: ',' %}

<div class="threat-actor-table">
<table>
    <colgroup>
        <col width="30%" />
        <col width="70%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>Name</th>
            <th>Type</th>
            <th>Years</th>
            <th>Source</th>
        </tr>
    </thead>
    <tbody>
        {% for malware in malwares %}
        <tr>
        {% assign tmp = threat_actors[0][malware] %}
            <td markdown="span">{{ malware }}</td>
            <td markdown="span">{{ tmp.type }}</td>
            <td markdown="span">{{ tmp.years }}</td>
            <td markdown="span">
                {%- for source in tmp.sources -%}
                    {%- assign source1 = source | split:'/' -%}
                    <a href="{{ source }}">{{ source1[-1] }}</a><br>
                {%- endfor -%}
            </td>
        </tr>
        {% endfor %}
    </tbody>
</table>
</div>

## Mitigations

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
