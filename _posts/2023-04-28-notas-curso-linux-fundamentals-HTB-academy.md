---
title: Notas curso Linux Fundamentals HTB academy
author: Alejosebasp
tags: [fundamentos, linux]
date: 2023-04-28
layout: post
categories: [fundamentos]
image: "https://uqbarun.github.io/assets/images/notasCursoLinux/linux.jpg"
---

Las notas que aquí se encuentran son un resumen/interpretación/traducción del curso de fundamentos de Linux que se puede encontrar de forma gratuita [aqui](https://academy.hackthebox.com/course/preview/linux-fundamentals).

<!--more-->

## **ESTRUCTURA DE LINUX**

Linux es un sistema operativo de codigo abierto como Windows, iOS o MacOS. Un sistema operativo se encarga de administrar todos los recursos de hardware de un computador, comunica el software con el hardware.

![Logo Linux ](https://uqbarun.github.io/assets/images/notasCursoLinux/memeLinux.jpeg)

1. ### Historia

    Algunos de los eventos predecesores y necesarios para que se lograra construir el **Kernel** de Linux y el sistema operativo Linux fueron:

    - 1970 - Creación del sistema operativo unix (Ken Thompson y Dennis Ritchie)

    - 1977 - Lanzamiento de BSD (Berkeley Software Distribution)

    - 1983 - Inicio del proyecto GNU (GNU's not Unix!) por Richard Stallman

    - 1989 - Se crea la licencia GNU GPL (General Public License) gracias al trabajo de Stallman

    Linux inicia como proyecto personal de Linus Torvalds en 1991 con el objetivo de crear un kernel de sistema operativo libre y gratuito, ha evolucionado bajo la licencia GPL y cuenta con más de 600 distribuciones (Sistemas operativos) basados en Linux, como Ubuntu, Debian, Fedora, Gentoo, Mint, o las distribuciones enfocadas a ciberseguridad como Kali, Parrot o BlackArch.

    Algunas características de Linux:

    - Se considera más seguro que otros SO
    - Menos suceptible a Malware que Windows
    - Se actualiza con mucha frecuencia
    - Cualquiera puede ver o modificar el código fuente
    - Cualquiera puede distribuirlo comercialmente
    - Alto rendimiento y estabilidad 
    - Suele ser más difícil de utilizar para los usuarios principiantes
    - No posee tantos controladores de hardware
    - Es el sistema más utilizado en el mundo, se utiliza en servidores, consolas, televisores, autos, smartphones, tablets y más.

2. ### Filosofía

    Linux sigue 5 principios:

    - Todo es un archivo
    - Programas pequeños de proposito específico/único
    - Capacidad para combinar los programas simples para realizar tareas complejas
    - Evitar las interfaces de usuario captivas, uso principal de la terminal
    - Datos de configuración almacenados en un archivo de texto

3. ### Componentes

    Los principales componentes del SO Linux se resumen en:

    - **Bootloader**: inicia el SO
    - **Kernel**: gestiona los recursos de los sispositivos E/S a nivel de hardware 
    - **Demonios**: Servicios que corren en segudno plano
    - **Shell**: CLI. Interface entre el usuario y el SO
    - **Servidor de graficos**: Permite a los programas con GUI ejecutarse
    - **Gestor de ventanas**: La GUI del SO, como KDE, MATE, GNOME, ETC.
    - **Utilidades**: Programas adicionales al SO

4. ### Architectura Linux

    La arquitectura de Linux se puede dividir en 4 capas ordenadas de la inferiror a la superior así:

    1. **Hardware**:  Componentes físicos del dispositivo
    2. **Kernel**: La base de Linux, controla los recursos de hardware (CPU, Memoria, Disco)
    3. **Shell**: Una interfaz de linea de comandos (CLI) que le permite al usuario interactuar con el SO
    5. **Utilidad del sistema**: Pone a dispocisión del usuario toda la funcionalidad del SO

5. ### Jerarquía del sistema de archivos
    
    El SO Linux está estructurado en una jerarquía en forma de árbol que contiene los siguientes directorios de nivel superior:

    ![Sistema de archivos de Linux](https://uqbarun.github.io/assets/images/notasCursoLinux/linuxFS.png "Sistema de archivos de Linux")

    - **/**: Directorio raiz, contiene todos los demás directorios
    - **/bin**: Archivos binarios de comandos esenciales
    - **/boot**: Contiene el gestor de arranque, el ejecutable del kernel y archivos necesarios para iniciar el SO
    - **/dev**: Archivos de los dispositivos de hardware conectados
    - **/etc**: Archvios de configuración del sistema o aplicaciones
    - **/home**: Cada usuario tiene un subdirectorio para alamacenamiento
    - **/lib**: Archivos de librerías compartidas que requiere el sistema de arranque
    - **/media**: Aquí se montan dispositivos extraíbles como USBs
    - **/mnt**: Punto de montaje temporal para sistemas de archivos normales
    - **/opt**: Programas o herramientas de terceros
    - **/root**: Directorio principal del usuario root
    - **/sbin**: Ejecutables utilizados para la administración del sistema
    - **/tmp**: Archivos temporales, se borra al iniciar el sistema
    - **/usr**: Ejecutables, librerías, archivos man, etc
    - **/var**: Archivos varios como archivos de registro, correo electrónico, aplicaciones web, archivos cron, etc

## **DISTRIBUCIONES LINUX**

Existen diferentes distribuciones de Linux 

### Debian