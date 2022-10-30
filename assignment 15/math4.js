// This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15This means that the first triangle has just one dot, the second one
// has three dots, the third one has 6 dots and so on.
// Write a function that returns the cumulative sum of the number of
// all the previous (including current) dots when given its corresponding triangle number of the sequence.
// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 56 (1+3+6+10+15+21)
function trianglesequence(num){
    let i,j=1,k=1;
    for(i=1; i<=num;i++){
        console.log(k + "");
        j=j+1;
        k=j+k;
    }
}
trianglesequence(6);
