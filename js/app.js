$(document).foundation();

$(document).ready( ()=>{
  $(document).click(()=>{
    $("h1").hide( "slide", { direction: "down"  }, 2000 );

  })
  $(document).scroll(function(){
    scrollParalax();
  });
});

function scrollParalax () {
  $(window).scroll(function() {
    var scrollYpos = $(document).scrollTop();
    var top, opacity;
    if (scrollYpos > 0) {
      if (scrollYpos > 400) {
        top = -2000;
      }else{
        top = 200 - scrollYpos;
        opacity = 0.95 - (scrollYpos)/150;
      };
    }else{
      top = 200;
      opacity = 0.95;
    };
    $("#jumbo_text_box").css({
      'top': `${top}px`,
      'opacity': `${opacity}`
    });
    // console.log(`${scrollYpos} and`)
  });
}