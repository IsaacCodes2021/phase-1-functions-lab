// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks < 42) {
        return -1 * (blocks - 42);
    }
    else
        return blocks - 42;
}

function distanceFromHqInFeet(feet) {
    const hq = 42;

    if (feet < 42) {
        return (42 - feet) * 264
    }
    else 
        return (feet - 42) * 264
}

function distanceTravelledInFeet(block1, block2) {
    const block = 264;

    if (block1 > block2) {
        return (block1 - block2) * block
    }
    else 
        return (block2 - block1) * block
}

function calculatesFarePrice(start, destination) {
    let blocks;
    blocks = Math.abs(start - destination)
    let feet = distanceTravelledInFeet(start, destination);
    console.log(distanceTravelledInFeet(start, destination))

// free sample
    if (distanceTravelledInFeet(start, destination) < 400) { 
        return 0
    }

//.02 per foot under 2000 feet + free 400 feet
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {  
        return ((feet - 400) * .02);
    }

// distance over 2k
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
//too far
    else  if (feet > 2500) {
        return 'cannot travel that far';
    }
       
// logic-->  distanceInFeet >= 2000 && DistanceInFeet <= 2500
}
