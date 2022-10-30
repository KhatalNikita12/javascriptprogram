// 6).
Promise.resolve('Success!')
.then(data => {
return data.toUpperCase()
})
.then(data => {
console.log(data)
})
// What will the output be?

// output is  SUCCESS!