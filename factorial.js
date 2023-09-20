
function factorial(n){
    let sum = 1;
    while(n>1){
        sum *= n;
        n--;
    }
    return sum;
}
console.log("Factorial of 6 is: ", factorial(6));
console.log("Factorial of 10 is: ", factorial(10));
console.log("Factorial of 4 is: ", factorial(4));

// factorial using recursion

function factorialRecursion(n){
    return n > 1 ? n * factorial(n-1) : 1;
}
console.log("Recursion results: ")
console.log("Factorial of 6 is: ", factorial(6));
console.log("Factorial of 10 is: ", factorial(10));
console.log("Factorial of 4 is: ", factorial(4));