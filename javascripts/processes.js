$(document).ready(function(){
	var $backImage = $("#p0");
	$(window).scroll(function() {
	if($(this).scrollTop() > 900 && $(this).scrollTop() < 2199) {
		$backImage.css("background-image", "url(/images/process1.jpg)");
	}else if($(this).scrollTop() > 2200  && $(this).scrollTop() < 3499) {
		$backImage.css("background-image", "url(/images/process2.jpg)");
	}else if($(this).scrollTop() > 3500) {
		$backImage.css("background-image", "url(/images/process3.jpg)");
	}else {
		$backImage.css("background-image", "url(/images/processheader.jpg)");	
	}
});
 
});