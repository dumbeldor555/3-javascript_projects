const btn = document.querySelectorAll('.btn');

const tabs = document.querySelector('.tabs');

const content = ['hitory Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus unde nisi dicta est deleniti cumque totam sapiente. Explicabo nihil dicta ullam quisquam quidem dignissimos magnam esse in dolorum voluptate',

'vison Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus unde nisi dicta est deleniti cumque totam sapiente. Explicabo nihil dicta ullam quisquam quidem dignissimos magnam esse in dolorum voluptate?',

 'goal Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus unde nisi dicta est deleniti cumque totam sapiente. Explicabo nihil dicta ullam quisquam quidem dignissimos magnam esse in dolorum voluptate?',
];

tabs.addEventListener('click' , showcontent);
function showcontent(x) { 

if(x.originalTarget.classList.contains('btn')){
   
  for(let i = 0; i < btn.length; i++) {

   const myid = document.getElementsByClassName('btn')[i].id;
    if(x.originalTarget.getAttribute('id') === myid) { 
     
      tabs.children[i].classList.add('selected');
      const text = content[i]; 
      populateContent(myid, text);  
    } else {
       tabs.children[i].classList.remove('selected');
       console.log(btn[i]);
    }
  } 
}

}

function populateContent(heading, text) {

  const content = `<h3 class="textStyle">${heading}</h3>
                       <p class="textStyle2">${text}</p> `; 

    for(let i = 0; i < 2; i++) {
      // if(tabs.children.length > 3) { 
        tabs.children[tabs.children.length - 1].remove();
      // }
    } 
     tabs.innerHTML += content; 
}

window.addEventListener('DOMContentLoaded', function() {
  tabs.innerHTML += `<h3 class="textStyle">History</h3>
  <p class="textStyle2">${content[0]}</p> `;
  tabs.children[0].classList.add('selected');
})