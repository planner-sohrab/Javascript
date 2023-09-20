console.log(checkSpeed(78))
function checkSpeed(speed){
    const speedLimit = 74;
    let pointCounter = 0;
    if(speed <= speedLimit){
        return "Ok"
    }
    if(speed > speedLimit){
        for (let i=75; i <= speed; i += 5){
            //console.log(i);
            pointCounter += 1;
        }
        if (pointCounter < 12){
            return `${pointCounter} points`
        }
        return "License Suspended!";
    }

}