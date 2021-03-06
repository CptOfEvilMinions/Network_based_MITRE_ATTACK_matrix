---
layout: post
enabled: true
title: SSH HiJacking
category: techniques
theme: 'Lateral movement'
Id: 24
description: "In order to move laterally from a compromised host, adversaries may take advantage of trust relationships established with other systems via public key authentication in active SSH sessions by hijacking an existing connection to another system."
prevention: true
detection: true
permalink: 'techniques/lateral_movement/ssh_hijacking'
---
{{ page. description }}
This may occur through compromising the SSH agent itself or by having access to the agent's socket. If an adversary is able to obtain root access, then hijacking SSH sessions is likely trivial. Compromising the SSH agent also provides access to intercept SSH credentials.

Secure Shell (SSH) is a standard means of remote access on Linux and macOS systems. It allows a user to connect to another system via an encrypted tunnel, commonly authenticating through a password, certificate or the use of an asymmetric encryption key pair.

SSH Hijacking differs from use of Remote Services because it injects into an existing SSH session rather than creating a new session using Valid Accounts.

## Malware/Threat actors

{% assign malwares = 'Wild Neutron,Ebury' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Mitigation

Ensure SSH key pairs have strong passwords and refrain from using key-store technologies such as ssh-agent unless they are properly protected. Ensure that all private keys are stored securely in locations where only the legitimate owner has access to with strong passwords and are rotated frequently. Ensure proper file permissions are set and harden the system to prevent root privilege escalation opportunities. Do not allow remote access via SSH as root or other privileged accounts. Ensure that agent forwarding is disabled on systems that do not explicitly require this feature to prevent misuse.

## Detection

Use of SSH may be legitimate, depending upon the network environment and how it is used. Look for
 * access patterns and activity that occurs after a remote login, may indicate suspicious or malicious behavior with SSH. 
 * Monitor for user accounts logged into systems they would not normally access or access patterns to multiple systems over a relatively short period of time.
 * Monitor user SSH-agent socket files being used by different users.

## Toolkit

`<Toolkit instructions, if applicable>`

## Similar techniques

{% include list_techniques.html %}


## References

* `[<Source name>](<Source link>)`