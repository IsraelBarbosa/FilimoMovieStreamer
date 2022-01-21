const commentsTextarea = document.querySelector(".comments__textarea");
const commentsButton = document.querySelector(".comments__button");
const commentsTodosComentarios = document.querySelector(".comments__todos-comentarios");


commentsButton.addEventListener("click", createNewComment);

function createNewComment() {

    // Codigo que esta sendo criado
/* <div class="comments__cont-comment">
    <div class="comments__container-left">
        <div class="comments__container-profile">
            <img class="comments__img-perfil" src="./src/img/user.png" width="50" alt="foto perfil">
            <span class="comments__nome-perfil">bruhperson</span>
        </div>

        <p class="comments__comet">Re-Watched it 7 times and counting. I guess I liked it.</p>
    </div>

    <div class="comments__container-right">
        <span class="comments__nota">9/10</span>
        <span class="comments__data">12 Oct 2019</span>
    </div>
</div> */
    

    let commentsContComment = document.createElement("div");
    commentsContComment.classList.add("comments__cont-comment");


    function createContainerLeft() {
        let commentsContainerLeft = document.createElement("div");
        commentsContainerLeft.classList.add("comments__container-left");

        let commentsContainerProfile = document.createElement("div");
        commentsContainerProfile.classList.add("comments__container-profile");

        let commentsImgPerfil = document.createElement("img");
        commentsImgPerfil.classList.add("comments__img-perfil");
        commentsImgPerfil.src = "./src/img/user.png";

        let commentsNomePerfil = document.createElement("span");
        commentsNomePerfil.classList.add("comments__nome-perfil");
        commentsNomePerfil.innerHTML = "bruhperson";

        let commentsComet = document.createElement("p");
        commentsComet.classList.add("comments__comet");
        commentsComet.innerHTML = commentsTextarea.value;

        commentsContainerProfile.appendChild(commentsImgPerfil);
        commentsContainerProfile.appendChild(commentsNomePerfil);

        commentsContainerLeft.appendChild(commentsContainerProfile);
        commentsContainerLeft.appendChild(commentsComet);

        return commentsContainerLeft;
    }
    

    function createContainerRight() {
        let data = new Date();
        const arrayMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

        let commentsContainerRight = document.createElement("div");
        commentsContainerRight.classList.add("comments__container-right");

        let commentsNota = document.createElement("span");
        commentsNota.classList.add("comments__nota");
        commentsNota.innerHTML = "9/10";

        let commentsData = document.createElement("span");
        commentsData.classList.add("comments__data");
        commentsData.innerHTML = `${data.getDay()} ${arrayMeses[data.getMonth()]} ${data.getFullYear()}`;

        commentsContainerRight.appendChild(commentsNota);
        commentsContainerRight.appendChild(commentsData);

        return commentsContainerRight;
    }

    commentsContComment.appendChild(createContainerLeft());
    commentsContComment.appendChild(createContainerRight());

    commentsTodosComentarios.appendChild(commentsContComment);

    commentsTextarea.value = "";
}



const emojis = document.querySelectorAll(".comments__emoji");

emojis.forEach(emoji => 
    emoji.addEventListener("click", sendEmojiToTextAreaComment)
);

function sendEmojiToTextAreaComment() {
    commentsTextarea.value += this.innerHTML;
}