function factorial(n){
    let result = 1;
    if (n == 0 || n == 1){
      return result;
    }else{
      for(let i = n; i >= 1; i--){
        result = result * i;
      }
      return result;
    }  
  }
  let n = 5;                                   
  result = factorial(n)                            //5*4*3*2*1=120
  console.log("The factorial of ", n," is ",result);
   


