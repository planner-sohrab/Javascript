const numbers = arrayFromRange(1, 4);
console.log(numbers)

function arrayFromRange(min, max){
    const arr=[];
    for(let i=min; i<=max; i++){
        arr.push(i);
    }
    return arr;
}