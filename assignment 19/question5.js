// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.

console.log('start')
const promise = () => (new Promise((resolve, reject) => {
console.log(1);
resolve("fn2")
}))
promise.then(setTimeout(() =>
console.log(resolve()),1000));
