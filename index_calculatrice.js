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

const sqrtBtn = document.getElementById("sqrt");
const logBtn = document.getElementById("log");
const powBtn = document.getElementById("pow");
const cancBtn = document.getElementById("canc");

const screen = document.getElementById("display");
// console.log("ceci est affich" + screen);

// let screenCalc = screen.outerText;
// console.log(screenCalc);

const gpBtn = document.querySelectorAll(".btn");
gpBtn.forEach((e) => {
  //   let content = e.attributes.value.value;
  e.addEventListener("click", add);
  //   console.log(e.attributes.value.value);
});
function add(e) {
  //   console.log(e.target.value);
  let valueBtn = e.target.value;
  console.log(screen.attributes);
  // if (screen.length < 20) {
  screen.value = screen.value + valueBtn;
  // }
}
// gpBtn.addEventListener("click", add);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
