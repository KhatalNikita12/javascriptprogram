// 1). Create a function that finds the maximum range of a triangle's
// third edge, where the side lengths are all integers.
// Examples
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10
// Notes
// ● (side1 + side2) - 1 = maximum range of third edge.
// ● The side lengths of the triangle are positive integers.
// ● Don't forget to return the result.

function nextEdge(side1,side2){
console.log(`value of side 1 is ${side1}`);
console.log(`value of side 2 is ${side2}`);
side3=(side1+side2)-1;
return side3;

}

console.log(`maximun range of third side is ${nextEdge(8,10)}`);

// value of side 1 is 8
// value of side 2 is 10
// maximun range of third side is 17
