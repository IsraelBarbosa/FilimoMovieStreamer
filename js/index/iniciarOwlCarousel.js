/**
 * Inicia o owl carousel
 */

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        items: 5,
        dots: false,
        responsive:{
            0: {
                items:1
            },
            600: {
                items:2
            },
            700: {
                items:3
            },
            900: {
                items:4
            },
            1200: {
                items:5
            }
        }
    }
)});