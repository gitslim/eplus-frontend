// ==================================================
// Project Name  :  Afkar - HTML Template
// File          :  JS Base
// Version       :  1.1.0
// Last change   :  29 April 2020
// Author        :  creative-wp -->> (https://themeforest.net/user/creative-wp)
// Developer:    :  Rakibul Islam Dewan -->> (dj.rakibul690@gmail.com)
// ==================================================

(function($) {
  "use strict";

  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------

  // background image - start
  // --------------------------------------------------
  $('[data-background]').each(function() {
    $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
  });
  // background image - end
  // --------------------------------------------------

  // collapse sidebar - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay').on('click', function () {
      $('.sidebar-menu').removeClass('active');
      $('.cart-sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.menu-btn').on('click', function () {
      $('.sidebar-menu').addClass('active');
      $('.overlay').addClass('active');
    });

    $('.cart-btn').on('click', function () {
      $('.cart-sidebar').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // collapse sidebar - end
  // --------------------------------------------------

  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-header').addClass("stuck")
    } else {
      $('.sticky-header').removeClass("stuck")
    }
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $(".header-section.text-white .brand-logo > a > img").attr("src", "assets/images/logo/logo_1.png");
    } else {
      $(".header-section.text-white .brand-logo > a > img").attr("src", "assets/images/logo/logo_2.png");
    }
  });
  // sticky header - end
  // --------------------------------------------------

  // hanging header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.hanging-header').addClass("active")
    } else {
      $('.hanging-header').removeClass("active")
    }
  });
  // hanging header - end
  // --------------------------------------------------

  // secondary header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.secondary-header').addClass("active")
    } else {
      $('.secondary-header').removeClass("active")
    }
  });
  // secondary header - end
  // --------------------------------------------------

  // contact form - start
  // --------------------------------------------------
  if($('#contact_form').length){
    $('#contact_form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true
        },
        website: {
          required: true
        },
        message: {
          required: true
        }
      }
    });
  }
  // contact form - end
  // --------------------------------------------------

  // popup image / video - start
  // --------------------------------------------------
  $('.zoom-gallery').magnificPopup({
    delegate: '.popup-image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">Подробности</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

  $('.popup-video').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  // popup image / video - end

  // home page sliders - start
  // --------------------------------------------------
  $('#agency-default-carousel').owlCarousel({
    items:1,
    margin:0,
    nav:false,
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
  // home page sliders - start
  // --------------------------------------------------

  // partners carousel - start
  // --------------------------------------------------
  $('#partners-carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      380:{
        items:2
      },
      480:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });
  // partners carousel - end
  // --------------------------------------------------

  // testimonial carousel - start
  // --------------------------------------------------
  $('.testimonial-carousel-1').owlCarousel({
    items:1,
    nav:false,
    loop:true,
    margin:50,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
  $('#testimonial-carousel-2').owlCarousel({
    items:1,
    nav:true,
    loop:true,
    margin:30,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      767:{
        items:1
      },
      800:{
        items:2
      },
      991:{
        items:2
      },
      1000:{
        items:2
      }
    }
  });
  // testimonial carousel - end
  // --------------------------------------------------

  // portfolio carousel - start
  // --------------------------------------------------
  $('#portfolio-carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    smartSpeed:700,
    responsive:{
      0:{
        items:1
      },
      380:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });

  $('#portfolio-carousel-2').owlCarousel({
    nav:true,
    margin:30,
    loop:false,
    dots:false,
    smartSpeed:700,
    responsive:{
      0:{
        items:1
      },
      550:{
        items:2
      },
      767:{
        items:2
      },
      880:{
        items:3
      },
      1000:{
        items:3
      },
      1920:{
        items:3
      }
    }
  });

  $('#portfolio-carousel-3').owlCarousel({
    items:1,
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
  });

  $('#details-image-carousel').owlCarousel({
    items:1,
    margin:0,
    nav:false,
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    // animateIn:'fadeIn',
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
  // portfolio carousel - end
  // --------------------------------------------------

  // shop carousel - start
  // --------------------------------------------------
  $('#shop-carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    margin:30,
    dots:false,
    smartSpeed:700,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      580:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });
  // shop carousel - end
  // --------------------------------------------------


  // team carousel - start
  // --------------------------------------------------
  $('#team-carousel').owlCarousel({
    nav:true,
    loop:true,
    margin:30,
    dots:false,
    smartSpeed:1000,
    responsive:{
      0:{
        items:1
      },
      680:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });
  // team carousel - end
  // --------------------------------------------------


  // property carousel - start
  // --------------------------------------------------
  $('#property-carousel').owlCarousel({
    nav:true,
    margin:30,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      580:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });
  // property carousel - end
  // --------------------------------------------------

$(".form").submit(function(){return $.ajax({type:"POST",url:"https://pravoliga.ru/test_05/form.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро свяжемся."),$(".form").trigger("reset")}),!1});

$('.check1').on('change', function() {
  $('#checker1, #checker3').toggleClass('show', !!$(this).find(':checked').length);
});
$('.check2').on('change', function() {
  $('#checker2, #checker4').toggleClass('show', !!$(this).find(':checked').length);
});

})(jQuery);