const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multBtn = document.getElementById("mult");
const divBtn = document.getElementById("div");

const point = document.getElementById("point");
const enter = document.getElementById("enter");

const sqrtBtn = document.getElementById("sqrt");
const logBtn = document.getElementById("log");
const powBtn = document.getElementById("pow");
const cancBtn = document.getElementById("canc");

const screen = document.getElementById("display");
// console.log("ceci est affich" + screen);

// let screenCalc = screen.outerText;
// console.log(screenCalc);

const keyboardRelation = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "=",
  "+",
  "-",
  "*",
  "/",
  "rac",
  "log",
  "puis",
  "cancel",
];
const keyboardTarget = [
  zeroBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  point,
  enter,
  plusBtn,
  minusBtn,
  multBtn,
  divBtn,
  sqrtBtn,
  logBtn,
  powBtn,
  cancBtn,
];

const mathCalc = [Math.sqrt(), Math.log(), Math.pow()];
const gpBtn = document.querySelectorAll(".btn");
gpBtn.forEach((e) => {
  //   let content = e.attributes.value.value;
  e.addEventListener("click", add);
  //   console.log(e.attributes.value.value);
});
var calcSvg;
var calcRacSvg;
var flagCalc = false;
// function racCalc(add, targ) {
//   let valueBtn = targ.target.value;
//   if (valueBtn !== "=") {
//     calcRacSvg += add;
//   } else if (valueBtn == "=") {
//     return (screen.value = Math.sqrt(calcRacSvg));
//   }
// }

function specialCalc(calcSpe) {
  calcRacSvg = calcSpe.split(" ");

  if (calcRacSvg.includes("V")) {
    console.log(calcRacSvg);
    screen.value = calcRacSvg[0] * Math.sqrt(calcRacSvg[2]);
    flagCalc = true;
  }
  if (calcRacSvg.includes("^")) {
    console.log(calcRacSvg);
    screen.value = Math.pow(calcRacSvg[0], calcRacSvg[2]);
    flagCalc = true;
  }
  if (calcRacSvg.includes("log")) {
    console.log(calcRacSvg);
    screen.value = calcRacSvg[0] * Math.log(calcRacSvg[2]);
    flagCalc = true;
  }
}
function valueSqrt(inputValue) {
  if (inputValue == "sqrt") {
    return (screen.value = screen.value + ` V `);
  }
}
function valuePow(inputValue) {
  if (inputValue == "pow") {
    return (screen.value = screen.value + " ^ ");
  }
}
function valueLog(inputValue) {
  if (inputValue == "log") {
    return (screen.value = screen.value + " ^ ");
  }
}
function increValue(inputValue) {
  if (
    screen.value.length < 20 &&
    inputValue != "sqrt" &&
    inputValue != "pow" &&
    inputValue != "log" &&
    inputValue != "="
  ) {
    return (screen.value = screen.value + inputValue);
  }
}
function doCalcul(inputValue) {
  if (inputValue == "=") {
    // console.log(eval(screen.value));
    specialCalc(screen.value);
    return (screen.value = Math.ceil(eval(screen.value)));
  }
}
function calculateInCalcul() {}
function verifCalcExist() {
  if (
    calcRacSvg.includes("+") ||
    calcRacSvg.includes("-") ||
    calcRacSvg.includes("/") ||
    calcRacSvg.includes("*")
  ) {
    console.log(calcRacSvg);
    flagCalc = true;
  }
}
function add(e) {
  //   console.log(e.target.value);
  let valueBtn = e.target.value;
  // console.log(screen.attributes);
  verifCalcExist();

  valueSqrt(valueBtn);
  valuePow(valueBtn);
  valueLog(valueBtn);
  doCalcul(valueBtn);
  increValue(valueBtn);
  if (valueBtn == "C") {
    screen.value = "";
  }
}
// gpBtn.addEventListener("click", add);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
