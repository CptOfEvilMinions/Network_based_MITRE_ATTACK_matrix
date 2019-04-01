---
layout: post
enabled: true
title: 'Domain spoofing'
category: techniques
theme: Impersonation
Id: 28
description: "Domain Spoofing is a form of phishing, that occurs when an attacker appears to use a company’s domain to impersonate a company or one of its employees."
prevention: true
detection: true
permalink: 'techniques/Impersonation/domain_spoofing'
---
{{ page. description }}

This can be done by sending emails with false domain names which appear legitimate, or by setting up websites with slightly altered characters that read as correct. Commonly, a spoof website or email will use logos, or any other kind of accurate visual design to effectively imitate the styling and branding of a legitimate enterprise or business. Users will commonly be prompted to enter financial details or other sensitive data, trusting that they are being sent to the right place.

## Malware/Threat actors

{% assign malwares = 'Operation Hangover' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

* Use trusted DNS servers like OpenDNS or Google's public DNS service.

## Detections

* Monitor DNS queries in the environment. If the base domain of the query does not exist in Alexa's top million attempt to:
  * Do a `WHOIS` lookup on the domain to see when the domain was registered. If the domain is less than 30 days old then there is a grater likelihood it is malicious..
  * Apply an algorithm to detect how similar the base domain in the query is to your organization's domain or a domain in Alexa's top million. Attackers will register domains that look similar to your domain but may have two letters swapped.
* If your environment has a baseline of the domains visited you can detect new domains.

  
## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## References

* [Domain Spoofing](https://www.barracuda.com/glossary/domain-spoofing)
* [Finding NEW Evil: Detecting New Domains with Splunk](https://www.splunk.com/blog/2018/01/17/finding-new-evil-detecting-new-domains-with-splunk.html)