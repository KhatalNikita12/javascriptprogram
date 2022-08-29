"use strict"
let num=153;
let sum=0;
let temp=num;
console.log("your entered Number is",num);
while(num > 0){
    let rem = num % 10;
    sum = sum+(rem*rem*rem);
    num =parseInt(num/10);
}
if(sum===temp){
    console.log(`the given number ${temp} is Armstrong number`);}
else{
    console.log(`the given number ${temp} is not a Armstrong number`);
}