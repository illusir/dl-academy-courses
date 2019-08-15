"use strict";

document.getElementById("button").onclick = function () {

  alert('Look into console');

  console.log ('==========');
  console.log ('Assignment #4.2');

  var text = "Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.";

  console.log("Wrong text -" + " " + text);

  function titleCase() {
    var toArr = text.toLowerCase().split(".");
    var result = [];
    for(var i=0; i < toArr.length - 1; i++){ //here get rid of empty space with -1
      var val = toArr[i].trim() + "."; //get rid of white spaces and add dots to the end of sentences
      result.push(val.replace(val[0], val[0].toUpperCase())); //replace first letters with capital letters
    }
  return result.join(" ");
  }

  console.log ("Corrected text -" + " " + titleCase());

}

document.getElementById("button2").onclick = function () {

  alert('Look into console');

  console.log ('==========');
  console.log ('Regex?'); //this one allows to put capital letters after exclamation marks and such - !? etc. Shamelessly stole match parameters from the Internet.

  var text = "Саша купил машину! он использует ее каждый день? саша очень рад своей покупке.";

  console.log("Wrong text -" + " " + text);

  function titleCase() {
    var toArr = text.toLowerCase().match(/[^.?!]+[.!?]+[\])'"`’”]*/g);
    var result = [];
    for(var i=0; i < toArr.length; i++){
      var val = toArr[i].trim(); //get rid of white spaces
      result.push(val.replace(val[0], val[0].toUpperCase())); //replace first letters with capital letters
    }
  return result.join(" ");
  }

  console.log ("Corrected text -" + " " + titleCase());

}

document.getElementById("button3").onclick = function () {

  alert('Look into console');

  console.log ('==========');
  console.log ('Assignment #4.3');

  console.log ("NAILED IT LOL! Actually no, just kidding:");

  var text = "В лесу была хорошая погода. Кукушка куковала.";
  console.log (text);

  function cut() {

    var textCut = text.split(".")[0]; //split variant
    return textCut + ".";

  }

  console.log (cut());

  console.log ('==========');
  console.log ("Second variant");

  var text = "В лесу была хорошая погода. Кукушка куковала.";
  console.log (text);

  function cutTwo() {

    var textCut = text.slice(0, text.indexOf('.')); //slice variant
    return textCut + ".";

  }

  console.log (cutTwo());

  console.log ('==========');
  console.log ("Third variant");

  var text = "В лесу была хорошая погода. Кукушка куковала.";
  console.log (text);

  function cutThree() {

    var textCut = text.substring(0, text.indexOf('.')); //substring variant
    return textCut + ".";

  }

  console.log (cutThree());

}
