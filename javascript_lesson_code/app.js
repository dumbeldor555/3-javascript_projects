
// lecture no 005

// var g = 'hello';
// console.log(g);

// console.log([1,2,3,4,5]);

// console.log({a:1,b:2});

// console.table({a:1,b:2});

// console.error('this is some bug');

// console.warn('this some warning');

// console.time('hello');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

// console.timeEnd('hello')


// lecture no 6


// difining a variable in js

// var let 

// difining a constant 

// const

// //////////////////////////////////////////////////////////


// var a;

// console.log(a);

// var a = 'hey';

// console.log(a);

// var a = 'whats up';

// console.log(a);

// we can only include letters, numbers , _ , $ while defining a veriable
// a variable should not start with the number but can include a number in veriable 

// nameing convention for veriable 

// var firstName = 'jhon'; //camel case
// var first_name = 'sara'; //underscore
// var FirstName = 'tom'; //pascal case

// // let 

// let q;

// q = 'adil';

// console.log(q);

// q = 'ujef';

// console.log(q);

// // const 



// const t = 'sumera'; 

// you can not initialize a constan veriable, you have to give it a value right away

// console.log(t);

// const ob = {a:'1',b:'2',c:'3'};
 
// console.log(ob);

// ob.a = '5';

// console.log(ob);

// const ar = [1,2,3,4,5,6,7,8];

// console.log(ar);

// ar.push(9);

// console.log(ar);
 
// lecture 7

// primitive data type

//number
// const y = 5;
// string 
// const r = 'maya';
//boolean
// const w = true;
//null
// const s = null;  //it will give a value as a object, it's just a bug, ignore it or google it
//undifine
// let test;
//symbole
// const sym = Symbol();  


//  refrence data type  // resute will be the object for all of refrence value


// object litrell

// const address = {
//   city:'ahmdabad',
//   street:'jamalpur',
//   building:'1227'

// };

// const hobbies = ['books','tvshows','swimming'];

// const today = new Date();


// console.log(today);
// console.log(typeof hobbies);


//lecture 008

// let val;

// val = String(45);

// val = String(true);




// val = String([1,3,5,7,9,11,13,17,19,23,29,31,37,41,43,47,51,53,57,59,61,67,69,71,73,79,83,87,89,91,93,97,101])

// val = (5).toString();

// val = Number('5');

// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number(NaN);
// val = Number('hello');
// val = Number([1,2,4,5,7,8,9,99,0]);
// val = Number();

// val =  Number(444);

// val = parseInt(1000.5000);
// val = parseFloat(14.44444);

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());


// type coarsion 

// let var1 = 5;
// let var2 = '5';

// let sum = var1 + var2;

// console.log(sum);
// console.log(typeof sum);

// lecture 009


// simpel math with numbers

// const g = 30;
// const h = 50;

// let result;

// result = g + h;
// result = h - g;
// result = g * h;
// result = h / g;
// result = h % g;  // remainder

// math object method

// result = Math.PI;
// result = Math.E;
// result = Math.round(3.9);
// result = Math.ceil(2.1);
// result = Math.floor(2.9);
// result = Math.sqrt(121);
// result = Math.abs(-121);
// result = Math.pow(5, 5);
// result = Math.pow(5, 5);
// result = Math.min(5,5,2,3,4,6,7,7,33,56,-3,-50);
// result = Math.max(5,5,2,3,4,6,7,7,33,56,-3,-50);
// result = Math.random();


// result = Math.floor((Math.random()*100)+1);
// console.log(result);


// // lecture 010

// const firstName = 'ramanujan';
// const lastName = 'khan';
// let result;

// result = firstName + lastName;

// console.log(result);

// result =  firstName + ' ' +lastName;

// console.log(result);

// // append

// result = 'aadil';
// result+= ' traversy';

// console.log(result);

// // escaping charecters

// result = 'what\'s up';

// // lentgh

// result = firstName.length;

// //concat

// result = firstName.concat(' ' ,lastName);

// // change case

// result = firstName.toUpperCase();
// result = firstName.toLowerCase();

// result = lastName[3];

// //index of

// result = firstName.indexOf('l');
// result = lastName.lastIndexOf('h');

// // charAt

// result = firstName.charAt(2);
// result = firstName.charAt(firstName.length - 1); // always give you last character
 
// result = firstName.substring(0,2);


// // slice

// result = firstName.slice(0,5);
// result = firstName.slice(-4);

// //split

// let str = 'hello, my, name, is, adil, would you like to go for dinner tonight';

//  result = str.split(',');

//  // replce

//  result = str.replace('dinner','coffee');

//  // include..??

//  result = str.includes('dinner');


// console.log(result);



// lecture 11

// const name = 'adil';
// const age = '55';
// const job = 'web developer';
// const hobby = 'swimming,soccer,running,fucking,reading,watching tvshows and movies,etc';

// function myNameIsNot() {

//   return 'ellen'
// }

// let html = `
//     <ul>
//       <li> ${name}</li> 
//       <li> ${age}</li> 
//       <li> ${job}</li> 
//       <li> ${hobby}</li> 
//       <li> ${2+5}</li> 
//       <li> ${myNameIsNot()}</li>
//       <li> ${age < 23 ? 'learn buddy' : 'keep learning no matter what'}</li>
//    </ul>
// `

// document.body.innerHTML = html;


// // lecture 12



// let numbers1 = [9,11,13,17,1,2,3,5,7,23,45,77,94,24,14,55];
// let numbers2 = [19,23,29,31,37,41,43];
// let fruits = ['apple','banana','orange','pomogranet'];
// let mixed = ['ironMan','1','5',new Date(),{a:'5',b:'10'},null,true,undefined];



// console.log(numbers1);
// console.log(numbers2);
// console.log(fruits);
// console.log(mixed);

// let result;

// mutating arry

// result = numbers1.length;
// result = Array.isArray(numbers1);
// result = numbers1[4]; // arrys are 0 based 
// numbers1[0] = 500;

// result = numbers1.indexOf(17);
//  numbers1.push(19);
//  numbers1.push(23);
//  numbers1.pop();
//  numbers1.unshift(0);
//  numbers1.shift();  // takes out first element in the arry
//  numbers1.shift();
//  numbers1.splice(1,3);// starting number is 0 based.
//  numbers1.reverse();

//  result = numbers1.concat(numbers1,numbers2);



//  numbers1.sort(function comper(a,b) {
//   return a-b;
//  });  // in accending order

//  numbers1.sort(function comper(a,b) {
//   return b-a;
//  }); // in deccending order
 
//  function above20(num) {
//    return num>20;
//  }

//  result = numbers1.find(above20);



 

// console.log(result);
// console.log(numbers1);

// lecture 013

// const person = {
//    name: 'adil',
//    age: '23',
//    email: 'absfkjnf@gmail.com',
//    hobbis: ['swimming','fucking','soccer','reading','etc'],
//    address: {
//      city:'ahmdabad',
//      state:'gujrat',
//      area:'jamalpur'
//    },
//   getBirth: function() {
//     return 2020-this.age;
//   }

// }

// let result;

// result = person;
// result = person.name;
// result = person.hobbis[1];
// result = person.address.city;
// result = person.getBirth();
// result = person.hobbis[0] = 'poker';

// const people = [
//   {name:'hemanshu',age:'23'},
//   {name:'brad',age:'30'},
//   {name:'taylor',age:'30'},
//   {name:'juliusCeaser',age:'30'},
//   {name:'cleopetra',age:'30'},
//   {name:'saldin',age:'30'},
//   {name:'newton',age:'30'},
//   {name:'ramanujan',age:'30'},
// ]

// for(let i=0; i < people.length; i++) {
//   console.log(people[i].name);
// }


//lecture 14

// let result;

// const today = new Date();

// let birthday = new Date('11-1-1997 11:25:00');
//  birthday = new Date('11 1 1997 11:25:00');

// result = today;
// result = today.getMonth()+1;
// result = today.getFullYear();
// result = today.getDate();
// result = today.getDay();
// result = today.getHours();
// result = today.getMinutes();
// result = today.getSeconds();
// result = today.getMilliseconds();
// // result = today.getTime();


// birthday.setDate(2);
// birthday.setMonth(2);
// birthday.setFullYear(1995);
// birthday.setHours(3);
// birthday.setSeconds(25);
// birthday.setMinutes(30);
// // birthday.setMilliseconds(300);



// console.log(birthday);


// lecture 015


// if(id === 5) {
//    console.log('it\'s a five');
// }else {
//      console.log('you did not type a five')
// }


// if(id !== 5) {
//   console.log('it\'s not five');
// }else {
//   console.log('ok it\s a five');
// }


// if(id === undefined){
//   console.log('it\s undifined');
// }else {
//   console.log('it\s agin five');
// }

// let id = 10;


// if(id <= 5) {
//   console.log('it\s less then  or equal to five');

// }else {
//   console.log('it\s greater then five');
// }

// let color = 'green';

// if(color === 'red') {
//   console.log('it\s red');
// }else if(color === 'green') {
//   console.log('it\'s green');
// }else {
//   console.log('i dont know');
// }

// let age = 44;
// let name = 'steve';


// if(age <= 12 && age > 0){
//   console.log(`${name} is a child`);
// }else if(age <= 0) {
//    console.log(`${name} is not born yet`);
// }else if(age < 20 && age > 12) {
//   console.log(`${name} is a teenager`);
// }else if(age > 19 && age < 50) {
//   console.log(`${name} is an adult`);
// }else{
//   console.log(`${name} is above 50`);
// }


// let food = 'milk';

// if(food === 'chocolet' || food === 'fruits'  || food === 'meat' || food === 'milkShake') {
//   console.log( 'great stuff');
// }else if( food === 'paya' || food === 'phoolap' || food === 'ravaiyya' ){
//   console.log(`ewww..`);
// }else {
//   console.log(`will do`);
// }

// console.log( food === 'meat' ? 'great' : 'oh no...')

// lecture 016

// let color = '';

// switch(color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
// break;
// case 'green':
// console.log('color is green');
// break;
// case 'yellow':
// console.log('color is yellow');
// break;
// default:
// console.log('color is not any of r b y g');
//  break;
// }


// let food = 'paya';

// switch(food) {
//   case 'paya':
//     console.log('oh fuck');
//     break;
//   case 'raviya':
//     console.log('oh fuck');
//     break;
//   case 'fruit':
//     console.log('great..');
//     break;
//   case 'meat':
//     console.log('great');
//     break;
//   default:
//     console.log('eat without whinning about it');
//   break;
// }


// lecture 017

// let a = 20;

// function time(a) {
//    return a;
// }

// function greetings(name = 'adil') {
//   return name;
// }


// console.log(greetings());
// console.log(time());


// const squre = function squre(x){
//   if(x < 0){
//     return console.log('you have to learn complex numbers');
//   }else{
//     return console.log(x*x);
//   }
   
// };

// console.log(squre(4));

// (function(name){
//   console.log(name);
// })('hey');


// const todo = {
//   add: function(){
//    return console.log('todo...');
//   },
//   bitch:function(){
//     return console.log('your dad bitch');
//   }
// }

// todo.hola = function(){
//   return console.log('hola ana');
// }


// console.log(todo.hola());

// lecture  18

// for(let i = 0; i <= 10; i++){
//   if(i === 5){
//      console.log('I dont like any number after 5');
//      continue
//   }
//    console.log(i);
// } 

// let a = 0;

// while( a < 100){
//   console.log('its' + ' ' + a );
//   a++;
// }

// let i = 0;

// do {
//   console.log( 'its ' + i);
//   i++;
// } while (i < 7);


// const list = ['apple','samsung','nokia','pixels'];

// list.forEach(function(x){
//     console.log( x + ' is great');
// })

// const users = [

// { id: 1, name: 'adil'},
// { id: 2, name: 'alhan'},
// { id: 3, name: 'bhagoo'},
// { id: 4, name: 'arsu'},
// { id: 5, name: 'rahil'},
// { id: 6, name: 'altu'},
// { id: 7, name: 'kharedi'},
// { id: 8, name: 'faisel'},

// ];    


// const id = users.map(function(x){
// if(x.name === 'adil' || x.name === 'alhan'){
//   console.log(`${x.name}  is great`)
// } else{
//   console.log ( x.name + ' is avarege')
// };
// });

// console.log(id);

// const compeny = ['apple','nike','mcdonalds','netflix','texas instruments'];

// for(let x in compeny){
//   console.log(compeny[x]);
// }

// const obj = {
//   firstName:'jhon',
//   lastName:'doe',
//   age:40
// }

// for(let a in obj){
//   console.log(`${a} : ${obj[a]}`);
// }


// lecture 1


// const input = prompt();

// alert(input);

// if(confirm('are you sure')){
//   console.log('ok so you are sure');
// }else {
//   console.log('why are you not sure what\'s wrong');
// }


// a = window.outerHeight;
// a = window.outerWidth;
// a = window.innerHeight;
// s
// a = window.scrollY;
// a = window.scrollX;

// window.location.href = 'https://www.google.com/';

// a = window.location.href = 'https://www.google.com/';
  
// a = window.location.href;
// a = window.location;
// a = window.location.host;
// a = window.location.port;
// window.location.href;
// a = window.location.search; // i dont know why its not working...?

//  a = window.location.href = 'http.//google.com';  i dont know why its not working...?
// window.location.reload(); 

// let a;

//   // window.history.go(-1);
//   // a = history.length; not working properly

// a = window.navigator.language; 

// console.log(a);

// lecture 020
  
// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//   var a = 5;
//   let b = 6;
//   const c = 7;

// console.log('function scope :', a,b,c);
// }

// if(true) {
//   var a = 5;  //scope of variable declered with var is current execution context, meaning a globle scope or function scope
// }


// for(var a = 0; a < 10; a++){
//   console.log(a);
// }


// console.log(a,b,c);


// var a = 5;
// console.log(a);
// var a = 4;
// console.log(a);


// console.log(test());

// let val;

// val = document.body;
// val = document.head;
// val = document.all;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms.length;
// val = document.forms[0];
// // val = document.forms[2].id.method;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links[3];
// val = document.links[0].classList;
// val = document.links[0].classList[1];
// val = document.links[0].className;

let val;

// document.images[0].src = "./img/nataur/m-wrona-opaAhLe0ZTI-unsplash.jpg";

// val = document.images[0].src;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// val = document.scripts;

// let arr;

// arr = Array.from(val);



// arr.forEach(function(a) {
//   console.log(a.getAttribute('src'));
// });


// console.log(arr);


// lecture 023


// console.log(document.getElementById('task-title'));
// console.log(document.getElementsByClassName('collection-item'));
// console.log(document.getElementById('task-title').className)

// let test;

//  test = document.getElementByClassName('collection');
// const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#333';



// test = document.getElementById('task-title');
// test = document.getElementById('task-form');
//  test = document.getElementById('test1');

// test = document.getElementById('task-title');
// test = document.getElementByClassName('collection-item');
  // test = document.getElementById('test1');


  // test = document.querySelector('.collection-item')

  // test = document.querySelector('#task');
  // test = document.querySelector('.collection');

  // test.style.color = 'pink';
  // test.style.background = 'black';
// test.style.padding = '3rem';
// test.style.padding = '3rem'
// test.style.fontSize = '3rem'

// test.textContent = 'hola';
// test.innerText = 'hola';

// test.innerHTML = '<h3>hole</h3>';


// let test;

// test = document.querySelector('ul li');
// test = document.querySelector('li:nth-child(3)');


// test.style.color = 'red';


// lecture 024

// let m;
// let n;

// // const test = document.getElementsByClassName('collection-item');
// // // console.log(test);

// // // console.log(test[0]);

// // m = document.getElementsByClassName('collection-item');

// // console.log(m);

// m = document.getElementsByTagName('li');

// m[0].style.color = 'pink';
// m[0].style.background = '#444';

// n = Array.from(m);

// n.forEach(function(x ,i) {
//   let b = 2*i ;
// if(2*i === 2*i + 1  || i <  b) {
//   n[i].style.color = 'pink';
//   n[i].style.background = '#444';
// }
// });

// n.reverse(); // did not understand quit well

// n.forEach(function(x,i) {
//     console.log(i);
// });

// n.reverse();

// n.forEach(function(li, index){
  
//   console.log(li.className);
//   li.textContent = index + ' hello';
//   console.log(index);  //its confusing why index is giving diffrent values in console and browser
// });

// console.log(n);


// // n.forEach(function(x,i) {
// //     console.log(x.className);
// //     console.log(i);
// // })


// const items = document.querySelectorAll('ul.collection li.collection-item');


// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const myvar = document.querySelectorAll('ul.collection li.collection-item');


// myvar.forEach(function(item, index) {
//   item.textContent =`${index} ok`;
// });

// const test = document.querySelectorAll('li:nth-child(odd)');

// test.forEach(function(x,i){
//   x.style.background = "#444";
// })

// for(let i = 0; i < test.length; i++) {
//   test[i].style.background = "red";  
// }

// let test = document.querySelectorAll('ul.collection li.collection-item');

// test.forEach(function(element,index) {
//    if(index % 2 === 0) {
//      element.style.background = "green";   
//    } else {
//      element.style.background = "black";
//    }
// });


// lecture 025

// let result;
// let result1;
// let result2;


// // result = document.querySelector('head');
// // result1 = document.querySelector('li.collection-item');



// // result2 = result.childNodes;
// // result2 = result.childNodes[1].nodeType;


// result1 = document.querySelector('ul.collection');
// result2 = document.querySelector('li.collection-item');

// // // result = result1.children[4];
// // // result.style.color = "red";
// // // result.textContent = "hola";

// // result1.children[3].children.class = 'my-id';
// // const x = result1.children[2].children;


// // console.log(x);

// // result = result1.lastElementChild;
// // result.style.color = "red";



//   // result = result1.childElementCount;

//   // result = result1.parentElement.parentElement;
//   // result = result1.parentNode;
//   // let x = result.parentNode;


// result = result1.previousSibling.previousSibling;
// //  result = result2.nextElementSibling;


// console.log(result);

// lecture 26 

// let  myel = document.createElement('li');

// // myel = document.createElement('h5');
// myel.id = 'task-title';
// myel.className = 'test';
// let b = document.createTextNode('im the new one');
// myel.appendChild(b);
// document.querySelector('div.card-action').appendChild(myel);

// console.log(myel);

// const  myel = document.createElement('li');

// myel.className = 'collection-item';
// myel.setAttribute('alt','newYork');

// myel.appendChild(document.createTextNode('im the new text'));
// //  myel.innerHTML = '<h1>hey</h1>'
// const link = document.createElement('a');

// link.className = 'delet-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// myel.appendChild(link);

// document.querySelector('ul.collection').appendChild(myel);

// console.log(myel);


// lecture 027

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// //Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading); 



// const newheading = document.createElement('h2');
// newheading.id = 'task-title';

// newheading.className = 'test';

// newheading.appendChild(document.createTextNode('hello world'));

// const oldheading = document.getElementById('task-title');

// const parent = document.querySelector('.card-action'); // for some reason get elment by class name is not working



// console.log(parent);

// parent.replaceChild(newheading, oldheading);

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');


// const element = document.querySelector('li');
// const Allelement = document.querySelector('ul');

// console.log(element)
// Allelement.removeChild(element[]); 

// CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let x;
// let a;
// const y = document.querySelector('li:first-child');

// x = y.children[0];
// a = x.getAttribute('href');
// a = x.setAttribute('href','http://google.com');
// a = x.getAttribute('href');
// a = x.removeAttribute('href');
// a = x.hasAttribute('href');

// console.log(a);

// lecture 029



// document.querySelector('.clear-tasks').addEventListener('click', function(x){
//   console.log('hello');
//   // x.preventDefault();
// });


// document.querySelector('.clear-tasks').addEventListener('click', myfunction);


// function myfunction(x) {
//   let val;
//   x.preventDefault();

//   val = x;
 
//   // event target element
//   val = x.target;
//   val = x.target.className;
//   val = x.target.classList;

//   // event type like click mouseover etc
//   val = x.type;

//   // timestamp
//   val = x.timeStamp;

//   //reletive to browser
//   val = x.clientY;
//   val = x.clientX;

//   //reletive to element
//   val = x.offsetY;
//   val = x.offsetX;
  


//   console.log(val);

// }

// lecture 29

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', myfunc);
// clearBtn.addEventListener('dblclick', myfunc);

// clearBtn.addEventListener('mousedown', myfunc); // not sure what it does exectly
// clearBtn.addEventListener('mouseup', myfunc); 
// clearBtn.addEventListener('mouseenter', myfunc); 
// clearBtn.addEventListener('mouseleave', myfunc);   // find out the diffrence between mouse over,out,enter,leave

// clearBtn.addEventListener('mouseover', myfunc); 
// clearBtn.addEventListener('mouseout', myfunc); 
// card.addEventListener('mousemove', myfunc); 

// card.addEventListener('mouseover' , myfunc);
// card.addEventListener('mouseout' , myfunc);
// card.addEventListener('mouseleave' , myfunc);
// card.addEventListener('mouseenter' , myfunc);
// card.addEventListener('mousemove' , myfunc);




// function myfunc(x) {
//     //  heading.textContent = `mouseX : ${x.offsetX} mouseY : ${x.offsetY}`
//     console.log(`event type: ${x.type}`);
//     // document.body.style.backgroundColor = `rgb(${x.offsetX},${x.offsetY},40)`;
// };


//lecture 030

// const form = document.querySelector('form');
// const input = document.querySelector('#task');
// const heading = document.querySelector('h5');
// const select =  document.querySelector('select');

// form.addEventListener('submit', myfunc);
// form.addEventListener('keydown', myfunc);
// form.addEventListener('keyup', myfunc);
// form.addEventListener('keypress', myfunc);
// input.addEventListener('focus', myfunc);
// input.addEventListener('blur', myfunc);
// input.addEventListener('cut', myfunc);
// input.addEventListener('paste', myfunc);
// input.addEventListener('input', myfunc);

// // select.addEventListener('change', myfunc);





// function myfunc(x) {
//   console.log(`EVENT TYPE: ${x.type}`)
//   // console.log(` VALUE ${x.target.value}`)
//   // heading.innerText = x.target.value;
//   x.preventDefault();
// }


// lecture 031


// const a = document.querySelector('.card-title');
// const b = document.querySelector('.card-content');
// const c = document.querySelector('.card');
// const d = document.querySelector('.row');
// const f = document.querySelector('body');
// a.addEventListener('click', myfunc);
// b.addEventListener('click', myfunc);
// c.addEventListener('click', myfunc);
// d.addEventListener('click', myfunc);
// f.addEventListener('click', myfunc);

// function myfunc(x) {
//   console.log(x.type);
// }

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
//   });
  
//   document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
//   });
  
//   document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
//   });
  
//   document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
//   });

//   document.querySelector('body').addEventListener('click', function(){
//     console.log('body');
//   });


// const delitem = document.querySelector('.delete-item');

// delitem.addEventListener('click', deletitem);
// //


//  function deletitem(x) {
//   // console.log('deleted');
//   if(x.target.parentElement.classList.contains('delete-item')){
//     console.log('deleted');
//       x.target.parentElement.parentElement.remove();
//   }
//   // console.log('deleted')
// }

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete item');
//   // }

//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }



// localStorage.setItem('name', 'jon');
// localStorage.setItem('age', '28');
 











// localStorage.removeItem('name');
// localStorage.removeItem('age');
// localStorage.removeItem('name');
// const a = localStorage.getItem('name');
// const b = localStorage.getItem('age');
// localStorage.clear();  // dont know exectly how it works

// console.log(a);
// console.log(b);

// document.querySelector('form').addEventListener('submit', function(x){
//   const task = document.getElementById('task').value;

//   let tasks;

//   localStorage.setItem('task', task);  

//   alert('task saved');

//   x.preventDefault();

// })

// localStorage.removeItem('task');


// document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').value;

//   let tasks;

//   if(localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));

//   alert('Task saved');

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//   console.log(task);
// });

// ///////////////////////////////////////////////////////////////////////////////


// document.querySelector('form').addEventListener('submit',function(x){

//   const y = document.getElementById('task').value;
//   let lists
//   if(localStorage.getItem('item')=== null ){
//     lists = [];
//    }else {
//      lists = JSON.parse(localStorage.getItem('item'));
//    }

//   localStorage.setItem('item', JSON.stringify(lists.push(y)));
  

//    alert('task saved');

//    x.preventDefault();

// })

// localStorage.getItem('item');

  // const form = document.querySelector('form');

  // form.addEventListener('submit', addToList);

  // function addToList(x) {
  //   const y = document.getElementById('task').value;
 
  //   if(localStorage.getItem('item')=== null ){
  //   let lists = [];
  //    }else {
  //      lists = JSON.parse(localStorage.getItem('item'));
  //    }

  //   localStorage.setItem('item', JSON.stringify(lists.push(y)));
    

  //    alert('task saved');

  //    x.preventDefault();

  // }



// const test = localStorage.getItem('hello');

// console.log(test);