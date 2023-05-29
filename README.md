# Bienvenido a @UqbarUN GitHub Page

Puedes utilizar el [editor en GitHub](https://github.com/uqbarunal/uqbarunal.github.io/edit/main/README.md) para mantener y previsualizar el contenido de tu sitio web en archivos Markdown.

Cada vez que hagas un commit en este repositorio, GitHub Pages ejecutará [Jekyll](https://jekyllrb.com/) para reconstruir las páginas de tu sitio a partir del contenido en tus archivos Markdown.

## Git
> Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. 
https://es.wikipedia.org/wiki/Git


    Fork it (http://github.com/jekyll/jekyll-coffeescript/fork)
    Create your feature branch (git checkout -b my-new-feature)
    Commit your changes (git commit -am "Add some feature")
    Push to the branch (git push origin my-new-feature)
    Create new Pull Request


## Registro en la lista de miembros

### 1. Obtener repositorio
1.1. **Instalar git**: Instalamos *git*  [Mas info](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
```bash
sudo apt install git-all
git --version
```
1.2. **Clonar repositorio**:
```bash
git clone https://github.com/uqbarunal/uqbarunal.github.io
```

### 2. Cuenta Github 

2.1. **Registro**: Nos registramos con nuetro correo institucional. Podemos agregar nuestro correo a un cuenta preexistente en `Settings > Emails > Add email address` o [github.com/settings/email](https://github.com/settings/emails)

2.2. **Toekn de acceso**: Toda operación git con [Github ahora requiere tokens para la autenticación](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) con [exepción de la CLI de Github](https://cli.github.com/manual/gh_auth_login). Vamos a `Settings > Developer settings > Personal access tokens > Generate new toekn` o [github.com/settings/tokens](https://github.com/settings/tokens), generamos un token y lo guardamos en un lugar seguro en la nube.


### 3. Git

3.1. **Cachear o guardar credenciales**: Para recordar las credenciales por 15min podemos ejecutar `git config --global credential.helper cache` o si queremos mas tiempo como por ejemplo una hora `git config --global credential.helper "cache --timeout=3600"` o un día `git config --global credential.helper "cache --timeout=86400"`. Si queremos guardar las credenciales para siempre `git config --global credential.helper store` pero es tiene riesgos de seguridad (cita y ejemplo requerido).


**Stage** cambios de todo el repositorio
```bash
git add -A
```

**Commit** cambios de todo el repositorio
```bash
git commit -m "Mensaje del commit"
```

**Push** cambios al repositorio remoto
```bash
git push
```

## Github Pages
GitHub Pages es un servicio de alojamiento web proporcionado por GitHub que permite a los usuarios crear sitios web estáticos y publicarlos directamente desde sus repositorios de GitHub. 

Los repositorios pueden configurarse para que GitHub Pages tome el contenido y los archivos de **Jekyll**, y luego los convierta y muestre en línea como un sitio web accesible a través de una URL específica.

## Jekyll
Jekyll es un generador de sitios estáticos de código abierto escrito en Ruby. Permite crear sitios web sin la necesidad de un servidor dinámico, bases de datos o lenguajes de programación del lado del servidor. Jekyll toma archivos de contenido escritos en formatos como **Markdown** o HTML, junto con plantillas y diseños personalizables, y genera un sitio web estático listo para ser desplegado. 

### Jekyll local
```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
```

## Markdonwn
Markdown es un lenguaje de marcado ligero utilizado para formatear y estructurar el texto de manera sencilla. Con solo unas pocas reglas simples, Markdown permite crear documentos legibles y con estilo, que se pueden convertir fácilmente a HTML u otros formatos. Permite agregar encabezados, párrafos, listas, enlaces, imágenes y énfasis en el texto mediante caracteres especiales y símbolos. Su sintaxis intuitiva y minimalista lo hace popular entre los escritores, bloggers y desarrolladores, ya que les permite centrarse en el contenido sin preocuparse demasiado por el formato. Markdown es ampliamente utilizado en la documentación de software, blogs y plataformas de colaboración.

<https://www.markdownguide.org/basic-syntax/>

### Renderizadores markdown
un renderizador Markdown es una herramienta o biblioteca que se utiliza para visualizar o mostrar documentos Markdown en un formato legible por humanos, como HTML.

* Kramdown (Usado por Jekyll por defecto)
* Markdown-it (Usado por HackMD.io)

### Procesadores
Un procesador Markdown es una herramienta que toma un texto escrito en Markdown y lo convierte en un formato diferente, como HTML, PDF u otros formatos legibles por máquinas y humanos. 

* GitHub Flavored Markdown (GFM) processor 

### Compatibilidad HackME y Github Pages
Partiendo del hecho de que no podemos configurar HackMD.io para cambiar su renderizador deberíamos cambiar el repositorio Github Pages para que en vez de *Kramdown* use *Markdown-it* ¿cierto? Lamentablemente no se puede cambiar de manera sencilla el procesador que Github Pages por defecto usa. ¿Qué implicaciones tiene esto? Para generar la tabla de contenidos en HackMD.io se escribe `[TOC]` mientras que e Jekyll sería `{:toc}`. Esto y otras incompatibilidades son problemáticas si se trabaja el mismo archivo .MD desde las dos plataformas. Para solventar eso disponemos de las siguientes herramientas:

* Tabla de contenidos <https://ecotrust-canada.github.io/markdown-toc/>
* Carga de imágenes <https://imgur.com/upload>



## Matemática
[head-custom.html](/_includes/head-custom.html)
```html
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            {left: '$$', right: '$$', display: true},
            // {left: '$', right: '$', display: false},
            {left: '~~', right: '~~', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        // • rendering keys, e.g.:
        throwOnError : false
    });
});
```

# Imagen previa
En el campo `image` del front matter del post, se define la URL la imagen carga en <https://imgur.com/upload>
```md
---
title: Título
layout: post
image: "https://i.imgur.com/aXjc03E.png"
---
# Título
```
El tamaño ideal de la imagen sería de apróximadamente 900 x 190 px

# Autores

Los autores deben poner su información en el archivo de `_data/authors.yml`

