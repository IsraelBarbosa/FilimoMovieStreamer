const fotoPerfil = document.querySelector(".header__foto-perfil");
const navPerfil = document.querySelector(".header__nav-perfil");
let timeInfoPerfil1 = null;
let timeInfoPerfil2 = null;





fotoPerfil.addEventListener("click", mostrarInfoPerfil);

function mostrarInfoPerfil(event) {
    if (event.target.classList.contains("header__foto-perfil") && 
    (navPerfil.style.display === "none" || navPerfil.style.display === "")) {
        navPerfil.style.display = "block";
        navPerfil.style.animationName = "mostrarInfoPerfil";

    } else {
        navPerfil.style.animationName = "ocultarInfoPerfil";
        setTimeout(() => {
            navPerfil.style.display = "none";
        }, 200);
    }
}