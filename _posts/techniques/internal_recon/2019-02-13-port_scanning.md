---
layout: post
enabled: false
title: 'Port scanning'
category: techniques
theme: 'Internal recon'
Id: 38
description: 'A port scanner refers to a software application program that scans a server for open ports. It enables auditors and network administrators to examine network security while attackers and hackers use it to identify open ports for exploiting and/or running malicious services on a host computer or server.'
permalink: 'techniques/internal_recon/port_scanning'
---
{{ page. description }}


## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Naikon' | split: ',' %}

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

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Network Enumeration](https://www.techopedia.com/definition/25405/network-enumeration)

