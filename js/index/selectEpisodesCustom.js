import { selectSesion } from "./temporadasTinySlide.js";


// Inicia tinySlide
window.addEventListener("load", selectSesion(1));

const indexTemporadaSelecionada = document.querySelector(".select-temporada-custom__temporada-selecinada");
const indexTemporada = document.querySelectorAll(".select-temporada-custom__index-temporada");


indexTemporada.forEach(index => {
    index.addEventListener("click", selecionarTemporada);
});

function selecionarTemporada() {
    selectSesion(Number(this.innerHTML));
    indexTemporadaSelecionada.innerHTML = this.innerHTML;
}