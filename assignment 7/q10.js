/*Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string*/

function stringopp(choice) {
    let str="hello world";
    console.log(`\noriginal string is ${str}\n`);
    switch(choice)
{
    case 1:
{
    console.log(`a) Convert the String into upper case.\n`);
    console.log(str.toUpperCase());
}
break;
    case 2:
{
    console.log(`b) Convert only the first character to uppercase\n`);
    let split=str.split(" ");
    let temp=" ";
    for(let i of split){
    temp=temp+" "+i.replace(i[0],i[0].toUpperCase());
    }
    console.log(temp);
}
break;
    case 3:
    {
        console.log(`c) Convert the String into lower case.\n`);
        console.log(str.toLowerCase());
    }
break;
case 4:
{
    console.log(`d) Break the string into two halves and swap them.\n`);

    let index = str.indexOf(" ");  
    let id = str.substr(0, index); 
    let text = str.substr(index + 1); 
    let a = id;
    id=text;
    text=a;
    console.log(id,text);
}
break;
    
   case 5: 
    {
        console.log("e) Count the repeating characters.\n");
        const repeatedCharacter = (str) => {
        for (let i = 0; i < str.length - 1; i++) {
            for (let j = i + 1; j < str.length; j++) 
            {
            if (str[i] === str[j]) {
                return str[i];
            }
            }
        }
        return -1
        };
        console.log(repeatedCharacter("hello world"));
    }
        break;
case 6:{
    console.log("f) Reverse the string\n");
    function ReverseString(str) {
        return str.split('').reverse().join('')
     }
   console.log(  ReverseString("hello world"));

}
break;
        default : console.log(" \ninvalid choice");
}
}
stringopp(1);
stringopp(2);
stringopp(3);
stringopp(4);
stringopp(5);
stringopp(6);
stringopp(7);