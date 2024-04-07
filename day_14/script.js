const nav = document.querySelector('nav');
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('closed');
});
