---
layout: post
enabled: true
title: Defacement
category: techniques
theme: "Actions on objective"
Id: 01
description: '[Website defacement](https://en.wikipedia.org/wiki/Website_defacement) is an attack on a website that changes the visual appearance of the site or a webpage. These are typically the work of defacers, who break into a web server and replace the hosted website with one of their own. Defacement is generally meant as a kind of electronic graffiti and, as other forms of vandalism, is also used to spread messages by politically motivated "cyber protesters" or hacktivists[1].'
permalink: /techniques/actions_on_objective/defacement
---
{{ page.description }}


## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Operation Cleaver' | split: ',' %}

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

* A continuous service that monitors your website for changes.
* A large number of HTTP requests to a new resource
* A change in packet size when requesting a resource
* Webserver making external requests for resources

## Toolkit

`<Toolkit instructions, if applicable>`

## Resources/Sources

* [Website defacement](https://en.wikipedia.org/wiki/Website_defacement)
