const header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;





window.addEventListener("scroll", diminuirHeightHeader);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
function diminuirHeightHeader() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-90px";
    }

    prevScrollpos = currentScrollPos;


    setHeaderTransparent();  
}

function setHeaderTransparent() {
    const pageYOffset = window.pageYOffset;

    if (pageYOffset === 0) {
        header.style.backgroundColor = "transparent";
    } else {
        header.style.backgroundColor = "rgb(41, 41, 41)";
    }
}