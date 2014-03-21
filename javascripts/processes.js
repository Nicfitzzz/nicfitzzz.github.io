$(document).ready(function(){
	var $backImage = $("#p0");
	$(window).scroll(function() {
	if($(this).scrollTop() > 900 && $(this).scrollTop() < 2199) {
		$backImage.css("background-image", "url(/images/process1.jpg)");
		$("ul li a").css("color", "#d4d4d4");	
		$("#p1t").css("color", "#698BFA");
	}else if($(this).scrollTop() > 2200  && $(this).scrollTop() < 3499) {
		$backImage.css("background-image", "url(/images/process2.jpg)");
		$("ul li a").css("color", "#d4d4d4");	
		$("#p2t").css("color", "#698BFA");
	}else if($(this).scrollTop() > 3500 && $(this).scrollTop() < 5239) {
		$backImage.css("background-image", "url(/images/process3.jpg)");
		$("ul li a").css("color", "#d4d4d4");	
		$("#p3t").css("color", "#698BFA");
	}else if($(this).scrollTop() > 5240 && $(this).scrollTop() < 7000) {
		
		$("ul li a").css("color", "#d4d4d4");	
		$("#cboxt").css("color", "#698BFA");
	}else {
		$backImage.css("background-image", "url(/images/processheader.jpg)");
		$("ul li a").css("color", "#d4d4d4");
	}
});
  $(function(){
    $("a.js_onPageLink").bind("click", function (event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var target = $(this).attr("href");
        $("html, body").stop().animate({
                scrollLeft: $(target).offset().left,
                scrollTop: $(target).offset().top
            }, 1000);
    });
});
  	var sn = $(".processnav");
	var stn = "stucknav";

	$(window).scroll(function() {
		if($(this).scrollTop() > 120) {
			sn.addClass(stn);
		}
		else {
			sn.removeClass(stn);
		}
});
 
});