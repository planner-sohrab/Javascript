const output = document.querySelector('.output');
const myInput = createMyElement(output, 'input', 'main');
myInput.setAttribute('type', 'text');

const myBtn = createMyElement(output, 'button', 'btn');
myBtn.textContent = 'Add New User';

const myList = createMyElement(output, 'ul', 'myList');

myBtn.addEventListener('click', (e) => {
    console.log('click');
    let userName = myInput.value;
    if(userName.length > 3){
        const li = addNewUser(userName);
        myInput.value = '';
    }

})

function addNewUser(userName){
    const li = createMyElement(myList, 'li', 'myList');
    li.textContent = userName;
    return li;
}

function createMyElement(parent, elType, classAdd){
    const ele = document.createElement(elType);
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;
}