const output = document.querySelector('.output');
const myInput = createMyElement(output, 'input', 'main');
myInput.setAttribute('type', 'text');

const myBtn = createMyElement(output, 'button', 'btn');
myBtn.textContent = 'Add New User';

const myList = createMyElement(output, 'ul', 'myList');
const curList = [];
let getData = localStorage.getItem('curList');

window.addEventListener('DOMContentLoaded', e => {
    if(getData){
        const tempArr = JSON.parse(getData);
        tempArr.forEach(user => {
            addNewUser(user);
        })
    }
})
myBtn.addEventListener('click', (e) => {
    console.log('click');
    let userName = myInput.value;
    if (userName.length > 3) {
        const li = addNewUser(userName);
        myInput.value = '';
    }

})


function updater(){
    const myListItems = document.querySelectorAll('.info');
    curList.length = 0;
    myListItems.forEach(el =>{
        curList.push(el.textContent);
    })
    localStorage.setItem('curList', JSON.stringify(curList))
}

function addNewUser(userName) {
    curList.push(userName);
    updater();
    const li = createMyElement(myList, 'li', 'myList');
    const div = createMyElement(li, 'div', 'container')
    const span1 = createMyElement(div, 'span', 'info');
    span1.textContent = userName;
    const span2 = createMyElement(div, 'span', 'editor');
    span2.textContent = 'Edit';
    const span3 = createMyElement(div, 'span', 'del');
    span3.textContent = 'Delete';

    span2.addEventListener('click', (e) => {
        console.log('edit');

        if(span2.textContent === 'Edit'){
            span1.style.backgroundColor = "yellow";
            span1.setAttribute("contenteditable", true);
            span2.textContent = 'Save'

        }else{
            span1.style.backgroundColor = "white";
            span1.setAttribute("contenteditable", false);
            span2.textContent = 'Edit'
            updater();
        }

    })
    span3.addEventListener('click', (e) => {
       li.remove();
        console.log('del');
        updater();
    })
    return li;
}

function createMyElement(parent, elType, classAdd) {
    const ele = document.createElement(elType);
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;
}