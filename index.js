$(".cm").click(function() {
    $(".section").removeClass("visible");
    $("#contactme").addClass("visible");
});

$(".pr").click(function() {
    $(".section").removeClass("visible");
    $("#programming").addClass("visible");
});

$(".am").click(function() {
    $(".section").removeClass("visible");
    $("#aboutme").addClass("visible");
});

$(".ac").click(function() {
    $(".section").removeClass("visible");
    $("#education").addClass("visible");
});

$(".os").click(function() {
    $(".section").removeClass("visible");
    $("#other").addClass("visible");
});