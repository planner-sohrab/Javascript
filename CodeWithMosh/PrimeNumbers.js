
function isPrime(number){

    for(let i=2; i<number; i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
 }

function PrimeNumbers(limit){
    for(let i=2; i<= limit; i++){
        if(isPrime(i))
            console.log(i);
    }
}
PrimeNumbers(20)