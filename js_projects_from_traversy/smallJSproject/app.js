const chnangeState = function(){
  let currentState = new homeState();
}

chnangeState.prototype.init = function() {
  currentState = this.change(new homeState);
}

chnangeState.prototype.change = function(state) {
  currentState = state;
}


//changin to home state
const homeState = function() {
document.getElementById('heading').textContent = 'home';
 const content = document.getElementById('content');
 content.innerHTML = `
 <div class="jumbotron">
 <h1 class="display-3">Hello, world!</h1>
 <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
 <hr class="my-4">6
 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
 <p class="lead">
   <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
 </p>
</div>
 `;
}

//changin to about state
const aboutState = function() {
document.getElementById('heading').textContent = 'About';
const content = document.getElementById('content');
content.innerHTML = `
<p>This is the about page</p>
`
}

//changin to contect state
const conntectState = function () {
document.getElementById('heading').textContent = 'Conntect Us';
const content = document.getElementById('content');
content.innerHTML = `
<form>
<div class="form-group">
  <label>Name</label>dd
  <input type="text" class="form-control">
</div>
<div class="form-group">
<label>Email address</label>
<input type="email" class="form-control">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
`;
}


const newState = new chnangeState();
newState.init();

const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');
     
      // adding event listner for home button
      home.addEventListener('click', (x) => {
         newState.change(new homeState);
        x.preventDefault();
       
      })
     // adding event lisnter for about button
      about.addEventListener('click', (x) => {
        newState.change(new aboutState);
        x.preventDefault();
       
      })
      // adding event lisnter for contact button
      contact.addEventListener('click', (x) => {
        newState.change(new conntectState);
        x.preventDefault();
       
      })