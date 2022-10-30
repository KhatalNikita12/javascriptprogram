// 3. Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.

// let array=[1,2,3,4,5];
var arr = [10, 20, 30, 40, 50]; 
var arr1 = arr.map(a => a * a); 
console.log("arr:",arr); 
console.log("doubled array:",arr1); 