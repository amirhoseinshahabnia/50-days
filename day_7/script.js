const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // check if the clicked box is already active
    // if active remove active and don't do anything else
    if (box.classList.contains('active')) return box.classList.remove('active');
    // if do not have active, remove active from all boxes
    boxes.forEach((item) => {
      item.classList.remove('active');
    });
    // add class active to current box
    box.classList.add('active');
  });
});
