// Code your solution in this file!
function distanceFromHqInBlocks (feet) {
  return (42 > feet) ? 42-feet : feet-42;
}

function distanceFromHqInFeet (feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  if (startingBlock > endingBlock) {
    return (startingBlock - endingBlock) * 264;
  } else {
    return (endingBlock - startingBlock) * 264;
  }
}

function calculatesFarePrice (startingBlock, endingBlock) {
  const distance = distanceTravelledInFeet(startingBlock, endingBlock);

  if (distance > 400 && distance < 2000) {
    return ((distance - 400) * .02);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance < 400) {
    return 0;
  } else {
    return 'cannot travel that far';
  }
}
