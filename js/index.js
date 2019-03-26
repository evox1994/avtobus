$(document).ready(function(){

	$('.b-1 select').change(function(){
		var src = $(this).find('option:selected').attr('data-fon');
		$('.b-1').css({'background-image':'url("'+src+'")'});
	});

});