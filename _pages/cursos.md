---
title: Cursos
permalink: /cursos
---
# Cursos
<div>

{% for curso in site.cursos %}   
<ul>
	{% if curso.path contains 'index.md' %}
	<li><a href="{{curso.url}}">{{curso.title}}</a></li>
	{% endif %}	
</ul>	
{% endfor %}


</div>

