--- 
title: Setup laboratorio de simulación de aplicaciones web inseguras
description: Descripción de página
author: [UqbarUN]
date: 2023-05-31
layout: post
categories: [category]
tags: [tag1, tag2]
excerpt_separator: <!--more-->
--- 
# Setup laboratorio de simulación de aplicaciones web inseguras
![](https://placehold.co/900x190)  

Abstract: poner un resumen de pocas lineas acá.  

<!--more-->

*** - [Plantilla de blog](#plantilla-de-blog)
  * [Sección 1](#secci-n-1)
  * [Sección 2](#secci-n-2)
  * [Referencias](#referencias)

<!- - Generar tabla de contenidos con https://ecotrust-canada.github.io/markdown-toc/ -->


## Capa 7 OSI
Cuando realizamos una evaluación de seguridad y prueba de penetración (pentesting) en una aplicación web, estamos trabajando principalmente en la **capa 7 de aplicación del modelo OSI**. Pero también puede implicar la evaluación de otras capas del modelo OSI en determinadas circunstancias. Por ejemplo, si se realiza un análisis de vulnerabilidades en la infraestructura de red subyacente o se evalúa la configuración de seguridad de los servidores en los que se ejecuta la aplicación web, también se pueden tener en cuenta las capas inferiores del modelo OSI.


## Topología
Necesitamos principalmente las siguientes sevidores corriendo en nuestra máquina:
* Máquina de Pentesting con Kali
* Servidor Web escuchando peticiones en el puerto 80 o 443 (por defecto)
* Sevidor BD que puede estar alojado en el mismo servidor Web


## Instalaciones básicas
Ìnstalación programas para virtualización:
```bash
sudo apt-get install qemu-system qemu-kvm qemu virt-viewer \
 libvirt-daemon-system \
 bridge-utils virt-manager spice-vdagent
```

## Instalar Máquina de Pentesting con Kali

* <https://kali.download/base-images/kali-2023.2/kali-linux-2023.2-qemu-amd64.7z> 
* Peso de descarga  ~2.8 GB
* Peso descomprimido ~13,7 GB


Para instalar una máquina virtual de Kali Linux utilizando el comando virt-install necesitamos definir los recuros recomendados[^1] con las siguientes opciones

*   `--virt-type kvm`: Especifica el tipo de virtualización, en este caso, KVM (Kernel-based Virtual Machine).
*   `--name kali-linux-2023-2-qemu-amd64`: Establece el nombre de la máquina virtual como "kali-linux-2023-2-qemu-amd64".
*   `--disk path=~/Downloads/OS/kali-linux-2023.2-qemu-amd64.qcow2`: Define la ruta del archivo de imagen de disco (qcow2) de Kali Linux que se utilizará para la instalación de la máquina virtual. 
*   `--ram 2048`: Establece la cantidad de memoria RAM asignada a la máquina virtual en 2048 MB.
*   `--vcpus 2`: Especifica la cantidad de CPUs virtuales que se asignarán a la máquina virtual, en este caso, se asignan 2 CPUs.
*   `--network network=default,model=virtio`: Configura la red de la máquina virtual. Utiliza la red predeterminada NAT y el modelo de red "virtio". 
*   `--os-type linux`: Indica el tipo de sistema operativo de la máquina virtual, en este caso, Linux.
*   `--os-variant debian10`: Especifica la variante del sistema operativo, en este caso, Debian 10. La información se basa en la utilidad `osinfo-query os`.
*   `--graphics spice`: Configura el acceso gráfico a la máquina virtual utilizando el protocolo Spice, que permite una experiencia de escritorio remoto mejorada. También mapear el layout del teclado a español.
*   `--console pty,target_type=serial`: Establece la consola de la máquina virtual como tipo "pty" y objetivo "serial". Esto permite acceder a la consola de la máquina virtual a través de una conexión serial.
*   `--boot hd`: Establece el dispositivo de arranque de la máquina virtual como el disco duro.

```bash
virt-install \
--virt-type kvm \
--name kali-linux-2023-2-qemu-amd64 \
--disk path=~/Downloads/OS/kali-linux-2023.2-qemu-amd64.qcow2 \
--ram 2048 \
--vcpus 2 \
--network network=default,model=virtio \
--os-type linux \
--os-variant debian10 \
--graphics spice,port=5901,keymap=es \
--vga virtio \
--console pty,target_type=serial \
--boot hd
```

### Configuración dentro de la máquina
Puedes utlizar cualquier clinete SPICE para conectarte a <spice://127.0.0.1:5901>. 
```bash
remote-viewer spice://127.0.0.1:5901
```

![](https://i.imgur.com/x3l9BBu.png)

Una vez dentro, recuerda configurar el telcado. En mi caso, tuve que poner la opcion `Spanish (Latin American)` y borrar las otras opciones. 

Probaremos comunicación Host-Guest ✅:
```bash
Uqbar@local:~$ ping -c 4 192.168.122.9
PING 192.168.122.9 (192.168.122.9) 56(84) bytes of data.
64 bytes from 192.168.122.9: icmp_seq=1 ttl=64 time=0.389 ms
[...]
-- - 192.168.122.9 ping statistics -- - 4 packets transmitted, 4 received, 0% packet loss, time 3061ms
rtt min/avg/max/mdev = 0.330/0.449/0.595/0.100 ms
```

Probamos comunicación Guest-Host ✅:
```bash
┌──(kali㉿kali)-[~]
└─$ ping -c 4 192.168.1.102
PING 192.168.1.102 (192.168.1.102) 56(84) bytes of data.
64 bytes from 192.168.1.102: icmp_seq=1 ttl=64 time=0.315 ms
[...]
-- - 192.168.1.102 ping statistics -- - 4 packets transmitted, 4 received, 0% packet loss, time 3054ms
rtt min/avg/max/mdev = 0.315/0.436/0.552/0.084 ms
```

## ¿En que parte de la red queda nuestro equipo de pentesting?

![](https://i.imgur.com/9FfkBcb.png)

La red predeterminada de QEMU (`--network network=default,model=virtio`) utiliza `dnsmasq` de [libvirt](https://libvirt.org/) para crear una red `default` con **redireccionamiento NAT** (alias "red virutal")[^3]

```bash
$ virsh net-list --all
 Name      State    Autostart   Persistent
------------------------------------------- -  default   active   yes         yes
```

| ![Virtual switch: NAT mode](https://wiki.libvirt.org/images/Virtual_network_default_network_overview.jpg) |
|:--:|
| *Virtual switch: NAT mode[^2].* |

Libvirt crea un **switch virtual** o puente de ethernet (capa 2) `virbr0` para la LAN 192.168.122.0/24
```bash
$ brctl show
bridge name     bridge id               STP enabled     interfaces
docker0         8000.0242b5ce76e5       no
virbr0          8000.525400e57960       yes             virbr0-nic
                                                        vnet0
```

```bash
$ virsh net-dumpxml default
<network connections='1'>
  <name>default</name>
  <uuid>7a48e945-1bda-46e8-bfc4-4b5e6af40383</uuid>
  <forward mode='nat'>
    <nat>
      <port start='1024' end='65535'/>
    </nat>
  </forward>
  <bridge name='virbr0' stp='on' delay='0'/>
  <mac address='52:54:00:e5:78:54'/>
  <ip address='192.168.122.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.122.2' end='192.168.122.254'/>
    </dhcp>
  </ip>
</network>
```

```bash
$ ip a sh virbr0
8: virbr0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 52:54:00:e5:79:60 brd ff:ff:ff:ff:ff:ff
    inet 192.168.122.1/24 brd 192.168.122.255 scope global virbr0
       valid_lft forever preferred_lft foreve
```

```bash
$ ip route
default via 192.168.1.1 dev enp3s0f0 proto dhcp metric 100 
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 
192.168.1.0/24 dev enp3s0f0 proto kernel scope link src 192.168.1.102 metric 100 
192.168.122.0/24 dev virbr0 proto kernel scope link src 192.168.122.1 
```

## Docker de aplicaciones web

![](https://i.imgur.com/YPjNRkl.png)
*How Docker Container Networking Works[^5]*

```bash
docker run --name dvwa --rm -it vulnerables/web-dvwa
```

### Pruebas de comunicación
Vamos a consultar cual es la IP asignada al contenedor dentras de la NAT:
```bash
$ docker inspect --format '{{ .NetworkSettings.IPAddress }}' $contenedor
172.17.0.2
```

Intentaremos comunicación Host-Container ✅:
```bash
uqbar@local:~$ ping -c 1 172.17.0.2
PING 172.17.0.2 (172.17.0.2) 56(84) bytes of data.
64 bytes from 172.17.0.2: icmp_seq=1 ttl=64 time=0.068 ms
-- - 172.17.0.2 ping statistics -- - 1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.068/0.068/0.068/0.000 ms
```

Intentaremos comunicación Container-Host ✅:
```bash
uqbar@local:~$ docker exec -it $contenedor /bin/bash
root@7093ae1d8950:/# ping -c 1 192.168.1.102
PING 192.168.1.102 (192.168.1.102): 56 data bytes
64 bytes from 192.168.1.102: icmp_seq=0 ttl=64 time=0.157 ms
-- - 192.168.1.102 ping statistics -- - 1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max/stddev = 0.157/0.157/0.157/0.000 ms
```

Intentaremos comunicación Kali-Container 🚫:
```bash
┌──(kali㉿kali)-[~]
└─$ ping -c 1 172.17.0.2
PING 172.17.0.2 (172.17.0.2) 56(84) bytes of data.
From 172.17.0.1 icmp_seq=1 Destination Host Unreachable
-- - 172.17.0.2 ping statistics -- - 1 packets transmitted, 0 received, +1 errors, 100% packet loss, time 0ms
```

Intentaremos comunicación Container-Kali ✅:
```bash
uqbar@local:~$ docker exec -it $contenedor /bin/bash
root@7093ae1d8950:/# ping -c 1 192.168.122.9
PING 192.168.122.9 (192.168.122.9): 56 data bytes
64 bytes from 192.168.122.9: icmp_seq=0 ttl=63 time=0.449 ms
-- - 192.168.122.9 ping statistics -- - 1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max/stddev = 0.449/0.449/0.449/0.000 ms
```

Necesitamos que docker agrege conecte las vNIC al switch `virbr0` en vez de a `docker0`. Esto lo podemos hacer con el archivo de configuración del daemon de docker `/etc/docker/daemon.json`[^7].

```json
{
"bridge": "virbr0",
"iptables": false
}
```

Para tener efecto debemos detener todos los contenedores, reiniciar el daemon de Docker y volver a lanzar los contenedores

```bash
sudo systemctl stop docker
sudo systemctl start docker
```

Notaremos que ahora las interfaces `vnet0` (de Kali en QEMU/KMV) y `veth77764af` (del contenedor de Docker) estan conectadas al mismo switch virtual `virbr0`


```bash
brctl show
bridge name     bridge id               STP enabled     interfaces
docker0         8000.0242b5ce76e5       no
virbr0          8000.525400e57960       yes             veth77764af
                                                        virbr0-nic
                                                        vnet0
```

La IP que dnsmasq de libvirt le asgina al contenedor es

```bash
$ docker inspect --format '{{ .NetworkSettings.IPAddress }}' $contenedor
192.168.122.2
```

Así reintentaremos la comunicación anteriormente fallida Kali-Container ✅:
```bash
┌──(kali㉿kali)-[~]
└─$ ping -c 1 192.168.122.2
PING 192.168.122.2 (192.168.122.2) 56(84) bytes of data.
64 bytes from 192.168.122.2: icmp_seq=1 ttl=64 time=0.435 ms
-- - 192.168.122.2 ping statistics -- - 1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.435/0.435/0.435/0.000 ms
```

> :success:
> Así finalmente tenemos el servidor y la máquina auditora en una LAN virutal aislada.


### ¿Cuándo es necesario mapear puertos (`-p`)?

Resulta que todo el tráfico de arriba es inyectado directamente en el stack de red de linux, nunca sale por una NIC física.

Si necesitamos sacar y exponer tráfico del contenedor a la LAN física necesitamos mapear sobre la ip `0.0.0.0`. Con `-p 0.0.0.0:8080:80` se nos permite mapear el puerto 8080 del host al puerto 80 del contenedor. El formato utilizado es `host_ip:host_port:container_port`, donde "0.0.0.0" indica que el contenedor estará accesible desde todas las interfaces de red del host. Esto permite que cualquier dirección IP del host pueda acceder al servicio que se ejecuta dentro del contenedor en el puerto 8080.


```bash
docker run --name dvwa --rm -it -p 0.0.0.0:8080:80 vulnerables/web-dvwa
```

```bash
$ sudo ss -tulpn | grep 8080
tcp  LISTEN  0  4096  0.0.0.0:8080  0.0.0.0:*  users:(("docker-proxy",pid=489689,fd=4))    
```

Puedes probar el servidor web accediendo desde tu celular a tu computar al puerto `8080`. Por supuesto, esto impica el riesgo de un acceso no deseado.


Ahora si solo quieres ahorrar la tarea de consultar qué IP le fue asingnada el contendor puedes simplemente asignarle tu misma una de las IPs la red `127.0.0.1/8` (ej.: `127.0.0.2` o `127.9.0.1`) y así solo tu puedes acceder desde tu host. Pero esta IP cabe aclarar solo tiene sentido en la propia máquina por algo se llama *loop-back*, así que no tiene sentido llamarla desde otras máquinas (ni siquiera virtuales).

```bash
docker run --name dvwa --rm -it -p 127.9.0.1:8080:80 vulnerables/web-dvwa
```

## Máquinas vulnerables

DVWA - Ryan Dewhurst `vulnerables/web-dvwa`
Mutillidae II - Nikolay Golub `citizenstig/nowasp`
bWapp - Rory McCune `raesene/bwapp`
Webgoat(s) - OWASP Project
NodeGoat - OWASP/NodeGoat
Juice Shop - Bjoern Kimminich `bkimminich/juice-shop`
Vulnerable Wordpress - WPScan Team `l505/vulnerablewordpress`
Security Ninjas - OpenDNS Security Ninjas AppSec Training


## webgoat

```bash 
docker pull webgoat/webgoat
docker run --name webgoat --rm -it -e TZ=America/Bogota webgoat/webgoat
```

## Nodegoat
<https://github.com/OWASP/NodeGoat>
  

## Damn Vulnerable Web Application (DVWA)

![](https://media.tenor.com/91TJ3666cxYAAAAC/damn-wow.gif)

> DVWA es una aplicación web en **PHP/MySQL** que es completamente vulnerable. Su principal objetivo es servir como una ayuda para profesionales de seguridad que deseen probar sus habilidades y herramientas en un entorno legal, ayudar a los desarrolladores web a comprender mejor los procesos de seguridad de las aplicaciones web y ayudar tanto a estudiantes como a profesores a aprender sobre la seguridad de las aplicaciones web en un entorno de aula controlado.

Tamaño de la imagen comprimida 170.1MB

<https://hub.docker.com/r/vulnerables/web-dvwa>


```bash
docker run --name dvwa --rm -it vulnerables/web-dvwa
```

![](https://i.imgur.com/dU2JXJw.png)


## OWASP Mutillidae II Web Pen-Test Practice Application

> OWASP Mutillidae II es una aplicación web de código abierto y gratuita, diseñada de forma intencional para ser vulnerable, que sirve como objetivo para entusiastas de la seguridad web. Mutillidae puede ser instalado en Linux y Windows utilizando LAMP, WAMP y XAMPP. Viene preinstalado en SamuraiWTF, Rapid7 Metasploitable-2 y OWASP BWA. La versión existente puede ser actualizada en estas plataformas. Con decenas de vulnerabilidades y pistas para ayudar al usuario, este entorno de hacking web es fácil de usar y está diseñado para laboratorios, entusiastas de la seguridad, salas de clase, CTF (Capture The Flag) y como objetivo de herramientas de evaluación de vulnerabilidades. Mutillidae ha sido utilizado en cursos de seguridad de posgrado, cursos de capacitación corporativa en seguridad web y como objetivo de "evaluar al evaluador" para software de evaluación de vulnerabilidades.[^6]


Tamaño de la imagen comprimida 281.24 MB
<https://hub.docker.com/r/citizenstig/nowasp/>


```bash
docker run --name nowasp --rm -it -e MYSQL_PASS="Chang3ME!" citizenstig/nowasp
```


https://github.com/itboxltda/pentestlab

## Referencias
[^1]: Kali inside qemu/libvirt with virt-manager (Guest vm) \| kali linux documentation. (s. f.). Kali Linux. Recuperado 31 de mayo de 2023, de <https://www.kali.org/docs/virtualization/install-qemu-guest-vm>
[^2]: Libvirt: Virtual networking. (s. f.). Recuperado 31 de mayo de 2023, de https://wiki.libvirt.org/VirtualNetworking.html
[^3]: Libvirt: Nat forwarding(Aka «virtual networks»). (s. f.). Recuperado 31 de mayo de 2023, de <https://wiki.libvirt.org/Networking.html>
[^4]: Libvirt: Nat forwarding(Aka «virtual networks»). (s. f.). Recuperado 31 de mayo de 2023, de https://wiki.libvirt.org/Networking.html#forwarding-incoming-connections
[^5]: How docker container networking works—Mimic it using linux network namespaces. (2020, abril 15). DEV Community. https://dev.to/polarbit/how-docker-container-networking-works-mimic-it-using-linux-network-namespaces-9mj 
[^6]: Citizen Stig. (2023, March 8). Docker Mutillidae. Retrieved May 31, 2023, from https://github.com/citizen-stig/dockermutillidae

[^7]: Dockerd. (2023, mayo 31). Docker Documentation. https://docs.docker.com/engine/reference/commandline/dockerd/
