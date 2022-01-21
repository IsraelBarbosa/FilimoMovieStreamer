let tinySlideMoreLikeThis = document.querySelectorAll(".more-like-this-slider")[0];


function createFilmesTinySlideMoreLikeThisDom() {

    // // Codigo que esta sendo criado
    /* 
    <div class="more-like-this__filme">
        <div class="filme__container-main">
            <div class="filme__container">
                <img class="filme__capa" src="./src/img/breaking-Bad.png" alt="Capa temporada 1">
                <h1 class="filme__titulo">Episode 1</h1>
                <h2 class="filme__sub-titulo">TV-MA | Action, Crime</h2>
            </div>
        </div>
    </div>
    */

     let filmesSeriesSugeridos = [
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./src/img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
    ];     

    filmesSeriesSugeridos.forEach(filmeOuSerie => {

        let moreLikeThisFilme = document.createElement("div");
        moreLikeThisFilme.classList.add("more-like-this__filme");

        let filmeContainerMain = document.createElement("div");
        filmeContainerMain.classList.add("filme__container-main");

        let filmeContainer = document.createElement("div");
        filmeContainer.classList.add("filme__container");

        let filmeCapa = document.createElement("img");
        filmeCapa.classList.add("filme__capa");
        filmeCapa.src = filmeOuSerie.imgCapa;

        let filmeTitulo = document.createElement("h1");
        filmeTitulo.classList.add("filme__titulo");
        filmeTitulo.innerHTML = filmeOuSerie.titulo;

        let filmeSubTitulo = document.createElement("h2");
        filmeSubTitulo.classList.add("filme__sub-titulo");
        filmeSubTitulo.innerHTML = filmeOuSerie.caracteristicas;

        filmeContainer.appendChild(filmeCapa);
        filmeContainer.appendChild(filmeTitulo);
        filmeContainer.appendChild(filmeSubTitulo);

        filmeContainerMain.appendChild(filmeContainer);

        moreLikeThisFilme.appendChild(filmeContainerMain);

        tinySlideMoreLikeThis.appendChild(moreLikeThisFilme);
    });
}

createFilmesTinySlideMoreLikeThisDom();
