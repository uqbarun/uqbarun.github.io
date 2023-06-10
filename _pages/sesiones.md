---
title: Sesiones
permalink: sesiones
---

# Sesiones 2023-1

{% include sesiones.md %}

## Información de las sesiones
<div>
	{% for sesion in site.sesiones %}   
	<ul>
		<li><a href="{{sesion.url}}">{{sesion.date |  date: "%-d/%m/%Y" }} - {{sesion.title}}</a></li>
	</ul>	
	{% endfor %}
</div>