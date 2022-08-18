document.addEventListener('DOMContentLoaded', function() {
    // Get code html tag from Mermaid
    const codeMermaid = document.querySelector("code.language-mermaid");
    const elParent = codeMermaid.parentNode;
    const codeText = codeMermaid.innerHTML;
    // Create div compatible with Mermaid.js
    var divMermaid = document.createElement("div");
    divMermaid.classList.add("mermaid");
    divMermaid.innerHTML = codeText;
    // Replace code with div
    elParent.replaceChild(divMermaid,codeMermaid);
}, false);