const randomColorArry = ["red", "blue", "pink", "orange", "white", "green", "violet", "black"];
const randomColorArryInHex = ["#F1f5f8", "#56F7D8", "#668C95", "#419ED5", "#A50B3A", "#9237EC", "#1EBF53", "#54F315", "#3AA771", "#D35E06", "#BDEBC5"];

// getting click btn from doc in html
const btn = document.getElementById("btn");

// getting link element from doc in html 
const simpleBtn = document.getElementById("simpleChange");
const hexChange = document.getElementById("hexChange");

// adding event listenre to hex and simple link in html
simpleBtn.addEventListener("click", changeColorInSimple);
hexChange.addEventListener("click", changeColorInHex);

function changeColorInSimple() {

  btn.addEventListener("click", changeColor);

  function changeColor() {
  const randomNum = Math.round((Math.random()*(randomColorArry.length -1) ));
  const randomColor =  randomColorArry[randomNum];
  
  // setting document body to clicked color
  document.body.style.backgroundColor = randomColor;
  
  // updating colorname in document
  document.querySelector(".colorName").innerHTML = randomColor;
  }
  
  // styling link when click
  simpleBtn.style.backgroundColor = "#A50B3A";
  hexChange.style.backgroundColor = "white";
}

function changeColorInHex() {

  
  btn.addEventListener("click", changeColor);

  function changeColor() {
  const randomNum = Math.round((Math.random()*(randomColorArryInHex.length - 1)));
  const randomColor =  randomColorArryInHex[randomNum];
  
  // setting document body to clicked color
  document.body.style.backgroundColor = randomColor;
  
  // updating colorname in document
  document.querySelector(".colorName").innerHTML = randomColor;
  
  }
  
  // styleing btn
  simpleBtn.style.backgroundColor = "white";
   hexChange.style.backgroundColor = "#A50B3A";
}

