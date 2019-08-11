"use strict";

document.getElementById("button").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #3');

  var userName = prompt("Enter Name");
  var userAge = prompt("Enter Age");
  var user = {
    name: userName,
    age: userAge,
  };

  console.log (user);
  alert ("Results Logged into Console");

}

document.getElementById("button2").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #3.2');

  var arr = [];
  var num = prompt("While Method - Enter a Value");

  //while

  function arrayWhile() {
    while (arr.length <= 4) {
      //if (arr.length < 4) {
        var num = prompt("While Method - Enter a Value");
        arr.push(num);
      //} else {
        //arr.push(num);
      //}
    }
  }

  if (num == "") {
    alert("Enter a Value First");
    return false;
    } else {
    arrayWhile();
    }

  console.log ("While Method Array is:" + " " + arr.reverse());
  alert ("Results Logged into Console");
  arr.length = 0;

//for

for (var i = 0; i <= 4; i++) {
  var num = prompt("For Method - Enter a Value");
  arr.push(num);
}

console.log ("For Method Array is:" + " " + arr.reverse());
alert ("Results Logged into Console");

}

document.getElementById("button3").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #3');

  var userName = prompt("Enter Name");
  var userAge = prompt("Enter Age");
  var user = {
    name: userName,
    age: userAge,
  };

  console.log (user);
  alert ("Results Logged into Console");

}
