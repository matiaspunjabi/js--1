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

const songsJson = "../json/songs.json";

playList2 = [];

fetch(songsJson)
.then(response => response.json())
.then(data => {
    playList2.push(data)
    console.log(playList2);
})

