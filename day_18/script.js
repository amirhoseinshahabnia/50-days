const BG_IMGS = [
  './fire-1.jpg',
  './wind-1.jpg',
  './fire-2.jpg',
  './wind-2.jpg',
  './fire-3.jpg',
  './wind-3.jpg',
];

let slideIndex = 1;

const windowWidth = window.innerWidth;
const windowHeigt = window.innerHeight;

const container = document.querySelector('.container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const nextArrow = document.querySelector('.next-arrow');
const prevArrow = document.querySelector('.prev-arrow');

container.style.backgroundImage = `url(${BG_IMGS[0]})`;

BG_IMGS.forEach((img, i) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.style.opacity = 0;
  if (i === 0) {
    slide.classList.add('active');
    slide.style.opacity = 1;
  }
  // slide.style.transform = `translate3d(0, 0, -${i * 100}px)`;
  slide.style.backgroundImage = `url(${img})`;
  sliderWrapper.appendChild(slide);
});

function showSlide(n) {
  let slides = document.querySelectorAll('.slide');
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].style.opacity = '0';
  }

  slides[slideIndex - 1].style.opacity = '1';
  slides[slideIndex - 1].classList.add('active');
  container.style.backgroundImage = `url(${BG_IMGS[slideIndex - 1]})`;
}

nextArrow.addEventListener('click', () => {
  slideIndex += 1;
  showSlide(slideIndex);
});

prevArrow.addEventListener('click', () => {
  slideIndex -= 1;
  showSlide(slideIndex);
});

function setBackgroundSize(node) {
  node.style.backgroundSize = `${windowWidth}px ${windowHeigt}px`;
}
