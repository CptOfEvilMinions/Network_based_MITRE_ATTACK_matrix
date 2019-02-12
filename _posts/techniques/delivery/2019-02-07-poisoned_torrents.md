---
layout: post
enabled: true
title: 'Poisoned torrents'
category: techniques
theme: 'Delivery'
Id: 08
description: 'The technique of threat actors deploying torrent files onto torrent sites that are pre- infected with malware has not been widely seen before, especially with respect to BitTorrent-types of attack. This behavior is difficult to trace and track and is indiscriminate in its infection pattern unless it has some means of targeting desired demographics.'
permalink: /techniques/delivery/poisoned_torrents
---
{{ page. description }}


## Malware/Threat actors

{% assign malwares = 'Jaku,APT37,Dukes' | split: ',' %}

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

* `[<Source name>](<Source link>)`
