$(document).ready(function() {
	$('.cheatsheet-code').on("click", function(e) {		
		var range = document.createRange();
		range.selectNode(e.target);
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand("copy");
		window.getSelection().removeAllRanges();// to deselect	
	  });	
});