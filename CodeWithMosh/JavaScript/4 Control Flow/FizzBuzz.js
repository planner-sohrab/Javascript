function FizzBuzz(input){
    if (typeof input !== 'number'){
        return 'Not a number'
    }
    if(input % 3 == 0 && input % 5 == 0){
        return "FizzBuzz";

    }
    if(input % 3 == 0){
        return "Fizz";
    }
    if(input % 5 == 0){
       return "Buzz";
    }

    return input;
}

console.log(FizzBuzz("7"));
console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));
console.log(FizzBuzz(8));

