// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - [“a”, “b”, “c”, “d”]
// Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
var arr = [2, 3, 4, 5, 6];
var args = [3, 5, 6, 7];

var result = arr.filter(function(element) {
   a= args.indexOf(element) > -1;
});
console.log(a.values);



