const btn = document.querySelector('button');
const oldDiv = document.querySelector('.container');

btn.addEventListener('click', showNewDiv);

function showNewDiv() {
// getting rid of the old div
oldDiv.style.display = 'none';

const newDiv = createDiv();

//getting the body of the dom 
const body = document.querySelector('body');
//appending div to the body
body.appendChild(newDiv);

body.style.background = 'var(--clr-primary-7)';

// adding an event listner to close btn
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', returnToNormal);
function returnToNormal() {

newDiv.remove();
oldDiv.style.display = "flex";
body.style.background = 'url(../../source_code_from_instrector/javascript-basic-projects/6-modal/final/hero.jpeg)';
}
}

function createDiv() {

const btn = creatCloseBtn();

const newDiv = document.createElement('div');

newDiv.classList.remove('container');
newDiv.classList.add('containerForNew');
// creating a new heading 
const h1 = document.createElement('h1'); 
// creating text node;
const text = document.createTextNode('Model Content');
//inserting text into h1
h1.appendChild(text);
// appending close btn inside div 
newDiv.appendChild(btn);
// appendin  h1 into newDiv
newDiv.appendChild(h1);

return newDiv;
}

function creatCloseBtn() {

  const logo = document.createElement('i');
  logo.classList.add('fas','fa-times','closeBtn');
  return logo;
}


