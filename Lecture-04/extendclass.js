class Media{
    constructor(info){ //info is object
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media{
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong);