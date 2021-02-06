function HTTP() {

};

HTTP.prototype.get = async function(url) {
 
  const data = await fetch(url);
  const resData = await data.json();
  return resData;
}

HTTP.prototype.post = async function(url, data) {

  const respons = await fetch(url,  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resData = await respons.json();
  return resData;
}


HTTP.prototype.put = async function(url, data) {

  const respons = await fetch(url,  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resData = await respons.json();
  return resData;
}

const http = new HTTP();

const obj = {
  'name': 'aadil',
  'email': 'jfosdfijf',
  'phone': 342443
}

http.post('http://localhost:3000/pepole', obj)
.then(res => console.log(res))
.catch(err => console.log(err));


///////////////////////////////////////////   FOR SOME REASON ITS NOT WORKING, THE PERSONE WHO GAVE YOU THIS PROJECT, HIS CODE IS NOT WORKING AS WELL SO DONT WORRY ABOUT IT TOO MUCH////////////////////////////////