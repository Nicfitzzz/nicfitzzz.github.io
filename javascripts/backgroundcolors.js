
$(document).ready(function () {
        if (!Modernizr.touch) {
                $("#home").hover(
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background", "#c44500");
                      $('#home').css("color", "#fff");
                  },
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background-color", "rgba(255, 255, 255, 0.0)");
                      $('#home').css("color", "#000");
                  }
                );

                $("#folio").hover(
                  function () {
                      $('body').css("background", "#000");
                      $('#folio').css("background", "#000");
                      $('#folio').css("color", "#fff");         
                  },
                  function () {
                   
                      $('#folio').css("background", "rgba(255, 255, 255, 0.0)");
                      $('#folio').css("color", "#000");
                  }
                );

                $("#about").hover(
                  function () {
                      $('body').css("background", "#392200");
                      $('#about').css("background", "#392200");
                      $('#about').css("color", "#fff");
                  }, 
                  function () {
                
                      $('#about').css("background", "rgba(255, 255, 255, 0.0)");
                      $('#about').css("color", "#000");
                  }
                );

                $("#contact").hover(
                  function () {
                      $('body').css("background", "#00c498");
                      $('#contact').css("background", "#00c498");
                      $('#contact').css("color", "#fff");
                  }, 
                  function () {
              
                      $('#contact').css("background", "rgba(255, 255, 255, 0.0)");
                      $('#contact').css("color", "#000");
                  }
                );

                  $(function(){
                      $("a.js_onPageLink").bind("click", function (event) {
                          event.preventDefault ? event.preventDefault() : event.returnValue = false;
                          var target = $(this).attr("href");
                      $("html, body").stop().animate({
                          scrollLeft: $(target).offset().left,
                          scrollTop: $(target).offset().top}, 1200);
                        });
                      });
};//modernizr
/*************************ON CLICK SCRIPT***************************/
                $("#home").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/miyajima.png)");
                      $('#imagebackground').css("background-position", "top");
                      $('#imagebackground').css("background-size", "100%");
                      $('#imagebackground').css("bottom", "0");
                      $('#imagebackground').css("margin-top", "0");
                      $('#imagebackground').css("opacity", ".15")
                  }
                );
                $("#folio").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/develop.png)");
                      $('#imagebackground').css("background-size", "100%");
                      $('#imagebackground').css("background-position", "bottom");
                      /*$('#imagebackground').css("top", "130rem");*/
                      $('#imagebackground').css("bottom", "235rem");
                      $('#imagebackground').css("opacity", ".15")
                  }
                );
                $("#about").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/fambot.png)");
                      $('#imagebackground').css("background-position", "bottom");
                      $('#imagebackground').css("background-size", "100%");
                      $('#imagebackground').css("bottom", "48.5rem");
                      $('#imagebackground').css("opacity", ".04")
                  }
                );
});//document ready

