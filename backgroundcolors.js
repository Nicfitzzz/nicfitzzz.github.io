if (!Modernizr.touch) {
$(document).ready(function () {
                $("#home").hover(
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background", "#c44500");
                  }
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background", "#fff");
                  }
                );

                $("#folio").hover(
                  function () {
                      $('body').css("background", "#000");
                      $('#folio').css("background", "red");
                  } 
                  function () {
                      $('body').css("background", "#c44500");
                      $('#folio').css("background", "#fff");
                  }
                );

                $("#about").hover(
                  function () {
                      $('body').css("background", "#0058c4");
                      $('#about').css("background", "#0058c4");
                  } 
                  function () {
                      $('body').css("background", "#c44500");
                      $('#about').css("background", "#fff");
                  }
                );

                $("#contact").hover(
                  function () {
                      $('body').css("background", "#00c498");
                      $('#contact').css("background", "#00c498");

                  } 
                  function () {
                      $('body').css("background", "#c44500");
                      $('#contact').css("background", "#fff");
                  }
                );
            });
};
