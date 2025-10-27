---
title: NodeGoat
author: FredyRosero
tags: 
 - laboratorio
 - pishing
 - redteam
categories: [laboratorios]
---

# Setup NodeGoat

<http://localhost:4000/tutorial>

```bash
git clone https://github.com/OWASP/NodeGoat.git
cd NodeGoat
proyecto=nodegoat
docker-compose --project-name $proyecto build 
docker-compose --project-name $proyecto up 
```

```bash
$ docker ps                                                                     
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS          PORTS                    NAMES             
24429836f476   mongo:4.4      "docker-entrypoint.s…"   2 minutes ago   Up 24 seconds   27017/tcp                nodegoat_mongo_1  
6466d9510010   nodegoat_web   "docker-entrypoint.s…"   2 minutes ago   Up 25 seconds   0.0.0.0:4000->4000/tcp   nodegoat_web_1
```

```bash
$ contenedor=nodegoat_web_1
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{IPAddress}}{{end}}' $contenedor 
172.17.0.2
$ ip=172.17.0.2
```

## Pentest

### Fingerprinting
CAPEC-170: Web Application Fingerprinting
WASC-45: Fingerprinting
CWE-497: Exposure of Sensitive System Information to an Unauthorized Control Sphere

```bash
$ telnet $ip 4000
Trying ls...
Connected to 172.17.0.2.
Escape character is '^]'.
^]
HTTP/1.1 400 Bad Request
Connection: close

Connection closed by foreign host.
 ```

> `HTTP/1.1 400 Bad Request`


```bash
$ curl -s -I $ip:4000
HTTP/1.1 302 Found
X-Powered-By: Express
Location: /login
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 28
set-cookie: connect.sid=s%3AUqfJCV42eDA2VQxfTKuqQNRZmnlmJjPo.rHeMKiMa8Vxm%2Fu6yfXS2UWwuU7DoEg8JNsxtU2tkzec; Path=/; HttpOnly
Date: Fri, 02 Jun 2023 06:46:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

> `X-Powered-By: Express`


```bash
$ sudo nmap -sV --version-intensity 5 -n --script fingerprint-strings $ip -p 4000

Starting Nmap 7.80 ( https://nmap.org ) at 2023-06-02 01:50 -05
Nmap scan report for 172.17.0.2
Host is up (0.000081s latency).

PORT     STATE SERVICE VERSION
4000/tcp open  http    Node.js Express framework
MAC Address: 02:42:AC:11:00:02 (Unknown)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 6.80 seconds
```

- `-sV` indica un escaneo de versión, que intenta determinar la versión y el nombre del servicio en los puertos abiertos.

- `--version-intensity 5` establece la intensidad del escaneo de versión en 5, lo que significa que se realizarán intentos más exhaustivos para identificar la versión del servicio.

- `-n` indica que no se realice resolución DNS inversa, evitando la resolución de direcciones IP a nombres de host.

- `--script fingerprint-strings` utiliza el script "fingerprint-strings" de Nmap para buscar cadenas de huellas digitales específicas en las respuestas de los servicios.



> cpe:/a:nodejs:node.js:


```bash
./whatweb $ip:4000

http://172.17.0.2:4000 [302 Found] Cookies[connect.sid], Country[RESERVED][ZZ], HttpOnly[connect.sid], IP[172.17.0.2], RedirectLocation[/login], X-Powered-By[Express]

http://172.17.0.2:4000/login [200 OK] Bootstrap, Cookies[connect.sid], Country[RESERVED][ZZ], HTML5, HttpOnly[connect.sid], IP[172.17.0.2], JQuery, PasswordField[password], Script[application/javascript], Title[OWASP Node Goat], X-Powered-By[Express]
```

> Bootstrap
> JQuery

### Web path dicovery o Directory enumeration o Directory Indexing o Web Directories Busting (sin autenticación)
ATT&CK T1083: File and Directory Discovery        
CAPEC-127: Directory Indexing

```bash
$ sudo nmap -sV --script=http-enum $ip

[sudo] password for fredy: 
Starting Nmap 7.80 ( https://nmap.org ) at 2023-06-02 02:39 -05
Nmap scan report for 172.17.0.2
Host is up (0.000013s latency).
Not shown: 999 closed ports
PORT     STATE SERVICE VERSION
4000/tcp open  http    Node.js Express framework
| http-enum: 
|_  /login/: Login page
MAC Address: 02:42:AC:11:00:02 (Unknown)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 10.17 seconds
```


https://gitlab.com/kalilinux/packages/dirbuster.git


