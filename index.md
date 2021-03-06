---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<!-- Table key -->
<div class="key">
    <div id="keyItem" class="attack_theme_square"></div>
    Attack themes (Column headings)
    <div id="keyItem" class="technique_square"></div>
    Techniques (Cells)
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

<!-- Include style sheet for Tooltips -->
<link rel="stylesheet" href="style/tool_tip.css">

<!-- Matrix -->
<div class="flexbox">
{% for theme in site.categories.themes %}
    <!-- Only use theme if its enabled -->
    {% if theme.enabled == true %}
    <!-- Generate table by columns NOT rows -->
    <div class="col">
        <!-- Column heading with theme name -->
        <a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}" class="tip">
            <p class="theme">{{ theme.title }}</p>
            <!-- Tooltip description for theme -->
            <span>{{ theme.description }}</span>
        </a>
        <!-- Add techniques to column-->
        <div class="techniques">
        {% for technique in site.categories.techniques %}
            {% if technique.enabled == true and technique.theme == theme.title %}
            <a class="technique tip" href="{{ site.url }}{{ site.baseurl }}/{{ technique.permalink }}" >{{ technique.title }}
            <br>
            <!-- Add technique and detection icons to technique -->
            <!-- Prevention icon -->
            {% if technique.prevention %}
                <object class="symbol prevention" data="{{site.baseurl}}/assets/images/prevention.svg" type="image/svg+xml">
                    <img src="yourfallback.jpg" /> 
                    </object>
                {% endif %}
            <!-- Detection icon -->
            {% if technique.detection %}
                <object class="symbol prevention" data="{{site.baseurl}}/assets/images/detection.svg" type="image/svg+xml">
                    <img src="yourfallback.jpg" /> 
                    </object>
            {% endif %}
            <!-- Tooltip description for technique -->
            <span>{{ technique.description }}</span>
            </a>
            {% endif %}
        {% endfor %}
    </div>
</div>
{% endif %}

{% endfor %}
</div>
<br>

<style>
.hook {
  width: 7%;
  height: 7%;
}
.header {
    text-align: center;
}
.header h1 {
  display:inline;
  text-decoration: underline;
}
</style>

<div class="header">
    <img class="hook" src="{{site.baseurl}}/assets/images/hook.png" style="float: left; margin-right: 10px"/>
    <h1>Matrix in construction</h1>
    <img class="hook" src="{{site.baseurl}}/assets/images/hook.png" style="float: right; margin-left: 10px"/>
</div>

<div class="abstract_textbox">
    <p>
        The current state of this matrix is the "sum of its parts", meaning, the researchers of this project acknowledge the matrix requires community input to foster adoption, development, and completion. We are looking too the Infosec community to contribute to the matrix and to provide feedback. If you would like to provide feedback, please fill out this <a href="https://rit.az1.qualtrics.com/jfe/form/SV_51QOWaCZL21ytq5">survey</a>.
        <br>
            <center><p><q>The Whole is Greater than the Sum of its Parts.</q> - Aristotle</p></center>
    </p>
</div>


<h1><u><center>About this project</center></u></h1>
<div class="abstract_textbox">
    <p>
        Adversaries are constantly coming up with new methods to thwart the effectiveness of security controls. Threat hunting provides a proactive solution to find adversaries before they complete their mission. This matrix presents adversarial behavior and is a mechanism to classify the actions of Advanced Persistent Threats (APTs) on the network. 
        <br>
        <br>
        Threat hunting is the "process of actively looking for signs of malicious activity within enterprise networks, without prior knowledge of those signs." (Kerr, Ewing 2018). Our matrix classifies network-based threat hunting into a variety of attack themes (column headings), each of these themes contains a grouping of adversarial techniques, and these techniques have been aggregated on our matrix to determine the likelihood of an APT acting within the network.  
        <br>
        <br>
    </p>
</div>

<h1><u><center>Thesis Defense</center></u></h1>
<div class="abstract_textbox">
    <center><u><a href="https://drive.google.com/file/d/1d8cWFnwq1yY-IAXmPF7ly2bhTLcHN0mi/view?usp=sharing">Thesis paper: Network-based APT profiler.pdf</a></u></center><br>
    <center>{% include youtube_video.html id=WIECBS32nLQ %}</center>
</div><br>

<h1><u><center>Our matrix and the MITRE ATT&CK</center></u></h1>
<div class="abstract_textbox">
    <p>
        At the current time of this project, <a href="https://attack.mitre.org/">MITRE ATT&CK matrix</a> is targeted at host-based detection and mitigation. The deliverable for this project is a MITRE ATT&CK like matrix for network-based threat hunting. In the current landscape of security, we need to monitor endpoints and network traffic. I am challenging that APT detection is not limited to endpoint monitoring and that detection can be performed from the network as well. This research will generate a MITRE ATT&CK style-like matrix to describe APT techniques from a network perspective that can be used for network-based threat hunting. 
    </p>
</div>


<h2><u><center>Attack themes</center></u></h2>
<div class="abstract_textbox">
    <p>
        The attack themes are a combination of the Bryant Kill Chain (Bryant, Blake & Saiedian, Hossein. 2017) and themes that have emerged from a literature review. The Lockheed Martin Cyber Kill Chain and the Mandiant Attack Life Cycle were not chosen as attack models because they contain phases that happen on the host. For this reason, the Bryant Kill Chain was selected because it is an evolution of the Lockheed Martin Cyber Kill Chain and the Mandiant Attack Life cycle, but strictly from a network perspective.
    </p>
    <div style="padding-left: 10%;">
    <div style="float: left; width: 50%;">
        <h3>Bryant Kill Chain phases</h3>
        <ul>
        {% for theme in site.categories.themes %}
            {% if theme.enabled == true and theme.bryant_kill_chain == true %}
                <li><u><a href="{{ site.url }}{{ site.baseurl }}/{{ theme.permalink }}">{{ theme.title }} </a></u></li>
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

<h2><u><center>Aggregating techniques</center></u></h2>
<div class="abstract_textbox">
    <p>
        Each technique represented on our matrix exists because an APT report has referenced it. The APT reports were gathered from public Github repositories to create an archive.
        <ul>
            <li><u><a href="https://github.com/CyberMonitor APT_CyberCriminal_Campagin_Collections">CyberMonitor/APT_CyberCriminal_Campagin_Collections</a></u></li>
            <li><u><a href="https://github.com/kbandla/APTnotes">kbandla/APTnotes</a></u></li>
        </ul>
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

<!-- Icons -->
<div>
    Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>
<div>
    Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>

<div>
    Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>

<!-- Traffic cone -->
<div>
    Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>

<!-- Crane -->
<div>
    Icons made by <a href="https://www.flaticon.com/authors/pause08" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>