
function showProperties(obj){
    for(key in obj){
        if(typeof obj[key] === "string")
        console.log(`${key} : ${obj[key]}`)
    }
}
const movies = {
    title: "New Movie",
    release: 1998,
    rating: 4.5,
    director: "Self Made"
};

showProperties(movies)





























