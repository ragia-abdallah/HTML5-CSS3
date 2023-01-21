/*
- initialize current with aud (same as arr[0])
- play/pause/rewind >> ok
- play next:    set src of aud to songArr[currentInd+1]
                rewind() > play()
- shuffle: rearrange arr









*/

var current = document.getElementById("aud1");
var play = document.getElementById("playBtn");
var pause = document.getElementById("pauseBtn");
var rewind = document.getElementById("rewindBtn");
var next = document.getElementById("nextBtn");
var reset = document.getElementById("resetBtn");
var shuffle = document.getElementById("shuffleBtn");


let songArr = ["Media/Elfen Lied 'Lilium'.mp3","Media/Vogel im Kafig - Attack on Titan.mp3","Media/For The Love Of Life.mp3","Media/Boa - Duvet.mp3","Media/Dororo_-_Ending_2_Full『Yamiyo』by_Eve.mp3"];
let currentInd = 0;

play.addEventListener("click", playAud);
pause.addEventListener("click", pauseAud);
rewind.addEventListener("click", rewindAud);



function playAud() {
    current.play();
}
function pauseAud() {
    current.pause();
}
function rewindAud() {
    current.currentTime = 0;
}
function shuffleAud() {

}