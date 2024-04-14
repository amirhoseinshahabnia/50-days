const allGlasses = document.querySelectorAll('.glasses .glass');
const remainedIndicator = document.querySelector('.remaining');
const filledIndicator = document.querySelector('.glass .filled');
const remainedPerentage = document.querySelector('.remaining span');
const filledPercentage = document.getElementById('filled-percetange');
const resetButton = document.getElementById('reset');

const CAPACITY = 8;

allGlasses.forEach((glass, i) => {
  glass.addEventListener('click', () => {
    allGlasses.forEach((item, index) => {
      if (i >= index) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
      // set filled and remained height + update text of remained & filled percentage
      const percentageFilled = ((i + 1) / CAPACITY) * 100;
      remainedIndicator.style.height = `${100 - percentageFilled}%`;
      remainedPerentage.innerText = `${2 - percentageFilled / 50}L`;
      filledIndicator.style.height = `${percentageFilled}%`;
      filledPercentage.innerText = `${percentageFilled}%`;
    });
  });
});

// add reset water drank
resetButton.addEventListener('click', () => {
  reset();
});

const reset = () => {
  allGlasses.forEach((glass) => glass.classList.remove('selected'));
  filledIndicator.style.height = '0';
  remainedPerentage.innerText = '2L';
  remainedIndicator.style.height = '100%';
  filledPercentage.innerText = '';
};
