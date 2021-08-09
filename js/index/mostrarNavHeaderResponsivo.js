const iconNavResponsivoAbrirNav = document.querySelector(".icon-menu-container__icon");
const iconNavResponsivoCloseNav =  document.querySelector(".nav-header-fixed__icon-menu");
const navHeaderFixed = document.querySelector(".nav-header-fixed");



iconNavResponsivoAbrirNav.addEventListener("click", abrirNavHeaderFixed);
iconNavResponsivoCloseNav.addEventListener("click", abrirNavHeaderFixed);

function abrirNavHeaderFixed() {
    (navHeaderFixed.style.left === "-200px" || navHeaderFixed.style.left === "") ? 
    navHeaderFixed.style.left = "0px" : navHeaderFixed.style.left = "-200px";
}