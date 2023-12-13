const output = document.querySelector("#myId");
const input = createElement(output, "input", "text-input");
const ul = createElement(output, "ul", "myList");
const myBtn = createElement(output, "button", "btn");
// myBtn.innerText = "Add New User";
console.log(myBtn);





function createElement(parent, eleType, classAdd){
    const ele = document.createElement(eleType);
    ele.classList.add(classAdd);
    parent.append(ele);
}

