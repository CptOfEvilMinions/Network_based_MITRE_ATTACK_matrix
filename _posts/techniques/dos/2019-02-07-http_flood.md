---
layout: post
enabled: true
title: HTTP Flood
category: techniques
theme: DOS
Id: 10
description: 'An HTTP flood attack is a type of volumetric distributed denial-of-service (DDoS) attack designed to overwhelm a targeted server with HTTP requests. Once the target has been saturated with requests and is unable to respond to normal traffic, denial-of-service will occur for additional requests from actual users.'
prevention: true
detection: true
permalink: 'techniques/dos/http_flood'
---
{{ page. description }}



## Malware/Threat actors

{% assign malwares = 'DarkComet' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

Mitigating layer 7 attacks is complex and often multifaceted. One method is to implement a challenge to the requesting machine in order to test whether or not it is a bot, much like a captcha test commonly found when creating an account online. By giving a requirement such as a JavaScript computational challenge, many attacks can be mitigated.

## Detections

Avenues for stopping HTTP floods include the use of a web application firewall (WAF), managing an IP reputation database in order to track and selectively block malicious traffic.

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [What is an HTTP flood DDoS attack?](https://www.cloudflare.com/learning/ddos/http-flood-ddos-attack/)
