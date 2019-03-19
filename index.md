---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

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

<script>
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});
</script>

<div class="flexbox">
{% for theme in site.categories.themes %}
    {% if theme.enabled == true %}
    <div class="col">
        <a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}" data-toggle="tooltip" title="{{ theme.description }}"><p class="theme">{{ theme.title }}</p></a>
        <div class="techniques">
        {% for technique in site.categories.techniques %}
            {% if technique.enabled == true and technique.theme == theme.title %}
            <a class="technique" href="{{ site.url }}{{ site.baseurl }}/{{ technique.permalink }}" data-toggle="tooltip" title="{{ technique.description }}">{{ technique.title }}
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


<h1><u><center>About this project</center></u></h1>
<div class="abstract_textbox">
    <p>
        Adversaries are constantly coming up with new methods to thwart the effectiveness of security controls. Threat hunting provides a truly proactive solution to hunting for adversaries before they complete their mission. This research has created a matrix of adversary techniques to hunt for on a network and a mechanism to classify the actions of advanced persistent threats (APT).
        <br><br>
        Threat hunting is based on the premise of investigation without cause. Network-based threat hunting has been classified into a variety of attack themes(column headings), each of these themes contains a grouping of adversary techniques, and these techniques have been aggregated into a matrix to determine the likelihood of APT acting within a network.
        <br>
        <br>
    </p>
</div>

<h2><u><center>This matrix vs. MITRE ATT&CK</center></u></h2>
<div class="abstract_textbox">
    <p>
        At the current time of this project, the <a href="https://attack.mitre.org/">MITRE ATT&CK matrix</a> is targeted at host-based detection and mitigation. The deliverable from this project is a MITRE ATT&CK like matrix for network-based threat hunting. In the current landscape of security, we need to monitor endpoints and network traffic. This matrix is a collection of techniques to hunt for on the network with potential mitigations and detections.
    </p>
</div>

<h2><u><center>Attack themes</center></u></h2>
<div class="abstract_textbox">
    <p>
        The attack themes(column headings) are a combination of the Bryant Kill Chain and themes that have emerged from the literature review. The Bryant Kill Chain was selected over the Lockheed Martin Cyber Kill Chain and the FireEye Attack Like Cycle because not all the phases are network focused. The Bryant Kill Chain is an evolution of the Cyber Kill Chain and the Attack Life cycle but from a network perspective. 
    </p>
    <div style="padding-left: 10%;">
    <div style="float: left; width: 50%;">
        <h3>Bryant Kill Chain phases</h3>
        <ul>
        {% for theme in site.categories.themes %}
            {% if theme.enabled == true and theme.bryant_kill_chain == true %}
                <li><u><a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}">{{ theme.title }}</a></u></li>
            {% endif %}
        {% endfor %}
        </ul>
    </div>
    <div style="float: right; width: 50%;">
        <h3>Lit review themes</h3>
        <ul>
        {% for theme in site.categories.themes %}
            {% if theme.enabled == true and theme.bryant_kill_chain == false %}
                <li><u><a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}">{{ theme.title }}</a></u></li>
            {% endif %}
        {% endfor %}
        </ul>
    </div>
    </div>
</div>

<h2><u><center>Curation of techniques</center></u></h2>
<div class="abstract_textbox">
    <p>
        All the current techniques on the matrix exist because an APT report(s) referenced it. These APT reports were gathered from a series of public Github repositories to create an archive of reports.
    </p>
</div>

<br>
<div class="definitions" style="border:2px solid black;">
    <h3><center><u><b>Definitions</b></u></center></h3>
    <ul>
        <li><u><a href="{{ site.url }}{{ site.baseurl }}/themes">Attack themes</a></u> - Contains a grouping of adversary techniques to describe attacker activity on a network.</li>
        <li><u><a href="{{ site.url }}{{ site.baseurl }}/techniques">Techniques</a></u> - Method of achieving a result during an attack.</li>
        <li><u><a href="{{ site.url }}{{ site.baseurl }}/threat_actors">APT(Advanced persistent threat)</a></u> -  An adversary targeting a network with the capability and resources to develop advanced tools used to thwart security controls and the time, money, and personnel to maintain a presence on the network.</li>
    </ul>
</div>

<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>