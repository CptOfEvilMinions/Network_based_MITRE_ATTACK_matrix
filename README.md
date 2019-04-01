# Jekyll Matrix

https://cptofevilminions.github.io/Network_based_MITRE_ATTACK_matrix/

## Matrix in construction 
The current state of this matrix is the "sum of its parts", meaning, the researchers of this project acknowledge the matrix requires community input to foster adoption, development, and completion. We are looking too the Infosec community to contribute to the matrix and to provide feedback. If you would like to provide feedback, please fill out this survey. 

<center>The Whole is Greater than the Sum of its Parts. - Aristotle</center>

## About this project
Adversaries are constantly coming up with new methods to thwart the effectiveness of security controls. Threat hunting provides a proactive solution to find adversaries before they complete their mission. This matrix presents adversarial techniques and a mechanism to classify the actions of advanced persistent threats (APT). Threat hunting is based on the premise of investigation without cause. Network-based threat hunting has been classified into a variety of attack themes(column headings), each of these themes contains a grouping of adversary techniques, and these techniques have been aggregated into a matrix to determine the likelihood of APT acting within a network. 


## This matrix vs. MITRE ATT&CK
At the current time of this project, the MITRE ATT&CK matrix is targeted at host-based detection and mitigation. The deliverable from this project is a MITRE ATT&CK like matrix for network-based threat hunting. In the current landscape of security, we need to monitor endpoints and network traffic. This matrix is a collection of techniques to hunt for on the network with potential mitigations and detections.

## Attack themes
The attack themes(column headings) are a combination of the Bryant Kill Chain and themes that have emerged from the literature review. The Bryant Kill Chain was selected over the Lockheed Martin Cyber Kill Chain and the FireEye Attack Life Cycle because not all the phases are network-focused. The Bryant Kill Chain is an evolution of the Cyber Kill Chain and the Attack Life cycle but from a network perspective.

<u>Bryant Kill Chain phases</u>
* Recon and weaponization
* Lateral movement
* Initial compromise
* Delivery
* Actions on objective

<u>Lit review themes</u>
* Internal recon
* Impersonation
* Evasion
* DOS
* Command and control


## Aggregating techniques
Each technique represented on the matrix exists because an APT report referenced it. The APT reports were gathered from public Github repositories to create an archive.

### Definitions
Attack themes - Contains a grouping of adversary techniques to describe attacker activity on a network.
Techniques - Method of achieving a result during an attack.
APT(Advanced persistent threat) - An adversary targeting a network with the capability and resources to develop advanced tools used to thwart security controls and the time, money, and personnel to maintain a presence on the network.