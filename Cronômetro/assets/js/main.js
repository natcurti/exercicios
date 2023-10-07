const btnStartPause = document.querySelector('.button-start-pause');
const btnRestart = document.querySelector('.button-restart');
let timer = document.querySelector('.container__timer');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "paused";

function startTimer(){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;   
}


btnStartPause.addEventListener('click', function(){
    if(timerStatus === 'paused'){
        timerInterval = window.setInterval(startTimer, 1000);
        btnStartPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        btnStartPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
        timerStatus = 'paused';
    }
})

btnRestart.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText = hours + ":" + minutes + ":" + seconds;
})
