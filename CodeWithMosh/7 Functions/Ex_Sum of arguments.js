

function sum(args){
    if (Array.isArray(args)){
        let sum = 0;
        for (let v of args){
            sum += v;
        }
        return sum;
    }
    let result=0;
    for(let v of arguments){
        result += v;
    }
    return result;
}

const numbers = [1,2,3];
console.log(sum(numbers))
console.log(sum(1,2));

// solution using reduce method

function sum_two(...args){
    return args.reduce((a,b)=>a+b);
}
console.log(sum_two(numbers))