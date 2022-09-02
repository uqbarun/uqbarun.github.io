## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/uqbarunal/uqbarunal.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

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


## 3. Git

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

