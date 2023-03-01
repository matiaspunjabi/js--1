//*******************  Music player *******************

//[x] play a mp3 file from navigator.
//[x] functional next and prev song.
//[x] functional play-pause btn toggle.
//[x] Play next song after current song ends.
//[x] use localstorage to save current audio play.
//[] functional shuffle and repeat buttons.
//[] add and remove songs to likesongs playlist.
//[] create a personal playlist.
//[] add own mp3 files to music player.
//[] css responsive, favicon customize asset.


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

//---------dom--------- 
let currentTrack = document.getElementById("audio");
let trackImg = document.querySelector(".img");
let trackTitle = document.querySelector(".title");
let trackAlbum = document.querySelector(".album");
const currentTrackDuration = document.querySelector(".currentTrackDuration")

//---------bottons--------- 
const backTrackBtn = document.getElementById("backBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const forwTrackBtn = document.getElementById("forwBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");

//---------containers--------- 
const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btnContainer");
const listContainer = document.querySelector(".listContainer");

let indexSong = 0;
let isPLaying = false;
let dropDown = false;

//------------functions------------

const getDurationTrack = () => {
        let durationTrack = playList[indexSong].time;
        let min = Math.floor(durationTrack / 60) ;
        let sec = durationTrack % 60;
        currentTrackDuration.innerText = `0${min}:${sec}`
}

const playTrack = () => {
    isPLaying = true;
    playPauseBtn.className="bi bi-pause";
    currentTrack.play();
}

const pauseTrack = () => {
    isPLaying = false;
    playPauseBtn.className = "bi bi-play";
    currentTrack.pause();
}

const nextTrack = () => {
    indexSong >= playList.length - 1 ? loadTrack(indexSong) : loadTrack(indexSong++);
}

const prevTrack = () => {
    indexSong === 0 ? loadTrack(indexSong) : loadTrack(indexSong--); 
}

const loadTrack = () => {    
    trackImg.src = playList[indexSong].img; 
    trackTitle.innerText = playList[indexSong].title;    
    trackAlbum.innerText = playList[indexSong].album;   
    currentTrack.src = playList[indexSong].mp3;
    getDurationTrack()
    localStorage.setItem("lastPlaying", indexSong);    
}

const loadLastTrack = () => {
    indexSong = localStorage.getItem("lastPlaying");
    loadTrack();
}

playList.forEach((e)=>{ 
        const ol = document.createElement("ol");
        ol.innerHTML =  `
                        <li class="liPlayList">
                            <div>
                                <img src="${e.img}">
                                <h3>${e.title}</h3>
                            </div>
                            <p>${Math.floor(e.time/60)}:${e.time % 60}</p>
                        </li>
                        `;
        listContainer.appendChild(ol);
    })
    

//------------get last song played saved on localStorage------------
localStorage.getItem("lastPlaying") > 0 ? loadLastTrack() : loadTrack()


//------------events------------

const dropDownList = document.getElementById("dropDownList");
const playListTitle = document.querySelector(".playListTitle")

playListTitle.addEventListener("click", ()=>{
    listContainer.classList.toggle("active");
    if(listContainer.classList.contains("active")){
        dropDownList.className = "bi bi-caret-up"
    } else{
        dropDownList.className = "bi bi-caret-down"
    }  
})

currentTrack.addEventListener("ended", ()=>{
    nextTrack();
    currentTrack.play();        
})

playPauseBtn.addEventListener("click",() =>{
    isPLaying ? pauseTrack() : playTrack();
})


forwTrackBtn.addEventListener("click", () => {
    nextTrack();
    playTrack();
})

backTrackBtn.addEventListener("click", () => {
    prevTrack();
    playTrack();    
})



