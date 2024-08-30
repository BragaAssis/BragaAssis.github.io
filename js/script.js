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
    console.log($(this));
    if($(this).hasClass("anime-init")){
      console.log($(this));
    }
  })

})

  // let bar =   $(".progress").text();

  // let height = [];

  // for(i = 1; i <= 5 ; i++){
  //   height.push($("#bar_"+i).offset().top);
  // }

  // $(window).on("scroll", function(){

  // })

  // console.log(height);

  // let value = parseInt(bar);
//   $(window).on("scroll", function(){

//     let height = $(".progress").offset().top;
//     console.log(height);
// });

  // $(window).on("scroll", function(){

  //   console.log($("#bar_1").offset().top);

  //   let height = $(".progress").offset().top - $(window).scrollTop();

  //   if(height <= 675.75){
  //     $(".progress").animate({
  //       width: value + "%",
  //     }, 8000);
  //   }

  // });


  

  //   console.log(parseInt(bar));
})