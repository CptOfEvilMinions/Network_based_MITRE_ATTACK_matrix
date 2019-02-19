---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<h1><u><center>About this project</center></u></h1>
<div class="abstract_textbox">
    <p>
        Adversaries are constantly coming up with new methods to thwart the effectiveness of security controls. Threat hunting provides a truly proactive solution to hunt for adversaries before they complete their mission. This research will create a matrix of adversary techniques to hunt for on a network and a mechanism to classify the actions of advanced persistent threats (APT).
        <br><br>
        Threat hunting is based on the premise of investigation without cause. Network based threat hunting can be classified into a variety of attack themes(column headings), each of these themes contains a grouping of adversary techniques, and these techniques can be aggregated into a matrix to determine the likelihood of APT acting within a network. 
        <br>
        <br>
    </p>
</div>

<style>
.attack_theme_square {
  height: 20px;
  width: 20px;
  background-color: DodgerBlue;
  border-style: solid;
  border-color: black;
}
.technique_square {
    height: 20px;
    width: 20px;
    background-color: White;
    border-style: solid;
    border-color: black;
}
</style>

<div class="key" style="border:2px solid black;">
    <h3><center><u><b>Matrix key</b></u></center></h3>
    <ul>
        <li><div class="attack_theme_square"></div><u>Attack themes</u></li>
        <li><div class="technique_square"></div><u>Techniques</u></li>
    </ul>
</div>
<br>
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
<br>
<br>

<div class="flexbox">
{% for theme in site.categories.themes %}
    {% if theme.enabled == true %}
    <div class="col">
        <p class="theme"> {{ theme.title }}</p>
        <div class="techniques">
        {% for technique in site.categories.techniques %}
            {% if technique.enabled == true and technique.theme == theme.title %}
            <a class="technique" href="{{ site.url }}{{ site.baseurl }}/{{ technique.permalink }}">{{ technique.title }}</a>
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

