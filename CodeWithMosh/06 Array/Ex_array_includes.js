
function includes(array, excluded){
    const output = [];
    for (let element of array){
        if(!excluded.includes(element)){
            output.push(element)
        }
    }
    return output;
}

const numbers = [1,2,3,4, 1,1,3];
const another = [1, 3];

console.log(includes(numbers, another))