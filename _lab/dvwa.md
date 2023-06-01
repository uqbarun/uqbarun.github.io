---
title: DVWA
author: FredyRosero
tags: 
 - laboratorio
 - pishing
 - redteam
categories: [laboratorios]
---

# DVWA

## Setup
* VSN `virbr0` `192.168.122.0/24`
    * Kali 2023.2 en QEMU/KVM en `192.168.122.9`
    * Contenedor Docker `vulnerables/web-dvwa` en `192.168.122.2`

## Recopilación de información

### WSTG-INFO-02: Fingerprinting de servidor web

```bash
$ sudo nmap -sV -O -n --script fingerprint-strings 192.168.122.2
Starting Nmap 7.92 ( https://nmap.org ) at 2023-06-01 05:50 UTC
Nmap scan report for 192.168.122.2
Host is up (0.00047s latency).
Not shown: 999 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.25 ((Debian))
|_http-server-header: Apache/2.4.25 (Debian)
MAC Address: 02:42:C0:A8:7A:02 (Unknown)
Device type: general purpose
Running: Linux 4.X|5.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5
OS details: Linux 4.15 - 5.6
Network Distance: 1 hop

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 8.78 seconds
```

```bash
$ nikto -host 192.168.122.2 
- Nikto v2.5.0
---------------------------------------------------------------------------
+ Target IP:          192.168.122.2
+ Target Hostname:    192.168.122.2
+ Target Port:        80
+ Start Time:         2023-06-01 02:07:42 (GMT-4)
---------------------------------------------------------------------------
+ Server: Apache/2.4.25 (Debian)
+ /: The anti-clickjacking X-Frame-Options header is not present. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
+ /: The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type. See: https://www.netsparker.com/web-vulnerability-scanner/vulnerabilities/missing-content-type-header/
+ /: Cookie PHPSESSID created without the httponly flag. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
+ /: Cookie security created without the httponly flag. See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
+ Root page / redirects to: login.php
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ Apache/2.4.25 appears to be outdated (current is at least Apache/2.4.54). Apache 2.2.34 is the EOL for the 2.x branch.
+ /config/: Directory indexing found.
+ /config/: Configuration information may be available remotely.
+ /docs/: Directory indexing found.
+ /icons/README: Apache default file found. See: https://www.vntweb.co.uk/apache-restricting-access-to-iconsreadme/
+ /login.php: Admin login page/section found.
+ /.gitignore: .gitignore file found. It is possible to grasp the directory structure.
+ 8102 requests: 0 error(s) and 11 item(s) reported on remote host
+ End Time:           2023-06-01 02:08:06 (GMT-4) (24 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested

```

![](https://i.imgur.com/uNaSwqN.png)
*Server Leaks Version Information*


> 🔍
> Apache httpd 2.4.25 ((Debian))
> **CPE**: [cpe:/o:debian:debian_linux:-]
> **CPE**: [cpe:/a:apache:http_server:2.4.25](https://nvd.nist.gov/products/cpe/detail/1C93783D-252A-4D4E-A6D4-41B65A831A72?namingFormat=2.3&orderBy=CPEURI&keyword=cpe%3A2.3%3Aa%3Aapache%3Ahttp_server%3A2.4.25%3A*&status=FINAL%2CDEPRECATED)
> **CPE**: [cpe:/o:linux:linux_kernel:4](https://nvd.nist.gov/products/cpe/detail/D2B71FFC-740C-4263-B936-A3C1B18E5F9F?namingFormat=2.2&orderBy=CPEURI&keyword=cpe%3A%2Fo%3Alinux%3Alinux_kernel%3A4&status=FINAL) 


### WSTG-INFO-03: Fugas de información con metarchivos 

#### robot.txt
```plaintext
User-agent: *
Disallow: /
```
User-agent: *
Esta línea indica que las siguientes directivas se aplican a todos los robots (cualquier agente de usuario).

Disallow: /
Esta línea indica que se prohíbe el acceso a todo el sitio web. 

#### sitemap
No se encontró `sitemap.xml`

```bash
$ nmap --script http-sitemap-generator -p 80 192.168.122.2
Starting Nmap 7.92 ( https://nmap.org ) at 2023-06-01 07:11 UTC
Nmap scan report for 192.168.122.2
Host is up (0.00025s latency).

PORT   STATE SERVICE
80/tcp open  http
| http-sitemap-generator: 
|   Directory structure:
|     /
|       Other: 1; php: 1
|     /dvwa/css/
|       css: 1
|     /dvwa/images/
|       png: 2
|   Longest directory structure:
|     Depth: 2
|     Dir: /dvwa/images/
|   Total files found (by extension):
|_    Other: 1; css: 1; php: 1; png: 2
MAC Address: 02:42:C0:A8:7A:02 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 1.74 seconds
```

### WSTG-INFO-04: Enumerar aplicaciones

#### Nmap
```bash
nmap -sT -sV -p 0-65535 -Pn 192.168.122.2
Starting Nmap 7.92 ( https://nmap.org ) at 2023-06-01 07:16 UTC
Nmap scan report for 192.168.122.2
Host is up (0.0011s latency).
Not shown: 65535 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.25 ((Debian))

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.73 seconds
```

- "-sT": Esta opción indica a Nmap que realice un escaneo TCP Connect, que es el método más básico de escaneo de puertos. Intentará establecer una conexión TCP con los puertos abiertos para determinar si están disponibles.

- "-sV": Esta opción indica a Nmap que realice una detección de versión de servicios. Utilizará técnicas para intentar determinar la versión y el nombre de los servicios que se ejecutan en los puertos abiertos. Esto puede ayudar a identificar los servicios específicos y sus versiones, lo que puede ser útil para evaluar la seguridad del host.

- "-p 0-65535": Esta opción especifica el rango de puertos que se escanearán. En este caso, se está escaneando todos los puertos posibles, desde el puerto 0 hasta el puerto 65535. Esto asegura que se explorarán todos los puertos en busca de servicios disponibles.

- "-Pn": Esta opción indica a Nmap que ignore el descubrimiento de hosts y realice el escaneo directamente sin enviar ningún tipo de sondas de descubrimiento. Esto se usa cuando se conoce de antemano la existencia del host y se desea omitir cualquier verificación de conectividad previa.

#### Nessus

 - You can start Nessus Scanner by typing /bin/systemctl start nessusd.service
 - Then go to https://kali:8834/ to configure your scanner



### WSTG-INFO-06: Puntos de entrada



