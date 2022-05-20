
## Git
> Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. 
https://es.wikipedia.org/wiki/Git

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

### 1. Cuenta Github 

1.1. **Registro**: Nos registramos con nuetro correo institucional. Podemos agregar nuestro correo a un cuenta preexistente en `Settings > Emails > Add email address` o [github.com/settings/email](https://github.com/settings/emails)

1.2. **Toekn de acceso**: Toda operación git con [Github ahora requiere tokens para la autenticación](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) con [exepción de la CLI de Github](https://cli.github.com/manual/gh_auth_login). Vamos a `Settings > Developer settings > Personal access tokens > Generate new toekn` o [github.com/settings/tokens](https://github.com/settings/tokens), generamos un token y lo guardamos en un lugar seguro en la nube.



## 2. Git

1. **Cachear o guardar credenciales**: Para recordar las credenciales por 15min podemos ejecutar `git config --global credential.helper cache` o si queremos mas tiempo como por ejemplo una hora `git config --global credential.helper "cache --timeout=3600"` o un día `git config --global credential.helper "cache --timeout=86400"`. Si queremos guardar las credenciales para siempre `git config --global credential.helper store` pero es tiene riesgos de seguridad (cita y ejemplo requerido).


*Stage* cambios de todo el repositorio
```bash
git add -A
```

*Commit* cambios de todo el repositorio
```bash
git commit -m "Mensaje del commit"
```

*Push* cambios al repositorio remoto
```bash
git push
```

## Ruby

rbenv local 2.7.6
ruby -v



## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/uqbarunal/uqbarunal.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/uqbarunal/uqbarunal.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
