---
layout: post
enabled: true
title: Public services
category: techniques
theme: Evasion
Id: 18
description: 'The malware communicates with a public service such as Google or Dropbox. These services can be used for the staging of malware or C2 communication.'
permalink: /techniques/evasion/public_services
---
{{ page. description }}


## Public services

* Twitter
* Google Drive
* Dropbox
* Box
* AOL instant messenger
* pCloud
* Gmail
* hmamail.com
* Microsoft OneDrive

## Malware/Threat actors

{% assign malwares = 'Trojan.APT.Seinup,APT37,Dukes' | split: ',' %}

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
