class UI {
 constructor() {
   this.profile = document.getElementById('profile');
 }

  displayUser(user) {
    this.profile.innerHTML = ` 
    
<div class="card card-body mb-3">
<div class="row">
  <div class="col-md-3">
    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
    <a href="${user.html_url}" target="_blank" class="btn-primary btn-block mb-4">view profile</a>
  </div>
  <div class="col-md-9">
    <span class="badg badg-primary">public repos: ${user.public_repos}</span>
    <span class="badg badg-secondary">public gists: ${user.public_gists}</span>
    <span class="badg badg-success">followers: ${user.followers}</span>
    <span class="badg badg-info">following: ${user.following}</span>
    <br><br>
    <ul class="list-group">
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">websit/blog: ${user.blog}</li>
    <li class="list-group-item">location: ${user.location}</li>
    <li class="list-group-item">member since: ${user.created_at}</li>
    </ul>
  </div>
</div>
</div>
<h3 class="page-heading mb-3">latest repos</h3>
<div id="repos"></div>
    `
  }
}