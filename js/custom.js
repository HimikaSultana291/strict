(function($){
	'use strict';
// Code Start

	$('.menu-icon i').on( 'click',function(){
		$('.strict-menu').slideToggle();

	} );


	$(window).resize(function(){
		var screenSize=$(window).width();
		if(screenSize>768){
			$('.strict-menu').removeAttr('style');
		}
	});

	//scroll method
	$(window).scroll(function(){
		var distance =$(window).scrollTop();
		if(distance > 800 ){
			$('.arrow-top').fadeIn();
		}
		else{
			$('.arrow-top').fadeOut();
		}

	});

	$('.arrow-top').on('click', function(){
		$('html').animate({'scrollTop' : 0},2000);

	});

})(jQuery);