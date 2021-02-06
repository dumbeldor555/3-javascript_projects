// api key : cc2627b9
$(document).ready(function() {

  $('#searchForm').on('submit', function(x) {

  let searchText = $('#searchText').val();
  getMovies(searchText);
  x.preventDefault();
  })
})

async function getMovies(search) {
const response =  await fetch(`http://www.omdbapi.com/?s=${search}apikey=cc2627b9&`);
console.log(response);
}

// there seems to be no free api to make that projects, but dont get discourege , you've made plenty of good thing , if there was a free api then it was not so hard to make that project you can check it out brad's youtube chanel he made it in the video and it wasn't that hard