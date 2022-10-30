// 2. Iterate over all the characters of the word “iNeuron”.
let str="iNeuron";
function iterator(values){
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
let i=str.split("")
let a=iterator(i)
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);