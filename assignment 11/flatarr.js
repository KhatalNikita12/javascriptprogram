/*3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();*/
// arr=[ 1, 2, [ 3, 4,  5 ] ]
// console.log(`original array is ${arr}`);
// console.log("after flatten array");
// console.log(arr.flat());
arr=[ 1, 2, [ 3, 4,  5 ] ]
let flatArray = [].concat.apply([], arr);
console.log(flatArray);
// let flatArray = [].concat(...arr);