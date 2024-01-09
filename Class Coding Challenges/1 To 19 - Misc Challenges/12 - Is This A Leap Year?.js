function isThisALeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

/* if (year % 4 === 0 || year % 100 !== 0 && year % 400 === 0) {
    return "Leap year.";
} 
    else {
    return "Not leap year.";
} */