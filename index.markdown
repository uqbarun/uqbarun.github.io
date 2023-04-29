---
layout: default
title: inicio
topnav: topnav
---
<!-- Etiquetas -->
<span class="console-input" data-prompt="uqbar@col:~$ ">ls -al /tags</span>   
{% for tag in site.tags %}
{% assign t = tag[0] %}
{% include tag_cards.html tags=t %}
{% endfor %}
<br><br>
<!-- Publicaciones -->
<span class="console-input" data-prompt="uqbar@col:~$ ">ls -al /posts</span>   
<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">[{{ post.categories | join: ", "}}] {{ post.title }}</a></h1>            
      <img src="{{ post.image }}">
      {% include tag_cards.html tags=post.tags%}      
      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
<br>
<!-- CC3.0 -->
<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.
