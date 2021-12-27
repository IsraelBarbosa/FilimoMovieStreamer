/**
 * Inicia o owl carousel
*/

$(document).ready(function () {
    $(".owl-carousel-seasion").owlCarousel({
        nav: true,
        items: 5,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 3
            },
            900: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }
    )


    $(".owl-carousel-more-like-this").owlCarousel({
        nav: true,
        items: 5,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            530: {
                items: 2
            },
            801: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }
    )
});