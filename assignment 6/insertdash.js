/*Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.*/
function dash(num){
    let number=num;
    let str=number.toString();
    let res=[str[0]];
    for(let i=1;i<str.length;i++){
        if((str[i-1]%2===0) && (str[i]%2===0)){
            res.push('-',str[i]);
        }
        else
        {
            res.push(str[i]);
        }
    } 
    console.log(res.join(""));

}
dash(1245364);//12-4536-4
