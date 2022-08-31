"use strict"
let factarr = [];
let num;
function primefactorisation(number1,number2){
    num=number2;
    for(let i=number1;i<=number2;i++){
        myfunction(num,i);
    }
    console.log(factarr);
}
function myfunction(val,divnum){
    if(val % divnum === 0){
        factarr.push(divnum);
        val = val/divnum;
        num=val;
        if(val%divnum === 0){
            myfunction(val,divnum);
        }
    }
}
primefactorisation(2,100)