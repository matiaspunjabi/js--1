const mainAudio = document.querySelector("#audio");

const mainContainer = document.querySelector(".mainContainer"); 
const songsJson = "../json/songs.json";
const songs = []

let indexTrack = 35;

// fetch(songsJson)
// .then(response => response.json())
// .then(data => {
//     data.forEach(e=>{
//             let audio = document.createElement("audio");
//             audio.src = e.mp3
//             audio.addEventListener("loadedmetadata", ()=>{
//                 let trackduration = audio.duration

//                 let min = Math.floor(trackduration / 60);
//                 let sec = Math.floor(trackduration % 60);
//                 if(sec < 10){sec = "0"+sec}

//                 let li = document.createElement("li");
//                 li.className = "liContainer"
//                 li.innerHTML =  `
//                                 <img src="${e.img}" alt="${e.title}" title="${e.title}">
//                                 <h3>${e.title}</h3>
//                                 <p>${min}:${sec}</p>
//                                 `
//                 playList.appendChild(li)
//             })
//         })
//     });
    
// const playTrack = (indexSong) =>{
//     mainAudio.src = `../songs/music-${indexSong}.mp3` 
//     mainAudio.play()
// }
// playTrack(indexTrack)

// mainAudio.addEventListener("ended", ()=>{
//     indexTrack++
//     playTrack(indexTrack)
// })

const albums = document.querySelector(".albums")
const albumContainer = document.querySelector(".albumContainer")

fetch(songsJson)
.then(response => response.json())
.then(data => {
    console.log(data[25].album)
    // showAlbumArrays(data, data[22].album)
})


const showAlbumArrays = (data, albumName) => {
    const album = data.filter(e=> e.album.includes(albumName));
    console.log(album)
    let h2 = document.createElement("h2")
    h2.innerHTML = `${albumName}`
    mainContainer.appendChild(h2)
    album.forEach(e => {
            let audio = document.createElement("audio");
            audio.src = e.mp3
            audio.addEventListener("loadedmetadata", ()=>{
                let trackduration = audio.duration

                let min = Math.floor(trackduration / 60);
                let sec = Math.floor(trackduration % 60);
                if(sec < 10){sec = "0"+sec}

                let ul = document.createElement("ul");
                ul.innerHTML =  `   
                                    <li class= "liContainer">
                                        <img src="${e.img}" alt="${e.title}" title="${e.title}">
                                        <h3>${e.title}</h3>
                                        <p>${min}:${sec}</p>
                                    </li>
                                `
                mainContainer.appendChild(ul)
        });
    })

}