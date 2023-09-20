// function add(a,b){
//     if (!Number.isInteger(a) || !Number.isInteger(b)){
//         return NaN;
//     }
//     return a+b;
// }

let add = (a, b) => {
    return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a+b;
}
let sub = (a, b) => {
    return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a-b;
}
let mult = (a, b) => {
    return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a*b;
}
// function sub(a,b){
//     if (!Number.isInteger(a) || !Number.isInteger(b)){
//         return NaN;
//     }
//     return a-b;
// }
//
// function mult(a,b){
//     if (!Number.isInteger(a) || !Number.isInteger(b)){
//         return NaN;
//     }
//     return a*b;
// }

// function action (callback, a, b){
//     return callback( a, b);
// }

let action =(callback, a, b) => callback(a,b);
console.log(action(add, 10, 20));
// console.log(add(12, 10)); // -> 22
// console.log(mult(12, 10.1)); // -> NaN