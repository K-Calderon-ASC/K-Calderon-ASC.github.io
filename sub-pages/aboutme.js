$(document)
	.ready(function(){
	$("#aboutme").hide(0)
	$('#para').hide(0)
	$("#aboutmelistblock").hide(0)
	$("#namehomelist").hide(0)
	$("#aboutme")
		.delay(500)
		.fadeIn(2000)
	$("#para")
		.delay(2500)
		.fadeIn(500);
	$("#aboutmelistblock")
		.delay(3000)
		.fadeIn(1000);
	$("#namehomelist")
		.delay(4000)
		.fadeIn(500);
})
