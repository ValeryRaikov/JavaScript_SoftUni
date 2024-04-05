// 01
function printSongs(input) {
    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }
    }

    let songs = {};
    let allSongs = [];

    const songsCount = input.shift();
    const type = input.pop();

    for (const record of input) {
        const [typeList, name, time] = record.split('_');
        
        if (!songs[typeList]) {
            songs[typeList] = [];
        }

        const song = new Song(name, time);
        songs[typeList].push(song);
        allSongs.push(song);
    }
    
    if (type === 'all') {
        allSongs.forEach(song => console.log(song.name));
    } else {
        songs[type].forEach(song => console.log(song.name));
    }
}

// 02
function printSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    const songsCount = input.shift();
    const typeSong = input.pop();

    for (let i = 0; i < songsCount; i++) {
        const [type, name, time] = input[i].split('_');
        const song = new Song(type, name, time);

        songs.push(song);
    }

    if (typeSong === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        const filteredSongs = songs.filter((song) => song.type === typeSong);
        filteredSongs.forEach(song => console.log(song.name));
    }
}

/* printSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

printSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']); */