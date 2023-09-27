
function occurance(array, searchElement){
    let count=0;
    for(let element of array){
        if(element === searchElement){
            count++;
        }
    }
    return count;
}
const numbers = [1,2,3,4, 1,1,-1];
const countOfOccurance = occurance(numbers, 1);
console.log(countOfOccurance);
//solution 2 using Reduce method
function occuranceNumber(array, searchElement){
    return array.reduce((accumulator, current)=>{
        let occurance = (current === searchElement)? 1: 0;
        return accumulator+occurance;
    },0);
}

const countOfOccurance2 = occuranceNumber(numbers, 1);
console.log(countOfOccurance2);