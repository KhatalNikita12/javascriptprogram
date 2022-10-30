// 1. Create a function to iterate over the following list [“John”,
//     “Rohn”, “Danny”, “James”]
let person=['john','rohn','danny','james'];
console.log(person);
function personiterator(values){
    let nextindex=0;
    return{
        next:function(){
            if(nextindex<values.length){
                return{
                    value:values[nextindex++],
                    done: false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}
let perarr=personiterator(person);
console.log(perarr.next().value);
console.log(perarr.next().value);
console.log(perarr.next().value);
console.log(perarr.next().value);
console.log(perarr.next().value);