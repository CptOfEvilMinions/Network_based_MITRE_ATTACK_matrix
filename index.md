---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div class="flexbox">
{% for theme in site.categories.themes %}
    {% if theme.enabled == true %}
    <div class="col">
        <p class="theme"> {{ theme.title }}</p>
        <div class="techniques">
        {% for technique in site.categories.techniques %}
            {% if technique.enabled == true and technique.theme == theme.title %}
                <a class="technique" href="{{ site.url }}{{ technique.permalink }}">{{ technique.title }}</a>
            {% endif %}
        {% endfor %}
    </div>
</div>
{% endif %}

{% endfor %}
</div>


<style>
    table, caption, thead, tbody, td, tr{
        border: 1px solid black;
        padding: 1rem;
    }
    .flexbox{
        display: flex;
        width: 100%
        flex-wrap: nowrap;
        height: 50rem;
border-style: solid;
        border-color: black;
        border-width: 2px 1px 2px 1px;
          
        
        
    }
    .col{
height: 100%;
      border-style: solid;
        border-color: black;
        border-width: 0 1px 0 1px;
     
       
    }
    .theme{
        padding: 10px;
        font-weight: 700;
        color: white;
        background: DodgerBlue  ;
        min-height: 5%;
        max-height: 25px;
        margin: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .techniques{

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;

    }
    .col .technique{
        padding: 5px 10px;
        min-height: 50px;
        text-decoration: none;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
    }

    .col .technique:hover{
        background-color: #6699cc;
        color: white;

    }
</style>

