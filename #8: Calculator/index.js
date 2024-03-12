const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const display = document.querySelector(".display-area");

let currentNumber = '';
let previousNumber = '';




clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', calculate);


numberButtons.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        appendNumber(numBtn.innerText);
        // updateDisplay();
    });
  });

function appendNumber(newNum) {
    currentNumber = currentNumber.toString() + newNum.toString();
    display.textContent = currentNumber;
}


function clearDisplay() {
    display.textContent = "";
}
function updateDisplay() {

}
function calculate() {
// return evaluation of: (num1 operator num2)
}



// IDEA: RNG greeting text upon refresh
// e.g. "Let's do some math" "Math rules."
// "No math, no life"