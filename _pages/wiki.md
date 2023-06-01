---
title: Cheat sheets
permalink: /wiki
sidebar: wiki_sidebar
---
# Wiki
<div>
	{% for wiki in site.wiki %}   
	<ul>
		<li><a href="{{wiki.url}}">{{wiki.title}}</a></li>
	</ul>	
	{% endfor %}
</div>