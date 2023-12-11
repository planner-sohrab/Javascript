// const ele1 = document.querySelector('h1');
// // console.log(ele1)
// ele1.textContent = "Hello World";
// console.log(ele1)

const eles = document.querySelectorAll('div');
// eles[0].addEventListener('click', buttonClicker);
// eles[1].addEventListener('click', buttonClicker);
// eles[2].addEventListener('click', buttonClicker);

eles.forEach(el=>{
    el.addEventListener('click', buttonClicker)
    el.textContent = 0;
})

function buttonClicker(e){

    // console.log(e);
    let ele = e.target;
    console.log(ele.textContent);
    let val = ele.textContent;
    val++;
    ele.textContent=val;
}