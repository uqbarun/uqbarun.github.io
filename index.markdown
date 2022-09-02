---
layout: default
title: inicio
---
<span class="console-input" data-prompt="uqbar@col:~$ ">ls -al /categories</span>   
<ul class="categories-list">
{% for category in site.categories %}
    <li>
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <a name="{{ category_name | slugize }}" href="/category/{{ category_name }}">{{ category_name }}</a>
    </li>
{% endfor %}
</ul>
<span class="console-input" data-prompt="uqbar@col:~$ ">ls -al /posts</span>   
<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">[{{ post.categories | join: ", "}}] {{ post.title }}</a></h1>
      <img src="{{ post.image }}">
      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.
