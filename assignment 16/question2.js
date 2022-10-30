// 2.) Create a function that finds the word "happiness" in the given
// string (not case sensitive). If found, return "Hurray!", otherwise
// return "There is no happiness.".

function findhappiness(str){

console.log("string is : ",str);
if(str.includes("happiness"))

    console.log("hurray! hapiness find");

else
 console.log("there is no happiness");

}

findhappiness("Work makes me happy");
findhappiness("You give me the feeling of happiness")