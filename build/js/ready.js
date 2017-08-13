'use strict';

$(function(){
	baguetteBox.run('.baguetteBox');

	$('.slick_where').slick({
		slidesToShow: 6,
		prevArrow: '<button type="button" class="slick_where__prev"><i class="icon-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick_where__next"><i class="icon-angle-right"></i></button>',
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				    slidesToShow: 5
				}
			},
			{
				breakpoint: 600,
				settings: {
				    slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
				    slidesToShow: 2
			 	}
			}
		]
	})

	$('.slick_main_catitems').slick({
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick_where__prev"><i class="icon-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick_where__next"><i class="icon-angle-right"></i></button>',
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				    slidesToShow: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
				    slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				    slidesToShow: 1
			 	}
			}
		]
	})
});

// $(function(){
// 	var obj = $('.apartaments_back'),
// 		img1_offset = obj.offset().top,
// 		scrolltop;

// 	$(window).scroll(function(e){
// 		scrolltop = $(window).scrollTop();
// 		obj.css({'transform': 'translate3d(0, '+(-img1_offset + scrolltop)/6.5+'px, 0)'});
// 	});
// });