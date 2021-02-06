const review = [
 {
   id:1,
   name: "susan smith",
   title: "web developer",
   image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
   about:  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

},
{
  id:2,
  name: "anna johnson",
  title: "web developer",
  image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  about: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
  id:3,
  name: "peter jones",
  title: "web developer",
  image:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  about:   "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",

},
{
  id:4,
  name: "bill anderson",
  title: "web developer",
  image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  about: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",

}
]

// selecting items
const image = document.getElementById('person-img');
const name = document.getElementById('name');
const title = document.getElementById('title');
const about = document.querySelector('.about');
const preBtn = document.querySelector('.pre');
const postBtn = document.querySelector('.post');



window.addEventListener("DOMContentLoaded" , function() {
  const item = review[currentItem];

  image.src = item.image;
  name.innerHTML = item.name;
  title.innerHTML = item.title;
  about.innerHTML = item.about;
});

// going forward in profile list
preBtn.addEventListener("click", goback);
// goinng backwards in profiles list 
postBtn.addEventListener("click", goforword);

// profile index
let currentItem = 0;

// showing profile in browser
function showProf(index) {

  const item = review[index];

  image.src = item.image;
  name.innerHTML = item.name;
  title.innerHTML = item.title;
  about.innerHTML = item.about;
}

function goback() {
  if(currentItem !== 0) {

    currentItem--;
    showProf(currentItem);
  } else {

    currentItem = 3;
    showProf(currentItem);
  }
}
// 

function goforword() {

  if(currentItem !== 3) {

    currentItem ++;  
    showProf(currentItem);
  } else {

    currentItem = 0;
    showProf(currentItem);
  }
}

