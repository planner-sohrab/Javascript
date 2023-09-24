//Part 1
//Create objects using object literals
obj1 = {
    name : "Sohrab",
    university: 'Khulna University'

};
console.log(obj1);
console.log(obj1.name);
console.log(obj1['university']);

// Changing value of a key
obj1.university = "Jahangirnagar University"
//adding new key with value
obj1.session = "2017-18";
obj1['district']="Dhaka";
console.log(obj1);

//Part 2

//copying an existing object
obj2 = new Object(obj1);
console.log(obj2)

//Part 3
newObj = {lang : "EN"}

obj3 = Object.create(newObj)
console.log(obj3);
console.log(obj3.lang)