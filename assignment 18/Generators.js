/* 1. What is the difference between a generator and a function?

Answer-A Generator function returns us an iterator,
 which can be used to stop the function in the middle,
  do something, and then resume it whenever. 
  A normal function starts executing and returns when the function completes,
 but a Generator function can be stopped any number of times and resumed later

*/

/*
2. What is the syntax of a generator?

  Answer=> * gen(){ yield 1; yield 2; ... ... } 
*/

/*
3. Are function generators iterable in JavaScript?

   Answer=>Each Generator may only be iterated once
*/


// Create a generator for multiplying?
function *mult(){
let c=2*2;
console.log(c);
yield 1 ;
}
mult();



// 5. Print an infinite series of natural numbers using a generator.
function* nat() {
    let i = 1;
    while (true) {
      yield i++;
    }
  }
  
  for (let num of nat()) {
 console.log(num);
  }

//   6. Create a generator that can throw an exception.
function* gen() {
    while (true) {
      try {
        yield 42;
      } catch (e) {
        console.log('Error caught!');
      }
    }
  }
  
  const g = gen();
  g.next();

  g.throw(new Error('Something went wrong'));
 