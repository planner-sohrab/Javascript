// console.log("Hello world!");

const fruits = ["Apple", "Papaya", "Orange", "Karambola"];
const fruitN01 = fruits.forEach((fruit) => {
    return ("Hello this is:" + fruit);
});

const fruitN02 = fruits.map((fruit) => {
    return ("This is :" + fruit);
});

console.log(fruitN01);
console.log(fruitN02);