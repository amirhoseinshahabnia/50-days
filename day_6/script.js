const boxes = document.querySelectorAll('.box');

const showBoxes = () => {
  const triggerPoint = (window.innerHeight / 5) * 3.5;

  boxes.forEach((box) => {
    const boxTopLimit = box.getBoundingClientRect().y;

    if (boxTopLimit < triggerPoint) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};

showBoxes();
document.addEventListener('scroll', showBoxes);
