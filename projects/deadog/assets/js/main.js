jQuery(document).ready(function($){



  

  // PRELOADER
$(window).on('load', function(){
    var preload = function(){
      var tl = gsap.timeline();
        tl.fromTo(".preloader", {height: '100%'}, {height: 0},"+=3")
          .fromTo(".preloader__title", {opacity: 1}, {opacity: 0},"-=2")
          .fromTo(".logo", {opacity: 0, y:20}, {opacity: 1 ,y:0})
          .fromTo(".menu", {opacity: 0, y:-20}, {opacity: 1,y: 0})
          .fromTo(".main-section__video", {opacity: 0, y:-20}, {opacity: 1,y: 0})
          .fromTo(".projects", {opacity: 0, y:-20}, {opacity: 1,y: 0});

      }
    preload();
});




$('.burger').click(function() {
    $(this).toggleClass('burger_active');
    $('.header__menu').toggleClass('header__menu_active');
})

$('.burger-network').click(function() {
  $(this).toggleClass('burger-network_active');
  $('.social-network').toggleClass('visually-hidden');
})


});

