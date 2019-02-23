---
layout: post
enabled: true
title: 'Certificate impersonation'
category: techniques
theme: 'Impersonation'
Id: 41
description: 'In order to avoid detection, attackers may generates self-signed SSL certificates before the attack, indicating the names of popular brands in the fields, instead of filling them out randomly.'
prevention: false
detection: true
permalink: 'techniques/Impersonation/certificate_impersonation'
---
{{ page. description }}

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Group-IB' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

* Monitor certificates being used in the environment and detect self-signed certs. Extract the `commonname` field from the certificate and compare the base domain to Alexa's top million.
* Compare the SHA1 hash of the certificate to Abuse.sh's SHA1 blacklist

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## Resources/Sources

* [Abuse.ch SHA1 blacklist](https://sslbl.abuse.ch/blacklist/)
