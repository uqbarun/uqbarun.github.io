---
title: Permisos de acceso a archivos UNIX
author: 
- FredyRosero
date: 2022-09-16
layout: post
categories: [unix]
tags: [chmod, chown]
tools: [chmod, chown]
---
Para sistemas de archivos UNIX, el *file-system permision* es un atributo de un controla la habilidad a un clase de entidad a leer, modificar, navegar o ejecutar este mismo. Te daremos una breve explicación de como cambiar los permisos de acceso a un archivo con `chown` y `chmod` en sus diferentes modos.
<!--more-->

## Comando `id`
El comando `id` mueastra el ID del usuario actual y los ID's de los grupos a los cuales hace parte el usuario actual<sup>[1]</sup>.

## Comando `ll`
Primero debemos conocer los permisos actuales del archivo, esto lo podemos lograr con `ls`. El comando `ls` lista la información acerca de los archivos<sup>[2]</sup> si agregamos la banera `-l` utlizará el formato largo. En muchos sistemas el comando `ll` es un alias para `ls -l`. Puedes obtener mas información con `info coreutils 'ls invocation'` o `man ls`. El listado de formato largo imprimirá los siguientes atributos:

```
-rwxrw-r--   10    root   root 2048    Jan 13 07:11 afile.exe
?UUUGGGOOO   00  UUUUUU GGGGGG ####    MON DD XX:XX FILENAME
^ ^  ^  ^     ^      ^      ^    ^      ^            ^  
| |  |  |     |      |      |    |      |            |
| |  |  |     |      |      |    |      |            ┖- Nombre de archivo.
| |  |  |     |      |      |    |      ┖-------------- Última modificación
| |  |  |     |      |      |    ┖--------------------- Por lo geneal tamaño en bytes
| |  |  |     |      |      ┖-------------------------- Grupo del archivo
| |  |  |     |      ┖--------------------------------- Usuario dueño del archivo
| |  |  |     ┖---------------------------------------- Cantidad de enlaces
| |  |  ┖---------------------------------------------- Triadas de bits de modo de acceso para otros usuarios
| |  ┖------------------------------------------------- Triadas de bits de modo de acceso para el grupo del archivo
| ┖---------------------------------------------------- Triadas de bits de modo de acceso para el usuario dueño
┖------------------------------------------------------ Tipo de archivo  
```

### Tipo de archivo
*Caracter N° 1*
Tipo de archivo: 
* '-' Archivo
* 'd' Directorio
* 'l' Enlace simbólico
* 'c'  Tipo carácter
* 'b' Tipo bloques

### Triada de modo de acceso

| Notación simbólica    | Binario   | Octal | Lectura   | Escritura | Ejecución |
|---                    |---        |---    |---        |---        |---        |
| - - -                 | 000       | 0     | No        | No        | No        |
| - - x                 | 001       | 1     | No        | No        | Si        |
| - w -                 | 010       | 2     | No        | Si        | No        |
| - w x                 | 011       | 3     | No        | Si        | Si        |
| r - -                 | 100       | 4     | Si        | No        | No        |
| r - x                 | 101       | 5     | Si        | No        | Si        |
| r w -                 | 110       | 6     | Si        | Si        | No        |
| r w x                 | 111       | 7     | Si        | Si        | Si        |

## Comando `chmod`

### Opciones ugoa
Users can Read, Write and eXecute, Group can Read and eXecute and others can Read:
```
chmod u=rwx,g=rx,o=r myfile
```

All can Read:
```
chmod a=r myfile
```

Agregar permiso de ejecucion a todos
```
chmod a+x myfile
```

### Opciones con notación simbolica
Users can Read, Write and eXecute (111=7), Group can Read and eXecute (101=5) and others can Read (100=4)
```
chmod  754 myfile
```


[1]: https://man7.org/linux/man-pages/man1/id.1.html
[2]: https://man7.org/linux/man-pages/man1/ls.1.html
[3]: https://ufpr.dl.sourceforge.net/project/linuxcommand/TLCL/13.07/TLCL-13.07.pdf