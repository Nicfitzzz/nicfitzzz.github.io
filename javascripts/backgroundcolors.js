$(document).ready(function () {
                $("#home").hover(
                  function () {
                      $('body').css("background", "#c44500");
                  }, 
                  function () {
                      $('body').css("background", "#c44500");
                  }
                );

                $("#folio").hover(
                  function () {
                      $('body').css("background", "#000");
                      $('#folio').css("background", "#000");
                  }, 
                  function () {
                      $('body').css("background", "#c44500");
                      $('#folio').css("background", "#fff");
                  }
                );

                $("#about").hover(
                  function () {
                      $('body').css("background", "yellow");
                  }, 
                  function () {
                      $('body').css("background", "#c44500");
                  }
                );

                $("#contact").hover(
                  function () {
                      $('body').css("background", "yellow");
                  }, 
                  function () {
                      $('body').css("background", "#c44500");
                  }
                );
            });