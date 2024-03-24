const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover')
const song = document.getElementById('audio');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');


const yoko = {
    songName : 'Yoko',
    artist : 'Terno Rei',
    fileSong : 'Yoko',
    fileCover : 'ternorei'
};
const inteiroMetade = {
    songName : 'Inteiro Metade',
    artist : 'Tagua Tagua',
    fileSong : 'Inteiro_metade',
    fileCover : 'taguatagua'
};
const aindaMeLembro = {
    songName : 'Ainda Me Lembro',
    artist : 'The Outs',
    fileSong : 'ainda_me_lembro',
    fileCover : 'theouts'
};


let isPlaying = false;
const playlist = [yoko, inteiroMetade, aindaMeLembro];
let index = 1;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else {
        playSong();
    }
}

function loadSong(){
    cover.src = `imagens/${playlist[index].fileCover}.png`;
    song.src = `songs/${playlist[index].fileSong}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else {
        index -= 1;
    }
    loadSong();
    playSong();
}

function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else {
        index += 1;
    }
    loadSong();
    playSong();
}

loadSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong)