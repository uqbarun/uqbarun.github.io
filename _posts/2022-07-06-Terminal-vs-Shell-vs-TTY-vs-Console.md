---
title: Terminal vs. Shell vs. Console vs TTY
author: FredyRosero
tags: [Terminal, Shell, TTY, Console]
date: 2022-07-06
layout: post
categories: [fundamentos]
image: "https://i.imgur.com/aXjc03E.png"
---
# Terminal vs. Shell vs. Console vs TTY
¿Sabes cuál es la diferencia entre Terminal vs. Shell vs. Console vs TTY? Una **Terminal** es una Interfaz física (80’s), o una virtual (kernel) o una de ventana (DE). Por otro lado una **Shell** es el proceseo que Interpreta y ejecuta de comandos de texto provenientes de la terminal. Te explicamos los detalles a continuación.

<!--more-->

# ¿Sabes cuál es la diferencia entre Terminal vs. Shell vs. Console vs TTY?

## Terminal físico (80's)
Antes, había un mainframe y sus TTYs. Las TTYs o terminales o consolas eran la interfaz física (separada) que contienía los instrumentos para el control y operación del mainframe.

![](https://i.imgur.com/BnMEsnC.jpg)

El subsistema interno TTY se encargaba de enrutar la entrada y salida de la terminal física, con el proceso activo (en primer plano) del mainframe como la shell, la cual recibe comandos de texto simple para su interpretación y ejecución.

![Terminal físico (80's)](https://i.imgur.com/aXjc03E.png)

## TTY virtual o TTY en kernel

Con el nacimiento de las Personal computers ya no existía un mainframe y sus terminales, sino un solo dispositivo.

![](https://i.imgur.com/99yLQwd.jpg)

Así que la interfaz dejó de estar separada del “mainframe” y se convirtió en una terminal “virtual” dentro del “mainframe” para simplemente convertirse en un PC.

![TTY virtual o TTY en kernel](https://i.imgur.com/0TWRO1s.png)

## Pseudo TTY (PTY) o TTY en espacio de usuario (UNIX 98)
![](https://i.imgur.com/ismwTcN.jpg)

Con el surgimiento de los desktop enviroments (DE) y ventanas, y como aún se necesitaba ingresar comandos de texto, fue necesario “emular” una terminal de ventana.

![Pseudo TTY (PTY) o TTY en espacio de usuario (UNIX 98)](https://i.imgur.com/g897cnC.png)

## Infografía

![:link: PDF de Infogarfía Terminal vs. Shell vs. Console vs TTY](https://drive.google.com/file/d/1IEZf1ltqvXqtWHz53PzRDh2iA64L0kR9/view?usp=share_link)
![Infogarfía Terminal vs. Shell vs. Console vs TTY](https://i.imgur.com/Mj2Ooq5.jpg)

## FAQs

1. How can I hook on to one terminal's output from another terminal?
    * cat /dev/pts/1 [^1]

1. ¿Cuál fue el primer terminal que se baso en ASCII?
	* IBM 2260, lanzado en 1964 [^2]

1. ¿Cuáles son las codificaciones de terminal predeterminadas en Linux?
	* UTF-8 [^3]


## Bibliografía

* The TTY demystified - <http://www.linusakesson.net/programming/tty/>
* Terminal under the hood, TTY & PTY - <https://yakout.io/blog/terminal-under-the-hood/>
* Linux terminals, tty, pty and shell - <https://dev.to/napicella/linux-terminals-tty-pty-and-shell-192e>
* Section 4: The Unix Shell - <https://fsl.fmrib.ox.ac.uk/fslcourse/unix_intro/shell.html>
* Linux TTY - <https://kb.novaordis.com/index.php/Linux_TTY>
* TTY: under the hood - <https://www.yabage.me/2016/07/08/tty-under-the-hood/>
* The Devpts Filesystem - <https://www.kernel.org/doc/html/latest/filesystems/devpts.html>
* Digital's Video Terminals - <https://vt100.net/dec/vt_history>
* Teletype Model 33 ASR - <https://www.curiousmarc.com/mechanical/teletype-asr-33>
* (ASCII) ASA standard X3.4-1963 - <https://www.sr-ix.com/Archive/CharCodeHist/X3.4-1963/index.html>
* DEC Terminals - <https://invisible-island.net/archives/shuford/terminal/dec.html>
* NCD 88k/19c Specific notes - <https://web-docs.gsi.de/~kraemer/COLLECTION/NCD/ncd19c.html>

## Referencias
[^1]: <https://unix.stackexchange.com/questions/72320/how-can-i-hook-on-to-one-terminals-output-from-another-terminal>
[^2]: <https://retrocomputing.stackexchange.com/questions/15516/when-did-ibm-start-to-use-ascii>
[^3]: <https://unix.stackexchange.com/questions/112216/which-terminal-encodings-are-default-on-linux-and-which-are-most-common>