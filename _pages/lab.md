---
title: "Lab: CTFs, Máquinas y laboratorio"
permalink: /lab
---
# Lab: CTFs, Máquinas y laboratorios
<div>
	{% for lab in site.lab %}   
	<ul>
		<li><a href="{{lab.url}}">{{lab.title}}</a></li>
	</ul>	
	{% endfor %}
</div>