var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keydown", function() {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        gameStarted = true;
        processNextSequence();
    }
});

function processNextSequence() {
    level++
    $("#level-title").text("Level " + level);
    var zeroToThreeRandomNumber = Math.floor(Math.random * 4);
    var randomChosenColor = buttonColors[zeroToThreeRandomNumber];

}

function playSound(name) {
    var buttonAudio = new Audio("sounds/" + name + ".mp3");
    buttonAudio.play();
}

function animateButton() {
    $(".btn").on("click", function() {
        
    })
}

function gameOverSequence() {

}

function resetTheGame() {

}

