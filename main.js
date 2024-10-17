let hour = document.querySelector('#hour');
let mint = document.querySelector('#min');
let sec = document.querySelector('#sec');

let seconds = 0;
let minutes = 0;
let hourS = 0;
let Interval;

function start() {
    Interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hourS++;
        }
        sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        mint.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        hour.innerHTML = hourS < 10 ? "0" + hourS : hourS;
    }, 1000);
}

function stop() {
    clearInterval(Interval);
}

function restart() {
    clearInterval(Interval);
    seconds = 0;
    minutes = 0;
    hourS = 0;
    sec.innerHTML = "00";
    mint.innerHTML = "00";
    hour.innerHTML = "00";
}
