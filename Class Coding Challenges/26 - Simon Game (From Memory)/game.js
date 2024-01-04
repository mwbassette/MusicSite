var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var gameStarted = false;
var level = 0;

//done
$(document).on("keydown", function() {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        gameStarted = true;
        processNextSequence();
    }
});

$(".btn").on("click", function() {
    $(this).push(userClickedPattern);
    checkAnswer(this);
    playSound(this);
    animateButton(this);
    processNextSequence();
})

function processNextSequence() {
    level++
    $("#level-title").text("Level " + level);
    var zeroToThreeRandomNumber = Math.floor(Math.random * 4);
    var randomChosenColor = buttonColors[zeroToThreeRandomNumber];
    gamePattern.push(randomChosenColor);
    checkAnswer();

}

function checkAnswer(currentAnswer) {
    if (gamePattern.length === userClickedPattern.length) {
        if (gamePattern[-1] === userClickedPattern[-1]) {
            console.log("Good Job!");
            setTimeout(() => {
                processNextSequence();
            }, 100);
        }
    } else {
        console.log("Sorry, you suck.");
        gameOverSequence();
        resetTheGame();
    }
}

//done
function playSound(name) {
    var buttonAudio = new Audio("sounds/" + name + ".mp3");
    buttonAudio.play();
}

//done
function animateButton(clickedButton) {
    $(".btn").on("click", function() {
        $("#" + clickedButton).addClass("pressed").setTimeout(() => {
            removeClass("pressed");
        }, 100);
    })
}

//done
function gameOverSequence() {
    $("#level-title").text("GAME OVER. Press Any Key To Continue.");
    playSound("wrong");
    $("body").addClass("game-over").setTimeout(() => {
        removeClass("game-over");
    }, 100);
}

//done
function resetTheGame() {
    gamePattern = [];
    level = 0;
    gameStarted = false;
    userClickedPattern = [];
}

