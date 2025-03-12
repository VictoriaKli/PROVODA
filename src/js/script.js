"use strict";


$(document).ready(function (){
/* Константы
    ==========================================================================*/
    const body = $('body'),
    overlay = $('.js-overlay'),
    html = $('html'),
    header = $('.js-header'),
    searchDrop = $('.js-search__results'),
    searchWp = $('.js-search-wp');


    overlay.click(function() {
      $(this).removeClass('is-show');
      body.removeClass('dropdown-open');
      $('.js-header-search-mob').removeClass('is-show');
      $('.js-fixed-search').removeClass('is-active');
      $('.js-mob-contacts-btn').removeClass('is-active');
      $('.js-mob-contacts').removeClass('is-open');
    });


    function clearHeaderMenuDropdown() {
      $('.js-header-action-item-link').removeClass('is-open');
      $('.js-header-action-item-link-dropdown').removeClass('is-show');
      body.removeClass('dropdown-open');
      body.removeClass('overlay-show');
    };



    function headerMenuDropdown() {

      if($(window).width() > 991){
       $('.js-header-action-item-link').mouseenter(function () {
        $('.js-catalog').removeClass('is-active');
        header.find('.js-catalog-dropdown').removeClass('is-open');
         var dropdown = $(this).closest('.js-header-action-item').find('.js-header-action-item-link-dropdown');
         if (!$(this).hasClass('is-open') && $(this).closest('.js-header-action-item').hasClass('has-child')) {
           $(this).addClass('is-open');
           dropdown.addClass('is-show');
           if(!$(this).closest('.js-header-action-item').hasClass('js-bottom-menu')){
            body.addClass('dropdown-open');
           } else{
            body.addClass('overlay-show');
           }

         }

         dropdown.mouseenter(function () {
           $(this).parent('.js-header-action-item').find('.js-header-action-item-link').addClass('is-open');
           $(this).addClass('is-show');
           if(!$(this).parent('.js-header-action-item').hasClass('js-bottom-menu')){
            body.addClass('dropdown-open');
           }else{
            body.addClass('overlay-show');
           }

         });

         $(this).mouseleave(function () {
           clearHeaderMenuDropdown();
         });
         dropdown.mouseleave(function () {
           clearHeaderMenuDropdown();
         });
       });
      }
     };

     headerMenuDropdown();

    window.addEventListener('resize', function() {
      headerMenuDropdown();
    }, {passive: true});

    $('.js-header-dropdown-close').click(function(e) {
      e.preventDefault();
      clearHeaderMenuDropdown();
    });

    // fixed header

    function fixedHeader() {
      if ($(window).scrollTop() > header.height()) {
        body.addClass("is-fixed");
      } else {
        body.removeClass("is-fixed");
      }
    }
    fixedHeader();

    window.addEventListener("scroll", function() {
      fixedHeader();
    }, {passive: true});

    // burger

    $('.js-burger').click(function(e) {
      e.preventDefault();
      clearHeaderMenuDropdown();
      body.addClass('dropdown-open');
      $('.js-header-mob').addClass('is-open');
    });

    $('.js-mob-close').click(function() {
      $('.js-header-mob').removeClass('is-open');
      body.removeClass('dropdown-open');
    });


    function mobMenuOpen() {
        $('.js-header-action-item-link').click(function(e){
          if($(window).width() < 990 && $(this).closest('.js-header-action-item').hasClass('has-child')){
            if(!$(this).hasClass('is-open')){
              e.preventDefault();
              $(this).addClass('is-open');
              $(this).closest('.js-header-action-item').find('.js-header-action-item-link-dropdown').slideDown();
            } else{
              $(this).removeClass('is-open');
              $(this).closest('.js-header-action-item').find('.js-header-action-item-link-dropdown').slideUp();
            }
          }
        })
    };

    mobMenuOpen();

    // sliders

    // homescreen

    var homeSlider = new Swiper(".js-homescreen-slider", {
      loop: true,
      spaceBetween: 0,
      lazy: true,
      grabCursor: true,
      // autoplay: {
      //   delay: 3000,
      // },
      pagination: {
        el: ".js-homescreen-pag",
        type: "bullets",
        clickable: true,
      },

      navigation: {
        nextEl: ".js-homescreen-btn-next",
        prevEl: ".js-homescreen-btn-prev",
      },


    });

   var mpSwiperClient = new Swiper('.js-projects-slider', {
      loop: true,
      lazy: true,
      grabCursor: true,
      slidesPerView: 3,
      spaceBetween: 21,
      // autoplay: {
      //   delay: 3000,
      // },

      navigation: {
        nextEl: ".js-projects-next",
        prevEl: ".js-projects-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
          centeredSlides: false,
        },

       992: {
          slidesPerView: 3,
          spaceBetween: 21,
        },
      }
    });

    var mpSwiperClient = new Swiper('.js-news-slider', {
      loop: true,
      lazy: true,
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 10,
      // autoplay: {
      //   delay: 3000,
      // },

      navigation: {
        nextEl: ".js-news-next",
        prevEl: ".js-news-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false,
        },

       992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }
    });

   /* Инпуты в стиле материал
  ==========================================================================*/
  $(".js-material-input").each(function () {
    if ($(this).find("input,textarea").val()) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".js-material-input")
    .find("input,textarea")
    .focusin(function () {
      $(this).closest(".js-material-input").addClass("focus");
      if ($(window).width() < 992)
        $(this).parents(".modal").css("overflow-y", "hidden");
    });
  $(".js-material-input")
    .find("input,textarea")
    .focusout(function () {
      $(this).closest(".js-material-input").removeClass("focus");
      if ($(window).width() < 992)
        $(this).parents(".modal").css("overflow-y", "auto");
    });

  function onInput() {
    if ($(this).val()) {
      $(this).closest(".js-material-input").addClass("active");
    } else {
      $(this).closest(".js-material-input").removeClass("active");
    }
  }
  $("body").on("input", ".js-material-input input", onInput);
  $("body").on("input", ".js-material-input textarea", onInput);

  $(".modal").on("touchstart", function () {
    $(this).css("overflow-y", "auto");
  });


  /* Маска для телефонов
	==========================================================================*/

  const phones = document.getElementsByClassName("js-phone");
  for (let i = 0; i < phones.length; i++) {
    let cleave = new Cleave(phones[i], {
      numericOnly: true,
      prefix: "+7",
      noImmediatePrefix: true,
      delimiters: [" (", ") ", "-", "-"],
      blocks: [2, 3, 3, 2, 2],
    });
  };

  // setTimeout(function() {
  //   $(".js-preloader").addClass("is-hide");
  // }, 2000);


});