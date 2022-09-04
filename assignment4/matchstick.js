/*Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.*/

function matchHouses(step) {
  a= step === 0 ? 0 : step * 4 + (step + 1);
  console.log(`for ${step } step we need ${a } number of matchstick.`);
}
matchHouses(87);