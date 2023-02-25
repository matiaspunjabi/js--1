//*******************  Music player *******************

//[x] play a mp3 file from navigator.
//[] functional next and prev song.
//[] functional shuffle and repeat buttons.
//[] add and remove songs to likesongs playlist.
//[] create a personal playlist.
//[] add an own mp3 file to music player.
//[] css responsive, favicon customize asset


//-------------------------------------------- 


let linkin = new Audio("../songs/music-3.mp3");

const btn = document.querySelector(".play");

btn.addEventListener("click", ()=>{
    linkin.play();
})

const btnPause = document.querySelector(".pause");
btnPause.addEventListener("click", ()=>{
    linkin.pause();
})







                    




