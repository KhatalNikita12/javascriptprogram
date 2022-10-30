/*2. Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays*/

let arr=[ 1, 2, 3, 4, 5 ];
let arr1=[ 4, 6, 1, 8, 2 ];
if(arr.includes(4)==true && arr1.includes(4)==true){
    console.log("4 is present in both");
}
else if(arr.includes(4)==true || arr1.includes(4)==true){
    console.log("4 is present in one");
}
else
console.log("4 is not present");