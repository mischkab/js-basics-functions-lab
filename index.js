// Code your solution in this file!
function distanceFromHqInBlocks(pickup, hq = 42) {
  return Math.abs(hq - pickup);
}

function distanceFromHqInFeet(pickup, hq = 42) {
  return (distanceFromHqInBlocks(pickup, hq) * 264);
}

function distanceTravelledInFeet(start, destination) {
  return (Math.abs(start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
  let total = distanceTravelledInFeet(start, destination);
  if (total <= 400) {
    return 0
  } else if (total < 2000) {
    total -= 400;
    return total * 0.02;
  } else if (total < 2500) {
    total -= 400;
    return 25;
  } else {
    return 'cannot travel that far';
  }
}