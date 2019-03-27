$(document).ready(function(){

	$('.b-2-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

});