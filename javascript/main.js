const mainAudio = document.querySelector("#audio");

const allTracksContainer = document.querySelector(".allTracksContainer"); 
const albumContainer = document.querySelector(".albumContainer"); 
const artistContainer = document.querySelector(".artistContainer"); 
const trackContainerFooter = document.querySelector(".trackContainer")
const songsJson = "../json/songs.json";

let indexTrack;

fetch(songsJson)
.then(response => response.json())
.then(data => {
    const allSongsList = document.querySelector(".allSongsList");
    showItem("all songs", data, allTracksContainer);
    allSongsList.addEventListener("click", () =>{
        allTracksContainer.classList.remove("hidden");
            hideContainer(albumContainer, artistContainer);
    })

    const allAlbumsList = document.querySelector(".allAlbumsList");
    getAlbums(data, "nevermind");
    getAlbums(data, "meteora");
    getAlbums(data, "hybrid theory");
    getAlbums(data, "dead silence");
    getAlbums(data, "reanimation");
    getAlbums(data, "wasting light");
    allAlbumsList.addEventListener("click", ()=>{
        albumContainer.classList.remove("hidden")
            hideContainer(allTracksContainer, artistContainer);
    })
    const allArtistList = document.querySelector(".allArtistList");
    getArtists(data, "linkin park");
    getArtists(data, "nirvana");
    getArtists(data, "billy talent");
    getArtists(data, "foo fighters");
    allArtistList.addEventListener("click", ()=>{
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
                            <img src="${songs.img}">
                            <h3>${songs.title}</h3>
                        `;
        ul.appendChild(li);
        li.addEventListener("click", () =>{
            showTrackFooter(songs);
            console.log(indexTrackAlbum);
            mainAudio.addEventListener("ended", ()=>{
                mainAudio.src = itemArray[indexTrackAlbum++].mp3;
                mainAudio.play();
            })
            mainAudio.src = itemArray[indexTrackAlbum].mp3;
            mainAudio.play();
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
                                            <img src="${songs.img}">
                                            <div>
                                                <h3>${songs.title}</h3>
                                                <p>${songs.album}</p>
                                            <div>
                                        `
}
