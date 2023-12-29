var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).keydown(function() {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        processNextSequence();
        gameStarted = true;
    }
});

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function processNextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Good job!");  

        if (userClickedPattern.length === gamePattern.length) {
        console.log("This level is finished.");
        setTimeout(function() {
            processNextSequence();
        }, 1000);
        }
    }    
    else {
        console.log("wrong");
        $("#level-title").text("GAME OVER! Refresh To Try Again!");
    }
}

function playSound(name) {
    var buttonAudio = new Audio("sounds/" + name + ".mp3");
    buttonAudio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}



// alert("I'm loaded just fine!");

// $(document).keydown(function(event) {
//     if (gamePattern.length === 0) {
//         $("#level-title").text("Level 0");
//         processNextSequence();
//     }
// })

// $(".btn").on("click", function() {
//     var userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor); 
//     playSound(userChosenColor);
//     var clickedButtonAudio = new Audio("sounds/" + userChosenColor + ".mp3");
//     clickedButtonAudio.play();
// });
// 12/20/23 - originally this was all part of one giant 'playSound()' function,
// but the course separates these concerns.



// console.log(userClickedPattern);


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
// function otherRepetitiveAndTerriblePlaceholderIdeaForNextSequenceProcess() {
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