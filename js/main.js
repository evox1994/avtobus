$(document).ready(function(){

	function Selects() {
		$('.select-wrap').each(function(){
			var text = $(this).find('select option:selected').text();
			$(this).find('select option').each(function(){
				$(this).parents('.select-wrap').find('.select-drop').append('<a href=".'+$(this).attr('class')+'">'+$(this).text()+'</a>');
			});
			//$(this).find('.select-area span').text(text);
		});
	}
	Selects();

	$('.select-area').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.select-drop').removeClass('active');
		} else {
			$('.select-area').removeClass('active');
			$('.select-drop').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.select-drop').addClass('active');
		}
	});
	$('body').on('click','.select-drop a',function(){
		var text = $(this).text();
		var opt = $(this).attr('href');

		$(this).parents('.select-wrap').find('.select-area span').text(text);
		$(this).parents('.select-wrap').find(opt).prop('selected','true').change();
		$(this).parents('.select-wrap').find('.select-drop').removeClass('active');
		$(this).parents('.select-wrap').find('.select-area').removeClass('active');
		return false;
	});
	$('body').on('click',function(e){
		var container = $('.select-wrap');
		if (container.has(e.target).length === 0) {
			$('.select-drop').removeClass('active');
			$('.select-area').removeClass('active');
		}
	});

	$('body').on('click','.form-next-btn',function(){
		var next = $(this).attr('href');
		var el = this;

		$(this).parents('.form-wrap').find('.step').animate({'opacity':0},300);
		$(this).parents('.form-wrap').find('.name').animate({'opacity':0},300);
		setTimeout(function(){
			$(el).parents('.form-wrap').find('.step').removeClass('active');
			$(el).parents('.form-wrap').find('.name').removeClass('active');
			$(el).parents('.form-wrap').find(next).addClass('active');
			$(el).parents('.form-wrap').find('.step').animate({'opacity':1},300);
			$(el).parents('.form-wrap').find('.name').animate({'opacity':1},300);
		},300);
		return false;
	});

	$('body').on('click','.form-wrap .less',function(){
		var sum = Number( $(this).parents('.step').find('.summa span b').text() );
		var col = Number( $(this).parents('.col').find('p').text() );
		var price = Number( $(this).parents('.order-item').find('.price span').text() );

		if ( col > 0 ){
			sum = sum - price;
			col--;
			$(this).parents('.col').find('p').text(col);
			$(this).parents('.form-wrap').find('.summa span b').text(sum);
		}
	});

	$('body').on('click','.form-wrap .more',function(){
		var sum = Number( $(this).parents('.step').find('.summa span b').text() );
		var col = Number( $(this).parents('.col').find('p').text() );
		var price = Number( $(this).parents('.order-item').find('.price span').text() );
		
		sum = sum + price;
		col++;
		$(this).parents('.col').find('p').text(col);
		$(this).parents('.form-wrap').find('.summa span b').text(sum);
	});

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox').fancybox({loop: true});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');
	var d = new Date();
	$('.input-date').datepicker({
		minDate: d
	});

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('body').on('click','.qwestion',function(){
		$(this).parents('li').toggleClass('active');
	});

	$('body').on('click','.switch',function(){
		$(this).parents('.order-top').find('.order-top-1').toggleClass('active');
		$(this).parents('.order-top').find('.order-top-3').toggleClass('active');
	});

	$('body').on('click','.radio-items .item',function(){
		var el = $(this).attr('href');

		$(this).parents('.forms').find('form').removeClass('active');
		$(this).parents('.forms').find(el).addClass('active');
		$(this).parents('.radio-items').find('.item').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$('body').on('click','.orders .less',function(){
		var col = Number( $(this).parents('.col').find('p').text() );
		var price = Number( $(this).parents('.order-item').find('.price span').text() );

		if ( col > 0 ){
			//sum = sum - price;
			col--;
			$(this).parents('.col').find('p').text(col);
		}
	});

	$('body').on('click','.orders .more',function(){
		var col = Number( $(this).parents('.col').find('p').text() );
		var price = Number( $(this).parents('.order-item').find('.price span').text() );
		
		//sum = sum + price;
		col++;
		$(this).parents('.col').find('p').text(col);
	});

});