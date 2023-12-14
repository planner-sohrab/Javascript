const main = document.querySelector(".stars");
const starsUl= createElements(main, 'ul', 'main')
const output = createElements(main, 'div', 'output')


function createElements(parent, elType, myClass){
    const el = document.createElement(elType);
    parent.append(el);
    return el;
}