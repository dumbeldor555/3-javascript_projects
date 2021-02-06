// make a function cunstorction, and then creat a prototype function 

function easyHttp() {
  this.Http = new XMLHttpRequest();
}

// easyHttp.prototype.get = function(url, callback) {
// this.Http.open('GET', url, true);
// let self = this;
// this.Http.onload = function(){
//   if(self.Http.status === 200) {
//     callback(null, self.Http.responseText);
     
//   }else{
//    callback('error' + self.Http.status);
//   }
// }
// this.Http.send();
// }

//  make an http post request


easyHttp.prototype.post = function(url ,data, callback) {
this.Http.open('POST', url, true);
this.Http.setRequestHeader('Content-type', 'application/json');

let self = this;
this.Http.onload = function(){
    callback(null, self.Http.responseText);
}

this.Http.send(JSON.stringify(data));
}

easyHttp.prototype.put = function(url, data, callback){
this.Http.open('PUT', url , true);
this.Http.setRequestHeader('Content-type', 'application/json');

const self = this;
this.Http.onload = function() {
  callback(null,self.Http.responseText);
}
 
this.Http.send(JSON.stringify(data));
}

easyHttp.prototype.delete = function(url, callback){
  this.Http.open('DELETE', url, true);
  this.Http.setRequestHeader('Content-type', 'application/json');
   const self = this;
  this.Http.onload = function(){
    if(self.Http.status === 200){
      callback(null, 'post Deleted');

    }else {
      callback('error' + self.Http.status);
    }
  }

  this.Http.send();
}