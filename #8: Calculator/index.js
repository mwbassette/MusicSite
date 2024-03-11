const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const display = document.querySelector(".display-area");
const num1 = [];
const num2 = "";




clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', calculate);
numberButtons.addEventListener('click', updateDisplay);
// numberButtons.forEach((number) => {
//     display.textContent = number
// });

function clearDisplay() {
    display.textContent = "";
}
function updateDisplay() {
    numberButtons.forEach((number) => {
        num1.push(number);
        display.textContent = num1;
    })
}
function calculate() {
// return evaluation of: (num1 operator num2)
}



// IDEA: RNG greeting text upon refresh
// e.g. "Let's do some math" "Math rules."
// "No math, no life"