
portfolioImage = ["hands9.JPG","egypt10.jpg","mandala10.jpg","utensils10.jpg","digital1.jpg"];
portfolioTitle = ["You Gon' Catch Some Hands", "Blended Mandala", "Depths of Hell","Utensil","Boxes"];
portfolioDescription = ["I made this in ninth grade, back when I thought I was good (my grades unfortuneately did not reflect this). This was basically the highlight of all my art from that time, as I kinda sucked back in ninth grade.","I apologize again for photo quality) I had a bit mroe experience under my belt. It's a mandala that had a very intricate pattern that was very 'interesting' to work with. At this point I learned the value of actually belnding my values","Although I'm not that good at anything other than pencil and paper, the acrylic project was a very interesting challenge","By far one of my better projects. I took a lot of time to focus on the little details, which came out very well for me.","I actually made this on the subway witht the Notes App on my phone (god bless IOS 9)"];
var i=0;
var numberOfArt = portfolioImage.length - 1;
$(document)
	.ready(function(){
	$("#otherstuff").hide(0)
	$('#main').hide(0)
	$("#menulist").hide(0)
	$("#otherstuff")
		.delay(500)
		.fadeIn(2000)
	$("#main")
		.delay(2500)
		.fadeIn(500);
	$("#menulist")
		.delay(4000)
		.fadeIn(500)
	$("#left").click( function(){
		$(".portfolio").fadeOut(1000, function(){
			if(i<1) {
				i = numberOfArt;
				$("#title").html(portfolioTitle[i])
				$("#otherstuffpap").html(portfolioImage[i])
				$("#artdescript").html(portfolioDescription[i])
			}
			else {
				i -= 1;
				$("#title").html(portfolioTitle[i])
				$("#otherstuffpap").attr("src",portfolioImage[i])
				$("#artdescript").html(portfolioDescription[i])
			}
		}).fadeIn(1000);
	})
	$("#right").click( function(){
		$(".portfolio").fadeOut(1000, function(){
			if(i>3) {
				i = 0;
				$("#title").html(portfolioTitle[i])
				$("#otherstuffpap").html(portfolioImage[i])
				$("#artdescript").html(portfolioDescription[i])
			}
			else {
				i += 1;
				$("#title").html(portfolioTitle[i])
				$("#otherstuffpap").attr("src",portfolioImage[i])
				$("#artdescript").html(portfolioDescription[i])
			}
		}).fadeIn(1000);
	})
});