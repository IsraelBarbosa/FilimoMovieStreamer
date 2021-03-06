import { sendTinySlideObj } from './temporadasTinySlide.js';
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider.js';

// EPISODES Slide
var slider = tns({
    'container': '.episodes-slider',
    mouseDrag: true,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    gutter: 30,
    nav: false,
    responsive: {
        1000: {
            items: 5,
        },
        800: {
            items: 4,
        },
        600: {
            items: 3,
        },
        450: {
            items: 2,
        },
    }
});


sendTinySlideObj(slider);




// MORE LIKE THIS Slide
var slider = tns({
    'container': '.more-like-this-slider',
    mouseDrag: true,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    loop: false,
    nav: false,
    gutter: 30,
    responsive: {
        1200: {
            items: 5,
        },
        800: {
            items: 4,
        },
        500: {
            items: 3,
        },
        350: {
            items: 2,
        },
        349: {
            items: 1,
        },
    }
});


// Botoes prev e next (episodes slide) e (more like this slide)
let btnPrev = document.querySelectorAll('button[data-controls="prev"]');
let btnNext = document.querySelectorAll('button[data-controls="next"]');

btnPrev.forEach(btn => btn.innerHTML = 
    `<span class="material-icons  tns-controls__icon">navigate_before</span>`
);

btnNext.forEach(btn => btn.innerHTML = 
    `<span class="material-icons  tns-controls__icon">navigate_next</span>`
);