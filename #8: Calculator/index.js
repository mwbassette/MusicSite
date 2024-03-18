//variables:
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const display = document.querySelector(".display-area");

let currentNumber = '';
let previousNumber = '';
let calculation = '';
let operation = null;

//event listeners:
numberButtons.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        appendNumber(numBtn.innerText);
    })
})
operatorButtons.forEach(oprBtn => {
    oprBtn.addEventListener('click', () => {
        handleSelectedOperation(oprBtn.innerText);
    })
})
clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', calculate);

document.addEventListener('keydown', (e) => {
    operatorButtons.forEach(oprBtn => {
        if (e.key === oprBtn.innerText) {
            handleSelectedOperation(oprBtn.innerText);
        }
    })
    if (isFinite(e.key)) 
        {appendNumber(e.key)} 
    else if ((previousNumber !== '') && (e.key === 'Enter' || '=')) 
        {calculate()}
    else if (e.key === 'Backspace' || 'c') 
        {clearDisplay()}
    else 
        {showErrorMessage()}
})

//start-up text:
display.innerText = randomGreeting()

//essential functions:
function appendNumber(newNum) {
    currentNumber = currentNumber.toString() + newNum.toString()
    limitNumberCount()
    updateDisplay()
}
function handleSelectedOperation(selectedOperation) {
    if (currentNumber === '') return
    if (previousNumber !== '') 
        {calculate()}
    operation = selectedOperation
    previousNumber = currentNumber
    currentNumber = ''
}
function calculate() {
    const prev = parseFloat(previousNumber)
    const cur = parseFloat(currentNumber)
    if (isNaN(prev) || isNaN(cur)) return
    switch (operation) {
        case '/':
            calculation = prev / cur;
            break;
        case '*':
            calculation = prev * cur;
            break;
        case '-':
            calculation = prev - cur;
            break;
        case '+':
            calculation = prev + cur;
            break;
        default:
            return;
    }
    currentNumber = calculation
    operation = undefined
    previousNumber = ''
    limitNumberCount()
    updateDisplay()
}    
function clearDisplay() {
    display.innerText = ''
    currentNumber = ''
    previousNumber = ''
}
function updateDisplay() {
    display.innerText = currentNumber
}

//optimization functions:
function showErrorMessage() {
    display.innerText = 'Error, NaN'
}
function limitNumberCount() {
    if (currentNumber.length > 13) 
        {currentNumber = currentNumber.substring(0,13)}
    if (calculation.length > 13) 
        {calculation = calculation.substring(0,13)}
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
    const ranNum = Math.floor(Math.random() * 8)
    return greetingMessages[ranNum]
}

//Stuff I'd like to add:
//1. Operator button keydown event listeners -- finished
//2. Decimal key and function handlers & html button
//3. One character backspace key & html button
//4. Other basic mathematical operations like squares, square roots, exponents, etc.

//Problems:
//1. Can't handle/round excessively long decimal cases - haven't worked out parseFloat() and toFixed() e.g. divide 888 by 9, numbers are outside display
//2. Any non-integer key will either clear the display, not just backspace and c
//3. Error messages don't display
