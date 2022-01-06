let tinySlideUm = document.querySelectorAll(".episodes-slider")[0];



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
                    tituloImg: "Episode 1",
                },
                dois: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 2",
                },
                tres: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 3",
                },
                quatro: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 4",
                },
                cinco: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 5",
                },
                seis: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 6",
                },
                sete: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 7",
                },
                oito: {
                    imgSrc: "./img/Breaking-Bad.png",
                    tituloImg: "Episode 8",
                }
            }
        },
        dois: {
            episode: {
                um: {
                    imgSrc: "./img/capa-sea-2.png",
                    tituloImg: "Episode 1",
                },
                dois: {
                    imgSrc: "./img/capa-sea-2.png",
                    tituloImg: "Episode 2",
                },
                tres: {
                    imgSrc: "./img/capa-sea-2.png",
                    tituloImg: "Episode 3",
                },
                quatro: {
                    imgSrc: "./img/capa-sea-2.png",
                    tituloImg: "Episode 4",
                },
                cinco: {
                    imgSrc: "./img/capa-sea-2.png",
                    tituloImg: "Episode 5",
                }
            }
        },
        tres: {
            episode: {
                um: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 1",
                },
                dois: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 2",
                },
                tres: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 3",
                },
                quatro: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 4",
                },
                cinco: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 5",
                },
                seis: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 6",
                },
                sete: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 7",
                },
                oito: {
                    imgSrc: "./img/capa-sea-3.png",
                    tituloImg: "Episode 8",
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

let tinySlideObj = null;
function sendTinySlideObj(obj) {
    tinySlideObj = obj;
}

function createEpisodiosSeasionDom(seasionObj) {

    if (tinySlideObj !== null) {
        if (tinySlideObj.isOn) {
            tinySlideObj.destroy();
            tinySlideUm = document.querySelectorAll(".episodes-slider")[0];

            for (let index = 0; index < tinySlideUm.childNodes.length;) {
                tinySlideUm.removeChild(tinySlideUm.childNodes[0]);
            }
        }
    }


    // Codigo que esta sendo criado
    /* 
    <div class="episode">
        <div class="episode-container-main">
            <div class="episode-container">
                <img class="episode_capa" src="./img/breaking-Bad.png" alt="Capa temporada 1">
                <h1 class="episode_titulo">Episode 1</h1>
            </div>
        </div>
    </div>
    */

    let episodiosObject = seasionObj.episode;

    for (let episodioObj in episodiosObject) {
        let episObj = episodiosObject[episodioObj];
        // console.log(episodiosObject[episodioObj]);

        let episode = document.createElement("div");
        episode.classList.add("episode");

        let episodeContainerMain = document.createElement("div");
        episodeContainerMain.classList.add("episode-container-main");

        let episodeContainer = document.createElement("div");
        episodeContainer.classList.add("episode-container");

        let img = document.createElement("img");
        img.classList.add("episode_capa");
        img.src = episObj.imgSrc;

        let h1Img = document.createElement("h1");
        h1Img.classList.add("episode_titulo");
        h1Img.innerHTML = episObj.tituloImg;

       
        episodeContainer.appendChild(img);
        episodeContainer.appendChild(h1Img);
        
        episodeContainerMain.appendChild(episodeContainer);

        episode.appendChild(episodeContainerMain);

        tinySlideUm.appendChild(episode);
    }

    if (tinySlideObj !== null) {
        if (!tinySlideObj.isOn) {
            tinySlideObj = tinySlideObj.rebuild();

            document.querySelector('button[data-controls="prev"]').innerHTML = 
            `<span class="material-icons">navigate_before</span>`;

            document.querySelector('button[data-controls="next"]').innerHTML = 
            `<span class="material-icons">navigate_next</span>`;
        }
    }
}


export { sendTinySlideObj, selectSesion };