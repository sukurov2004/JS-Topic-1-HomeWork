
var questionNumber = prompt("Hansı sualı cavablandırmaq istəyirsən? (1-5)");

if (questionNumber == 1) {
  var answer = prompt("1) Dünyanın ən böyük okeanı hansıdır?");
  if (answer === "pacific") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Pacific");
  }

} else if (questionNumber == 2) {
  var answer = prompt("2) Günəş sistemində neçə planet var?");
  if (Number(answer) === 8) {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: 8");
  }

} else if (questionNumber == 3) {
  var answer = prompt("3) İnsan bədənində neçə sümük var?");
  if (Number(answer) === 206) {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: 206");
  }

} else if (questionNumber == 4) {
  var answer = prompt("4) Dünyanın ən uzun çayı hansıdır?");
  if (answer.toLowerCase() === "nile") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Nile");
  }

} else if (questionNumber == 5) {
  var answer = prompt("5) Dünyanın ən yüksək dağı hansıdır?");
  if (answer.toLowerCase() === "everest") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Everest");
  }

} else {
  alert("Yanlış seçim etdin. 1 ilə 5 arasında rəqəm daxil et.");
}
