"use strict";

document.getElementById("button").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #2');

  var numOne = 5;
  var numTwo = 3;
  var stringOne = "Five";
  var stringTwo = "Foxtrot"
  var stringThree = "5";
  var bool = false;
  var zero = null;
  var und = undefined;

  if (numOne == numTwo) {
    alert ("Number" + " " + numOne + " " + "is Equal to" + " " + numTwo);
    console.log ("Number" + " " + numOne + " " + "is Equal to" + " " + numTwo);
  } else if (numOne > numTwo) {
    alert ("Number" + " " + numOne + " " + "is Bigger than" + " " + numTwo);
    console.log ("Number" + " " + numOne + " " + "is Bigger than" + " " + numTwo);
  } else {
    alert ("Number" + " " + numOne + " " + "is Smaller than" + " " + numTwo);
    console.log ("Number" + " " + numOne + " " + "is Smaller than" + " " + numTwo);
  }

  if (stringOne == stringTwo) {
    alert ("Word" + " " + stringOne + " " + "is Equal to" + " " + stringTwo);
    console.log ("Word" + " " + stringOne + " " + "is Equal to" + " " + stringTwo);
  } else if (stringOne > stringTwo) {
    alert ("Word" + " " + stringOne + " " + "is Bigger than" + " " + stringTwo);
    console.log ("Word" + " " + stringOne + " " + "is Bigger than" + " " + stringTwo);
  } else {
    alert ("Word" + " " + stringOne + " " + "is Smaller than" + " " + stringTwo);
    console.log ("Word" + " " + stringOne + " " + "is Smaller than" + " " + stringTwo);
  }

  if (zero == und) {
    alert ("For == Null" + " " + "is Equal to" + " " + "Undefined");
    console.log ("For == Null" + " " + "is Equal to" + " " + "Undefined");
  } else {
    alert ("For == Null" + " " + "is NOT Equal to" + " " + "Undefined");
    console.log ("For == Null" + " " + "is NOT Equal to" + " " + "Undefined");
  }

  if (zero === und) {
    alert ("For === Null" + " " + "is Equal to" + " " + "Undefined");
    console.log ("For === Null" + " " + "is Equal to" + " " + "Undefined");
  } else {
    alert ("For === Null" + " " + "is NOT Equal to" + " " + "Undefined");
    console.log ("For === Null" + " " + "is NOT Equal to" + " " + "Undefined");
  }

  if (numOne == stringThree) {
    alert ("Number" + " " + numOne + " " + "is Equal to String" + " " + stringThree);
    console.log ("Number" + " " + numOne + " " + "is Equal to String" + " " + stringThree);
  } else if (numOne > numTwo) {
    alert ("Number" + " " + numOne + " " + "is Bigger than String" + " " + stringThree);
    console.log ("Number" + " " + numOne + " " + "is Bigger than String" + " " + stringThree);
  } else {
    alert ("Number" + " " + numOne + " " + "is Smaller than String" + " " + stringThree);
    console.log ("Number" + " " + numOne + " " + "is Smaller than String" + " " + stringThree);
  }

  if (bool == zero) {
    alert (bool + " " + "is Equal to" + " " + zero);
    console.log (bool + " " + "is Equal to" + " " + zero);
  } else {
    alert (bool + " " + "is NOT Equal to" + " " + zero);
    console.log (bool + " " + "is NOT Equal to" + " " + zero);
  }

  alert ("Results Logged into Console");

  }

document.getElementById("button2").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #2.2');

  var numOne = prompt("First Number");
  var numTwo = prompt("Second Number");

  function compare() {
      if (numOne == numTwo) {
      alert ("First Number" + " " + numOne + " " + "is Equal to Second Number" + " " + numTwo);
      console.log ("First Number" + " " + numOne + " " + "is Equal to Second Number" + " " + numTwo);
    } else if (numOne > numTwo) {
      alert ("The Biggest number is the First -" + " " + numOne);
      console.log ("The Biggest number is the First -" + " " + numOne);
    } else {
      alert ("The Biggest number is the Second -" + " " + numTwo);
      console.log ("The Biggest number is the Second -" + " " + numTwo);
    }
  }

  if ((numOne && numTwo != "") && (isNaN(numOne) == false) && (isNaN(numTwo) == false)) {
    compare();
    alert ("Results Logged into Console");
  } else {
    alert ("One of fields is empty or is not a number. Enter a number");
    var numOne = prompt("First Number");
    var numTwo = prompt("Second Number");
    compare();
  }

}

//not validated for numbers!
document.getElementById("button3").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #2.3');

  var letterOne = prompt("First Letter");
  var letterTwo = prompt("Second Letter");

  letterOne = letterOne.toLowerCase();
  letterTwo = letterTwo.toLowerCase();

  function compare() {
      if (letterOne == letterTwo) {
      alert ("First Letter" + " " + letterOne + " " + "is Equal to Second Letter" + " " + letterTwo);
      console.log ("First Letter" + " " + letterOne + " " + "is Equal to Second Letter" + " " + letterTwo);
    } else if (letterOne < letterTwo) {
      alert ("The Former Letter is -" + " " + letterOne);
      console.log ("The Former Letter is -" + " " + letterOne);
    } else {
      alert ("The Former Letter is -" + " " + letterTwo);
      console.log ("The Former Letter is -" + " " + letterTwo);
    }
  }

  compare();

}
