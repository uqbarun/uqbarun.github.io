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
    {% assign h1_open_start = post.excerpt | split: '<h1' %}       
    {% assign h1_open_end = h1_open_start[1] | split: '>' %}
    {% assign h1_content_array = h1_open_end[1]| split: '</h1' %}
    {% assign titulo = h1_content_array[0] %}  

    {% assign img_open_start = post.excerpt | split: '<img src="' %}       
    {% assign img_open_end = img_open_start[1] | split: '"' %}    
    {% assign img = img_open_end[0] %}      
    
    {% assign excerpt_start = post.excerpt | split: '</h1>' %}     
    {% assign excerpt_end = excerpt_start[1] | split: '<!--more-->' %}     
    {% assign excerpt = excerpt_end[0] | markdownify | strip_html | truncatewords: 30 %}     


    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ titulo }}</a></h1>                     
      {% include tag_cards.html tags=post.tags%}      
      <div class="entry">     
        <img src="{{ img }}">   
        {{ excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
<br>
<!-- CC3.0 -->
<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.
