// =========================
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
  
    autoplay: true,
    autoplaySpeed: 1000,
    dotsSpeed: 1000,
    nav: true,
    navSpeed: 1000,
    // center: true,
    // autoWidth: false,
  
    responsiveClass: true,
    responsive: {
      320: {
        items: 1
      },
      480: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1280: {
        items: 3
      }
    }
  
  })
  //==========================

  $(function () {
    'use strict';
    var winH = $(window).height(),
      headerH = $('.header').innerHeight(),
      mainSliderH = $('.mainSlider').innerHeight();
    $('.mainSlider_2').height(winH - (headerH + mainSliderH));
  
  });

//==========================
