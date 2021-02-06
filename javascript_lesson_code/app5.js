// make say hello funciton

// const sayHello = () => {
//   console.log('hello');
// }


// make it in one line without '{}'

// const sayHello = () => console.log('hello again');

// sayHello();


// one line returns 

// const sayHello = () => 'heelo';

// console.log(sayHello());

// returning an object is tricky with arrow funciton, let's see

// worng  way

// const obj = () => { name: 'jessica', networth: '200mil'}

// right way

// const  obj = () => ({name: 'jessica', networth: '200mil'});

//  console.log(obj());

const users = ['nathan', 'jhon', 'marry'];

// const nameLenth = users.map(function(name) {
//   return name.length;
// });

// shorter way

const nameLenth = users.map(name => name.length);


console.log(nameLenth);