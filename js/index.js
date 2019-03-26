$(document).ready(function(){

	$('.b-1 select option').each(function(){
		var src = $(this).attr('data-fon');
		$('.no-visible-block').append('<img src="'+src+'">');
	});

	$('.b-1 select').change(function(){
		var src = $(this).find('option:selected').attr('data-fon');
		$('.b-1').css({'background-image':'url("'+src+'")'});
	});

});