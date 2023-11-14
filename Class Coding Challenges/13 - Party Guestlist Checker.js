var guestList = ["Michael", "JJ", "Keas", "Vini", "Bjorn", "Paul", "Freddy", "Kyle", "Eric"];
var name = prompt("What is your name?");
if (guestList.includes(name)) {
    alert("Welcome to the party!");
}  else {
    alert("Sorry, you weren't invited.");
}