---
layout: post
enabled: true
title: Custom protocol
category: techniques
permalink: 

layout: post
enabled: true
title: 'Custom protocol'
category: techniques
theme: Evasion
Id: 15
description: 'Threat actors may create custom protocols to thwart security controls from reading/interpreting the data in transit.'
permalink: /techniques/evasion/custom_protocol
---
{{ page. description }}

## Common types

* TCP
* Traffic over port 443 that is not HTTPS

## Malware/Threat actors

{% assign malwares = 'Wild Neutron,icefog,APT1,Duqu Trojan,Turbo' | split: ',' %}

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

During the encryption handshake in protocols like TLS, SSL, and SSH look for encryption suites and ciphers that are new to the environment.

## Toolkit

`<Toolkit instructions, if applicable>`
