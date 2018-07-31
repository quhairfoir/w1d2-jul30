//# w1d2-jul30
//First LHL project

//## Objective
//Very cool little finger algorithm to multiply some numbers.

//## How it works
//1. Let's say I want to multiply two numbers (single digit) from 6-10
function makeJoinedFingers(f) {
  return f - 5;
}

function makeRoamingFingers(f) {
  return 10 - f;
}


var left = process.argv[2];
var right = process.argv[3];

console.log("Left: ", left);
console.log("Right: ", right);

//2. I use my fingers to represent each number in one hand... the following applies:
//  thumb = 6
//  index = 7
//  middle = 8
//  ring = 9
//  pinky = 10

//3. Join all the fingers that represent the 2 numbers being multiplied.

//4. Then, count how many fingers are joined... x10.
var joinedFingers = (makeJoinedFingers(left) + makeJoinedFingers(right)) * 10;

console.log("Joined: ", joinedFingers);
//5. Lastly, count roaming fingers from left hand and multiply by roaming fingers in right hand.
var roamingFingers = makeRoamingFingers(left) * makeRoamingFingers(right);
console.log("Roaming: ", roamingFingers);

//6. Add step 4 and step 5.
var proof = joinedFingers + roamingFingers;

console.log("Proof: ", proof);