--- 
title: Sanitizacion de TTY por conexion remota
author: [UqbarUN]
tags: [Hacking, tty, ssh]
date: 2023-11-19
layout: post
categories: [fundamentos]
---

## Sanitización de TTY por conexión remota:

A la hora de conectarnos a un equipo de manera remota es una práctica muy común en el hacking, ya sea por medio se ssh, reverse shell, bind shell, etc. Al momento de establecer la conexión remota nos damos cuenta que contamos con algunas limitaciones al momento de interactuar con nuestra consola, por nombrar algunas, en el caso de un ssh vemos que no nos es posible limpiar la pantalla ni detener procesos o mandarlos a segundo plano con los atajos de teclado tradicionales, y en caso de una reverse shell no podemos siquiera retroceder con las flechas de nuestro teclado. Por esta y otras razones en la siguente entrada de blog explicaré paso a paso algunas alternativas, como sanitizar una TTY en los casos de una conexión por ssh y con una shell obtenida por medio de Netcat (puede ser reverse o bind shell, pero para generalizar la llamaremos únicamente reverse shell), siguiendo el tutorial no solamente tendremos una TTY completamente interactiva sino que incluso estará ajustada a las proporciones de nuestra pantalla y tendrá colores descriptivos para archivos y carpetas tal como probablemente los tengamos en la consola de nuestra máquina.

## Conexión por reverse shell:

* Muchas veces en hacking requerimos entablar una conexión con la máquina víctima y ganar una shell, para ello entablamos una conexión por Netcat poniéndonos en escucha por un puerto y recibiendo la shell de la otra máquina por ese puerto. El primer obstáculo que observamos es que no contamos con una bash, para esto ejecutamos el siguiente comando:
	~~~shell
	script /dev/null -c bash
	~~~
    En caso que el anterior comando no nos devuelva una bash, ejecutamos la siguiente alternativa haciendo uso de python:
    ~~~shell
    python3 -c 'import pty;pty.spawn("/bin/bash")'
    ~~~
	Ahora la interfaz es más familiar, pero siguen sin funcionar los atajos de las flechas y demás atajos de una consola linux, para ello ejecutamos los siguentes comandos:
	~~~shell
	^Z
	stty raw -echo; fg
	~~~
	El "^Z" se lee como ctrl Z, al ejecuta esto, la reverse shell pasa a segundo plano, ya en nuestra consola personal ponemos el segundo comando del campo anterior, lo siguiente va en el campo que se abre con el comando anterior:
	~~~shell
	reset xterm 
	~~~
	Para asegurarnos que los comandos serán interpretados de la forma adecuada se asigna bash como shell ; en caso de que no estemos en una ( y que el sistema la tenga) hacemos lo siguiente:
	~~~shell
	export SHELL=bash
	~~~
     Ya en este punto podríamos colocar
	~~~shell
	export TERM=xterm
	~~~
	Y ya con esto tendríamos nuestra TTY interactiva, pero la idea es que quede lo mejor posible, en este caso queramos que tenga colores y se encuentre bien ajustado. Los comandos serían los siguientes:
	~~~shell
	export TERM=xterm-256color
	source /etc/skel/.bashrc
	~~~
	Si con estos comandos no vemos la TTY con colores una ligera alternativa al source (bastante mas difícil de recordar) sería:
	~~~shell
	export PS1="\[\e[32m\]\u@\h:\[\e[0m\]\w\$ "
	~~~
	Luego si queremos ajustar el tamaño, verificamos el tamaño de la TTY con la nuestra, en mi caso es 43 filas 179 columnas, pero para verificar el nuestro ejecutamos:
	~~~shell
	stty size
	~~~
	Verificamos y si queremos cambiar ponemos lo siguiente:
	~~~shell
	stty rows 43 columns 179
	~~~
    Como mencioné anteriormente, es en mi caso, al escribir el comando debemos ingresar las filas y columnas de nuestra pantalla.
	Con esto ya quedaría una terminal interactiva y bastante linda para trabajar de manera cómoda.

### Alternativa con rlwrap:

En caso de querer una sanitización rápida, podemos hacer uso de la herramienta rlwrap (https://github.com/hanslub42/rlwrap) que básicamente nos ayuda a que funcionen todos los atajos de linux en la conexión. Básicamente nos "sanitiza" la TTY en ese aspecto. su uso se hace de la siguiente forma:
~~~shell
rlwrap nc -nlvp ${puerto en escucha}
~~~

## Conexión por SSH:

* El proceso con ssh es bastante similar al de la reverse shell pero más fácil aún, cuando estemos dentro (en caso de estar con una bash) ejecutamos:
	~~~shell
	export TERM=xterm-256color
	source /etc/skel/.bashrc
	~~~
	O su alternativa de source:
	~~~shell
	export PS1="\[\e[32m\]\u@\h:\[\e[0m\]\w\$ "
	~~~
	Para ajustar el tamaño, verificamos las dimensiones de la TTY ssh con la de nosotros, en mi caso es 43 rows 179 columns, pero para verificar el nuestro ejecutamos:
	~~~shell
	stty size
	~~~
	Ahí verificamos y si queremos cambiar (voy a usar mi caso personal con segunda pantalla) ponemos:
	~~~shell
	stty rows 43 columns 179
	~~~
	Ahora veremos que nuestra tty está sanitizada como debe ser.

Espero que este pequeño tutorial haya sido de ayuda, pues cuando hacemos estas conexiones las primeras veces, nos percatamos de lo incómodo que es trabajar en una terminal así. Ya con esto, solo poniendo un par de comandos ya tenemos una terminal bien ajustada y lista para el trabajo.
