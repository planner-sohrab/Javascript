//Experiment 1
//Write a program that shows all the same type element in a array
const numbers = [1,2,3,1,5,6,1,8];
let currentIndex = 0;
for(let i=0; i<numbers.length; i++){
    if(numbers.indexOf(i,currentIndex) === 1){
        console.log(numbers.indexOf(i));
        currentIndex = numbers.indexOf(i);
    }
}