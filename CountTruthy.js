console.log(countTruthy([0, null,NaN,undefined, "", undefined,1,2,3]));
function countTruthy(array){
    let count = 0;
    for (let value of array){
        if (value){
            count++;
        }
    }
    return count;
}