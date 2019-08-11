"use strict";

document.getElementById("button").onclick = function () {

  console.log ('=========='); //I have no idea how to do this one, nothing works even from the web
  console.log ('Assignment #4.2');

  var str = "Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.";

  function titleCase() {
  var toArr = str.toLowerCase().split(" ");
  var result = [];
  for(var i=0; i < toArr.length ; i++){
    var val = toArr[i];
    result.push(val.replace(val[0], val[0].toUpperCase())) ;
  }
  return result.join(" ");
}

console.log (titleCase());

}


document.getElementById("button2").onclick = function () {

  console.log ('==========');
  console.log ('Assignment #4.3');

  console.log ("NAILED IT LOL! Actually no, just kidding:");

  var text = "В лесу была хорошая погода. Кукушка куковала.";
  console.log (text);

  function cut() {

    var textCut = text.split(".");
    return textCut[0] + ".";

  }

  console.log (cut());

  console.log ('==========');
  console.log ("Second variant");

  var text = "В лесу была хорошая погода. Кукушка куковала.";
  console.log (text);

  function cutTwo() {

    var textCut = text.slice(0, 27);
    return textCut;

  }

  console.log (cutTwo());



}
