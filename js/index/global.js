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
}