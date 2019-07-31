---
layout: post
enabled: true
title: 'Port scanning'
category: techniques
theme: 'Internal recon'
Id: 38
description: 'A port scanner refers to a software application program that scans a server for open ports. It enables auditors and network administrators to examine network security while attackers and hackers use it to identify open ports for exploiting and/or running malicious services on a host computer or server.'
prevention: false
detection: true
permalink: 'techniques/internal_recon/port_scanning'
---
{{ page. description }}

## Types of scans

![TCP handshake](/assets/images/tcp-handshake.png)

* ACK Scan - sends TCP packets with only the ACK flag set. This scan may get two outcomes as a result:
  * RST packet (the port is closed or open).

* SYN Scan(Stealth scan) - sends TCP packets with only the SYN flag set. This scan may get two outcomes as a result:
  * TCP packet with SYN + ACK flags set (the port is open)
  * RST packet (the port is closed. This scan starts a normal TCP session - but it does not finish the TCP session establishment with an ACK: it is only half finished.

* TCP Connect Scan - scan is a the odd scan in this collection of scans. A TCP Scan use the connect () system call against its victim. TCP Connect Scan do not use TCP flags. This kind of scan is often recognized and logged by servers.

* NULL Scan - sends TCP packets with no flag set. This scan may get two outcomes as a result:
  * no response (the port is open)
  * RST packet (the port is closed).

* FIN Scan - sends TCP packets with only the FIN flag set. This scan may get two outcomes as a result:
  * no response (the port is open)
  * RST (the port is closed).

* XMAS Scan - sends TCP packets with FIN, PSH and URG flags set (lighting the packet up like a Christmas three). This scan may get two outcomes as a result:
  * no response (the port is open)
  * RST (the port is closed).

## Malware/Threat actors

<!-- Threat actors table -->
{% assign malwares = 'Naikon,Group-IB,Pitty Tiger,Wild Neutron' | split: ',' %}
{% assign threat_actors = site.data.threat_actors %}

{% include threat_table.html %}

## Preventions

`<Mitigation techniques>`

## Detections

NMAP is a popular port scanning tool that has several methods of scanning ports. BRO has the ability to detect some of these methods by analyzing the `conn_state` in `conn.log`:

| Type of NMAP scan | BRO conn state | NMAP command | Description |
| :--: | :--: | :--: | :--: |
| ACK scan | `RSTRH` | `nmap <IP> -p [22,23] -sA` | ACK scan port open and closed |
| Stealth scan | `RSTOS0` | `nmap <IP> -p 22 -sS` | Stealth scan port open |
| Stealth scan | `REJ` | `nmap <IP> -p 23 -sS` | Stealth scan port closed |
| FIN Scan | `SH` x2 | `nmap <IP> -p 22 -sF` | FIN scan port open |
| FIN Scan | `RSTR` | `nmap <IP> -p 23 -sF` | FIN scan port closed |
| XMAS Scan | `SH` x2 | `nmap <IP> -p 22 -sX` | XMAS scan port open |
| XMAS Scan | `RSTR` | `nmap <IP> -p 23 -sX` | XMAS scan port closed |
| TCP Connect Scan | `RSTOS0` | `nmap <IP> -p 22 -sT` | TCP Connect Scan port open |
| TCP Connect Scan | `REJ` | `nmap <IP> -p 23 -sT` | TCP Connect Scan port closed |
The following table was built based on our testing


## Toolkit

## Similar techniques

{% include list_techniques.html %}


## References

* [Network Enumeration](https://www.techopedia.com/definition/25405/network-enumeration)
* [Bro - conn.log](https://docs.zeek.org/en/stable/scripts/base/protocols/conn/main.bro.html#type-Conn::Info)
* [Detecting a NMAP Syn Scan – Bro and Splunk](https://area1337.com/detecting-nmap-syn-scan-bro-splunk/)
* [Slow Port Scanning with Bro](https://brage.bibsys.no/xmlui/bitstream/handle/11250/144028/RLarsen_2013.pdf?sequence=1)
