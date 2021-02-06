// increase number
const increaseBtn = document.getElementById("increas");
increaseBtn.addEventListener("click", increasBy1);

//decrease number 
const decreaseBtn = document.getElementById("decrease");
decreaseBtn.addEventListener("click", decreaseBy1);

//reseting nuber
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);


function increasBy1() {

let value =  document.getElementById('value').innerHTML;
value++;
// inserting into document
document.getElementById('value').innerHTML = value;
}

function decreaseBy1() {

let value =  document.getElementById('value').innerHTML;
value--;
// inserting into document
document.getElementById('value').innerHTML = value;
}

function reset() {
  
  document.getElementById("value").innerHTML = 0;
}