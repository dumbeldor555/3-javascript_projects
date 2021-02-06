// 

// api key url format  “https://api.lusha.co/person?firstName=Rob&lastName=Taylor&company=intercom” -H “api_key:YOUR_API_KEY”

const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

// it will run swiProf function when dom is loaded

// making event listners
document.getElementById('next').addEventListener('click', swipProf);

//getting object from data arry via itorater function
const profiles = itorater(data);
document.addEventListener('DOMContentLoaded', swipProf);

// swipProf();


//making swipProf function
function swipProf() {
  let profileObj = profiles.next();
  
  if(profileObj !== undefined) {
    const img = document.getElementById('imageDisplay');
  const details = document.getElementById('profileDisplay');

   img.innerHTML = `
      <img src="${profileObj.image}">
   `;

  details.innerHTML = `
    <ul class="list-group">
    <li class="list-group-item"> Name: ${profileObj.name}</li>
    <li class="list-group-item"> Age: ${profileObj.age}</li>
    <li class="list-group-item"> Gender: ${profileObj.gender}</li>
    <li class="list-group-item"> Name: ${profileObj.gender} looking for a beutiful ${profileObj.lookingfor}</li>
    <li class="list-group-item"> Location: ${profileObj.location} looking for a beutiful ${profileObj.lookingfor}</li>
    </ul>
  `;
  } else {
    window.location.reload();
  }
}


// making an itrator function
function itorater(profiles) {
  let index = 0;

  return {
    next: function() {
     return profiles.length > index ? profiles[index++] :
     undefined
    }
  };
}

