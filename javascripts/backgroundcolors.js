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
                      $('body').css("background", "#c44500");
                      $('#folio').css("background", "#fff");
                      $('#folio').css("color", "#000");
                  }
                );

                $("#about").hover(
                  function () {
                      $('body').css("background", "#0058c4");
                      $('#about').css("background", "#0058c4");
                      $('#about').css("color", "#fff");
                  }, 
                  function () {
                      $('body').css("background", "#c44500");
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
                      $('body').css("background", "#c44500");
                      $('#contact').css("background", "#fff");
                      $('#contact').css("color", "#000");
                  }
                );
            });
};
