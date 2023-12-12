const output = document.querySelector('#myId');
const html = "<h1> Hello World</h1>";
output.textContent = html;
output.innerHTML = html;

output.style.color = 'white';
output.style.backgroundColor='coral';
output.style.border = '2px solid black';
output.style.borderRadius = '25px';
output.style.paddingLeft = "1rem";


const el = output.style;
console.log(el);
el.textAlign = 'center';
el.textTransform = 'uppercase';
el.margin ='25px';




