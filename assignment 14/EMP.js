/*Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000*/
var employees=[{ename:"john ken",salary:50000,department:"electronic"},
        {ename:"smith henry",salary:45000,department:"IT"},
        {ename:"ram patel",salary:65000,department:"Math"},];
console.log("a) filter employees according to department = IT");
var f1=employees.filter((emp)=>{
    return emp.department="IT";});
    console.log(f1);
console.log("b) filter employees who earn a salary < 65000");
let f2=employees.filter((emp)=>{
return emp.salary<65000;
});
console.log(f2);