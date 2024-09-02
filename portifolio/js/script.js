$(function(){

  var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
    var $target = $('.progress'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        if(!$(this).hasClass("annime-init")){
          $(this).addClass(animationClass);
          $(this).find("p").fadeIn();
        }

        let width = parseInt($(this).text());

        $(this).animate({
          width: width + "%"
        }, 1700)
        
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });

  $(".progress").each(function(){
    if($(this).hasClass("anime-init")){
    }
  })

})

// let heigt = $(".header_left").height();

// $(".header_right").css("height", heigt );

})