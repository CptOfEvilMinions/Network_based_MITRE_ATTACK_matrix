---
layout: post
enabled: true
title: Remote Admin Tools
category: techniques
theme: "Command and control"
Id: 05
description: 'Remote Administration tools like TeamViewer can be used to control a machine remotely. Tools like TeamViewer are legitimate applications that are signed and may be trusted by security controls.'
prevention: false
detection: false
permalink: 'techniques/commmand_and_control/remote_admin_tools'
---
{{ page.description }}

## Malware/Threat actors

{% assign malwares = 'TeamSpy' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Tools

* [TeamViewer](https://www.teamviewer.com/en-us/)

## Preventions

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## Resources/Sources

* [Github - CyberMonitor/APT_CyberCriminal_Campagin_Collections](https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections)