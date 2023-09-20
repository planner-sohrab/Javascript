//maxOfTwo
//simple function
function maxOfTwo(val1, val2){
    if (val1 > val2){
        return val1;
    }else{
        return val2;
    }
}
console.log(maxOfTwo(1,2))
console.log(maxOfTwo(22,2))
console.log(maxOfTwo(100,500))

//arrow function
let max = (a,b)=> a>b?a:b;
console.log(max(50,5))

//function with simplified if
function maxNumber(a, b){
    return a>b?a:b;
}
console.log(maxNumber(25, 71));
