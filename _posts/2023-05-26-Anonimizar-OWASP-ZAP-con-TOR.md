---
title: Anonimizar OWASP ZAP con TOR
author: 
- FredyRosero
date: 2023-05-26
layout: post
categories: [web]
tags: [web, zap, owazp-zap, owasp, tor, proxychains]
image: https://i.imgur.com/mk3zsxU.jpg
---
Cómo proteger tu tráfico y mantener tu identidad oculta. Aprende a configurar y utilizar Proxychains para enrutar el tráfico de OWASP ZAP a través de TOR, garantizando una capa adicional de anonimato y seguridad en tus pruebas de ciberseguridad
<!--more-->

## Requisitos
* tor
* proxychain
* zap

## 1. Instalar TOR[^tor]

Asegúrate de tener instalado y ejecutando el cliente TOR en tu máquina. 

```bash!
sudo apt-get install tor
```

## 2. Verificar TOR

Puedes verificar el puerto de TOR con `ss` o `netstat`:

```bash!
sudo ss -tulpn | grep tor
```

## 3. Verificar IP con `chromium`
Podemos verificar con el navegador cual es la ip `chromium`
```bash!
chromium https://check.torproject.org --proxy-server="socks5://localhost:9050"
```

También puedes verificar con el sitio <https://dnsleaktest.com>.

![](https://hackmd.io/_uploads/SJDyL2Trn.png)

## 2. Instalar Proxychains

En tu máquina Linux, instala la herramienta Proxychains si aún no lo has hecho. Puedes hacerlo ejecutando el siguiente comando en el terminal:
```bash!
sudo apt-get install proxychains
```

## 3. Configurar Proxychains

Abre el archivo de configuración de Proxychains ubicado en `/etc/proxychains.conf`[^1], busca la sección `[ProxyList]` y añade la siguiente línea al final:

```config
socks5 127.0.0.1 9050
```    

Esto configura Proxychains para que utilice el proxy TOR en localhost (127.0.0.1) en el puerto 9050.

## 4. Prueba proxychain
Vamos a probar proxychain con firefox en vez de chromium debido a un bug[^2] que hace que chromium se salte el proxy.
```bash!
proxychains firefox --marionette -P default https://check.torproject.org
```

## 5. Instalar OWASP ZAP
Visita el sitio web oficial de OWASP ZAP en https://www.zaproxy.org/download/ y descarga el linux installer o linux package
![](https://hackmd.io/_uploads/rkP3Yhprn.png)

## 6. Iniciar ZAP
Ahora puedes iniciar OWASP ZAP a través de Proxychains para enrutar el tráfico a través de TOR. En el terminal, ejecuta el siguiente comando:

```bash!
/opt/zaproxy/zap.sh
```
![](https://hackmd.io/_uploads/rJdBn6prh.png)


Esto iniciará OWASP ZAP y enrutará su tráfico a través del proxy TOR configurado en Proxychains.

## Referencias
[^tor]: Tor https://help.ubuntu.com/community/Tor?action=show&redirect=TOR
[^1]: Editing config on Proxychains | Ubuntu for Windows Linux Sub System https://askubuntu.com/questions/1008425/editing-config-on-proxychains-ubuntu-for-windows-linux-sub-system
[^2]: How does Chrome bypass proxychains proxying? https://superuser.com/a/1317801/1249289