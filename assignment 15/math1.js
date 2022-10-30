// 2). The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.

const rightshift = (x, y) => {
    let a = Math.floor(x / Math.pow(2 , y));
    return a;
  };
  
  console.log(rightshift(80, 4));
  console.log(rightshift(-24, 2));
 
