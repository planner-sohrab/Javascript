const numbers   = [3,5];
//Adding elements in an array
//end
numbers.push(6,7);
console.log(numbers);

//middle

numbers.splice(2,0,4,4.5);
console.log(numbers)

// start
numbers.unshift("a","b","c","d", "e");
console.log(numbers)