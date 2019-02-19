---
layout: page
title: 'Attack themes'
permalink: /themes/
---

{% include search_type.html %}

<table>
    <colgroup>
        <col width="10%" />
        <col width="90%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody id="myTable">
        {%- for post in site.categories.themes %}
        {%- if post.enabled == true %}
        <tr>
        {% assign tmp = threat_actor[1] -%}
            <td markdown="span"><a href="{{ site.url }}{{ site.baseurl }}/{{ post.permalink }}">{{ post.title }}</a></td>
            <td markdown="span">{{ post.description }}</td>
        </tr>
        {%- endif -%}
        {% endfor %}
    </tbody>
</table>