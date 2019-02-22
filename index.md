---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default


---

<h1><u><center>About this project</center></u></h1>
<div class="abstract_textbox">
    <p>
        Adversaries are constantly coming up with new methods to thwart the effectiveness of security controls. Threat hunting provides a truly proactive solution to hunt for adversaries before they complete their mission. This research has created a matrix of adversary techniques to hunt for on a network and a mechanism to classify the actions of advanced persistent threats (APT).
        <br><br>
        Threat hunting is based on the premise of investigation without cause. Network-based threat hunting has been classified into a variety of attack themes(column headings), each of these themes contains a grouping of adversary techniques, and these techniques have been aggregated into a matrix to determine the likelihood of APT acting within a network.
        <br>
        <br>
    </p>
</div>


<div class="key">
    <div id="keyItem" class="attack_theme_square"></div>
    Attack themes
    <div id="keyItem" class="technique_square"></div>
    Techniques
    <div id="keyItem">
        <object class="symbol Prevention" data="{{site.baseurl}}/assets/images/prevention.svg" type="image/svg+xml">
            <img src="yourfallback.jpg" /> 
        </object>
    </div>
    Prevention
    <div id="keyItem">
        <object class="symbol prevention" data="{{site.baseurl}}/assets/images/detection.svg" type="image/svg+xml">
            <img src="yourfallback.jpg" /> 
        </object>
    </div>
    Detection
</div>
<br>

<div class="flexbox">
{% for theme in site.categories.themes %}
    {% if theme.enabled == true %}
    <div class="col">
        <a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}"><p class="theme">{{ theme.title }}</p></a>
        <div class="techniques">
        {% for technique in site.categories.techniques %}
            {% if technique.enabled == true and technique.theme == theme.title %}
            <a class="technique" href="{{ site.url }}{{ site.baseurl }}/{{ technique.permalink }}">{{ technique.title }}
            <br>
            {% if technique.prevention %}
            <object class="symbol prevention" data="{{site.baseurl}}/assets/images/prevention.svg" type="image/svg+xml">
                <img src="yourfallback.jpg" /> 
                </object>
            {% endif %}
            {% if technique.detection %}
            <object class="symbol prevention" data="{{site.baseurl}}/assets/images/detection.svg" type="image/svg+xml">
                <img src="yourfallback.jpg" /> 
                </object>
            {% endif %}
            </a>
            {% endif %}
        {% endfor %}
    </div>
</div>
{% endif %}

{% endfor %}
</div>

<br>

<div class="definitions" style="border:2px solid black;">
    <h3><center><u><b>Definitions</b></u></center></h3>
    <ul>
        <li><u><a href="{{ site.url }}{{ site.baseurl }}/themes">Attack themes</a></u> - Contains a grouping of adversary techniques to describe attacker activity on a network.</li>
        <li><u><a href="{{ site.url }}{{ site.baseurl }}/techniques">Techniques</a></u> - Method of achieving a results during an attack.</li>
        <li><u><a href="{{ site.url }}{{ site.baseurl }}/threat_actors">APT(Advanced persistent threat)</a></u> -  An adversary targeting a network with the capability and resources to develop advanced tools used to thwart security controls and the time, money, and personnel to maintain a presence on said network.</li>
        {% for theme in site.categories.themes %}
            {% if theme.enabled == true %}
                <li><u><a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}">{{ theme.title }}</a></u> - {{ theme.description }}</li>
            {% endif %}
        {% endfor %}
    </ul>
</div>

<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>