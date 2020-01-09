# Jekyll Matrix

https://cptofevilminions.github.io/Network_based_MITRE_ATTACK_matrix/

## Matrix in construction 
The current state of this matrix is the "sum of its parts", meaning, the researchers of this project acknowledge the matrix requires community input to foster adoption, development, and completion. We are looking too the Infosec community to contribute to the matrix and to provide feedback. If you would like to provide feedback, please fill out this [survey](https://rit.az1.qualtrics.com/jfe/form/SV_51QOWaCZL21ytq5). 

The Whole is Greater than the Sum of its Parts. - Aristotle


## Thesis defense
[![Thesis defense](https://img.youtube.com/vi/WIECBS32nLQ/0.jpg)](https://www.youtube.com/watch?v=WIECBS32nLQ)

## About this project
Constant innovation in attack methods presents a significant problem for the security community which struggles to remain current in attack prevention, detection and response. The practice of threat hunting provides a proactive approach to identify and mitigate attacks in real-time before the attackers complete their objective. In this research, I present a matrix of adversary techniques inspired by MITRE’s ATT&CK matrix. This study allows threat hunters to classify the actions of advanced persistent threats (APTs) according to network-based behaviors. 

## Our matrix vs. MITRE ATT&CK
At the current time of this project, the MITRE ATT&CK matrix is targeted at host-based detection and mitigation. The deliverable for this project is a MITRE ATT&CK like matrix for network-based threat hunting. In the current landscape of security, we need to monitor endpoints and network traffic. Our matrix provides a collection of techniques to perform threat hunting on a network with potential mitigations and detections.

## Attack themes
The attack themes are a combination of the Bryant Kill Chain (Bryant, Blake & Saiedian, Hossein. 2017) and themes that have emerged from a literature review. The Lockheed Martin Cyber Kill Chain and the Mandiant Attack Life Cycle were not chosen as attack models because they contain phases that happen on the host. For this reason, the Bryant Kill Chain was selected because it is an evolution of the Lockheed Martin Cyber Kill Chain and the Mandiant Attack Life cycle, but strictly from a network perspective.

Bryant Kill Chain phases
* Recon and weaponization
* Lateral movement
* Initial compromise
* Delivery
* Actions on objective

Lit review themes
* Internal recon
* Impersonation
* Evasion
* DOS
* Command and control

## Aggregating techniques
Each technique represented on our matrix exists because an APT report has referenced it. The APT reports were gathered from public Github repositories to create an archive.
* https://github.com/kbandla/APTnotes
* https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections

### Definitions
* Attack themes - Contains a grouping of adversary techniques to describe attacker activity on a network.
* Techniques - Method of achieving a result during an attack.
* APT(Advanced persistent threat) - An adversary targeting a network with the capability and resources to develop advanced tools used to thwart security controls and the time, money, and personnel to maintain a presence on the network.


## Install Jekyll on macOS
1. `xcode-select --install`
1. `gem install --user-install bundler jekyll`
1. `gem install jekyll bundler`
1. `bundle exec jekyll serve`
