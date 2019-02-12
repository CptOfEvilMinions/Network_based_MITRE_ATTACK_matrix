---
layout: post
enabled: true
title: 'Domain spoofing'
category: techniques
theme: Masquerade
Id: 28
description: '[Domain Spoofing](https://www.barracuda.com/glossary/domain-spoofing), a common form of phishing, occurs when an attacker appears to use a company’s domain to impersonate a company or one of its employees.'
permalink: /techniques/masquerade/domain_spoofing
---
{{ page. description }}

This can be done by sending emails with false domain names which appear legitimate, or by setting up websites with slightly altered characters that read as correct. Commonly, a spoof website or email will use logos, or any other kind of accurate visual design to effectively imitate the styling and branding of a legitimate enterprise or business. Users will commonly be prompted to enter financial details or other sensitive data, trusting that they are being sent to the right place.

## Malware/Threat actors

{% assign malwares = 'Operation Hangover' | split: ',' %}

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

* [Domain Spoofing](https://www.barracuda.com/glossary/domain-spoofing)
