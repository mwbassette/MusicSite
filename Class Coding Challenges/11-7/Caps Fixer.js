var name = prompt("What is your name?");
var capLetter = name.slice(0,1);
var firstNewCapLetter = capLetter.toUpperCase();
var otherNameLetters = name.slice(1,name.length);
var capsMinimizer = otherNameLetters.toLowerCase();
alert("Hello, " + firstNewCapLetter + capsMinimizer + ".");