// let yAge = prompt("Quelle est l'année de naissance de votre enfant ?");
// let mAge = prompt("Quelle est le mois de naissance de votre enfant ?");
// let dAge = prompt("Quelle est le jour de naissance de votre enfant ?");
//--------------
let yAge = 1989;
let mAge = 12;
let dAge = 26;

let actDay = new Date();
// console.log(actDay);

let yAct = actDay.getFullYear();
console.log(yAct);
let mAct = actDay.getMonth();
console.log(mAct);
let dAct = actDay.getDate();
console.log(dAct);


let difAge = yAct-yAge;
let difMonth = (mAct+1) - mAge;
let difDay = dAct - dAge;

console.log(difAge, difMonth, difDay);

// console.log(difAge);
// console.log(dAct);
