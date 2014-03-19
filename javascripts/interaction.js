$(document).ready(function() {
$(".foliocontainer").on("click", function() {
	var $thisPortDesc = $(this).find(".portfolio-description");
	$(".portfolio-description").not($thisPortDesc).css("display", "none");
	$(this).find($(".portfolio-description")).slideToggle();

	$(this).css("padding-top", "5rem")

});

})