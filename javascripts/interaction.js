$(document).ready(function() {

$(".foliocontainer").find('a').find('img').on("click", function(event) {
	var $thisPortDesc = $(this).closest($('.foliocontainer')).find($(".portfolio-description"));
		
		$(".portfolio-description").not($thisPortDesc).slideUp();
		$thisPortDesc.slideToggle();

		event.preventDefault();
});

})