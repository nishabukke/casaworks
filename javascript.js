

// $(".why-choose-nav").click(function() {
//     $('html, body').animate({
//         scrollTop: $(".why-choose-us-container").offset().top
//     }, 2000);
// });

$(".about-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us-container").offset().top
    }, 1000);
});

$(".services-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".home-services-container").offset().top
    }, 1000);
});

$(".about-us-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us-container").offset().top
    }, 1000);
});

$(".why-choose-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".why-choose-us-container").offset().top
    }, 1000);
});

$(".services-footer-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".home-services-container").offset().top
    }, 1000);
});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);