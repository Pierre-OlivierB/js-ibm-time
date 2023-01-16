// target btns
const beginBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// console.log(begin, stop, reset);

//target display
const houre = document.getElementById("houre");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

// console.log(houre, minutes, secondes);

//get display content
let s = secondes.outerText;
let m = minutes.outerText;
let h = houre.outerText;

// console.log(secondes.outerText);

//instal verification
let flag = true;
//instance of interval, spell here to clear it
let interval;

//modification 1 time
function updateChrono() {
  //parseInt(getString)
  s = parseInt(s) + 1;
  if (s < 10) {
    s = "0" + s;
  }
  if (s == 60) {
    s = "00";
    m = parseInt(m) + 1;
    if (m < 10) {
      m = "0" + m;
    }
  }
  if (m == 60) {
    m = "00";
    h = parseInt(h) + 1;
    if (h < 10) {
      h = "0" + h;
    }
  }
  //inject info to display
  secondes.innerText = s;
  minutes.innerText = m;
  houre.innerText = h;
}
function start() {
  //   console.log("start");

  //if start was already click => !flag

  if (flag) {
    interval = setInterval(updateChrono, 1000);
    flag = false;
    return flag;
  }
}
//clearint and set flag to true
function stop() {
  clearInterval(interval);
  flag = true;
  return flag;
}
//reset
function reset() {
  //reset display
  secondes.innerText = "00";
  minutes.innerText = "00";
  houre.innerText = "00";
  //reset var
  s = "00";
  m = "00";
  h = "00";
}

//listener btns
beginBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
