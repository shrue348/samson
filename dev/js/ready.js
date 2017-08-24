'use strict';

$(function(){
	baguetteBox.run('.baguetteBox');

	$('.slick_where').slick({ // слайдер где купить
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
				breakpoint: 768,
				settings: {
				    slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
				    slidesToShow: 2
			 	}
			},
			{
				breakpoint: 340,
				settings: {
				    slidesToShow: 1
			 	}
			}
		]
	})

	$('.slick_main_catitems').slick({ // товары на главной
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
				breakpoint: 768,
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

	$('.main_slider').slick({  // главный слайдер
		prevArrow: '<button type="button" class="main_slider__prev"><i class="icon-angle-left"></i></button>',
		nextArrow: '<button type="button" class="main_slider__next"><i class="icon-angle-right"></i></button>',
		draggable: true
	});
});



$(function(){ // toggle mobile_menu
	$('.mobile_menu_toggle').on('click', function(){
		$('.mobile_menu').toggleClass('active');
	});

	$('.mobile_menu_wrap + .overlay').on('click', function(){
		$('.mobile_menu').removeClass('active');
	})

	window.onscroll = function(){
		$('.mobile_menu').removeClass('active')
	};
})

$(function(){ // стилизованные селекты
	// var select = new SelectBox({
	// 	selectbox: $("select"),
	// 	height: 150,
	// 	width: "100%",
	// 	changeCallback: function(val) {}
	// });

	$('select').each(function(){
		var select = new SelectBox({
			selectbox: $(this),
			height: 150,
			width: "100%",
			changeCallback: function(val) {}
		});
	})
})
	
$(function(){
	$('.where_map_find_list').jScrollPane();
});

$(function(){
	$('[name=contacts_form_phone]').mask("+7(999) 999 99 99");
})


$(function() { // стилизованные инпут-файл
	$('input[type=file]').each(function() {
		var $input = $(this),
			$label = $input.next('.js-labelFile'),
			labelVal = $label.html();

		$input.hide();
		$input.on('change', function(element) {
			var fileName = '';
			if (element.target.value) fileName = element.target.value.split('\\').pop();
			fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
		});
	});
});



















			