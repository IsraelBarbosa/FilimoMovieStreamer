import { indexTemporadaSelecionada, containerIndexTemporada, indexTemporada } from "./selectEpisodesCustom.js";





const inputSearch = document.querySelector(".header__form__input");
const btnInputSearch = document.querySelector(".header__form__input__button__img");


document.addEventListener("click", funcGlobal);

function funcGlobal(event) {
    const tagClassName = [...event.target.classList];

    
    const inputSearchIsBlock = inputSearch.style.display === "block" && 
    !tagClassName.includes("header__form__input") && 
    !tagClassName.includes("header__form__input__button__img");

    if (inputSearchIsBlock) {
        inputSearch.style.opacity = 0;
        setTimeout(() => {
            inputSearch.style.display = "none";
        }, 310);
    }


    esconderIndicesTemporadas(event);
}


function esconderIndicesTemporadas(event) {
    const styleDisplayComputedContainerIndexTemporada =
        getComputedStyle(containerIndexTemporada, null).
        getPropertyValue("display");

    const oTargetEindexTemporada = event.target.className === indexTemporada.className;
    const oTargetEindexTemporadaSelecionada = event.target.className === indexTemporadaSelecionada.className;


    if (oTargetEindexTemporada || !oTargetEindexTemporada && !oTargetEindexTemporadaSelecionada) {

        if (styleDisplayComputedContainerIndexTemporada === "flex") {
            containerIndexTemporada.style.display = "";
        }
    }
}