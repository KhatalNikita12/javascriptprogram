
// 5. What are the different ways of iterating through an array?
// demonstrate them.
// 1) using for loop
let array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// 2)using while loop

 let array1 = [ 2,4,5,5 ];
 index=0;
while (index < array1.length) {
    console.log(array1[index]);
    index++;
}
// 3) for each
index = 0;
array = [ 4,5,6];
 
array.forEach(myFunction);
function myFunction(item, index)
{
    console.log(item);
    }
