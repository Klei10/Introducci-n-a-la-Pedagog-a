$(document).ready(function(){
    if( $(window).width() > 300 ){
		$('#header').css({
			opacity: 0,
			marginTop: 0
		});

		$('#header').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 2000);
	}
});