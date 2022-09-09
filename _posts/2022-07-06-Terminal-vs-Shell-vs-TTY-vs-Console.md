---
title: Terminal vs. Shell vs. Console
author: FredyRosero
tags: [Terminal, Shell, TTY, Console]
date: 2022-07-06
layout: post
categories: [basics]
image: "/assets/images/Terminal%20Vs.%20Shell%20Vs.%20Console%20(Instagram%20story)_thumbnail.jpg"
excerpt_separator: <!--more-->
---

Abstract: poner un resumen de pocas lineas acá.
<!--more-->

## Section 1
Recuerda definir la variable `GIT_USER` en el perfil de tu shell
```bash
echo export GIT_USER=MyGithubUser >> ~/.bashrc
source ~/.bash_profile
```

o de manera temporal
```bash
GIT_USER=MyGithubUser
echo $GIT_USER
```

### Subsection 1.1
Body of Section 1.1   

![Terminal vs. Shell vs. Console](/assets/images/Terminal%20Vs.%20Shell%20Vs.%20Console%20(Instagram%20story).png)

## Section 2
Cuerpo de la sección 2 $\mathrm{e} = \sum_{n=0}^{\infty} \dfrac{1}{n!}$ con ecuación en línea.
A continuación un bloque de ecuaciones alineadas:
$$
\begin{align}
Then,\ (x+z)+t & = x+(z+t)\ (\because Rule2) \\
& = x+0_V \\
& = x\ (\because Rule3) \\
\end{align}
$$

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

