//done
var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var gameStarted = false;
var level = 0;

//done
$(document).on("keydown", function() {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        startNextLevel();
        gameStarted = true;
    }
});

//done
$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animateButton(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

//done
function startNextLevel() {
    userClickedPattern = [];
    level++
    $("#level-title").text("Level " + level);
    var zeroToThreeRandomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[zeroToThreeRandomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

//done
function checkAnswer(currentAnswer) {
    if (userClickedPattern[currentAnswer] === gamePattern[currentAnswer]) {
        if (gamePattern.length === userClickedPattern.length) {
            console.log("Good Job!");
            setTimeout(function() {
                startNextLevel();
            }, 1000);
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
    $("#" + clickedButton).addClass("pressed")
    setTimeout(() => {
        $("#" + clickedButton).removeClass("pressed");
    }, 100);
}
            
//done
function gameOverSequence() {
    $("#level-title").text("GAME OVER. Press Any Key To Continue.");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 300);
}

//done
function resetTheGame() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    gameStarted = false;    
}