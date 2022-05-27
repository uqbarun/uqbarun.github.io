#!/bin/bash
NamePost() {
    title="$@"
    date=$(date +%F)
    FILENAME="${date}-${title// /-}.md"
    echo $FILENAME
}

Create() {
    title="$1"
    author="$GIT_USER"
    date=$(date +%F)
    FILENAME="$2"
    BODY="---
title: ${title}
author: ${author}
tags: [tag1, tag2]
date: ${date}
layout: post
categories: [category]
excerpt_separator: <!--more-->
---

![thumbnail del post](assets/default-banner.jpg)

Abstract: poner un resumen de pocas lineas acá.
<!--more-->

## Section 1
Recuerda definir la variable \`GIT_USER\` en el perfil de tu shell
\`\`\`bash
echo export GIT_USER=MyGithubUser >> ~/.bashrc
source ~/.bash_profile
\`\`\`

o de manera temporal
\`\`\`bash
GIT_USER=MyGithubUser
echo \$GIT_USER
\`\`\`

### Subsection 1.1
Body of Section 1.1   

## Section 2
Cuerpo de la sección 2 $\mathrm{e} = \sum_{n=0}^{\infty} \dfrac{1}{n!}$ con ecuación en línea.
A continuación un bloque de ecuaciones alineadas:
\$$
\begin{align}
Then,\ (x+z)+t & = x+(z+t)\ (\because Rule2) \\\\
& = x+0_V \\\\
& = x\ (\because Rule3) \\\\
\end{align}
\$$

## Sección 3
A continuación un diagrama renderizado de Github. 

https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/
\`\`\`mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice-\>>John: Hello John, how are you\?
    loop Healthcheck
        John-\>>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail\!
    John--\>>Alice: Great\!
    John-\>>Bob: How about you\?
    Bob--\>>John: Jolly good\!
\`\`\`
"

    if [ "$3" -eq 0 ]
    then 
        PATHFILE="./_posts/${FILENAME}"
    else 
        PATHFILE="./_drafts/${FILENAME}"
    fi
    echo "$BODY" > $PATHFILE
}

while getopts "p:d:h" option; do
    case $option in  
    h) 
        echo "usage:"
        echo -e "\tcrear post:\t$(basename $0) -p [post's tittle]"
        echo -e "\tcrear borrador:\t$(basename $0) -d [post's tittle]"
        echo "Recuerda definir la variable entorno GIT_USER en tu shell"
        exit 1;;    
    p)
        FILENAME=$(NamePost "$OPTARG")
        echo "Creando post /_posts/$FILENAME"
        Create "$OPTARG" "$FILENAME" 0
        exit 1;;    
    d)
        FILENAME=$(NamePost "$OPTARG")
        echo "Creando borrador /_drafts/$FILENAME"
        Create "$OPTARG" "$FILENAME" 1
        exit 1;;    
    \?) # Invalid option
        echo "Error: Opción inválida. Uiliza $(basename $0) -h"
        exit 64;;        
    esac
done
echo "Error: Opción inválida. Uiliza $(basename $0) -h"
exit 64