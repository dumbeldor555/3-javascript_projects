

// there is bug in the code, i dont know from where the commas are commeng from...?
// displaying old jokes when page reload

document.addEventListener('DOMContentLoaded', displayOldJokes);

function displayOldJokes(x){
   const oldJokes = JSON.parse(localStorage.getItem('jokes')); 
   document.querySelector('.jokes').innerHTML = oldJokes;
  x.preventDefault();
}

// getting jokes when button is clicked
document.querySelector('.get-jokes').addEventListener('click',getJokes);

// storing jokes in local storage
function storeInLs(){
 
}


function getJokes(e){
const xml = new XMLHttpRequest();
let displayJokes = '';  

const number = document.querySelector('#number').value;

xml.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

xml.onload = function(){
  if(this.status === 200){
   const jokes = JSON.parse(this.responseText);
    if(this.response = 'success'){
      jokes.value.forEach(function(element){
        displayJokes += `
        <li>${element.joke}</li>
        `
      
      })
    }else{
      displayJokes += '<li>somthing went wrong</li>';
    }
    let arry;

    if(localStorage.getItem('jokes') === null){
      arry = [];
    }else {
      arry =JSON.parse(localStorage.getItem('jokes')); 
    }
    //pushing an element into the arry
    arry.push(displayJokes);
  
    
    localStorage.setItem('jokes',JSON.stringify(arry));
    const Pjokes = JSON.parse(localStorage.getItem('jokes'))
     document.querySelector('.jokes').innerHTML = Pjokes;

    
   
  }
}

xml.send();

  e.preventDefault();
}
