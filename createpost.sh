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
author: 
- UqbarUN
date: ${date}
layout: post
categories: [category]
tags: [tag1, tag2]
excerpt_separator: <!--more-->
---
Abstract: poner un resumen de pocas lineas acá.
<!--more-->

## Section 1
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