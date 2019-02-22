---
layout: post
enabled: true
title: Public services
category: techniques
theme: Evasion
Id: 18
description: 'The malware communicates with a public service such as Google or Dropbox. These services can be used for the staging of malware or C2 communication.'
prevention: false
detection: false
permalink: 'techniques/evasion/public_services'
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
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

`<Detection techniques>`

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* `[<Source name>](<Source link>)`
