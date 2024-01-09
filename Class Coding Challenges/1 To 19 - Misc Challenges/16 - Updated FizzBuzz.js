var output = [];
var increasingNumber = 1;

function fizzBuzz() {
    while (increasingNumber <= 100) {
    if (increasingNumber % 3 === 0 && increasingNumber % 5 === 0) {
        output.push("FizzBuzz");
    } else if (increasingNumber % 3 === 0) {
        output.push("Fizz");
    } else if (increasingNumber % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(increasingNumber);
    }
    increasingNumber++;
    }
    console.log(output);
}