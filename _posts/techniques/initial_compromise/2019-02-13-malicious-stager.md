---
layout: post
enabled: true
title: 'Malicious stager'
category: techniques
theme: 'Initial compromise'
Id: 40
description: 'A stager is a small payload instructing the computer to pull down the next phase of malicious code.'
prevention: true
detection: true
permalink: 'techniques/initial_compromise/malicious_stager'
---
{{ page. description }}

Stagers may be malicious pieces of code inserted into documents to weaponize them. Detection of stagers can be challenging because the code is small and appears benign. However, the stager will instruct the computer to make an external call to download a malicious piece of code and execute. Applications such as Microsoft Word, Powershell, Adobe, and etc may make an HTTP request with an application specific user-agent.

## Targeted applications

* Microsoft Office
* Adobe PDF reader

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'APT38,Wild Neutron' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

* Microsoft Office has an option to only allow Microsoft signed macros to run.
* Keep applications up to date

## Detections

Monitor the user-agent field in HTTP for applications like Microsoft Office, Powershell, and Adobe making external connections to unknown entities.

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## References

* `[<Source name>](<Source link>)`
