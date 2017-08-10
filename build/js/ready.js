'use strict';

$(function(){
	$('.partners__list').slick({
		dots: true,
		slidesToShow: 6,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 380,
		      settings: {
		        arrows: true,
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		]
	});


	baguetteBox.run('.baguetteBox');
});