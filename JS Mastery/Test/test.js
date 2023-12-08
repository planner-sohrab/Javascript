//Showing array information in HTML Unordered List
const fruits = ["Apple", "Papaya", "Orange", "Karambola"];
let list = document.getElementById("myList");
//Method 1: Using for Loop

for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement('li');
    li.innerText = fruits[i];
    list.appendChild(li);
}


// Method 2: Using forEach method
fruits.forEach((fruit) => {
    let li = document.createElement('li');
    li.innerText = fruit;
    list.appendChild(li)
});


//Method 3: Using join method

let ul = `
<ul>${fruits.map(data =>
    `<li>${data}</li>`).join('')}
</ul>`;

list.innerHTML = ul;
