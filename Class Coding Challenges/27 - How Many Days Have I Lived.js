

// function calculateDaysLived(currentDay, age) {
//     var arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var startFromDayZero = 0;
//     var currentDay = 
//     var birthDay = 
//     var remainingDaysInPresentYear = currentDay - birthDay;
//     var daysLivedSinceZero = (365 * age) + remainingDaysInPresentYear;
// }

// function calculateDaysLived(birthDate, presentDate) {
//     var oneDay = 24 * 60 * 60 * 1000;
//     var birthDate = new Date(1994, 10, 21);
//     var presentDate = new Date(2023, 12, 31);
//     Math.round(Math.abs((birthDate - presentDate) / oneDay));
// }

var birthDate = new Date(1994, 10, 21);
var presentDate = new Date(2023, 12, 31);

function calculateDaysLived(birthDate, presentDate) {
    var oneDay = 24 * 60 * 60 * 1000;
    var output = Math.round(Math.abs((birthDate - presentDate) / oneDay));
    return output;
}