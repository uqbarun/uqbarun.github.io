---
title: nmap
---
# NMap

Nmap o Network mapper es es una herramienta para explorar y analizar rápidamente redes y sondear de seguridad y puertos [^1]. Nmap arroja una tabla de puertos de interés con los atributos de número de puerto, protocolo, servicio y estado. En el estado los valores `open` (abierto), `filtered` (filtrado), `closed` (cerrado), o `unfiltered` (no filtrado). En la tabla de puertos también podemos solicitar la versión del servicio. Además podemos solicitar el nombre del dominio, sistema operativo, tipo de dispositivo y dirección física.

## Sintaxis
~~~shell
nmap [ <Tipo de sondeo> ...] [ <Opciones> ] { <especificación de objetivo> }
~~~

## Específicación de objetivo

https://svn.nmap.org/nmap/docs/nmap.usage.txt

* Nombre de dominio `canme.nmap.org`
* 


## Quiz

<https://survey.alchemer.com/s3/6829228/General-Knowledge-Practice-Quiz-Nmap-Concept-Practice-Quiz-1>

1.  ¿Utilizar el comando -6 (`nmap -6 [dirección]`) hará lo siguiente?
    1.  Probar solo los seis puertos más populares en esa dirección.
    2.  Escanear una dirección IPv6.
    3.  Ejecutar un escaneo agresivo en esa dirección.
    4.  Probar el puerto 6 en esa dirección.

2.  Para ejecutar Nmap en un host Linux con privilegios completos, se debe usar lo siguiente:
    1.  sudo nmap.
    2.  nmap -root.
    3.  /root -nmap.
    4.  nmap -s.

3.  ¿Qué comando se utiliza con nmap para ejecutar un escaneo TCP ACK?
    1.  \-T0.
    2.  \-Pa.
    3.  \-sA.
    4.  Ninguno. Se ejecuta por defecto.

4.  ¿Con qué herramientas se pueden escribir scripts simples para Nmap?
    1.  RIPE.
    2.  ARIN.
    3.  NSE.
    4.  APNIC.

5.  Te preocupa que los escaneos estén tardando demasiado y quieres ver cada puerto abierto a medida que se encuentran durante el escaneo en lugar de esperar hasta el final. ¿Qué opción deberías usar?
    1.  \-v.
    2.  \-p.
    3.  \-s.
    4.  \-l.

6.  Utilizar la opción -oA para especificar que la salida se escriba en varios archivos simultáneamente produce archivos en qué tres formatos.
    1.  Normal, PDF y CSV.
    2.  CSV, XML y grepable.
    3.  Grepable, XML y XLSX.
    4.  Normal, XML y grepable.

7.  ¿Cuál de los siguientes es el nombre del archivo de informe creado por defecto con Nmap cuando la salida se guarda en un archivo?
    1.  basename.rtf.
    2.  basename.html.
    3.  basename.gmap.
    4.  basename.nmap.

8.  ¿Qué comando se utiliza para hacer un escaneo UDP?
    1. `-U`.
    2. `-UDP`.
    3. `-n`.
    4. `-sU`.

9.  Nmap ofrece una serie de comandos -T para permitir la selección de diferentes plantillas de tiempo. De estas opciones, ¿cuál es la más agresiva?
    1. `-T5`.
    2. `-T10`.
    3. `-T0`.
    4. `-T1`.

10.  Quieres aleatorizar el orden de escaneo de puertos de Nmap para hacerlo un poco más difícil para el software detectar el escaneo en progreso. ¿Qué opción deberías usar?
     1. `-z`.
     2. No se requiere ninguna opción. Nmap aleatorizará el orden de escaneo de puertos de forma predeterminada.
     3. `-q`.
     4. `-r`.


## Bibliografía

[^1]: Guía de referencia de Nmap (Página de manual). (2023, July 13). Retrieved from https://nmap.org/man/es

