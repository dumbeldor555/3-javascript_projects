// add an event listner to button1 and button2 
// load single customer from json file
// load multipal customer from diffrent json file

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);
function loadCustomer(x) {
const xml = new XMLHttpRequest();

xml.open('GET', 'customer.json', true);

xml.onload = function(){
  if(this.status === 200){
    const customer = JSON.parse(this.responseText);
    const output = `
    <ul>
    <li>ID : ${customer.id}</li>
    <li>ID : ${customer.name}</li>
    <li>ID : ${customer.company}</li>
    <li>ID : ${customer.phone}</li>
    </ul>
    `;
    document.getElementById('customer').innerHTML = output;
  }  
}

xml.send();
}

function loadCustomers() {
 const xml = new XMLHttpRequest();

  xml.open('GET', 'customers.json', true);

  xml.onload = function(){
    if(this.status === 200){

      const customers = JSON.parse(this.responseText);
      
      let output = '';

      customers.forEach(function(element){
       output += `
       <ul>
       <li> ID : ${element.id}</li>
       <li> name : ${element.name}</li>
       <li> company : ${element.company}</li>
       <li> phone : ${element.phone}</li>
       </ul>
       `
      })
      document.getElementById('customers').innerHTML = output;
    }
  }
  xml.send();
}
