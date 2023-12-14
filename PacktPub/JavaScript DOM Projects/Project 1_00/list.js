const output = document.querySelector('.output');
const myInput = createMyElement(output, 'input', 'main');
myInput.setAttribute('type', 'text');
const myBtn = createMyElement(output, 'button', 'btn');
myBtn.textContent = 'Add New User';


const warning = createMyElement(output, 'p', 'warning');

// warning.style.backgroundColor='coral';
// warning.style.padding='1rem';
// warning.style.borderRadius='25px';
// warning.style.color='white';
// warning.style.textAlign='center';

const ul = createMyElement(output, 'ul', 'myList');

myBtn.addEventListener('click', () => {
    let userName = myInput.value;
    if(userName.length >= 3){
        const li = addUserName(userName)
        myInput.value = "";
    }else{
        warning.textContent = "User name required at least 3 characters!"
    }


})

function addUserName(userName) {
    const li = createMyElement(ul, 'li', 'list-item');
    const div = createMyElement(li, 'div', 'container');
    const spanInfo = createMyElement(div, 'span', 'info');
    spanInfo.textContent = userName;
    const innerDiv = createMyElement(div, 'div', 'inner-div');
    const spanEdit = createMyElement(innerDiv, 'span', 'editor');
    spanEdit.textContent = 'Edit';
    const spanDelete = createMyElement(innerDiv, 'span', 'deletor');
    spanDelete.textContent = 'Delete';

    spanEdit.addEventListener('click', (e) => {
        console.log('edit');
    });

    spanDelete.addEventListener('click', (e) => {
        console.log('delete');
    })
    return li;
}

console.log(myInput.value);

function createMyElement(parent, elType, classAdd) {
    const ele = document.createElement(elType);
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;
}
