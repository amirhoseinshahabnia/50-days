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
  loader.style.opacity = scale(load_percent, 100, 0, 0, 1);
  bg.style.filter = `blur(${scale(load_percent, 100, 0, 0, 30)}px)`;
}

function scale(number, in_max, in_min, out_max, out_min) {
  return (
    out_min + ((number - in_min) * (out_max - out_min)) / (in_max - in_min)
  );
}

console.log(scale(30, 100, 0, 10, 0));
