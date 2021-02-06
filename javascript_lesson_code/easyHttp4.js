class EasyHttp {

  // getting users from a server

  async getUsers(url) {
    const response = await fetch(url);
     
    const data = await response.json();

    return data;
  }

  async postUsers(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const returnedData = await response.json();

    return returnedData;

  }

  async deleteUsers(url) {
    const response = fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
     
    const data = await 'deleted';

    return data;
  }

  async updateUser(url, data) {
    const  response = await fetch(url, {
      method: 'PUT',
      headers: {
       'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const realData = await response.json();

    return realData;
  }
}