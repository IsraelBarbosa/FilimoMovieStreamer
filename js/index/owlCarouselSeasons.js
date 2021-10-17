
let owlCarousel = document.querySelectorAll(".owl-carousel");



/**
 * Seleciona a seasion da serie
 * @param {Number} seasionSelec - O indice da seasion escolhida
 */

function selectSesion(seasionSelec) {

    let seasionSelecToNumber = Number(seasionSelec);

    if (seasionSelecToNumber === 1) {
        seasionSelec = "um"
    } else if (seasionSelecToNumber === 2) {
        seasionSelec = "dois"
    } else if (seasionSelecToNumber === 3) {
        seasionSelec = "tres"
    }

    let seasion = {
        um: {
            episode: {
                um: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 1",
                },
                dois: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 2",
                },
                tres: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 3",
                },
                quatro: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 4",
                },
                cinco: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 5",
                },
                seis: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 6",
                },
                sete: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 7",
                },
                oito: {
                    imgSrc: "./img/Breaking-Bad.png",
                    textFigCaption: "Episode 8",
                }
            }
        },
        dois: {
            episode: {
                um: {
                    imgSrc: "./img/capa-sea-2.png",
                    textFigCaption: "Episode 1",
                },
                dois: {
                    imgSrc: "./img/capa-sea-2.png",
                    textFigCaption: "Episode 2",
                },
                tres: {
                    imgSrc: "./img/capa-sea-2.png",
                    textFigCaption: "Episode 3",
                },
                quatro: {
                    imgSrc: "./img/capa-sea-2.png",
                    textFigCaption: "Episode 4",
                },
                cinco: {
                    imgSrc: "./img/capa-sea-2.png",
                    textFigCaption: "Episode 5",
                }
            }
        },
        tres: {
            episode: {
                um: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 1",
                },
                dois: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 2",
                },
                tres: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 3",
                },
                quatro: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 4",
                },
                cinco: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 5",
                },
                seis: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 6",
                },
                sete: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 7",
                },
                oito: {
                    imgSrc: "./img/capa-sea-3.png",
                    textFigCaption: "Episode 8",
                }
            }
        }
    }

    createEpisodiosSeasionDom(seasion[seasionSelec])
}



/**
 * Cria os episodios da seasion no own caroseul
 * @param {Object} seasionObj - O objeto que contem as informacoes dos episodios da seasion
 */

function createEpisodiosSeasionDom(seasionObj) {

    removeAllItensAndDestroyOwnCaroseul();

    // Codigo que esta sendo criado
    /* 
    <div class="item">
        <figure class="item__img-capa-episodio">
            <img src="./img/Breaking-Bad.png" alt="Capa episodio 1">
            <figcaption>Episode 1</figcaption>
        </figure> 
    </div>
    */

    let episodiosObject = seasionObj.episode;

    for (let episodioObj in episodiosObject) {
        let episObj = episodiosObject[episodioObj];
        console.log(episodiosObject[episodioObj]);

        let itemOwlCarousel = document.createElement("div");
        itemOwlCarousel.classList.add("item");

        let figure = document.createElement("figure");
        figure.classList.add("item__img-capa-episodio");

        let img = document.createElement("img");
        img.src = episObj.imgSrc;

        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = episObj.textFigCaption;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        itemOwlCarousel.appendChild(figure);

        owlCarousel[0].appendChild(itemOwlCarousel);
    }

    startOwlCarousel();
}



/**
 * Remove os itens do Own Caroseul e destroi o owl caroseul
 */
function removeAllItensAndDestroyOwnCaroseul() {
    var itemLengthOwnCaroseul = $('.item').length;

    for (var i = 0; i < itemLengthOwnCaroseul; i++) {
        $(".owl-carousel").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
    }

    $('.owl-carousel').trigger('destroy.owl.carousel');
}


/**
 * Inicia o owl carousel
 */
function startOwlCarousel() {
    $(".owl-carousel").owlCarousel({
        nav: true,
        items: 5,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 3
            },
            900: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
}

export { selectSesion }