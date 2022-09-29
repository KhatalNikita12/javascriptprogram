/*1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice
Output: Ice
Input:Icecream Output:Icec...*/

let s="Icecream"
console.log( `the length of string is : ${s.length}`);
let truncate = (s,len) =>{
if (s.length>len){
    console.log(`input is : ${s}`);
    console.log(` output is : ${s.substring(0,len)}...`);
}
else{
    console.log(s);
}
}
truncate(s,4);

