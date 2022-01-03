const btnSearch = document.querySelector(".header__form__input__button");
const inputTextSearch = document.querySelector(".header__form__input");
const formSearch = document.querySelector(".header__form");

btnSearch.addEventListener("click", mostrarInputText);

function mostrarInputText(event) {
    const inputTextSearchCompStyle = getComputedStyle(inputTextSearch, null).getPropertyValue('display');

    if (inputTextSearchCompStyle === "none") {
        event.preventDefault();
        inputTextSearch.style.display = "block";
        inputTextSearch.style.opacity = "1";
    }
}