"use strict";

console.log ('==========');
console.log ('Assignment #5');
console.log ('Click on Toggle Block to create an element');

var button = document.getElementById("button").addEventListener("click", toggleBlock);
var firstScreen = document.getElementById("first-screen");

function toggleBlock () {
  var block = firstScreen.appendChild(document.createElement('div'));
  block.innerText = "I'm a block";
  block.id = "new-block";
  block.classList.add('new-block');
  document.getElementById("button").removeEventListener("click", toggleBlock);
}

console.log ('==========');
console.log ('Assignment #5.2');

var idSelector = prompt('Search for an ID on this page:');
var getId = document.getElementById(idSelector);

if (getId) {
  alert("Look into console");
  console.log ("Requested element:");
  console.log (getId);
} else {
  alert("There is no such id:" + " " + idSelector);
  console.log ("No ID found");
}

console.log ('==========');
console.log ('Assignment #5.3');

var navLink = document.getElementsByClassName("nav__link");
navLink[0].classList.add("nav__link--red", "nav__link--italic");

console.log ('Nav changed with classList.add');
