// alert("I'm loaded just fine!");
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [randomChosenColor];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
}

var randomChosenColor = buttonColors[randomNumber];

while (randomChosenColor === $("button").attr("id")) {
    $(this).fadeOut(25).fadeIn(25);
    var audio = new Audio("sounds/" + this + ".mp3");
    audio.play();
}





/* TO DO LIST:
// need to select buttonID that matches randomChosenColor on line 10




*/