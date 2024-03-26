const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover')
const song = document.getElementById('audio');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress')
const progressContainer = document.getElementById('progress-container')
const shuffle = document.getElementById('shuffle')


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
let isShuffled = false;
const originalPlaylist = [yoko, inteiroMetade, aindaMeLembro];
let sortedPlaylist = [...originalPlaylist];
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
    cover.src = `imagens/${sortedPlaylist[index].fileCover}.png`;
    song.src = `songs/${sortedPlaylist[index].fileSong}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else {
        index -= 1;
    }
    loadSong();
    playSong();
}

function nextSong(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    }
    else {
        index += 1;
    }
    loadSong();
    playSong();
}

function updateProgressBar(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`)
}

function jumpTo(event){
    const progressContainerWidth = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    song.currentTime = (clickPosition/progressContainerWidth)*song.duration;
}

function shuffleSongs(){
    if(isShuffled === false){
        isShuffled = true
}
}

loadSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo)
shuffle.addEventListener('click', suffleSongs)