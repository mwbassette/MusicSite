// alert("I'm loaded just fine!");
function produceRandomNumber() {
    return Math.floor(Math.random() * 4);
}

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [randomChosenColor];
var randomNumber = produceRandomNumber();
var randomChosenColor = buttonColors[randomNumber];



console.log(buttonColors);
console.log(randomNumber);
console.log(randomChosenColor);

if (randomChosenColor === $("button").attr("id")) {
    $(this).fadeOut(25).fadeIn(25);
    var audio = new Audio("sounds/" + this + ".mp3");
    audio.play();
}





/* TO DO LIST:
// need to select buttonID that matches randomChosenColor on line 10




*/