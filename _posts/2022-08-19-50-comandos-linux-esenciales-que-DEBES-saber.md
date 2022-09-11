---
title: 50 comandos linux esenciales que DEBES saber
author: FredyRosero
tags: [linux, fundamentos]
date: 2022-08-19
layout: post
categories: [fundamentos]
---
50 comandos linux esenciales que DEBES saber para desenvolverte como pez en el agua.
<!--more-->

1. Limpiar terminal: 
    ```bash
    clear
    ```
2. Listar descriptivamente un directorio incluyendo archivos ocutlos:
    ```bash
    ls -la ó ll
    ```
3. Buscar un archivo en el directorio actual que contenga la palabra 'uqbar' en el nombre: 
    ```bash
    find . -name '*uqbar*'
    ```
4. Copiar un archivo: 
    ```bash
    cp [ruta origen] [ruta destino]
    ```
5. Mover un archivo: 
    ```bash
    mv [ruta origen] [ruta destino]
    ```
6. Eliminar archivo:
    ```bash
    rm [ruta]
    ```
7. Crear una instancia de la shell bash:
    ```bash
    bash
    ```
8.  Finalizar la sesión de la shell instanciada:
    ```bash
    exit
    ```
9. Lanzar un programa en primer plano en la sesión de la shell instanciada: 
    ```bash
    [comando]
    ```
10. Finalizar proceso (o programa en ejecución) en primer plano de la sesión de la shell instanciada:  
    <kbd>Ctrl</kbd> + <kbd>C</kbd>

11. Lanzar programa en segundo plano en la sesión de la shell instanciada: 
    ```bash
    [comando] &
    ```
12. Mostrar procesos (o programas en ejecución) parados en la sesión de la shell instanciada: 
    ```bash
    jobs
    ```
13. Parar proceso en primer plano en la sesión de la shell instanciada: 
    <kbd>Ctrl</kbd> + <kbd>Z</kbd>

14. Poner en primer plano un proceso parado en la sesión de la shell instanciada: 
    ```bash
    fg %n, donde n es el ID en jobs.
    ```
15. Poner un proceso parado en segundo plano en la sesión de la shell instanciada, donde n es el ID en jobs
    ```bash
    bg %n
    ```
16. Desenlazar un proceso parado de la sesión de la shell instanciada, donde n es el ID en jobs.
    ```bash
    isown -h %n
    ```
17. Lanzar un programa en segundo plano y que este ignore la finalización de la sesión de la shell instanciada (no hang up)
    ```bash
    nohup [comando] &
    ```
18. Conectar la el STDOUT de un programa al STDIN de otro programa: 
    ```bash
    [comando1] | [comando2]
    ```
19. Redirigir el STDOUT de un programa a un archivo a el STDOUT: 
    ```bash
    [comando] | tee archivo.txt
    ```
20. Redirigir STDOUT de un programa a un archivo: 
    ```bash
    [comando] >archivo.txt
    ```
21. Redirigir el file descriptor 1 (STDOUT) de un programa a un archivo (equivalente al comando anterior): 
    ```bash
    [comando] 1>archivo.txt
    ```
22. Redirigir el file descriptor 2 (STDERR) de un programa a un archivo: 
    ```bash
    [comando] 2>archivo.txt 
    ```
23. Redirigir tanto el file descriptor 1 (STDOUT) como el file descriptor 2 (STDERR) de un programa a un archivo: 
    ```bash
    [comando] &>archivo.txt ó [comando] >&archivo.txt
    ```
24. Redirigir el file descriptor 2 (STDERR) al file descriptor 1 (STDOUT) en un programa: 
    ```bash
    [comando] 2>&1
    ```
25. Redirigir STDOUT de un programa al final un archivo: 
    ```bash
    [comando] >> archivo.txt
    ```
26. Redirigir un archivo al STDIN programa: 
    ```bash
    [comando] < archivo.txt
    ```
27. Al lanzar un programa, redirigir un archivo al STDIN y redirigir el STDOUT/STDERR a otro archivo: 
    ```bash
    [comando] <entrada.txt &>salida.txt
    ```
28. Lanzar un programa desenlazado completamente de la sesión de la shell instanciada (Equivalente al comando anterior pero con el dispositivo nulo como entrada y salida): 
    ```bash
    [comando] </dev/null &>/dev/null &
    ```
29. Redirigir la STDOUT de un programa a la STDIN de otro programa: 
    ```bash
    [comando1] | [comando2]
    ```
30. Mostrar las primeras N lineas de la STDOUT de un programa: 
    ```bash
    [comando] | head -n %N
    ```
31. Mostrar las ultimas N líneas de la STDOUT de un programa: 
    ```bash
    [comando] | tail -n %N
    ```
32. Cambiar a 3ra TTY: 
    <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F3</kbd>

33. Mostrar resumen procesos en ejecución: top ó htop
    ```bash
    top
    ```
34. Terminar proceso agraciadamente: 
    ```bash
    kill pid o pkill [nombre proceso] 
    ```
35. Terminar proceso forzadamente: 
    ```bash
    kill -9 pid
    ```
36. Mostrar todos los servicios activos (systemd): 
    ```bash
    systemctl list-units --state=active
    ```
37. Reiniciar un servicio (systemd): 
    ```bash
    systemctl restart [servicio]
    ```
38. Reiniciar entorno de escritorio GNOME shell #Ubuntu: 
    <kbd>Alt</kbd> + <kbd>F2</kbd> + <kbd>r</kbd> + <kbd>enter</kbd>

39. Reiniciar GNOME Display Manager #Ubuntu:
    ```bash
    sudo service gdm3 restart
    ```
40. Ejecutar comando en bucle y con delay de 1sg: 
    ```bash
    for i in {1..5}; do echo "hola, N° $i"; sleep 1; done
    ```
41. 
