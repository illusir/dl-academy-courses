"use strict";

console.log ('==========');
console.log ('Assignment #6');

var button = document.getElementById("button");

button.addEventListener("click", change);

function text() {
  button.innerText = "That's All!";
  button.style = "text-decoration: none; cursor: not-allowed;"
  console.log ('Reload to try again');
  }

function changeThree() {
  button.style = "background-color: #050505; text-decoration: line-through;";
  button.innerText = "Three";
  button.addEventListener("click", text);
  }

function changeTwo() {
  button.style = "background-color: grey; font-style: italic;";
  button.innerText = "Two";
  button.addEventListener("click", changeThree);
  }

function change() {
  button.style = "background-color: blue; font-weight: bold;";
  button.innerText = "One";
  button.addEventListener("click", changeTwo);
}

console.log ('==========');
console.log ('Assignment #6.2');

var button2 = document.getElementById("button2").addEventListener("click", toggleBlock);
var firstScreen = document.getElementById("first-screen");


function nope() {
  document.getElementById("button2").innerText = "That's All!";
  document.getElementById("button2").style = "cursor: not-allowed;"
  console.log ('Reload to try again');
  }

function toggleBlock () {
  var block = firstScreen.appendChild(document.createElement('div'));
  block.innerText = "I'm a block";
  block.id = "new-block2";
  block.classList.add('new-block');
  //document.getElementById("button2").removeEventListener("click", toggleBlock);
  document.getElementById("button2").removeEventListener("click", toggleBlock);
  document.getElementById("button2").innerText = "Toggled";
  document.getElementById("button2").style = "cursor: not-allowed;";
}
