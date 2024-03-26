const container = document.querySelector('.container');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((char, i) => {
      return `<span style="transition-delay: ${i * 30}ms">${char}</span>`;
    })
    .join('');
});
