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

//Finding an element from array
let courses = [
    {title:"a", students:12},
    {title:"b", students:32}
]
const course = courses.find(function(course) {
    return course.title === "b"
});

console.log(course);console.log(courses.find(function (course){return course.title="a"} ))

//finding index of reference type array elements
const index = courses.findIndex((course)=>course.title="b");
console.log(index);