

const mainAudio = document.querySelector("#audio");

const playList = document.querySelector(".playlist"); 
const songsJson = "../json/songs.json";
const songs = []

let indexTrack = 35;

fetch(songsJson)
.then(response => response.json())
.then(data => {
    data.forEach(e=>{
            let audio = document.createElement("audio");
            audio.src = e.mp3
            audio.addEventListener("loadedmetadata", ()=>{
                let trackduration = audio.duration

                let min = Math.floor(trackduration / 60);
                let sec = Math.floor(trackduration % 60);
                if(sec < 10){sec = "0"+sec}

                let li = document.createElement("li");
                li.className = "liContainer"
                li.innerHTML =  `
                                <img src="${e.img}" alt="${e.title}" title="${e.title}">
                                <h3>${e.title}</h3>
                                <p>${min}:${sec}</p>
                                `
                playList.appendChild(li)
            })
        })
    });
    
const playTrack = (indexSong) =>{
    mainAudio.src = `../songs/music-${indexSong}.mp3` 
    mainAudio.play()
}
playTrack(indexTrack)

mainAudio.addEventListener("ended", ()=>{
    indexTrack++
    playTrack(indexTrack)
})