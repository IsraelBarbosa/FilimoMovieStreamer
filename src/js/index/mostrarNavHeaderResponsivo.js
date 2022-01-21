const iconNavResponsivoAbrirNav = document.querySelector(".header__icon-menu");
const iconNavResponsivoCloseNav =  document.querySelector(".header__nav__icon");
const navHeaderFixed = document.querySelector(".header__nav");



iconNavResponsivoAbrirNav.addEventListener("click", abrirNavHeaderFixed);
iconNavResponsivoCloseNav.addEventListener("click", abrirNavHeaderFixed);

function abrirNavHeaderFixed() {
    (navHeaderFixed.style.left === "-100%" || navHeaderFixed.style.left === "") ? 
    navHeaderFixed.style.left = "0px" : navHeaderFixed.style.left = "-100%";
}