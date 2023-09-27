
function occurrence(array, searchElement){
    if(!Array.isArray(array)){
        throw new Error('Invalid array type.')
    }

    return array.reduce((accumulator, current)=>{
        let result = (current === searchElement)? 1: 0;
        return accumulator + result;
    },0);
}

try{
    const numbers = [1,2,3,1,4];
    const occurrenceCount = occurrence(true, 1);
    console.log(occurrenceCount);
}catch (e) {
    console.log(e.message);
}
