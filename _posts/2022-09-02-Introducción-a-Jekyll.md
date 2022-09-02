---
title: Introducción a Jekyll
author: 
tags: [tag1, tag2]
date: 2022-05-20'
layout: post
categories: [jekyll]
excerpt_separator: <!--more-->
---

![thumbnail del post](assets/default-banner.jpg)

Abstract: poner un resumen de pocas lineas acá.
<!--more-->

## Citas
Cita con Jekyll
```markdown
{%raw%}{% quote ruby %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.

Lorem ipsum dolor sit amet, consectetur adipisicing.
{% endquote %}{%endraw%}
```

{% quote ruby %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.

Lorem ipsum dolor sit amet, consectetur adipisicing.
{% endquote %}

Cita con markdown
```markdown
> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.
>
> Lorem ipsum dolor sit amet, consectetur adipisicing. {%raw %}{% cite ruby %}{% endraw %}.
```
> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.
>
> Lorem ipsum dolor sit amet, consectetur adipisicing. {% cite ruby %}.