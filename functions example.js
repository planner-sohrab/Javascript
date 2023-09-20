function showMessage(message){
    console.log(`Message: ${message}`);
}
let sm = showMessage;

console.log(sm);
sm("This works!");

let sohrab = () => {
    console.log("My name is Sohrab");
};
sohrab()