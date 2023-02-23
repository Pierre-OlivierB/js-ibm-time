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
  }
  if (calcRacSvg.includes("^")) {
    console.log(calcRacSvg);
    screen.value = Math.pow(calcRacSvg[0], calcRacSvg[2]);
  }
  if (calcRacSvg.includes("log")) {
    console.log(calcRacSvg);
    screen.value = calcRacSvg[0] * Math.log(calcRacSvg[2]);
  }
}
function add(e) {
  //   console.log(e.target.value);
  let valueBtn = e.target.value;
  // console.log(screen.attributes);
  if (valueBtn == "sqrt") {
    console.log("racine");
    // racCalc(screen.value, e);
    // return (screen.value = Math.sqrt(screen.value));
    screen.value = screen.value + ` V `;
  }
  if (valueBtn == "pow") {
    console.log("puissance");
    // racCalc(screen.value, e);
    screen.value = screen.value + " ^ ";
  }
  if (valueBtn == "log") {
    console.log("puissance");
    // racCalc(screen.value, e);
    screen.value = screen.value + " log ";
  }
  if (valueBtn == "=") {
    // console.log(eval(screen.value));
    specialCalc(screen.value);
    return (screen.value = Math.ceil(eval(screen.value)));
  }
  if (
    screen.value.length < 20 &&
    valueBtn != "sqrt" &&
    valueBtn != "pow" &&
    valueBtn != "log"
  ) {
    screen.value = screen.value + valueBtn;
  }
  if (valueBtn == "C") {
    screen.value = "";
  }
}
// gpBtn.addEventListener("click", add);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
