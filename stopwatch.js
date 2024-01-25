window.onload = function(){

let ms = "00"
let sc = "00"
// let hr = "00"
let appendMs = document.getElementById('ms')
let appendSeconds = document.getElementById('sc')
// let appendHours = document.getElementById('hr')
let btnStart = document.getElementById('start-btn')
const btnStop = document.getElementById('stop-btn')
const btnReset = document.getElementById('reset-btn')
let Interval;


btnStart.onclick = function(){
    // console.log('clicked');
    clearInterval(Interval);
    Interval = setInterval(startTimer,10)
}

btnStop.onclick = function(){
    // console.log('stoped');
    clearInterval(Interval);
}

btnReset.onclick = function(){
        // console.log("reset");
        clearInterval(Interval)
        ms = "00"
        sc = "00"
        appendMs.innerHTML = ms
        appendSeconds.innerHTML = sc
}

function startTimer() {
    ms++;
    if (ms < 10){
        appendMs.innerHTML = "0" + ms;
}

      if (ms > 9){
        appendMs.innerHTML = ms;
}

    if(ms > 99){
        // console.log("seconds");
        sc++
        appendSeconds.innerHTML = "0" + sc
        ms = "0"
        appendMs.innerHTML = "0" + 0
    }

    if (sc > 9) {
        appendSeconds.innerHTML = sc
    }
  }
}
