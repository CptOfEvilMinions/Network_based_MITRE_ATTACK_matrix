---
layout: post
enabled: true
title: Remote Admin Tools
category: techniques
theme: "Command and control"
Id: 05
description: 'Remote Administration tools like TeamViewer can be used to control a machine remotely. Tools like TeamViewer are legitimate applications that are signed and may be trusted by security controls.'
permalink: /techniques/commmand_and_control/remote_admin_tools
---
{{ page.description }}

## Malware/Threat actors

{% assign malwares = 'TeamSpy' | split: ',' %}

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

## Tools

* [TeamViewer](https://www.teamviewer.com/en-us/)

## Mitigations

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Github - CyberMonitor/APT_CyberCriminal_Campagin_Collections](https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections)