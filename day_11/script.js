// add loaded stated to event-info div to show event codes info state
const eventContainer = document.querySelector('.event-info');
const eventKey = document.querySelector('#eventKey .item');
const eventKeyCode = document.querySelector('#eventKeyCode .item');
const eventCode = document.querySelector('#eventCode .item');

document.addEventListener('keydown', (e) => {
  eventContainer.classList.add('loaded');
  eventKey.innerText = e.key !== ' ' ? e.key : 'Space';
  eventKeyCode.innerText = e.keyCode;
  eventCode.innerText = e.code;
});
