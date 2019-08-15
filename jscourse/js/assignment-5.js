"use strict";

console.log ('==========');
console.log ('Assignment #5');

document.getElementById("button").addEventListener("click", toggleBlock);

var firstScreen = document.getElementById("first-screen");

function toggleBlock () {
  var block = firstScreen.appendChild(document.createElement('div'));
  block.innerHTML = "I'm a block";
  block.classList.add('new-block');
}

console.log ('==========');
console.log ('Assignment #5.2');

var idSelector = 'button';

console.log (document.getElementById(idSelector));
