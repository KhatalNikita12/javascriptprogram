// 10).
console.log('start')
Promise.resolve(1).then((res) => {
console.log(res)
})
Promise.resolve(2).then((res) => {
console.log(res)
})
console.log('end')
// What will the output be?
/*
start
end
1
2
*/