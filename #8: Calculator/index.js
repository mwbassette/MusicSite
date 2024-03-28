//variables:
const allButtons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const backspaceButton = document.querySelector(".backspace");
const powerButton = document.querySelector(".power");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const posNegButton = document.querySelector(".posNeg");
const display = document.querySelector(".display-area");

let currentNumber = '';
let previousNumber = '';
let calculation = '';
let operation = null;

//click event listeners:
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
powerButton.addEventListener('click', toggleCalcPower);
backspaceButton.addEventListener('click', removeLastCharacter);
decimalButton.addEventListener('click', appendDecimal);
posNegButton.addEventListener('click', togglePosNegNumber)
equalButton.addEventListener('click', calculate);

//keydown event listeners:
document.addEventListener('keydown', (e) => {
    console.log(e);
    allButtons.forEach(btn => {
        if (e.key === btn.innerText) {
            animateButtonPress(btn)
        }
    })
    operatorButtons.forEach(oprBtn => {
        if (e.key === oprBtn.innerText) {
            handleSelectedOperation(oprBtn.innerText)
        }
    })
    if (isFinite(e.key)) {
        appendNumber(e.key)
    } else if ((previousNumber !== '') && (e.key === 'Enter' || '=')) {
        animateButtonPress(equalButton)
        calculate()
    } else if (e.key === 'Delete' || e.key === 'c') {
        animateButtonPress(clearButton)
        clearDisplay()
    } else if (e.key === 'Backspace') {
        animateButtonPress(backspaceButton)
        removeLastCharacter()  
    } else if (e.key === '.') {
        appendDecimal()
    } else if (e.key === 'o') {
        animateButtonPress(powerButton)
        toggleCalcPower()
    } else {
        return
    }
})
document.addEventListener('keyup', (e) => {
    allButtons.forEach(btn => {
        if (e.key === btn.innerText) {
            animateButtonLift(btn)
        } else if (e.key === 'Backspace') {
            animateButtonLift(backspaceButton)
        } else if (e.key === 'Enter') {
            animateButtonLift(equalButton)
        } else if (e.key === 'o') {
            animateButtonLift(powerButton)
        } else if (e.key === 'Delete' || e.key === 'c') {
            animateButtonLift(clearButton)
        }
    })
})

//start-up text:
display.innerText = randomGreeting()

//essential functions:
function appendNumber(newNum) {
    if (newNum === '.' && currentNumber.includes('.')) {return}
    currentNumber = currentNumber.toString() + newNum.toString()
    limitNumberCount()
    updateDisplay()
}
function appendDecimal() {
    if (currentNumber.includes('.')) {return}
    if (currentNumber === '') {currentNumber = '0'}
    currentNumber += '.'
    updateDisplay();
}
function togglePosNegNumber() {
    currentNumber = Math.abs(currentNumber) * -1;
    updateDisplay()
    //No keydown handler because of addition & subtraction conflicts
}
function handleSelectedOperation(selectedOperation) {
    if (currentNumber === '') return
    if (previousNumber !== '') {calculate()}
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
    updateDisplay()
}    
function clearDisplay() {
    console.log("Display cleared");
    display.innerText = ''
    currentNumber = ''
    previousNumber = ''
}
function removeLastCharacter() {
    currentNumber = currentNumber.toString().slice(0, -1)
    updateDisplay()
}
function limitNumberCount() {
    if (currentNumber.length > 13) {
        currentNumber = currentNumber.substring(0,13)
    }
    if (calculation) {
        calculation = parseFloat(calculation.toFixed(4))
    }
    if (calculation && calculation > 9999999999999) {
        calculation = calculation.toPrecision(10)
    } 
}
function updateDisplay() {
    display.innerText = currentNumber
}

//optimization functions:
function animateButtonPress(btn) {
    btn.classList.add("js-active");
}
function animateButtonLift(btn) {
    btn.classList.remove("js-active");
}
function showErrorMessage() {
    console.log("Error message successfully displayed.");
    display.innerText = 'Error, NaN'
}
function toggleCalcPower() {
    display.classList.toggle("hide-input");
        clearDisplay()
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
// (finished) 1. Operator button keydown event listeners
//2. Decimal key and function handlers & html button
//3. One character backspace key & html button
//4. Other basic mathematical operations like squares, square roots, exponents, etc.

//Problems:
// (finished) 1. Can't handle/round excessively long decimal cases - haven't worked out parseFloat() and toFixed() e.g. divide 888 by 9, numbers are outside display
// 1-2. Still doesn't handle "e+(...)" situations well, sometimes numbers are outside calculator display
//2. Any non-integer key can clear the display or calculate, not just backspace/c or enter/= respectively
//3. Error messages don't display
