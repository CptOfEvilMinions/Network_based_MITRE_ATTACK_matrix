---
layout: post
enabled: true
title: 'SQL Injection'
category: techniques
theme: "Initial compromise"
Id: 20
description: "[SQL](https://www.rapid7.com/fundamentals/types-of-attacks/) stands for structured query language; it’s a programming language used to communicate with databases. Many of the servers that store critical data for websites and services use SQL to manage the data in their databases. A SQL injection attack specifically targets this kind of server, using malicious code to get the server to divulge information it normally wouldn’t. This is especially problematic if the server stores private customer information from the website, such as credit card numbers, usernames and passwords (credentials), or other personally identifiable information, which are tempting and lucrative targets for an attacker."
permalink: /techniques/initial_compromise/sql_injection
---
{{ page. description }}



## Malware/Threat actors

{% assign malwares = 'Operation Cleaver,HURRICANE PANDA' | split: ',' %}

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

* HTTP POST requests including common SQL injections like:`1' or '1' = '1, 1' or '1' = '1`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Common Types of Cybersecurity Attacks](https://www.rapid7.com/fundamentals/types-of-attacks/)
