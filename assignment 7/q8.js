/*8. Write a Javascript function to test whether the first character of a string
is lowercase.*/

function lowercase(str)
{
   regexp = /^[a-z]/;
   if (regexp.test(str))
    {
      console.log("String's first character is lowercase");
    } 
    else
    {
      console.log("String's first character is not lowercase");
    }
}
lowercase('HELLO');
lowercase('hello');



