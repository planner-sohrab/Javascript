const numbers = [1,2,3,4];

//console.log(numbers.includes(1))

function includes(array, searchElement){

    for(let element of array){
        return searchElement === element;
    }
}

console.log(includes(numbers, 1))
console.log(includes(numbers, 5))