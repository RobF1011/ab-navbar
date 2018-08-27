$(".menu-button").on("click",function(){
  $(".hamburger-icon").toggleClass("open");
    $(".slide-menu").toggleClass("open");
    $(".dark-gradient").toggleClass("open");
});

$(".dark-gradient, .js-drawer-open-right").on("click",function(){
    $(".hamburger-icon").removeClass("open");
    $(".slide-menu").removeClass("open");
    $(".dark-gradient").removeClass("open");
});

$(document).on("click",function(){
  if ($(".search-mobile input").is(":focus")) {
    $(".search-mobile").addClass("focus");
    $(".slide-menu ul").addClass("focus");
    $(window).scrollTop(0);
  } else {
    $(".search-mobile").removeClass("focus");
    $(".slide-menu ul").removeClass("focus");
  }
  
  if ($(".animated-search-box input").is(":focus")) {
    $("#AccessibleNavRight form").addClass("focus");
  } else {
    $("#AccessibleNavRight form").removeClass("focus");
  }
  
  
});

$('.dark-gradient').scroll(function(){
  if ($(".hamburger-icon").hasClass("open")) {
    $(".hamburger-icon").removeClass("open");
    $(".slide-menu").removeClass("open");
    $(".dark-gradient").removeClass("open");
  }
});