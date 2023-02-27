//*******************  Music player *******************

//[x] play a mp3 file from navigator.
//[] functional next and prev song.
//[] functional shuffle and repeat buttons.
//[] use localstorage to save current audio play.
//[] add and remove songs to likesongs playlist.
//[] create a personal playlist.
//[] add own mp3 files to music player.
//[] css responsive, favicon customize asset


//-------------------------------------------- 

class Songs {
    constructor(title, album, artist, time, img, mp3){
        this.title = title;
        this.album = album;
        this.artist = artist;
        this.time = time;
        this.img = img;
        this.mp3= mp3;
    }
}

const song1 = new Songs("Bleed It Out", "Minutes To Midnight", "Linkin Park", 166, "../assets/minutes.jpg", "../songs/music-1.mp3")
const song2 = new Songs("Lying From You", "Meteora", "Linkin Park", 175, "../assets/meteora.png", "../songs/music-2.mp3")
const song3 = new Songs("Breaking The Habits", "Meteora", "Linkin Park", 197, "../assets/meteora.png", "../songs/music-3.mp3")
const song4 = new Songs("In The End", "Hybrid Theory", "Linkin Park", 219, "../assets/hybrid.jpg", "../songs/music-4.mp3")
const song5 = new Songs("Qwerty", "Unknown", "Linkin Park", 200, "../assets/qwerty.jpg", "../songs/music-5.mp3")
const song6 = new Songs("The Catalyst", "A Thousands Suns", "Linkin Park", 336, "../assets/thousands.jpg", "../songs/music-6.mp3")

const playList = [song1,song2,song3,song4,song5,song6];

let currentTrack = document.getElementById("audio");
let trackImg = document.querySelector(".img");
let trackTitle = document.querySelector(".title");
let trackAlbum = document.querySelector(".album");

const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btnContainer");
const backTrackBtn = document.getElementById("backBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const forwTrackBtn = document.getElementById("forwBtn");

let indexSong = 0;
let isPLaying = false;

const loadTrack = () => {
    trackImg.src = playList[indexSong].img;
    trackTitle.innerText = playList[indexSong].title;
    trackAlbum.innerText = playList[indexSong].album;
    currentTrack.src = playList[indexSong].mp3;
}

loadTrack()

function playTrack() {
    isPLaying = true
    playPauseBtn.className="bi bi-pause";
    currentTrack.play();
}

function pauseTrack() {
    isPLaying = false
    playPauseBtn.className = "bi bi-play"
    currentTrack.pause();
}


playPauseBtn.addEventListener("click",() =>{
    isPLaying ? pauseTrack() : playTrack();

})

forwTrackBtn.addEventListener("click", ()=>{
    indexSong >= playList.length - 1 ? loadTrack(indexSong) : loadTrack(indexSong++)
    currentTrack.play()
})

backTrackBtn.addEventListener("click", ()=>{
    indexSong === 0 ? loadTrack(indexSong) : loadTrack(indexSong--) 
    currentTrack.play()
})




