var lengthPrompt = prompt("Please type in characters so we can verify the character count:");
console.log("You have typed " + lengthPrompt.length + " characters. You have " + ('140' - lengthPrompt.length) + " characters left.");
lengthPrompt.slice(0,140);

// This is also fine:  alert(prompt("Please type in characters so we can verify the character count:").slice(0,140));   