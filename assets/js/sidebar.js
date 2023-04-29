$(document).ready(function () {
	var speed = 100;
	$('.sidebar-menu > li.have-children > a').click(function(e){
	  e.preventDefault();
	  if ( ! $(this).parent().hasClass('active') ){
		$('.sidebar-menu li ul').slideUp(speed);
		$(this).next().slideToggle(speed);
		$('.sidebar-menu li').removeClass('active');
		$(this).parent().addClass('active');
	  } else {
		$(this).next().slideToggle(speed);
		$('.sidebar-menu li').removeClass('active');
	  }
	});
  });
  