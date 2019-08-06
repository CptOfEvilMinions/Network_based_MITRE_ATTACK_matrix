# Jekyll Matrix

https://cptofevilminions.github.io/Network_based_MITRE_ATTACK_matrix/

## Matrix in construction 
The current state of this matrix is the "sum of its parts", meaning, the researchers of this project acknowledge the matrix requires community input to foster adoption, development, and completion. We are looking too the Infosec community to contribute to the matrix and to provide feedback. If you would like to provide feedback, please fill out this [survey](https://rit.az1.qualtrics.com/jfe/form/SV_51QOWaCZL21ytq5). 

The Whole is Greater than the Sum of its Parts. - Aristotle

## About this project
Adversaries are constantly coming up with new methods to thwart the effectiveness of security controls. Threat hunting provides a proactive solution to find adversaries before they complete their mission. This matrix presents adversarial behavior and is a mechanism to classify the actions of Advanced Persistent Threats (APTs) on the network. 


Threat hunting is the "process of actively looking for signs of malicious activity within enterprise networks, without prior knowledge of those signs." (Kerr, Ewing 2018). Our matrix classifies network-based threat hunting into a variety of attack themes (column headings), each of these themes contains a grouping of adversarial techniques, and these techniques have been aggregated on our matrix to determine the likelihood of an APT acting within the network. 

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