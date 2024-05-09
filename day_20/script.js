const mousePointer = document.querySelector('.circle');
const btn = document.querySelector('#with-ripple');

const btnLeft = btn.getBoundingClientRect().left;
const btnTop = btn.getBoundingClientRect().top;

btn.addEventListener('click', (e) => {
  btn.classList.add('ripple');
  const rippleCircle = document.createElement('span');
  rippleCircle.classList.add('ripple-circle');
  rippleCircle.style.left = `${e.x - btnLeft}px`;
  rippleCircle.style.top = `${e.y - btnTop}px`;
  btn.appendChild(rippleCircle);
  setTimeout(() => {
    btn.classList.remove('ripple');
    btn.removeChild(rippleCircle);
  }, 400);
});

document.addEventListener('mousemove', (e) => {
  mousePointer.style.opacity = 0.2;
  mousePointer.style.left = `calc(${e.x - 20}px)`;
  mousePointer.style.top = `calc(${e.y - 20}px)`;
});
