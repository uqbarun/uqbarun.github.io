---
title: Cursos
permalink: /cursos
---
# Cursos
<div>

{% assign cursos = site.cursos | sort: 'chapter'  %}

{% for curso in site.cursos %}   
<ul>
	{% assign depth = curso.url | split: '/' | size | minus: 1%}	
	{% if curso.path contains 'index.md' and depth == 3%}
	<li><a href="{{curso.url}}">{{curso.title}}</a></li>
	{% endif %}	
</ul>	
{% endfor %}


</div>

