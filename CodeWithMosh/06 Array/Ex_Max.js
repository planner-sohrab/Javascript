
const numbers = [1,5,3,4];
const maximum = max(numbers);
console.log(maximum);

//solution 1
function max(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max;
}

//solution 2

function findMax(array){
    if(array.length === 0) return undefined;
    return array.reduce((accumulator, current)=>{
        return current > accumulator ? current : accumulator;
    })
}

console.log(findMax(numbers));