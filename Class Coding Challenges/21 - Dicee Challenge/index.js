var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var firstDiceSource = 'images/dice'+randomNumber1+'.png';
document.querySelector("img.img1").setAttribute("src",firstDiceSource); 

