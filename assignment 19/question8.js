// 8).
console.log('start')
setTimeout(() => {
console.log('setTimeout')
})
Promise.resolve().then(() => {
console.log('resolve')
})
console.log('end')
// What will the output be?
/*
start
end
resolve
setTimeout

*/