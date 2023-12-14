const main = document.querySelector(".stars");
const starsUl= createElements(main, 'ul', 'main')
const output = createElements(main, 'div', 'output')

for(let x=0; x<5; x++){
    const star = createElements(starsUl, 'li', 'star');

}
function createElements(parent, elType, myClass){
    const el = document.createElement(elType);
    parent.append(el);
    return el;
}