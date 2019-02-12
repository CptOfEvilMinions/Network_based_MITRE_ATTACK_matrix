---
layout: page
title: Threat actors
permalink: /threat_actors/
---
{% assign threat_actors = site.data.threat_actors %}
<table>
    <colgroup>
        <col width="1%" />
        <col width="1%" />
        <col width="1%" />
        <col width="2%" />
        <col width="5%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>Name</th>
            <th>Type</th>
            <th>Years</th>
            <th>Source</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {%- for threat_actor in threat_actors[0] %}
        <tr>
        {% assign tmp = threat_actor[1] -%}
            <td markdown="span">{{ threat_actor[0] }}</td>
            <td markdown="span">{{ tmp.type }}</td>
            <td markdown="span">{{ tmp.years }}</td>
            <td markdown="span">
                {%- for source in tmp.sources -%}
                    {%- assign source1 = source | split:'/' -%}
                    <a href="{{ source }}">{{ source1[-1] }}</a><br>
                {%- endfor -%}
            </td>
            <td markdown="span">{{ tmp.description }}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>