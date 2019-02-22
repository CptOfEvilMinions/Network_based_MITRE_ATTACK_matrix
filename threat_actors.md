---
layout: page
title: Threat actors
permalink: /threat_actors/
---
{% include search_type.html %}

{% assign threat_actors = site.data.threat_actors %}

<style>
.file{
    width: 25px;
    margin:0 auto;
}
.file-link{
    margin:0 auto;
}
</style>

<table>
    <thead>
        <tr class="header">
            <th>Name</th>
            <th>Type</th>
            <th>Years</th>
            <th>Description</th>
            <th>PDF</th>
        </tr>
    </thead>
    <tbody id="myTable">
        {%- for threat_actor in threat_actors[0] %}
        <tr>
        {% assign tmp = threat_actor[1] -%}
            <td markdown="span">{{ threat_actor[0] }}</td>
            <td markdown="span">{{ tmp.type }}</td>
            <td markdown="span">{{ tmp.years }}</td>
            <td markdown="span">{{ tmp.description }}</td>
            <td markdown="span">
                {%- for source in tmp.sources -%}
                    {%- assign source1 = source | split:'/' -%}
                    <a href="{{ source }}" class="file-link">
                        <img class="file" src="{{ site.baseurl }}/assets/images/file.png">
                    </a><br>
                {%- endfor -%}
            </td>
        </tr>
        {% endfor %}
    </tbody>
</table>