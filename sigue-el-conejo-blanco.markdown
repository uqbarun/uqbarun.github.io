---
layout: empty
title: Sigue el conejo blanco
redirect: /
---
<span class="console-input" data-prompt="uqbar@col:~$ ">Despierta...</span> 
<span class="console-input" data-prompt="uqbar@col:~$ ">Sigue el conejo blanco. Toc, Toc.</span> 
<span class="console-input" data-prompt="uqbar@col:~$ ">¿Quieres ser hacker? (S/N)</span> 
<span class="console-input" data-prompt="uqbar@col:~$ "><input id="prompt-input" type="text" autofocus></span>  
<script>
    const input = document.getElementById('prompt-input');
    input.onchange = function(e) { 
        let valor = e.target.value.toLowerCase();       
        if (valor == "s" || valor == "si") {
            window.location.href = '{{page.redirect}}';
        }
    };
</script>