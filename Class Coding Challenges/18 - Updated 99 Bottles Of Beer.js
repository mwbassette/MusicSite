// Mike
// In this version, the singular on '1 bottle' hasn't been resolved yet.
function bottlesOfBeer() {
    var beerCount = 99;
  
    while (beerCount > 0) {
      
        var plural = beerCount + " bottles";
        var checkWhetherSingular = beerCount + " bottle";
      
        console.log(`${plural} of beer on the wall, ${plural} of beer. Take one down and pass it around, ${beerCount - 1} bottles of beer on the wall.`);
        beerCount--;

        // if (beerCount === 1) {
        //     console.log(`${singular} of beer on the wall, ${singular} of beer. Take one down and pass it around, no more bottles of beer on the wall.`);
        // }

        if (beerCount === 0) {
            console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
        }
    }
}

// JJ
function bottlesOfBeer2() {
    var beerCount = 99
  
    while (beerCount >= 0) {
        var beerBottles = `${beerCount} bottle${addSIfPlural(beerCount)}`
        var reducedBeerBottles = `${beerCount - 1} bottle${addSIfPlural(beerCount - 1)}`

        console.log(`${beerBottles} of beer on the wall, ${beerBottles} of beer. Take one down and pass it around, ${reducedBeerBottles} of beer on the wall.`)
        beerCount--

        if (beerCount === 0) {
            return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
        }
    }
}

function addSIfPlural(beerCount) {
  return beerCount >= 2 ? "s" : ""
}

// original 
function bottlesOfBeer3() {
    
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