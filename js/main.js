(function ($) {
"use strict";
	$(window).on('load',function() {
		$('.loader').delay(150).fadeOut('slow');
		$('body').delay(150).css({'overflow':'visible'})
	})

	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="fa fa-chevron-up"></i>',
	});

})(jQuery);	
