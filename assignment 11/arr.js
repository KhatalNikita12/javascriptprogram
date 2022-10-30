/*Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places*/

      function evenodd(arr,n)
      {
    let even=0;
    let odd=0;
    let odd_count=0;
    let even_count=0;
    let i;
    let sum=0;
    let avg;
    console.log(`Array is \n${arr}`);
    for(i=0;i<n;i++)
    {
        if(i%2==0)
        even+=arr[i];
        else
        odd+=arr[i];

    }

    console.log(`a) Even index positision sum is \n${even}\n`);
    console.log(`b) odd index position sum is\n ${odd}\n`);
    let difference=even-odd;
    console.log(`c) difference between two sum \n${difference} \n`);

    for(i=0;i<n;i++){
        if(arr[i] & 1==1)
        odd_count++;
        else
        even_count++;
    }
    console.log(` d) number of elements in odd places \n${odd_count}\n`);
    console.log(` e) number of elements in even places \n${even_count}\n`);
    for (let i = 0; i <n; i++) 
        sum+= arr[i];
        avg= sum/n;
        
    console.log(`average is \n${avg}\n`);
        for(i=0;(i<=even && i<=odd);i++)
        {
            if(even%i==0 && odd%i==0)
            gcd=i;
        }
        console.log(`e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
        Places is\n ${gcd}`);
          }
          let arr=[1,2,3,4,5];
          let n=arr.length
          evenodd(arr,n)
   
  
    
