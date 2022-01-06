import { sendTinySlideObj } from './temporadasTinySlide.js';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';

var slider = tns({
    'container': '.episodes-slider',
    mouseDrag: true,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    nav: false,
    responsive: {
        1200: {
            items: 5,
        },
        1000: {
            items: 4,
        },
        800: {
            items: 3,
        },
        600: {
            items: 2,
        },
        300: {
            items: 1,
        },
    }
});


document.querySelector('button[data-controls="prev"]').innerHTML = 
`<span class="material-icons">navigate_before</span>`;

document.querySelector('button[data-controls="next"]').innerHTML = 
`<span class="material-icons">navigate_next</span>`;


sendTinySlideObj(slider);