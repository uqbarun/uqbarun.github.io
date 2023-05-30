$(document).ready(function () {
	var speed = 100;
	$('.sidebar-menu li.have-children > a').click(function (e) {
		console.log($(this).parent());

		e.preventDefault();
	
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
