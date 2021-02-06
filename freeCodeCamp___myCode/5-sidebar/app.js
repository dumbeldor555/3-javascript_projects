document.querySelector('.sidebar-toggle').addEventListener('click', showManu);
document.querySelector('.closeBtn').addEventListener('click', hideManu);
const sideBar =  document.querySelector('.sidebar');

function showManu() {

sideBar.classList.toggle('show-sidebar');
}

function hideManu() {

  sideBar.classList.remove('show-sidebar');
}