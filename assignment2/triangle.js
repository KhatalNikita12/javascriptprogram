"use strict"
let side1=47;
let side2=54;
let side3=51;
console.log(`value of side1 is ${side1} , value of side2 is ${side2} and value of side3 is ${side3}`)
if(side1===side2 && side2===side3)
    console.log("triangle is equilateral triangle");
else if(side1===side2 || side2===side3 || side3===side1)
    console.log("triangle is isoscelen triangle")
else{
    console.log("triangle is scelen triangle")
}
