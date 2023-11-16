function whosPaying(nameList) {
    var nameList = ["Michael", "Bjorn", "Keas", "Freddy", "Kyle", "Paul", "Erick"];
    var numberOfPeople = nameList.length;
    var randomNameListPosition = Math.floor(Math.random() * numberOfPeople);
    var randomName = nameList[randomNameListPosition];
    return randomName + " is going to buy lunch today!";
    // if (randomName < 1) {
    //     return names[0];
    // } else if (randomName < 2 && randomName >= 1) {
    //     return names[1];
    // } else if (randomName < 3 && randomName >= 2) {
    //     return names[2];
    // } else if (randomName < 4 && randomName >= 3) {
    //     return names[3];
    // } else if (randomName < 5 && randomName >= 4) {
    //     return names[4];
    // } else if (randomName < 6 && randomName >= 5) {
    //     return names[5];
    // } else if (randomName < 7 && randomName >= 6) {
    //     return names[6];
    // }
}