setInterval(function() {
    $(".active").prev().removeClass('active stap2 ').addClass('active2');
    $(".active").prev().removeClass('stap1');
    $(".active").prev().addClass('stap2');
    $(".active").addClass('stap1');
    $(".active").next().addClass('active');
    clearInterval();
  }, 2000);

  

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewhell: true,
  keyboard: true, 
})