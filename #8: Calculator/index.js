const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const display = document.querySelector(".display-area");

let currentNumber = '';
let previousNumber = '';
let operation = null;

numberButtons.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        appendNumber(numBtn.innerText);
    });
});
operatorButtons.forEach(oprBtn => {
    oprBtn.addEventListener('click', () => {
        handleSelectedOperation(oprBtn.innerText);
    })
})
clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', calculate);
document.addEventListener('keydown', (e) => {
    if (isFinite(e.key)) {
        appendNumber(e.key);
    } else if (previousNumber !== '') {
        calculate()
    } else if (e.key = "Backspace" || "c") {
        clearDisplay();
    } else if (e.key = "Enter") {
        calculate();
    } else {
        clearDisplay();
        showErrorMessage();
    }
})

display.innerText = randomGreeting();


function appendNumber(newNum) {
    currentNumber = currentNumber.toString() + newNum.toString();
    updateDisplay();
    limitNumberCount();
}
function handleSelectedOperation(selectedOperation) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = selectedOperation;
    previousNumber = currentNumber;
    currentNumber = '';
}
function calculate() {
    let calculation;
    const prev = parseFloat(previousNumber);
    const cur = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(cur)) return;
    switch (operation) {
        case '÷':
            calculation = prev / cur;
            break;
        case '×':
            calculation = prev * cur;
            break;
        case '−':
            calculation = prev - cur;
            break;
        case '+':
            calculation = prev + cur;
            break;
        default:
            return;
    }
    currentNumber = calculation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}    
function clearDisplay() {
    display.innerText = '';
    currentNumber = '';
    previousNumber = '';
}
function showErrorMessage() {
    display.innerText = 'Error, NaN'
}
function updateDisplay() {
    display.innerText = currentNumber;
}
function limitNumberCount() {
    if (currentNumber.length > 13) {
        currentNumber = currentNumber.substring(0,13);
    }
}
function randomGreeting() {
    let greetingMessages = [
        "Yo.. What's up?",
        "Let's do math!",
        "Math rules.",
        "No math, no life.",
        "Life+Math=Love",
        "Michael is cool.",
        "Hi, JJ!",
        "BOOBS"
    ]
    var ranNum = Math.floor(Math.random() * 8);
    return greetingMessages[ranNum];
}