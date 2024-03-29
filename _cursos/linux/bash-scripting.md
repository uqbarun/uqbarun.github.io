---
title: bash scripting
chapter: 6
---

# bash scripting

## Shebang

Shebang, también conocido como hashbang, es el nombre que se le da a la secuencia de caracteres al comienzo de un archivo de texto en Unix y sistemas operativos relacionados, como Linux. El propósito principal del shebang es indicar al sistema operativo qué intérprete de comandos debe ser utilizado para ejecutar el script o programa contenido en ese archivo.

La sintaxis básica de un shebang es la siguiente:

```shell
#! /ruta/al/interprete
```

El carácter "#" representa el inicio de un comentario en muchos lenguajes de programación y también en los scripts de Unix. Cuando el sistema operativo encuentra el shebang en un archivo, interpreta el resto de la línea como una ruta al intérprete que se utilizará para ejecutar ese archivo.

Por ejemplo, si se tiene un script en Python llamado "mi_script.py" y se desea ejecutarlo directamente desde la línea de comandos en Unix, se puede incluir el siguiente shebang en la primera línea del archivo:

```python
#! /usr/bin/env python
```

Cuando se intenta ejecutar el archivo directamente, el sistema operativo lee el shebang y utiliza el intérprete de Python especificado en la ruta ("/usr/bin/env python") para ejecutar el script.

El uso de shebangs es común en scripts y programas escritos en lenguajes de scripting como Python, Perl, Bash, entre otros. Proporciona una forma conveniente de indicar qué intérprete debe utilizarse sin tener que especificarlo explícitamente en cada llamada de ejecución del script.