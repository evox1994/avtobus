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
		var v = true;
		var next = $(this).attr('href');
		var el = this;

		$(this).parents('.step').find('input').each(function(){
			if ( !$(this).hasClass('no-val') ){
				if ( !$(this).val().length ){
					v = false;
					$(this).addClass('error');
				}
			}
		});
		$(this).parents('.step').find('textarea').each(function(){
			if ( !$(this).val().length ){
				v = false;
				$(this).addClass('error');
			}
		});

		if (v){
			$(this).parents('.form-wrap').find('.step').animate({'opacity':0},300);
			$(this).parents('.form-wrap').find('.name').animate({'opacity':0},300);
			setTimeout(function(){
				$(el).parents('.form-wrap').find('.step').removeClass('active');
				$(el).parents('.form-wrap').find('.name').removeClass('active');
				$(el).parents('.form-wrap').find(next).addClass('active');
				$(el).parents('.form-wrap').find('.step').animate({'opacity':1},300);
				$(el).parents('.form-wrap').find('.name').animate({'opacity':1},300);
			},300);
		}
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
	$('.input-date').datepicker({
		closeText: 'Закрыть',
		firstDay: 1,
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
		dayNamesShort: ['Вск','Пнд','Втр','Срд','Чтв','Птн','Сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		minDate: new Date(),
		dateFormat: 'dd-mm-yy'
	});
	//инициализация календаря с выбором опред. дат
	$('.input-date-const').datepicker({
		closeText: 'Закрыть',
		firstDay: 1,
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
		dayNamesShort: ['Вск','Пнд','Втр','Срд','Чтв','Птн','Сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		minDate: new Date(),
		maxDate: '+5m',
		dateFormat: 'dd-mm-yy',
		beforeShowDay: enableAllTheseDays
	});

	var arrDates = ['30-4-2019','15-5-2019','25-6-2019','5-7-2019','10-8-2019']; //массив дат для выбора

	function enableAllTheseDays(date) {
		var cd = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
		if ( $.inArray(cd, arrDates) != -1 ) {
			return [true];
		} else {
			return [false];
		}
	}

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

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.button-text .radio-btn').hasClass('active') ) {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).parents('form').find('.button-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

	$('body').on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 100;

		$('body,html').animate({scrollTop: des},800);
		return false;
	});

});