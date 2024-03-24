const boxes = document.querySelectorAll('.box');

let options = {
  root: null,
  rootMargin: '0px 100% 0px 100%',
  threshold: 0.6,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
}, options);

boxes.forEach((box) => {
  observer.observe(box);
});
