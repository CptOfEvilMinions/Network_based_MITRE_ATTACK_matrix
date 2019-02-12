---
layout: post
enabled: true
title: Network sniffing
category: techniques
theme: Internal recon
Id: 21
description: "[Network Sniffing](http://www.valencynetworks.com/articles/cyber-security-attacks-network-sniffing.html) involves capturing, decoding, inspecting and interpreting the information inside a network packet on a TCP/IP network. The purpose is to steal information, usually user IDs, passwords, network details, credit card numbers, etc. Sniffing is generally referred to as a “passive” type of attack, wherein the attackers can be silent/invisible on the network. This makes it difficult to detect, and hence it is a dangerous type of attack."
permalink: /techniques/internal_recon/network_sniffing
---
{{ page. description }}


## Malware/Threat actors

{% assign malwares = 'Operation Cleaver' | split: ',' %}

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

* [Cyber Security Attacks Network Sniffing](http://www.valencynetworks.com/articles/cyber-security-attacks-network-sniffing.html)
