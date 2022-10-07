---
title: Laboratorio comunicación capa 2
author: 
- UqbarUN
- 
date: 2022-10-07
layout: post
categories: [category]
tags: [tag1, tag2]
---
Abstract: poner un resumen de pocas lineas acá.
<!--more-->

## Requisitos
* Docker CE
* GNS3


## Cisco IOU
Primero debemos evadir el sistema de licencia y 


## Licencia Cisco IOU
Descargamos y ejecutamos [CiscoKeyGen.py ](https://gist.github.com/FredyRosero/a88ad2eccaf6e65af88c826028bc8d25)

```bash
python CiscoKeyGen.py
echo -e '[license]\nlocal = [LICENSIA_GENERADA];' | tee $HOME/.iourc
```

En GNS3 > Edit > Preferences > IOS on UNIX > Browse… escogemos $HOME/.iourc

## Plantilla de dispositivo L2

1. Necesitamos descargar la imagen IOU de `i86bi-linux-l2-ipbasek9-15.1g.bin`

2. Crear la plantatilla

   A. Crear una plantilla en preferences > IOS on Unix > IOU Devices con la imagen.


   B. En el docker Router > New Template > Install an appliance from the GNS3 server > Routers > Cisco IOU L3 > Install the appliance on yout local computer > (`i86bi-linux-l2-ipbasek9-15.1g.bin`) Cisco IOU L3 version 15.4.1T > Import

## Plantilla de Contenedor de Linux Alpine
Podemos probar el contenedor corriendo directamente con Docker
```
docker run --tty --interactive alpine
```
```bash
ip a
```
```
exit
```
Lo instalamos en el docker End devices > New Template > Install an appliance from the GNS3 server > Guests > Alpine Linux > Install the appliance on yout local computer > Finish

## Topología


## Análisis de tráfico

### Capa 2
Los *frames* son los PDU (*protocol data unit*) de la capa 2 del modelo osi

Consultamos la MAC en el swtich:
```bash
sh int e0/0
```
Mostrar tabla de direcciones MAC ene l switch
```bash
show mac address-table interface ethernet 0/1
```
```bash
show mac address-table interface ethernet 0/1
```

Consultamos la MAC en los PC's
```bash
ip a
```
```bash

```

### Análisis de Arping con Wireshark
```bash
arping 0.0.0.1
```

En wireshark filtramos por dirección MAC `eth.src == 82:9e:cb:1b:d2:e8`

### LAN, IP y capa 3
En PC1
```
ip addr add 192.168.2.2/24 brd + dev eth0
```
En PC2
```
ip addr add 192.168.2.3/24 brd + dev eth0
```
En PC1
```
ping 192.168.2.3 -c 4
arp -a
```