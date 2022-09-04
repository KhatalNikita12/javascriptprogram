/*Write a javascript function find_largest to return the nth largest number
in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array
which is 8.*/
function thirdlarge(arr,arr_size){
    if(arr_size<3){
        console.log("invalid input");
        return;
    }
    let first=arr[0];
    for(let i=1;i<arr_size;i++)
    if(arr[i]>first)
    first=arr[i];
    let second=Number.MIN_VALUE;
    for(let i=0;i<arr_size;i++)
    if(arr[i]>second && arr[i]<first)
    second=arr[i];
    let third=Number.MIN_VALUE;
    for(let i=0;i<arr_size;i++)
    if(arr[i]>third && arr[i]<second)
    third=arr[i];
    console.log("the third largest element is",third);
}
let arr=[1,5,88,99,4];
let n=arr.length;
thirdlarge(arr,n);