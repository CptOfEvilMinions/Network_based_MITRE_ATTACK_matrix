---
layout: post
enabled: true
title: Anonymous services
category: techniques
theme: Evasion
Id: 29
description: 'Anonymous services like TOR can be used to mask the attackers identity and location'
permalink: /techniques/evasion/anonymous_services
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'GRIZZLY STEPPE,Dukes' | split: ',' %}

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

## Services

* TOR

## Mitigations

`<Mitigation techniques>`

## Detections

* TOR provides a public [list of exit nodes](https://check.torproject.org/cgi-bin/TorBulkExitList.py?ip=1.1.1.1) which includes IP addresses. This can be used to see if any computers in your environment are communicating with TOR

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* `[<Source name>](<Source link>)`