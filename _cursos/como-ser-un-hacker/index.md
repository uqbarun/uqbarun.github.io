---
title: Como ser un hacker
layout: curso_index
---

# Como ser un hacker
{% for curso in site.cursos %}   
<ul>
	{% if curso.path contains '_cursos/como-ser-un-hacker' %}
	<li><a href="{{curso.url}}">{{curso.title}}</a></li>
	{% endif %}	
</ul>	
{% endfor %}