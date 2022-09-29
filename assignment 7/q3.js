/*3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy”
Output: “Boy Hii”*/
let str="hello world";
console.log(str[0]);
console.log(str[1]);
let temp=str[0];
str[0]=str[1];
str[1]=temp;
console.log(temp);