const layoutHeaderFixed = document.querySelector(".layout-header");
let prevScrollpos = window.pageYOffset;





window.addEventListener("scroll", diminuirHeightHeader);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
function diminuirHeightHeader() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
       layoutHeaderFixed.style.top = "0";
    } else {
        layoutHeaderFixed.style.top = "-7.3rem";
    }

    prevScrollpos = currentScrollPos;


    setHeaderTransparent();
}

function setHeaderTransparent() {
    const pageYOffset = window.pageYOffset;

    if (pageYOffset === 0) {
        layoutHeaderFixed.style.backgroundColor = "transparent";
    } else {
        layoutHeaderFixed.style.backgroundColor = "#0090C4";
    }
}