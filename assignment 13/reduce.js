/*1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()*/
let sum = [1, 2, 3,4,5].reduce(add, 0); 

function add(accumulator, a) {
  return accumulator + a;
}

console.log(`sum is ${sum}`);

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
const avg = average( [ 1,2,3,4,5] );
    
console.log(`average is ${avg}`);
