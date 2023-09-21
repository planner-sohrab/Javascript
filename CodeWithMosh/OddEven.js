oddEven(101)
function oddEven(upperBound){
    for (let i=0; i<= upperBound; i++){
        console.log(i, i%2===0?"EVEN":"ODD");
    }
}