if (!Modernizr.touch) {
$(document).ready(function () {
                $("#home").hover(
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background", "#c44500");
                      $('#home').css("color", "#fff");
                  },
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background", "#fff");
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
                   
                      $('#folio').css("background", "#fff");
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
                
                      $('#about').css("background", "#fff");
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
              
                      $('#contact').css("background", "#fff");
                      $('#contact').css("color", "#000");
                  }
                );
/*************************ON CLICK SCRIPT***************************/
                $("#home").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/miyajima100.png)");
                      $('#imagebackground').css("background-size", "100%");
                      $('#about-content').css("visibility", "hidden");
                      $('#landingpage').css("display", "block");
                      $('#landingpage').css("visibility", "visible");
                  }
                );
                $("#folio").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/develop.png)");
                      $('#imagebackground').css("background-size", "100%");
                      $('#about-content').css("visibility", "hidden");
                      $('#landingpage').css("visibility", "hidden");
                  }
                );
                $("#about").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/fambot.png)");
                      $('#imagebackground').css("background-size", "466.5px");
                      $('#imagebackground').css("margin-top", "-4rem");
                      $('#imagebackground').css("background-position", "right");
                      $('#landingpage').css("visibility", "hidden");
                      $('#about-content').css("display", "block");
                      $('#about-content').css("visibility", "visible");
                  }
                );
            });//document ready
};//modernizr
