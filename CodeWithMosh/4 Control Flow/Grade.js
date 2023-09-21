function calculateGrade(marks){
    let sum = 0;
    for(let mark of marks){
        sum += mark;
    }
    let average = sum / marks.length;

    if(average >= 1 && average <= 59)
        return "F";
    else if (average >= 60 && average <= 69)
        return "D";
    else if (average >= 70 && average <= 79)
        return "C";
    else if (average >= 80 && average <= 89)
        return "D";
    else if (average >= 90 && average <= 100)
        return "A";
}

console.log(calculateGrade([80,80,50]))