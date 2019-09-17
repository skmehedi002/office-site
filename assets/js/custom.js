//***********************************************
// Theme Name: Template Name
// Author: Mehedi002.
// Description: Template Description.
// Version: 1.0
// Primary use: responsive, bootstrap, blog, html5, clean, modern, creative etc.
// Support: mehedi.cse.002@gmail.com;
//***********************************************

(function ($) {
    "use strict";


    /*========================
            Brand Slider
        ==========================*/

    $(".brand-slider").owlCarousel({
        nav: true,
        navText: [
            "<img src='assets/images/big-arrow-left.png'>",
            "<img src='assets/images/big-arrow-right.png'>"
        ],
        loop: true,
        dots: true,
        margin: 15,
        autoplay: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 2,
            }
        },
    });


    /*========================
        Service Slider
    ==========================*/
    $(".service-slider").owlCarousel({
        nav: false,
        navText: ["&#60;", "&#62;"],
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,
            }
        },
    });

   
    
    /*========================
        Review Slider
    ==========================*/
    $(".review-slider").owlCarousel({
        nav: true,
        navText: [
            "<img src='assets/images/big-arrow-left.png'>",
            "<img src='assets/images/big-arrow-right.png'>"
        ],
        loop: true,
        dots: true,
        margin: 15,
        autoplay: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,
            }
        },
    });

    /*========================
        Portfolio Slider
    ==========================*/
    $(".portfolio-slider").owlCarousel({
        nav: true,
        navText: [
            "<img src='assets/images/big-arrow-left.png'>",
            "<img src='assets/images/big-arrow-right.png'>"
        ],
        loop: true,
        dots: true,
        margin: 15,
        autoplay: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,
            }
        },
    });


    /*========================
        Portfolio Slider
    ==========================*/
    $(".meet-slider").owlCarousel({
        nav: true,
        navText: [
            "<img src='assets/images/big-arrow-left.png'>",
            "<img src='assets/images/big-arrow-right.png'>"
        ],
        loop: true,
        dots: true,
        margin: 15,
        autoplay: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,
            }
        },
    });

    /*========================
               Sticky Portfolio Tab
           ==========================*/
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 768 && $(window).scrollTop() <= $(document).height() - $(window).height() - 500) {
            $('.portfolio-tab').addClass('fixed-tab');
        } else {
            $('.portfolio-tab').removeClass('fixed-tab');
        }


    });

    /*-----------------------
      MixIt Up
      -----------------------*/

    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    var mixer = mixitup(containerEl, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    });



})(jQuery);
