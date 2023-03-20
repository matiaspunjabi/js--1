const mainAudio = document.querySelector("#audio");

const allTracksContainer = document.querySelector(".allTracksContainer"); 
const albumContainer = document.querySelector(".albumContainer"); 
const artistContainer = document.querySelector(".artistContainer"); 
const trackContainerFooter = document.querySelector(".trackContainer")
const songsJson = "./json/songs.json";

let indexTrack;

fetch(songsJson)
.then(response => response.json())
.then(data => {
    const allSongsList = document.querySelector(".allSongsList");
    showItem("all songs", data, allTracksContainer);
    allSongsList.addEventListener("click", () =>{
        menuList.classList.add("hidden");
        allTracksContainer.classList.remove("hidden");
        hideContainer(albumContainer, artistContainer);
    })

    const allAlbumsList = document.querySelector(".allAlbumsList");
    getAlbums(data, "nevermind");
    getAlbums(data, "meteora");
    getAlbums(data, "hybrid theory");
    getAlbums(data, "dead silence");
    getAlbums(data, "wasting light");
    getAlbums(data, "reanimation");
    allAlbumsList.addEventListener("click", ()=>{
        menuList.classList.add("hidden");
        albumContainer.classList.remove("hidden")
        hideContainer(allTracksContainer, artistContainer);
    })
    const allArtistList = document.querySelector(".allArtistList");
    getArtists(data, "billy talent");
    getArtists(data, "nirvana");
    getArtists(data, "foo fighters");
    getArtists(data, "linkin park");
    allArtistList.addEventListener("click", ()=>{
        menuList.classList.add("hidden");
        artistContainer.classList.remove("hidden");
        hideContainer(allTracksContainer, albumContainer);
    })
})

const getAlbums = (data, album) =>{
    let albumArray = data.filter(e=> e.album === album );
    showItem(album, albumArray, albumContainer);
}

const getArtists = (data, artist) =>{
    let artistName = data.filter(e=> e.artist === artist);
    showItem(artist, artistName, artistContainer);
}

const showItem = (item, itemArray, itemContainer) => {
    const h2 = document.createElement("h2");
    h2.innerHTML= `${item}`;

    const ul = document.createElement("ul");
    ul.className = "playlist";
    itemArray.forEach(songs => {
        let indexTrackAlbum = itemArray.indexOf(songs);
        const li = document.createElement("li");
        li.className = "liContainer";
        li.innerHTML =  `
                            <div>
                                <img src="${songs.img}" alt="${songs.title} ${songs.artist}">
                                <h3>${songs.title}</h3>
                            </div>
                            <div id="${songs.id}">                           
                                <i id="heart" class="bi bi-heart"></i>
                                <p>00:00</p>
                            </div>
                        `;
        ul.appendChild(li);
    
        li.addEventListener("click", () =>{
            playTrack(itemArray, indexTrackAlbum, songs)
            backTrack(itemArray, indexTrackAlbum)
            nextTrack(itemArray, indexTrackAlbum)
        })
    })

    itemContainer.appendChild(h2);
    itemContainer.appendChild(ul);
}

const hideContainer = (containerOne, containerTwo) =>{
    if(containerOne.classList.contains("notHidden") & containerTwo.classList.contains("notHidden")){
        containerOne.classList.add("hidden");
        containerTwo.classList.add("hidden");
    }
}

const showTrackFooter = (songs) => {
    trackContainerFooter.innerHTML =    `   
                                        <img src="${songs.img}" alt="${songs.title} ${songs.artist}">
                                        <div>
                                            <h3>${songs.title}</h3>
                                            <p>${songs.album}</p>
                                        </div>
                                            
                                        `
}

const backwardBtn = document.querySelector(".bi-skip-backward")
const forwardBtn = document.querySelector(".bi-skip-forward")
const playBtn = document.querySelector("#playPauseBtn")


const playTrack = (itemArray, indexTrackAlbum, songs) =>{
    playBtn.className = "bi bi-pause"
    mainAudio.src = itemArray[indexTrackAlbum].mp3;
    mainAudio.play()
    showTrackFooter(songs)
}

const nextTrack = (itemArray, indexTrackAlbum) =>{
    mainAudio.addEventListener("ended", ()=>{
        showTrackFooter(itemArray[indexTrackAlbum])
        mainAudio.src = itemArray[indexTrackAlbum++].mp3
        mainAudio.play()
    })
    forwardBtn.addEventListener("click", ()=>{
        showTrackFooter(itemArray[indexTrackAlbum])
        mainAudio.src = itemArray[indexTrackAlbum++].mp3;
        mainAudio.play()
    })
}

const backTrack = (itemArray, indexTrackAlbum) =>{
    backwardBtn.addEventListener("click", ()=>{
        showTrackFooter(itemArray[indexTrackAlbum])
        mainAudio.src = itemArray[indexTrackAlbum--].mp3;
        mainAudio.play()
    })
}

playBtn.addEventListener("click", ()=>{
    if(playBtn.className === "bi bi-pause"){
        playBtn.className = "bi bi-play"
        mainAudio.pause()
    } else {
        playBtn.className ="bi bi-pause"
        mainAudio.play()
    }
})

const menu = document.querySelector(".bi-list");
const menuList = document.querySelector(".navUl");

menu.addEventListener("click", ()=>{
    menuList.classList.toggle("hidden")
})


