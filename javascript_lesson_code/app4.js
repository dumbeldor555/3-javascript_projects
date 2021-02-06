document.getElementById('button1').addEventListener('click', getPostFromText);
document.getElementById('button2').addEventListener('click', getPostFromJsonFile);
document.getElementById('button3').addEventListener('click', getAPIfromWeb);

// getting data from text file
function getPostFromText() {
  fetch('text.txt')
  .then(response => {
   return response.text();
  }).then(data => {
   console.log(data);
   document.getElementById('output').innerHTML = data;
  }).catch(err => {
    console.log('somthing went wrong');
  })
}

// getting data from json file

function getPostFromJsonFile(){
 fetch('post.json')
 .then( response => {
  return response.json();
 })
 .then(data => {
   console.log(data);
   let output = '';

   data.forEach(function(element){
     output += `<li>${element.title}</li>`;
   });

   document.getElementById('output').innerHTML = output;
 })
 .catch(err => {
   console.log(err);
 });
}

// getting data from external API wich is on the web

function getAPIfromWeb() {
  fetch('https://api.github.com/users')
  .then(response => {
   return response.json();
  })
  .then(data => {
    console.log(data);
    let output = '';

    data.forEach(element => {
      output += `<li>${element.login}</li>`
    })

    document.getElementById('output').innerHTML = output;
  })
  .catch(err => {
    console.log(err);
  });
}

