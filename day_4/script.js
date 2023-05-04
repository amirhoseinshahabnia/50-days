const searchCtn = document.querySelector('.search-ctn');
const searchInput = document.getElementById('search-input');
const search = document.querySelector('.search');

search.addEventListener('click', () => {
  searchCtn.classList.toggle('active');
  if (searchCtn.classList.contains('active')) {
    searchInput.focus();
  }
});
