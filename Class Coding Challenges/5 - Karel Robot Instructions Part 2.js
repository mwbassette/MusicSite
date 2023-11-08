/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    putBeeper();
    repetitivePattern();
    repetitivePattern();
    repetitivePattern();
    repetitivePattern();
 }
 
 function repetitivePattern(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }
 
 
 /** Goal: Place 5 beepers along a diagonal line from bottom-left to top-right
  * using as few lines of code as possible. **/