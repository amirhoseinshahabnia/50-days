const bg = document.querySelector('.bg');
const loader = document.querySelector('.loading-text');

let load_percent = 0;

let int = setInterval(blur, 30);

function blur() {
  load_percent++;

  if (load_percent > 99) {
    clearInterval(int);
  }

  loader.innerHTML = `${load_percent}%`;
  loader.style.opacity = scale(load_percent, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load_percent, 0, 100, 30, 0)}px)`;
}

// to map a renage of number to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

console.log(scale(30, 100, 0, 10, 0));
