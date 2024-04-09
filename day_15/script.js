const allCounters = document.querySelectorAll('.counter');

allCounters.forEach((counter) => {
  counter.innerText = 0;
  const max = Number(counter.dataset.max);
  //  define increment value
  const increment = max / 100;

  const updateCounter = () => {
    // get counter text and convert to number
    const counterText = Number(counter.innerText);

    // if number is less than max
    if (counterText < max) {
      counter.innerText = `${Math.ceil(counterText + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = max;
    }
  };
  updateCounter();
});
