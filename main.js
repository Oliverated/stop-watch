
// timer vlues
let hr = document.querySelector(".hrs");
let min = document.querySelector(".mins");
let sec = document.querySelector(".secs");
let mili_sec = document.querySelector(".mili-secs");

//   extra events
let column = document.querySelectorAll(".dots");
let timer_block = document.querySelector(".watch-block");

//   timer controls
let start_btn = document.querySelector(".start");
// let pause_btn = document.querySelector(".pause");
let reset_btn = document.querySelector(".stop");

//   assignment of variables
let startTime = 0;
let elapseTime = 0;
let intervalId;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

//   start btn
start_btn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapseTime;
    intervalId = setInterval(myTimer, 100);
    timer_block.classList.add("blink");
    column.forEach(dots=>dots.classList.add("blink"));
              start_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
    
  } else if (!paused) {
    paused = true;
    elapseTime = Date.now() - startTime;
    clearInterval(intervalId);
    timer_block.classList.remove("blink");
    column.forEach(dots=>dots.classList.remove("blink"));
    start_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
  }
});

//   reset btn
reset_btn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapseTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  hr.textContent = "00 ";
  min.textContent = "00 ";
  sec.textContent = "00";
  mili_sec.textContent = "00";
  timer_block.classList.remove("blink");
  column.forEach(dots=>dots.classList.remove("blink"));
         start_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
});


//  time interval callback func
function myTimer() {
  elapseTime = Date.now() - startTime;

  // time calculations
  mili_secs = Math.floor((elapseTime / 6) % 60);
  secs = Math.floor((elapseTime / 1000) % 60);
  mins = Math.floor((elapseTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);

  hrs = addZero(hrs);
  mins = addZero(mins);
  secs = addZero(secs);
  mili_secs = addZero(mili_secs)

  // value assigning
  hr.textContent =  `${hrs} `
  min.innerHTML = `${mins} `
  sec.textContent = secs
  mili_sec.textContent =  mili_secs

  // add extra zero
  function addZero(zero) {
    return ("0" + zero).length > 2 ? zero : "0" + zero;
  }
}

displayDate();