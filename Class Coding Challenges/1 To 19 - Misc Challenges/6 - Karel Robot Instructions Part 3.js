/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    lineOfThree();
    positionLeft();
    lineOfTwo();
    positionRight();
    lineOfThree();
    positionLeft();
    lineOfTwo();
    positionRight();
    lineOfThree();
 }
 
 function lineOfThree(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }
 
 function lineOfTwo(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
    
 function positionLeft(){
    turnLeft();
    move();
    turnLeft();
 }
 
 function positionRight(){
    turnRight();
    move();
    turnRight();
 }
 
 
 /** Goal: Make a chessboard layout of beepers alternating between
  * plus ("+") spaces and beeper spaces, of course, using as few lines of code 
  * as possible. **/