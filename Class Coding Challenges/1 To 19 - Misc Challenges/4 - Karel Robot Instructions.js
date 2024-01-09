/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    moveToCorner();
    turnLeft();
    moveToCorner();
 }
 
 function moveToCorner(){
    move();
    move();
    move();
    move();
 }

 /** The above code will move the Karel Robot to the top-right of a 5x5 grid, using a separate function to keep the code drier. */