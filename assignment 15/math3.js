// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants
function secder( b,m){
console.log(`value of b is ${b}`);
console.log(`value of m is ${m}`);
let x=m;
let second_derivative=x^b + x*(Math.E^(b*m));
return second_derivative;
}
console.log(secder(2,3));