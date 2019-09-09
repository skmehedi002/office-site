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

    /*----------------------------------------
           Smooth Scroll
       ----------------------------------------*/

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 95
                    }, 800);
                    return false;
                }
            }
        });
    });

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
        nav: true,
        navText: ["&#8592;", "&#8594;"],
        loop: true,
        dots: true,
        margin: 25,
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



})(jQuery);
