const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeIndex = 0;

next.addEventListener('click', () => {
  if (activeIndex === circles.length - 1) {
    return;
  }

  activeIndex++;

  update();
});

prev.addEventListener('click', () => {
  if (activeIndex === 0) {
    return;
  }

  activeIndex--;

  update();
});

function update() {
  // add active class to corresponding circle
  circles.forEach((circle, i) => {
    if (i === activeIndex) {
      circle.classList.add('active');
    } else if (i > activeIndex) {
      circle.classList.remove('active');
    }
  });

  // update progress bar
  progress.style.width = (activeIndex / (circles.length - 1)) * 100 + '%';

  // disabling/enabling btns based on active index
  if (activeIndex === 0) {
    prev.disabled = true;
  } else if (activeIndex === circles.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
