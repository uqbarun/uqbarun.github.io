$(document).ready(function () {	
	var speed = 100;
	// Check if $('.sidebar-menu li a') has siblings and add class "has-childs"
	$('.sidebar-menu li a').each(function () {
		if ($(this).next().length) {
			$(this).parent().addClass('have-children');
		}
	});

	$('.sidebar-menu li a').on('click',function (e) {
		
		var sibblings = $(this).next().length;
		if (sibblings) { 
			e.preventDefault();
		}

		if (!$(this).parent().hasClass('active')) {

			if (!$(this).parent().hasClass('subfolders')) {
				$('.sidebar-menu li ul').slideUp(speed);		
				$('.sidebar-menu li').removeClass('active');					
			} 

			$(this).next().slideToggle(speed); //El siguiente de <a> es el <ul>			
			$(this).parent().addClass('active');

		} else {

			$(this).next().slideToggle(speed);
			if (!$(this).parent().hasClass('subfolders')) 
				$('.sidebar-menu li').removeClass('active');
			else 
				$(this).parent().removeClass('active');
		}
	});
});
