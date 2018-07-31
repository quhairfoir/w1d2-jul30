//# w1d2-jul30
//First LHL project

//## Objective
//Very cool little finger algorithm to multiply some numbers. 

//## How it works
//1. Let's say I want to multiply two numbers (single digit) from 6-10

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

var leftJoinedFingers = left - 5;
var rightJoinedFingers = right - 5;

var leftRoamingFingers = 10 - left;
var rightRoamingFingers = 10 - right;

console.log('Left hand: joined - roaming ', leftJoinedFingers, leftRoamingFingers);
console.log('Right hand: joined - roaming ', rightJoinedFingers, rightRoamingFingers);

//3. Join all the fingers that represent the 2 numbers being multiplied.
var joinedFingers = leftJoinedFingers + rightJoinedFingers;
//4. Then, count how many fingers are joined... x10.
joinedFingers *= 10; 

console.log("Joined: ", joinedFingers);
//5. Lastly, count roaming fingers from left hand and multiply by roaming fingers in right hand. 
var roamingFingers = leftRoamingFingers * rightRoamingFingers;
console.log("Roaming: ", roamingFingers);

//6. Add step 4 and step 5. 
var proof = joinedFingers + roamingFingers;

console.log("Proof: ", proof);