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
