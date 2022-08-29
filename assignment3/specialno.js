let num=145;
let sum=0;
let number=num;
while(num>0){
    let lastdigit=num%10;
    let fact=factorial(lastdigit);
    sum=sum+fact;
    num=parseInt(num/10);
}
if(number==sum){
    console.log(`the number ${number} is special number`);
}
else
console.log(`the number ${number} is not a special number`);
function factorial(x){
    let fact=1;
    for(let i=1;i<=x;i++){
        fact=fact*i;
    }
    return fact;
}