$(document).ready(function(){
	$("#welcome").hide(0)
	$(".picsforhome").hide(0)
	$("#link").hide(0)
	$("#welcome")
		.delay(500)
		.fadeIn(2000)
		.animate({top:"0"},2000)
	$(".picsforhome")
		.delay(4500)
		.fadeIn(2000);
});

$("#projects").click(function(){
	$("#link").hide(0)
	$(".picsforhome").animate({top:"60%"},1000)
	$("#projects").animate({top:"25%"},1000)
	$("#link")
		.delay(1500)
		.attr("href","sub-pages/projects.html")
		.html("PROJECTS")
		.css("left", "30%")
		.fadeIn(1000);
})

$("#aboutme").click(function(){
	$("#link").hide(0)
	$(".picsforhome").animate({top:"60%"},1000)
	$("#aboutme").animate({top:"25%"},1000)
	$("#link")
		.delay(1500)
		.attr("href","sub-pages/aboutme.html")
		.html("ABOUT ME")
		.css("left", "50%")
		.fadeIn(1000);
})

$("#otherstuff").click(function(){
	$("#link").hide(0)
	$(".picsforhome").animate({top:"60%"},1000)
	$("#otherstuff").animate({top:"25%"},1000)
	$("#link")
		.delay(1500)
		.attr("href","sub-pages/otherstuff.html")
		.html("OTHER STUFF")
		.css("left", "5%")
		.fadeIn(1000);
})

$("#sayhi").click(function(){
	$("#link").hide(0)
	$(".picsforhome").animate({top:"60%"},1000)
	$("#sayhi").animate({top:"25%"},1000)
	$("#link")
		.delay(1500)
		.attr("href","sub-pages/sayhi.html")
		.html("SAY HI")
		.css("left", "40%")
		.fadeIn(1000);
})