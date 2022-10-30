// 3). What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
return v * 2;
})
.finally(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
});
/*
output is:
2
4
undefined
8*/