// 7).
var p = new Promise((resolve, reject) => {
reject(Error('The Fails!'))
})
.catch(error => console.log(error))
.then(error => console.log(error))
// What will the output be?
/*
catch function show error the fails! then shows error
*/