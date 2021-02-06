/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Adil chhipa
 * @license MIT
 *
 **/

 class EasyHTTP{
   // make an http get request
   get(url) {
     return new Promise(function(Fulfild, notFulfild){
       fetch(url)
      .then(res => res.json())
      .then(data => Fulfild(data))
      .catch(err => notFulfild(err));
     });
  }
  // make a post http request 

  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

    });

  }

  //make put request 

  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // make delete request 

  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('not found...'))
      .catch(err => reject(err));
    });
  }
 }


 

