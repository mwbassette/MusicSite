function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    
    var array = [];
    
    if (n === 1) {
        array = [0];
    }
    else if (n === 2) {
        array = [0, 1];
    }
    else {
        array = [0, 1];
        for (var i = 2; i < n; i++) {
        array.push(array[array.length - 2] + array[array.length - 1]);    
        }
    }
    return array;
    //Do NOT change any of the code below 👇
}




// OLD IDEAS BELOW:


// function fibonacciGenerator (n) {
//     //Do NOT change any of the code above 👆
    
    
//     var output = startingArray + sum;    
//     var startingArray = [0, 1, 1];
//     var firstNumberInSum = startingArray[length - 2];
//     var secondNumberInSum = startingArray[length - 1];
//     var sum = firstNumberInSum + secondNumberInSum;
//     sum.push(startingArray);
    
    
//     if (n === 1) {
//         return [0];
//     }
//     if (n === 2) {
//         return [0, 1];
//     }
//     if (n === 3) {
//         return [0, 1, 1];
//     }
    
//     for (var i = 3; i < 16; i++) {
//         startingArray + sum.push();
//     }
        
        
        
//     // // possibly useful things: concat, push, slice(0, -1), 
//     // var currentValue = i;
//     // // var sum = output.prototype.lastIndexOf() + secondtolast;
        
//         //Return an array of fibonacci numbers starting from 0.
        
//     //Do NOT change any of the code below 👇
//     }
    
//     fibonacciGenerator (1);

// function fibonacciGenerator (n) {
//     //Do NOT change any of the code above 👆
    
//     // n = numberOfTerms;
//     // let firstNumber = 0;
//     // let secondNumber = 1;
//     // let sum = firstNumber + secondNumber;
    
//     // // var output = startingArray + sum;    
//     // // var startingArray = [0, 1, 1];
//     // // var firstNumberInSum = startingArray[length - 2];
//     // // var secondNumberInSum = startingArray[length - 1];
//     // // var sum = firstNumberInSum + secondNumberInSum;
//     // // startingArray.push(sum);
    
//     // for (i >= 1; i <= numberOfTerms; i++) {
//     //     console.log(firstNumber);
//     //     firstNumber = secondNumber;
//     //     secondNumber = sum;
//     //     sum = firstNumber + secondNumber;
//     // }
    
//     // var fib = [0, 1];
//     // for(var i = fib.length; i < 10; i++) {
//     //     fib[i] = fib[i-2] + fib[i-1];
//     // }
//     // console.log(fib); 
    
    
    
//     if (n === 1) {
//         return [0];
//     }
//     if (n === 2) {
//         return [0, 1];
//     }
    
//     var fib = [0, 1];
//     let i;
        
//     for (i === 3; i < n; i++) {
//         let sum = fib[i - 2] + fib[i - 1];
//         fib.push(sum);
//         // fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
    
        
    
//     // for (var i = 3; i < 16; i++) {
//     //     startingArray + sum.push();
//     // }
        
        
        
//     // // possibly useful things: concat, push, slice(0, -1), 
//     // var currentValue = i;
//     // // var sum = output.prototype.lastIndexOf() + secondtolast;
        
//         //Return an array of fibonacci numbers starting from 0.
        
//     //Do NOT change any of the code below 👇
//     }