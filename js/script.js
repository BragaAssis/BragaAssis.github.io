$(function(){

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}


      var target = $('.progress'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    const stop = $(".my_projects").offset().top;

    
    target.each(function() {
    if (documentTop > boxTop(this) - offset && documentTop < stop - offset) {
      if(!$(this).hasClass("anime-init")){
        let width = parseInt($(this).text());
        $(this).addClass(animationClass + width);

        
        
      }
      $(this).find("p").fadeIn();

      // let width = parseInt($(this).text());

      // if($(this).hasClass(animationClass)){
      //   $(this).animate({
      //     width: width+ "%"
      //   }, 1000, function(){
      //     $(this).removeClass(animationClass);
      //   })
      // }

        

        
    

    
        
      }
    });
  }
  // animeScroll();

  

  

  $(document).scroll(function() {

      animeScroll();

  });


let heigt = $("article.header").height();

$(".header_right").css("height", heigt );

})