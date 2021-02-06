// async function myFunction(){
 
//   const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve('hello');
//    }, 3000);
//   });

//   const error = false;

//   if(!error){
//    res = await promise;
//    return res;
//   }else {
//   await Promise.reject(new Error('somtning went wrong'));
//   }
// }

// myFunction()
// .then(res => console.log(res))
// .catch(error => console.log(error));

async function secondFunction() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();

  return data;
}

secondFunction()
.then(data => console.log(data));