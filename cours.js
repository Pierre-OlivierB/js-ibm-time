// console.log("test");
//-------------------------------
//while / do while
let bol = 10;
do {
  // console.log("je mange");
  bol--;
} while (bol > 6);

bol = 10;
while (bol > 6) {
  // console.log("je bois");
  bol--;
}
//switch
var test = "10";
// var test = 10;
switch (test) {
  case 10:
    console.log("c'est sans les quotes");
    break;
  case "10":
    console.log("c'est bien avec les quotes");
    break;
  default:
    console.log("test");
    break;
}

var lesMois_arr = [
  "",
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
var leMois = 2;
var txt = "";
switch (leMois) {
  case 1:
    txt = "Envoyer les voeux.";
    break;
  case 2:
    txt = "Préparer WE au ski.";
    break;
  case 3:
    txt = "Ménage de printemps.";
    break;
  case 4:
    txt = "Invitation anniversaire le 16.";
    break;
  case 5:
    txt = "Révision avant examen.";
    break;
  case 6:
    txt = "Examen...";
    break;
  case 7:
  case 8:
    txt = "Les Vacances...";
    break;
  case 9:
    txt = "Faire les vendanges";
    break;
  case 10:
    txt = "Préparer la rentrée";
    break;
  case 11:
    txt = "Vérifier déguisement Halloween";
    break;
  case 12:
    txt = "Ne pas acheter les cadeaux au dernier moment.";
    break;
  default:
    txt = "Erreur sur le mois.";
}
// alert("Pour le mois de " + lesMois_arr[leMois] + " penser à : " + txt);

//---------------------------------------------------
//Quizz

// var art = 5;
// var artPlus = 5.6;
// var tot = art + art * 0.056;
// console.log(tot);
// var art2 = 2.6;
// var artMinus = 2.2;
// var tot2 = art2 - art2 * 0.022;
// console.log(tot2);
// console.log(Math.round(61.213213, 2));

// var date = new Date();
// console.log(date.now());

//-----------------------------------
//For
// for (var i = 0; i < 5; i++) {
//   console.log("début i=" + i);
//   console.log("Processing.");
//   console.log("fin i=" + i);
//   console.log("-------------");
// }
// console.log("Après accolade i=" + i);

for (let i = 5; i > 0; i--) {
  console.log("décrémentation i=" + i);
}
//-----------------------------------
//
//-----------------------------
//trash
//------------------------
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }
// var table = ["test1", "test2", "test3"];
// console.log(table);
// console.log(...table);
// var table2 = { test1: "test2", test4: "test5" };
// // table,table2;
// console.log(table, table2);
// const testTarget = document.getElementById("test");
// console.log(testTarget.outerText);
// var testClass = document.querySelectorAll(".tesclass");
// console.log(testClass[0]);
