---
title: "Lab: CTFs, Máquinas y laboratorio"
permalink: /labs
---
# Lab: CTFs, Máquinas y laboratorios
<div>
	{% for lab in site.labs %}   
	<ul>
		<li><a href="{{lab.url}}">{{lab.title}}</a></li>
	</ul>	
	{% endfor %}
</div>