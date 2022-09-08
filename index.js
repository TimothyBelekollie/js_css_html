const btn=document.querySelector('#btn-1');


function addParagraph(){
    const randomNum=Math.floor(Math.random()*10);
    const pContent = 'The random number is:'+randomNum;
 
    // creating element in the dom
    const newElement=document.createElement('p');
    newElement.textContent=pContent;
    document.body.appendChild(newElement);
}
btn.addEventListener('click',addParagraph);

//btn.onclick=addParagraph;

// selecting element from the dom;

const uls=document.querySelector('ul');
uls.children.item(1);
const childone=uls.children.item(1)
childone.textContent="I got you brother";


// 
const pElement=document.querySelectorAll('p');
const p=pElement.item(1);


const parent=document.querySelector('.main-body');
const newP=document.createElement('p');
newP.textContent='I added this for fun';

parent.insertBefore(newP,p);





