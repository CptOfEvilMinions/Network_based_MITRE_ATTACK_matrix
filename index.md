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
        <p class="theme"> {{ theme.title }}</p>
        <div class="techniques">
        {% for technique in site.categories.techniques %}
            {% if technique.enabled == true and technique.theme == theme.title %}
            <a class="technique" href="{{ site.url }}{{ site.baseurl }}/{{ technique.permalink }}">{{ technique.title }}
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
        <li><u>Attack themes</u> - Contains a grouping of adversary techniques to describe attacker activity on a network.</li>
        <li><u>Techniques</u> - Method of achieving a results during an attack.</li>
        <li><u>APT(Advanced persistent threat)</u> -  An adversary targeting a network with the capability and resources to develop advanced tools used to thwart security controls and the time, money, and personnel to maintain a presence on said network.</li>
        <li><u>Recon and weaponization</u> - The attacker conducts research on a target. The attacker identifies targets (both systems and people) and determines his attack methodology. The attacker may look for Internet-facing services or individuals to exploit.</li>
        <li><u>Delivery</u> </li>
        <li><u>Initial access</u> - The attacker successfully executes malicious code on one or more systems. This most likely occurs through social engineering (most often spear phishing), by exploiting a vulnerability on an Internet-facing system, or by any other means necessary</li>
        <li><u>Command and control</u> </li>
        <li><u>Internal recon</u> </li>
        <li><u>Lateral movement</u> - The attacker uses his access to move from system to system within the compromised environment.</li>
        <li><u>Actions on objectives</u> - The attacker accomplishes his goal. Often this means stealing intellectual property, financial data, mergers and acquisition information, or Personally Identifiable Information (PII). Once the mission has been completed, most targeted attackers do not leave the environment, but maintain access in case a new mission is directed.</li>
        <li><u>Masquerade</u> </li>
        <li><u>Evasion</u> </li>
        <li><u>DOS</u> </li>
        <li><u></u> </li>
    </ul>
</div>

<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
