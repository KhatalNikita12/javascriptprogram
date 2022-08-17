"use strict"
let year=2300;
if(year%4===0)
    console.log("year is leap year",year);
else if(year%400===0)
    console.log("year is leap year",year);
else if(year%100===0)
    console.log("year is not leap year",year);
else
    console.log("year is not leap year",year);
