const myBlock = new EasyHttp;

myBlock.getUsers('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));


const data = {
  name: 'aadil',
  favMovie: 'interstellar',
  occupation: 'coder/invester/teacher/mathmatition/and not a good  speller'
}

// const data = {
//   name: 'aadil',
//   username: 'jdfjfdfijofi',
//   email: 'jfsdlfjoholaholahola'
// }

myBlock.postUsers('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

myBlock.deleteUsers('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));



// myBlock.updateUser('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));