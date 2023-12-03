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

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked!");
//     })
// }



// My Solution:
var allButtons = document.querySelectorAll(".drum");
function handleClick() {
    alert("I got clicked!");
}

allButtons.forEach("button"(addEventListener("click", handleClick)));
  