import { selectSesion } from "./temporadasTinySlide.js";


// Inicia tinySlide
window.addEventListener("load", selectSesion(1));

const indexTemporadaSelecionada = document.querySelector(".select-temporada-custom__temporada-selecinada");
const containerIndexTemporada = document.querySelector(".select-temporada-custom__container-index-temporada");
const indexTemporada = document.querySelectorAll(".select-temporada-custom__index-temporada");


indexTemporadaSelecionada.addEventListener("click", mostrarIndicesTemporadas);

function mostrarIndicesTemporadas() {
    containerIndexTemporada.style.display = "flex";
}

indexTemporada.forEach(index => {
    index.addEventListener("click", selecionarTemporada);
});

function selecionarTemporada() {
    selectSesion(Number(this.innerHTML));
    indexTemporadaSelecionada.innerHTML = this.innerHTML;
}


export { indexTemporadaSelecionada, containerIndexTemporada, indexTemporada }