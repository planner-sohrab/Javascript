
console.log(sumOfMultiples(10));
//My Solution
function sumOfMultiples(limit){
    let sum = 0;
    let counter=1;
    while(3*counter <= limit){
        sum += 3*counter
        counter++;
    }
    counter=1;
    while(5*counter <= limit){
        sum += 5 * counter;
        counter++;
    }
   return sum;
}

// Mosh Solution
function sumOfMultiple(limit){
    let sum = 0;
    for(let i = 1; i<=limit; i++){
        if (i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiple(10));