---
title: Cheat sheets
permalink: cheatsheets
---
# Cheat sheets
<div>
	{% for css in site.cheatsheets %}   
	<ul>
		<li><a href="{{css.url}}">{{css.title}}</a></li>
	</ul>	
	{% endfor %}
</div>