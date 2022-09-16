---
title: Introducción a Vim
author: FredyRosero
tags: [vim]
date: 2022-05-20'
layout: post
categories: [fundamentos]
excerpt_separator: <!--more-->
---
Vamos a dividir la explicación del uso de Vim en dos partes: Una de emergencia, en caso de que te hayas quedado atrapado en Vim y otra si quieres empezar a manejar Vim como tu editor favorito.
 <!--more-->

## Explicación de Emergencia
### Modos
Lo primero que debes saber es que para poder usar los comandos de vim debes primero escribirlos. Por eso vim tiene dos modos principales: *COMMAND* (modo comando) y *INSERT* (modo insercción). El modo *COMMANDO* te permite ejecutar comandos escribiendolos. El modo *INSERT* te permite editar el archivo. A continuación te mostramos algunos modos a los cuales puedes entrar desde el modo *COMMAND*:
* <kbd>Esc</kbd> salir del modo actual para ir al modo *COMMAND*.
* <kbd>i</kbd> entrar al modo *INSERT*. <kbd>a</kbd> tambien funciona
* <kbd>v</kbd> entrar al modo *VISUAL* (selección).

### Comandos de emergencia
Para ejecutar los siguientes comandos solo tienes que estar en el modo *COMMAND* al cual puedes ir presionando <kbd>Esc</kbd>. Algunos comandos se puede ejecutar presionando directamente una tecla y, otros pueden ser utilizados escribiendo una palabra luego de ingresar `:`
* <kbd>u</kbd>, `:u` o `:undo` deshacer cambios. <kbd>4</kbd>+<kbd>u</kbd> deshace 4 cambios.
* <kbd>Ctrl</kbd>+<kbd>r</kbd> o `:redo` rehacer cambios. <kbd>4</kbd>+<kbd>Ctrl</kbd>+<kbd>r</kbd> deshace 4 cambios.
* `:q!` salir descartando cambios.
* `:w` guardar cambios
* `:wq` guardar cambios y salir

## Explicación introductoria
https://www.keycdn.com/blog/vim-commands

### Edición
Comandos desde el modo *COMMAND*
* `dd` *delete* o cortar línea.
* `yy` *yank* o copiar línea.
* `p` pegar línea.
#### Edición de bloques
`:help text-objects`
Para editor un bloque delimitado por dos caracteres externos como partentesis o el signo de mayor o menor, utilizamos una combinación de 3 caracteres [1][2][3]
* [1] el primer caracter define la acción a ejecutar: `v` para seleccioanr, `y` para copiar o `d` para cortar.
* [2] el segundo caracter define si la selección solo se aplica al interior `i` excluyendo lso caracteres delimitadores o si incluye los caracteres de delimitación `a`. p. je. `yi` para copiar el interior o `ya` para copiar el exterior.
* [3] el tercer caracter define el caracter de delimitación
  * Paréntesis: `(`, `)` o `b`. P. ej. `vib`
  * 

### Selección
Las selecciones se hacen con el Modo visual. Escribe `:help v`.
```javascript
if (true) {
// code block
// another code block
}
```
* `v` Entra en modo visual normal.
* `vib` Seleccionar interior de bloque (entre paréntesis, corchetes, etc).
* `vab` Seleccionar bloque incluyendo caracteres externos  (paréntesis, corchetes, etc).
* `vi`+
* `←`,`↑`, `↓`, `→` o `h`,`j`,`k`,`l` Expande la selección hacia la izquierda, arriba, abajo y derecha.
#### Selección de bloques
Para seleccionar un bloque tenemos que usar una combinación de caracteres

#### Comandos sobre selección
Al tener un texto seleccionado simplemente presionado una tecla puedes activar los siguientes comandos:
* <kbd>Esc</kbd> salir del visual.
* <kbd>d</kbd> *delete* o eliminar
* <kbd>y</kbd> *yank* o copiar. 
* <kbd>p</kbd> pegar. 
* <kbd>c</kbd> cambiar.
* <kbd>r</kbd> remplazar.
### Mouse
Clic and point
Para activar el mouse temporal
```bash
:set mouse=a
```
### Comandos útiles para programación
Habilitar números de línea `:set number`
Deshabilitar números de línea `:set number!`
Configurar identación de *tab* con 4 espacios `:set expandtab ts=4 sw=4 ai`
Re formatear espacios de *tab*: `:%retab`

## Configuración permanente
Crea un archivo `~/.vimrc`