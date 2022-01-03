const btnPlayVideo = document.querySelector(".main__botao");
const btnVoltarVideo = document.querySelector(".main__video-fixed__button-absolute");
const playerVideo = document.querySelector(".main__video-fixed");






btnPlayVideo.addEventListener("click", abrirPlayerVideoPrincipal);

function abrirPlayerVideoPrincipal() {
    let stylePlayerVideoFechado = 
    playerVideo.style.display === "none" || playerVideo.style.display === "";

    if (stylePlayerVideoFechado) {
        playerVideo.style.display = "flex";
    } else {
        playerVideo.style.display = "none";
    }
}


btnVoltarVideo.addEventListener("click", voltarPaginaIndex);

function voltarPaginaIndex() {
    playerVideo.style.display = "none";
}