const choicesCtn = document.getElementById('choices-ctn');
const textarea = document.getElementById('choices-input');

textarea.focus();
// add change event listener to text area
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 500);
    selectRandomTag();
  }
});

const filterTags = (val) => {
  return val
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
};

const createTags = (val) => {
  const tags = filterTags(val);

  // clear choiceCtn html element to avoid appending to the output each time on key press (from previous append)
  choicesCtn.innerHTML = '';

  // loop through tags and add each tag
  tags.forEach((tag) => {
    const tagEl = document.createElement('div');
    tagEl.classList.add('choice');
    tagEl.innerText = tag;
    choicesCtn.appendChild(tagEl);
  });
};

const selectRandomTag = () => {
  // selecting all the tags
  const tags = document.querySelectorAll('.choice');
  if (tags.length === 0) {
    return null;
  }
  const times = 20;

  const selectInterval = setInterval(() => {
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    randomTag.classList.add('selected');
    setTimeout(() => {
      randomTag.classList.remove('selected');
    }, 100);
  }, 100);

  // clear interval
  setTimeout(() => {
    clearInterval(selectInterval);
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    randomTag.classList.add('selected');
  }, times * 100);
};
