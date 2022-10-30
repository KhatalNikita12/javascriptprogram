// Write a JavaScript program to map Employee Records according to Employee
// IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees
let count=0;
//  let sum=0;
 let average;
let employee ={id:[1,2,3],name:["raj","ron","rashmi"],salary:[75000,65000,65000]};
console.log(`All employee detail:`);
console.log(employee);
console.log(`array of all employee ids:`);
console.log(employee.id);
for(let id in employee){
    count++;
}
console.log(` count of employees: ${count}`);
console.log(`the salaries of all employees`);
console.log(employee.salary);
let values=employee.salary;
const sum = values.reduce((accumulator,values) => {
    return accumulator+values;
},0);
// console.log(`sum salary is ${sum}`);
average=Math.floor(sum/3);
console.log(`average is ${average}`);