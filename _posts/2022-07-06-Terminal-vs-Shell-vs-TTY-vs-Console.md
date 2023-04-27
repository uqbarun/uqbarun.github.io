---
title: Terminal vs. Shell vs. Console vs TTY
author: FredyRosero
tags: [Terminal, Shell, TTY, Console]
date: 2022-07-06
layout: post
categories: [fundamentos]
image: "/assets/images/Terminal%20Vs.%20Shell%20Vs.%20Console%20(Instagram%20story)_thumbnail.jpg"
---
Abstract: poner un resumen de pocas lineas acá.
<!--more-->

# ¿Sabes cuál es la diferencia entre Terminal vs. Shell vs. Console vs TTY?

## Terminal físico (80's)
Antes, había un mainframe y sus TTYs. Las TTYs o terminales o consolas eran la interfaz física (separada) que contienía los 
instrumentos para el control y operación del mainframe.

![](https://i.imgur.com/BnMEsnC.jpg)


El subsistema interno TTY se encargaba de enrutar la entrada y salida de la terminal física, con el proceso activo (en primer plano) del mainframe como la shell, la cual recibe comandos de texto simple para su interpretación y ejecución.

![](https://i.imgur.com/aXjc03E.png)

## TTY virtual o TTY en kernel

Con el nacimiento de las Personal computers ya no existía un mainframe y sus terminales, sino un solo dispositivo.

![](https://i.imgur.com/99yLQwd.jpg)


Así que la interfaz dejó de estar separada del “mainframe” y se convirtió en una terminal “virtual” dentro del “mainframe”
para simplemente convertirse en un PC.

![](https://i.imgur.com/0TWRO1s.png)


## Pseudo TTY (PTY) o TTY en espacio de usuario (UNIX 98)
![](https://i.imgur.com/ismwTcN.jpg)

Con el surgimiento de los desktop enviroments (DE) y ventanas, y como aún se necesitaba ingresar comandos de texto, fue necesario “emular” una terminal de ventana.

![](https://i.imgur.com/g897cnC.png)


## Infografía


![](https://i.imgur.com/Mj2Ooq5.jpg)


## FAQs

1. ¿Cuál fue el primer terminal que se baso en ASCII?
1. Which terminal encodings are default on Linux, and which are most common? 
1. How can I hook on to one terminal's output from another terminal?
https://unix.stackexchange.com/questions/72320/how-can-i-hook-on-to-one-terminals-output-from-another-terminal
cat /dev/pts/1
## Sources
* The TTY demystified - http://www.linusakesson.net/programming/tty/
* Terminal under the hood, TTY & PTY - https://yakout.io/blog/terminal-under-the-hood/
* Linux terminals, tty, pty and shell - https://dev.to/napicella/linux-terminals-tty-pty-and-shell-192e
* Section 4: The Unix Shell - https://fsl.fmrib.ox.ac.uk/fslcourse/unix_intro/shell.html
* Linux TTY - https://kb.novaordis.com/index.php/Linux_TTY
* TTY: under the hood - https://www.yabage.me/2016/07/08/tty-under-the-hood/
* The Devpts Filesystem - https://www.kernel.org/doc/html/latest/filesystems/devpts.html
* Digital's Video Terminals - https://vt100.net/dec/vt_history
* Teletype Model 33 ASR - https://www.curiousmarc.com/mechanical/teletype-asr-33
* (ASCII) ASA standard X3.4-1963 - https://www.sr-ix.com/Archive/CharCodeHist/X3.4-1963/index.html
* DEC Terminals - https://invisible-island.net/archives/shuford/terminal/dec.html
* NCD 88k/19c Specific notes - https://web-docs.gsi.de/~kraemer/COLLECTION/NCD/ncd19c.html

