//Factory Function
function createCircle(radius){
 return{
     radius: radius,
     draw(){
        console.log('draw');
    }
 };
}
const circle1 = createCircle(2);
console.log(circle1)
//Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function draw (){
        console.log('draw');
    }
}

const circle2 = new Circle(1);
console.log(circle2)