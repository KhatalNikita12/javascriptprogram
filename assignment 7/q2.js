/*2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy”
Output: “HiiBoy”*/

let str = "hello world";
console.log(`Input is: ${str}`);
let res = str.replace(/\s+/g, "");
console.log(` output is : ${res}`);