//Display proposition and wait input
// let yAge = prompt(
//   "Quelle est (en nombre, ex : 1990) l'année de naissance de votre enfant ?"
// );
// let mAge = prompt(
//   "Quelle est le mois (en nombre, ex : 12) de naissance de votre enfant ?"
// );
// let dAge = prompt(
//   "Quelle est le jour (en nombre, ex : 14) de naissance de votre enfant ?"
// );
//--------------
//Test unitaire
let yAge = 1989;
let mAge = 1;
let dAge = 13;
//if almost 1 input isNaN
if (isNaN(yAge) || isNaN(mAge) || isNaN(dAge)) {
  alert(
    "Un nombre est attendu pour votre date de naissance, veuillez réessayer."
  );
} else {
  //   yAge.trim();
  //   mAge.trim();
  //   dAge.trim();
  //   parseInt(yAge);
  //   parseInt(mAge);
  //   parseInt(dAge);
  if (
    yAge === "" ||
    mAge === "" ||
    dAge === "" ||
    yAge === " " ||
    mAge === " " ||
    dAge === " "
  ) {
    alert("Veuillez saisir une information.");
  } else {
    let actDay = new Date();
    // console.log(actDay);

    let yAct = actDay.getFullYear();
    // console.log(yAct);
    let mAct = actDay.getMonth();
    // console.log(mAct);
    let dAct = actDay.getDate();
    // console.log(dAct);

    let difDay = dAct - dAge;
    if (Math.sign(difDay) == -1) {
      // difDay= 31+difDay;
      difDay = Math.abs(difDay);
      mAct--;
    }

    let difMonth = mAct + 1 - mAge;
    if (Math.sign(difMonth) == -1) {
      difMonth = Math.abs(difMonth);
      yAct--;
    }

    let difAge = yAct - yAge;

    // console.log(difAge, difMonth, difDay);
    console.log(
      "age de la personne : " +
        difAge +
        " ans " +
        difMonth +
        " mois et " +
        difDay +
        " jour(s)."
    );
    if (mAct + 1 == mAge && dAct == dAge) {
      console.log("Bon anniversaire!");
    }
    // console.log(difAge);
    // console.log(dAct);
  }
}
//----------------------------------------------
//Clock update
// document.
// const h = document.getElementById("houre");
// const m = document.getElementById("minutes");
// const s = document.getElementById("secondes");

// console.log(h, m, s);
//---------------------------------------
//Parité
// let choice = prompt("Veuillez rentrer un nombre! Est-il pair?");
function isEven(e) {
  if (e % 2 === 1) {
    console.log("Le nombre est impair.");
  } else {
    console.log("Le nombre est pair.");
  }
}
// isEven(choice);
//-------------------------------------------
//Remise if +150 =>return 1%
// let price = prompt("Taper le montant à payer : ");
let price = 151;
if (price > 150) {
  //   console.log(price * 0.01);
  price = price - price * 0.01;
}
// console.log(price);
//----------------------------------------
//Factoriel
let input = prompt("Entrez un chiffre pour connaitre son factoriel");
// let input = 4;
let inFact = 1;

function fact(e) {
  //   for (let i = e; i > 0; i--) {
  //     inFact *= i;
  //   }
  //   let flag = 1;
  if (e == 0) {
    inFact = 1;
  }
  for (let i = e; i > 0; i--) {
    let result;
    inFact *= i;
    for (let j = i - 1; j > 0; j--) {
      result += inFact;
    }
  }
  //   while (0 < e) {
  //     let add = e;
  //     while (0 < e - 1) {
  //       inFact *= e;
  //       e--;
  //       add += inFact;
  //     }
  //     console.log(add);
  //     e--;
  //   }

  return inFact;
}
fact(input);
console.log(inFact);
//
