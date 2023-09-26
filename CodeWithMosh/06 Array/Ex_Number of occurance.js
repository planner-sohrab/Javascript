
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
const countOfOccurance = occurance(numbers, -2);
console.log(countOfOccurance);