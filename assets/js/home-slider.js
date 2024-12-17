/*--------------- Home Slider ---------------*/ 
document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.home-slider', {
    loop: true,
    grabCursor: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});