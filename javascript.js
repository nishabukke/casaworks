
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

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

  

function jqUpdateSize(){
    // Get the dimensions of the viewport
    // var width = $(window).width();
    var height = $(window).height();

    // $('#jqWidth').html(width);
    $('#jqHeight').html(height);

    $('.slide-show-container').css({ 
    height:  $(window).height(),
    overflow:" hidden"});

}
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size