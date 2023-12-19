// alert("I'm loaded just fine!");


var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function colorCycleProcess() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var buttonAudio = new Audio("sounds/" + randomChosenColor + ".mp3");
    buttonAudio.play();
}

$(".btn").on("click", function(clicked_button) {
    var userChosenColor = $(clicked_button).attr("id");
    userClickedPattern.push(userChosenColor);
    
});
console.log(userClickedPattern);

// It seems click() is deprecated, find a way to get the userChosenColor
// console logged and appended to the userClickedPattern












// function produceRandomNumber() {
//     return Math.floor(Math.random() * 4);
// }

// console.log(buttonColors);
// console.log(randomNumber);
// console.log(randomChosenColor);
// console.log($("button#red"));

// if (randomChosenColor === $("button").attr("id")) {
//     $(this).fadeOut(25).fadeIn(25);
//     var audio = new Audio("sounds/" + this + ".mp3");
//     audio.play();
// }
// function otherRepetitiveIdeaForOneColorCycleProcess() {
//     if (randomChosenColor === $("#red")) {
//         $("#red").fadeOut(25).fadeIn(25);
//         var redAudio = new Audio("sounds/red.mp3");
//         redAudio.play();
//     }
//     if (randomChosenColor === $("#blue")) {
//         $("#blue").fadeOut(25).fadeIn(25);
//         var blueAudio = new Audio("sounds/blue.mp3");
//         blueAudio.play();
//     }
//     if (randomChosenColor === $("#green")) {
//         $("#green").fadeOut(25).fadeIn(25);
//         var greenAudio = new Audio("sounds/green.mp3");
//         greenAudio.play();
//     }
//     if (randomChosenColor === $("#yellow")) {
//         $("#yellow").fadeOut(25).fadeIn(25);
//         var yellowAudio = new Audio("sounds/yellow.mp3");
//         yellowAudio.play();
//     }
// }





/* TO DO LIST:
need to select buttonID that matches randomChosenColor on line 10




*/