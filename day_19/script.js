const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function getTheme() {
  const theme = localStorage.getItem('theme');

  // if theme exists in localStorage -> add the theme value class to the html element
  if (theme === 'dark') {
    document.documentElement.classList.add(theme);
    toggle.innerText = 'Light Mode';
  }
}

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if ([...document.documentElement.classList].includes('dark')) {
    // setlocal storage form theme --> dark
    localStorage.setItem('theme', 'dark');
    toggle.innerText = 'Light Mode';
  } else {
    // setlocal storage form theme --> light
    localStorage.setItem('theme', 'light');
    toggle.innerText = 'Dark Mode';
  }
});

function setTime() {
  const time = new Date();
  const month = months[time.getMonth()];
  const day = days[time.getDay()];
  const date = time.getDate();
  const hours = time.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const clockHours = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // setting needles angles
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    clockHours,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

  timeEl.innerText = `${clockHours < 10 ? '0' + clockHours : clockHours}:${
    minutes < 10 ? '0' + minutes : minutes
  } ${ampm}`;
  dateEl.innerHTML = `
    ${day}, ${month} <span class='circle'>${date}</span>
  `;
}

// to map a renage of number to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
setTime();
getTheme();
setInterval(setTime, 1000);
