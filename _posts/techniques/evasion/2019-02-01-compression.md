---
layout: post
enabled: true
title: Compression
category: techniques
theme: Evasion
Id: 13
description: 'Compression is the act of reducing the number of bits needed to represent data. Attackers may use compression to obfuscate the data being transfered, bundle malware and tools, or a faster upload during exfiltration'
permalink: /techniques/evasion/compression
---
{{ page. description }}

`<description of technique>`

## Malware/Threat actors

{% assign malwares = 'Nettraveler,Jaku' | split: ',' %}

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

* [Data compression](https://searchstorage.techtarget.com/definition/compression)