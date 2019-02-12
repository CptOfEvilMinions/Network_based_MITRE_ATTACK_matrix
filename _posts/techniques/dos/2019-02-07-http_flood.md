---
layout: post
enabled: true
title: HTTP Flood
category: techniques
theme: DOS
Id: 10
description: 'An [HTTP flood attack](https://www.cloudflare.com/learning/ddos/http-flood-ddos-attack/) is a type of volumetric distributed denial-of-service (DDoS) attack designed to overwhelm a targeted server with HTTP requests. Once the target has been saturated with requests and is unable to respond to normal traffic, denial-of-service will occur for additional requests from actual users.'
permalink: /techniques/dos/http_flood
---
{{ page. description }}



## Malware/Threat actors

{% assign malwares = 'DarkComet' | split: ',' %}

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

Mitigating layer 7 attacks is complex and often multifaceted. One method is to implement a challenge to the requesting machine in order to test whether or not it is a bot, much like a captcha test commonly found when creating an account online. By giving a requirement such as a JavaScript computational challenge, many attacks can be mitigated.

## Detections

Avenues for stopping HTTP floods include the use of a web application firewall (WAF), managing an IP reputation database in order to track and selectively block malicious traffic.

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [What is an HTTP flood DDoS attack?](https://www.cloudflare.com/learning/ddos/http-flood-ddos-attack/)
