const container = document.querySelector('.container');
const circleContainer = document.querySelector('.circle-container .circle');
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav');
  circleContainer.classList.add('rotate');
});

closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
  circleContainer.classList.remove('rotate');
});
