---
layout: post
enabled: true
title: 'Certificate impersonation'
category: techniques
theme: 'Masquerade'
Id: 41
description: 'In order to avoid detection, attackers may generates self-signed SSL certificates before the attack, indicating the names of popular brands in the fields, instead of filling them out randomly.'
permalink: 'techniques/masquerade/certificate_impersonation'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Group-IB' | split: ',' %}

{% assign threat_actors = site.data.threat_actors %}

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

* Monitor certificates being used in the environment and detect self-signed certs. Extract the `common name` field from the certificate and compare the base domain to Alexa's top million.
* Compare the SHA1 hash of the certificate to Abuse.sh's SHA1 blacklist

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Abuse.ch SHA1 blacklist](https://sslbl.abuse.ch/blacklist/)
