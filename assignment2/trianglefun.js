"use strict"
function triangle( side1,side2,side3){
if(side1===side2 && side2===side3)
    console.log("triangle is equilateral triangle");
else if(side1===side2 || side2===side3 || side3===side1)
    console.log("triangle is isoscelen triangle")
else{
    console.log("triangle is scelen triangle")
}}
triangle(2,3,8);