
// Trigger "move" on scroll

$(window).scroll(function() {
	var scroll = Math.max(window.scrollY, 0);

	$("#one").css('transform', "translate(" + (-50 + scroll) + 'px,' + (132 - scroll*0.65) + 'px)' + "rotate(-32.8deg)");
	$("#two").css('transform', "translate(" + (-50 + scroll) + 'px,' + (210 - scroll*0.65) + 'px)' + "rotate(-32.8deg)");
	// $("#one").css('transform', "translate(" + (-50 + scroll) + 'px,' + (132 - scroll*0.65) + 'px)' + "rotate(-32.8deg)");
	// $("#one").css('transform', "translate(" + (-50 + scroll) + 'px,' + (132 - scroll*0.65) + 'px)' + "rotate(-32.8deg)");

});


// Mouse hover effect for UW Madison link
$('#uni').mouseover(function() {
	$(this).css("border-bottom", "2px solid #9b0000");
	$(this).click(function(){
		window.location = "https://www.wisc.edu";
	});
});

$('#uni').mouseout(function() {
	$(this).css("border", "none");
});


// Blink twice effect for <code>
$('#cd').mouseover(function() {
	$(this).fadeOut(100);
	$(this).fadeIn(100);
});

$('#cd').mouseout(function() {
	$(this).css("color", "#8f4300");
});