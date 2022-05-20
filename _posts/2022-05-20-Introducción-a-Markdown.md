---
title: Introducció a Markdown
author: Fredy Rosero
tags: [tag1, tag2]
date: 2022-05-20'
layout: post
categories: [category]
excerpt_separator: <!--more-->
---
![thumbnail]()

Abstract.
 <!--more-->

## Framentos de código
Los fragmentos de código pueden ser insertados de dos maneras

### Fragmento de código en línea
Solo se necesita envolver el fragmento entre dos caracteres de acento grave <kbd>`</kbd>.

### Fragmento de código en bloque
Se debe envolver el bloque  en dos líneas (poner antes y despues) con 3 acentos graves consecutivas <kbd>`</kbd> o 3 tildes de la eñe  <kbd>~</kbd>. Para resaltar el formato de un lenguaje en particular, la primera línea debe ir seguida del nombre del lenguaje por ejemplo el bloque
<pre>
```javascript
var num;
console.log(num)
```
</pre>
se renderizará resaltado la sintáxis de javascript
```javascript
var num;
console.log(num)
```

