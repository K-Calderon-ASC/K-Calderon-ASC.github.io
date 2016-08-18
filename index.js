$(document).ready(function(){
	$("#welcomespan").hide(0)
	$(".picsforhome").hide(0)
	$("#welcomespan")
		.delay(500)
		.fadeIn(2000)
		.animate({top:"1%"},2000)
	$(".picsforhome")
		.delay(4500)
		.fadeIn(2000);
});

$("#projects").click(function(){
	$("#projects").animate({top:"40%"},1000)
})