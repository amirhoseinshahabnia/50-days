const boxes = document.querySelectorAll('.box');
const audios = document.querySelectorAll('audio');

// loop through all boxes
boxes.forEach((box, currentIndex) => {
  // add click event hanler to each box
  box.addEventListener('click', () => {
    // remove active class from all other boxes andstop all tracks
    boxes.forEach((item, idx) => {
      if (currentIndex !== idx) {
        item.classList.remove('active');
        audios[idx].pause();
        audios[idx].currentTime = 0;
      }
    });
    // add active class to the clicked bus
    box.classList.add('active');
    audios[currentIndex].play();
  });
});
