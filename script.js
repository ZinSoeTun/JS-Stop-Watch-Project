let timer = document.getElementById("timer");
let timingStart;
let differenceTime = 0;
let interval;
let isRun = false;
//for start function
function start() {
    if (!isRun) {
        isRun = true;
        timingStart = Date.now() - differenceTime;
        interval = setInterval(updateTime, 10);
    }
}
//for updateTime function
function updateTime() {
    differenceTime = Date.now() - timingStart;
    showTime();
}
function showTime() {
    let miliseconds = Math.floor((differenceTime % 1000) / 10);
    let seconds = Math.floor((differenceTime / 1000) % 60);
    let minutes = Math.floor((differenceTime / 1000 / 60) % 60);
    let hours = Math.floor((differenceTime / 1000 / 60 / 60) % 24);
    timer.innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (miliseconds < 10 ? "0" + miliseconds : miliseconds);
}
//for stop function 
function stop() {
    if (isRun) {
        isRun = false;
        clearInterval(interval);
    }
}
//for reset function
function reset() {
    stop();
    differenceTime = 0;
    showTime();
}