$(document).ready(function() {
	$(".tg-sb-link").on('click',function(e) {
		e.preventDefault();
		$("#tg-sb-sidebar").toggle();
		$("#tg-sb-content").toggleClass('col-md-9');
		$("#tg-sb-content").toggleClass('col-md-12');
		$(".tg-sb-icon").toggleClass('fa-toggle-on');
		$(".tg-sb-icon").toggleClass('fa-toggle-off');
	});
});