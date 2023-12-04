// First idea (doesn't work):

// var allButtons = document.querySelectorAll("button")
// function handleClick() {
//     allButtons.addEventListener("click", clicker () {
//         alert("I got clicked!");
//     });
// }
// document.querySelectorAll("button").addEventListener("click", clicker () {
//     alert("I got clicked!");
// })



//Second Idea (course solution):

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default: console.log(buttonInnerHTML);
        }
    })
}



// My Solution:
// var allButtons = document.querySelectorAll(".drum");
// function handleClick() {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

// allButtons.forEach("button"(addEventListener("click", handleClick)));
  