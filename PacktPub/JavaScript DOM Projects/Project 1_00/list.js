const output = document.querySelector('.output');
const myInput = createMyElement(output, 'input', 'main');
myInput.setAttribute('type', 'text');
const myBtn = createMyElement(output, 'button', 'btn');
myBtn.textContent = 'Add New User';

const ul = createMyElement(output, 'ul', 'myList');

myBtn.addEventListener('click', () => {
    const li = addUserName(myInput.value)
    myInput.value = "";
})

function addUserName(userName) {
    const li = createMyElement(ul, 'li', 'list-item');
    li.textContent = userName;
    return li;
}

console.log(myInput.value);

function createMyElement(parent, elType, classAdd) {
    const ele = document.createElement(elType);
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;
}
