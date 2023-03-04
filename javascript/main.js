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
    constructor(id, title, album, artist, time, img, mp3){
        this.id = id;
        this.title = title;
        this.album = album;
        this.artist = artist;
        this.time = time;
        this.img = img;
        this.mp3= mp3;
    }
}

const song1 = new Songs( 1, "Bleed It Out", "Minutes To Midnight", "Linkin Park", 166, "../assets/minutes.jpg", "../songs/music-1.mp3")
const song2 = new Songs( 2,"Lying From You", "Meteora", "Linkin Park", 175, "../assets/meteora.png", "../songs/music-2.mp3")
const song3 = new Songs( 3,"Breaking The Habits", "Meteora", "Linkin Park", 196, "../assets/meteora.png", "../songs/music-3.mp3")
const song4 = new Songs( 4, "In The End", "Hybrid Theory", "Linkin Park", 219, "../assets/hybrid.jpg", "../songs/music-4.mp3")
const song5 = new Songs( 5, "Qwerty", "Unknown", "Linkin Park", 200, "../assets/qwerty.jpg", "../songs/music-5.mp3")
const song6 = new Songs( 6, "The Catalyst", "A Thousands Suns", "Linkin Park", 336, "../assets/thousands.jpg", "../songs/music-6.mp3")

const playList = [song1,song2,song3,song4,song5,song6];

//---------dom--------- 
let currentTrack = document.getElementById("audio");
let trackImg = document.querySelector(".img");
let trackTitle = document.querySelector(".title");
let trackAlbum = document.querySelector(".album");
let trackStartDuration = document.querySelector(".trackStartDuration");

const currentTrackDuration = document.querySelector(".currentTrackDuration");
const dropDownList = document.getElementById("dropDownList");
const playListTitle = document.querySelector(".playListTitle");

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
const olPlayList = document.querySelector(".olPlayList");


let indexSong = 0;
let isPLaying = false;
let dropDown = false;

//------------functions------------



const getDurationTrack = () => {
        let durationTrack = playList[indexSong].time;
        let min = Math.floor(durationTrack / 60) ;
        let sec = durationTrack % 60;
        currentTrackDuration.innerText = `0${min}:${sec}`
        currentTrack.addEventListener("timeupdate", (e)=>{
            let currentTime = e.target.currentTime;
            let durationTrack = e.target.duration;
            let min = Math.floor(currentTime / 60) ;
            let sec = Math.floor(currentTime % 60);
            if(sec < 10){sec = "0"+ sec}
            trackStartDuration.innerText = `0${min}:${sec}`

            let progressBar = document.querySelector(".durationBar");
            progressBar.value = (currentTime/durationTrack) * 100;
        })
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
    indexSong >= playList.length - 1 ? loadTrack(indexSong = 0) : loadTrack(indexSong++);
}

const prevTrack = () => {
    indexSong === 0 ? loadTrack(indexSong) : loadTrack(indexSong--); 
}

const loadTrack = () => {    
    trackImg.src = playList[indexSong].img; 
    trackTitle.innerText = playList[indexSong].title;    
    trackAlbum.innerText = playList[indexSong].album;   
    currentTrack.src = playList[indexSong].mp3;
    localStorage.setItem("lastPlaying", indexSong);    
    getDurationTrack()
}

const loadLastTrack = () => {
    indexSong = localStorage.getItem("lastPlaying");
    loadTrack();
}

playList.forEach((e)=>{
    const liPlayList = document.createElement("li")  
    liPlayList.innerHTML =  `
                    <div id="${e.id}" class="divPlayList">
                        <div>
                            <img src="${e.img}" alt="${e.album}">
                            <h3>${e.title}</h3>
                        </div>
                        <p>0${Math.floor(e.time/60)}:${e.time % 60}</p>
                    </div>
                    `;
    olPlayList.appendChild(liPlayList);
    })


//------------get last song played saved on localStorage------------
localStorage.getItem("lastPlaying") ? loadLastTrack() : loadTrack()

//------------events------------

playListTitle.addEventListener("click", ()=>{
    listContainer.classList.toggle("active");
    if(listContainer.classList.contains("active")){
        dropDownList.className = "bi bi-caret-up"
    } else{
        dropDownList.className = "bi bi-caret-down-fill"
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


//----------user login-----------

const loginBtn = document.getElementById("login");
const userContainer = document.getElementById("user");

const userForm = document.querySelector(".userForm")
const inputName = document.querySelector(".userInputName");
const inputLastName = document.querySelector(".userInputLastName");
const creatUserBtn = document.querySelector(".userBtn");

const user = []

//----------functions-----------
const showCreatedUser = ()=>{
    let userCreatedString = localStorage.getItem("userCreated");
    const userCreatedObject = JSON.parse(userCreatedString)
    const wellcome = document.querySelector(".wellcome");
    wellcome.innerHTML = `<p class="wellcomeMessage">Wellcome <span class="wellcomeSpan">${userCreatedObject.name} ${userCreatedObject.lastName}!</span></p>`;
}

const creatingUser = () => {
    userForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        let userCreated = {
            name: inputName.value,
            lastName: inputLastName.value  
        }
        user.push(userCreated);

        const userCreatedTurned = JSON.stringify(userCreated);
        localStorage.setItem("userCreated", userCreatedTurned);

        container.classList.remove("filter");
        playListTitle.classList.remove("filter");
        olPlayList.classList.remove("filter");

        const wellcome = document.querySelector(".wellcome");
        wellcome.innerHTML = `<p class="wellcomeMessage">Wellcome <span class="wellcomeSpan">${userCreated.name} ${userCreated.lastName}!</span></p>`;

        userForm.reset();  
    }) 
}


//----------events-----------
loginBtn.addEventListener("click", ()=>{
    userContainer.classList.toggle("hidden")
    container.classList.toggle("filter")
    playListTitle.classList.toggle("filter")
    olPlayList.classList.toggle("filter")
    
});

creatUserBtn.addEventListener("click", () =>{
    userContainer.classList.add("hidden")
})

if(localStorage.getItem("userCreated")){
    creatingUser();
    showCreatedUser();
} else {
    creatingUser();
}
