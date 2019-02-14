---
layout: post
enabled: false
title: 'Malicious stager'
category: techniques
theme: 'Initial compromise'
Id: 40
description: 'A stager is a small payload of instructing the computer to pull down the next phase of malicious code.'
permalink: 'techniques/initial_compromise/malicious_stager'
---
{{ page. description }}

Stagers may be malicious pieces of code inserted into documents to weaponize them. Detection of stagers can be challenging because the code is small and appears benign. However, the stager will instruct the computer to make an external call to download a malicious piece of code and execute. Applications such as Microsoft Word, Powershell, Adobe, and etc will may make an HTTP request with an application specific user-agent.

## Targeted applications

* Microsoft Office
* Adobe PDF reader

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'APT38' | split: ',' %}

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

* Microsoft Office has an option to only allow Microsoft signed macros to run.
* Keep applications up to date

## Detections

Monitor the user-agent field in HTTP for applications like Microsoft Office, Powershell, and Adobe making external connections to unknown entities.

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* `[<Source name>](<Source link>)`
