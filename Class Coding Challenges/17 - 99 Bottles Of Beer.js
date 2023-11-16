function bottlesOfBeer() {
    
    var beerCount = 99;
    while (beerCount >= 0) {
        console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down and pass it around, ")
        beerCount--
        console.log(beerCount + " bottles of beer on the wall.");
        if (beerCount === 0) {
        return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
        }
    }
}