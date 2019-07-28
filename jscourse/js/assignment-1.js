"use strict";

document.getElementById("button").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #1');

  var num = 5;
  var str = "five";
  var bool = true;
  var zero = null;
  var und = undefined;
  //bonus
  var obj = {};

  alert ("Type of" + " " + num + " " + "is" + " " + typeof num);
  alert ("Type of" + " " + str + " " + "is" + " " + typeof str);
  alert ("Type of" + " " + bool + " " + "is" + " " + typeof bool);
  alert ("Type of" + " " + zero + " " + "is" + " " + typeof zero);
  alert ("Type of" + " " + und + " " + "is" + " " + typeof und);
  alert ("Bonus - Type of" + " " + obj + " " + "is" + " " + typeof obj);

  alert ("Results Logged into Console");

  console.log ("Type of" + " " + num + " " + "is" + " " + typeof num);
  console.log ("Type of" + " " + str + " " + "is" + " " + typeof str);
  console.log ("Type of" + " " + bool + " " + "is" + " " + typeof bool);
  console.log ("Type of" + " " + zero + " " + "is" + " " + typeof zero);
  console.log ("Type of" + " " + und + " " + "is" + " " + typeof und);
  console.log ("Bonus - Type of" + " " + obj + " " + "is" + " " + typeof obj);

}

document.getElementById("button2").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #1.2');

  var num = prompt("Enter a Number");
  alert ("Your Number" + " " + num + " " + "Squared is" + " " + Math.pow(num, 2)); //found this, decided to try, num*num also works
  alert ("Results Logged into Console");
  console.log("Your Number" + " " + num + " " + "Squared is" + " " + Math.pow(num, 2));

}
