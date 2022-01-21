const config = {
    volume: 0,
    sources: [
        {
            type: 'mp4',
            src: './src/video/BreakingBadTrailer.mp4',
            
        }
    ],
    ui: {
        image: "./src/img/background-video-principal.jpg",
        locale: "pt-BR",
        pip: true,
    },
};

const element = document.getElementById('playerContainer');
const player = IndigoPlayer.init(element, config);

// You can use the player object now to access the player and it's methods (play, pause, ...)
