// question 1)Can we put duplicate values in the set object?
//  Answer= No duplicate value are not allowed in set object. Set is a collection of unique value. It ignore duplicate value


//question 2. Write the syntax for
//a) Creating new set object
let value= new Set();
//b) Adding new element to set object
value.add("a");
value.add("b");
value.add("c");
value.add("c");
//c) Deleting element from set object
 value.delete("a");
 console.log(value);
