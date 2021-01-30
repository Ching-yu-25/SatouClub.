var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('#hamburger').on('click', function () {
  $(this).parent().siblings('nav').toggleClass('open');

})