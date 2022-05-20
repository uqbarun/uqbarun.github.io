---
title: Jekyll para Github Pages
author: Fredy Rosero
tags: [jekyll, GitHub, GitHub-pages]
date: 2022-05-12'
layout: post
categories: [jekyll]
excerpt_separator: <!--more-->
---
![github pages + jekyll](/assets/github%20pages%20%2B%20jekyll.jpg)

Abstract.
 <!--more-->

## Instación de Ruby con RBEnv

### Paso 1: Dependencias
```bash
sudo apt update
sudo apt install git curl autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
```
### Paso 2: RBEnv
```bash
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
```

Agregamos `$HOME/.rbenv/bin` a la variable de entorno **PATH**. Para *bash* es:

```bash
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
```

Verfificamos con 
```bash
rbenv -v
```

### Paso 3: Ruby 2.7
> Github-Pages uses Jekyll 3.9, which isn’t compatible with Ruby 3. Downgrading to Ruby 2.7 should avoid the problem.

https://talk.jekyllrb.com/t/error-no-implicit-conversion-of-hash-into-integer/5890/2

Verificamos la versión cercana a `2.7` con `rbenv install -l`
```bash
rbenv install 2.7.6
```

Definimos la versión local de Ruby con la opción [`local`](https://github.com/rbenv/rbenv#rbenv-local)
```bash
rbenv local 2.7.6
```

Comprobamos con 
```bash
ruby -v
```
## Posts

https://jekyllrb.com/docs/posts/

### Drafts
```bash
jekyll serve --drafts
```

## Front Matter

https://jekyllrb.com/docs/front-matter/