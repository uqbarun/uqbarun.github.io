---
title: "Lab: CTFs, Máquinas y laboratorio"
permalink: /labs
---
# Lab: CTFs, Máquinas y laboratorios
<div>


{% assign labs = site.labs | sort: 'chapter'  %}

{% for lab in site.labs %}   
<ul>
	{% assign depth = lab.url | split: '/' | size | minus: 1%}	
	{% if lab.path contains 'index.md' and depth == 3%}
	<li><a href="{{lab.url}}">{{lab.title}}</a></li>
	{% endif %}	
</ul>	
{% endfor %}

</div>