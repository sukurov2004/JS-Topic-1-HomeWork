var questionNumber = prompt("Hansı sualı cavablandırmaq istəyirsən? (1-8)");


// !Sual-1
if (questionNumber == 1) {
  var answer = prompt("1) Dünyanın ən böyük okeanı hansıdır?");
  if (answer == "pacific") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Pacific");
  }
}
// !Sual-2
 else if (questionNumber == 2) {
  var answer = prompt("2) Günəş sistemində neçə planet var?");
  if (Number(answer) == 8) {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: 8");
  }
} 
// !Sual-3
else if (questionNumber == 3) {
  var answer = prompt("3) İnsan bədənində neçə sümük var?");
  if (Number(answer) == 206) {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: 206");
  }
}
// !Sual-4
 else if (questionNumber == 4) {
  var answer = prompt("4) Dünyanın ən uzun çayı hansıdır?");
  if (answer.toLowerCase() == "nile") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Nile");
  }
}
// !Sual-5
 else if (questionNumber == 5) {
  var answer = prompt("5) Dünyanın ən yüksək dağı hansıdır?");
  if (answer.toLowerCase() == "everest") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Everest");
  }
}
// !Sual-6
 else if (questionNumber == 6) {
  var answer = prompt("6) Dünyanın ən böyük gölü hansıdı?");
  if (answer.toLocaleLowerCase() == "xəzər") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Xəzər");
  }
}
// !Sual-7
else if (questionNumber == 7) {
  var answer = prompt("7) Azərbaycan bayrağında neçə rəng var?");
  if (answer.toLocaleLowerCase() == 3) {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: 3");
  }
}
// !Sual-8
else if (questionNumber == 8) {
  var answer = prompt("8) Dünyanın ən böyük okeanı hansıdır?");
  if (answer.toLocaleLowerCase() == "sakit okean") {
    alert("Düz cavab!");
  } else {
    alert("Səhv. Düz cavab: Sakit okean");
  }
}else {
  alert("Yanlış seçim etdin. 1 ilə 8 arasında rəqəm daxil et.");
}
