let owlCarouselMoreLikeThis = document.querySelectorAll(".owl-carousel-more-like-this");


function createItensOwlCarouselMoreLikeThisDom() {

    // <div class="more-like-this__item item">
    //     <figure class="more-like-this__img-capa">
    //         <img src="./img/el_camino.png" alt="Capa filme">
    //         <figcaption>El Camino</figcaption>
    //     </figure> 
    //     <span class="item__desc">TV-MA | Action, Crime</span>
    // </div>

     let filmesSeriesSugeridos = [
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
        {titulo: "El Camino", imgCapa: "./img/el_camino.png", caracteristicas: "TV-MA | Action, Crime"},
    ];     

    filmesSeriesSugeridos.forEach(filmeOuSerie => {

        let itemOwlCarousel = document.createElement("div");
        itemOwlCarousel.classList.add("more-like-this__item");
        itemOwlCarousel.classList.add("item");

        let figure = document.createElement("figure");
        figure.classList.add("more-like-this__img-capa");

        let img = document.createElement("img");
        img.src = filmeOuSerie.imgCapa;

        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = filmeOuSerie.titulo;

        let spanCaracteristicas = document.createElement("span");
        spanCaracteristicas.classList.add("item__desc");
        spanCaracteristicas.innerHTML = filmeOuSerie.caracteristicas;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        itemOwlCarousel.appendChild(figure);
        itemOwlCarousel.appendChild(spanCaracteristicas);

        owlCarouselMoreLikeThis[0].appendChild(itemOwlCarousel);
    });
}

createItensOwlCarouselMoreLikeThisDom();
