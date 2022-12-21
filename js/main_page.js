$(document).ready(function(){
  // Добавить плавную прокрутку до всех ссылок
  $("a").on('click', function(event) {

    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
        window.location.hash = hash;
      });
    } // Конец, если
  });
});
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
$(document).ready(function(){
  $("#slider").owlCarousel();({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  
});



$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    center: true,
    items: 1,
    margin: 10,
    loop: true ,
    autoplay: true,
    autoplayTimeout: 5000, 
    nav: false,
  });
});


