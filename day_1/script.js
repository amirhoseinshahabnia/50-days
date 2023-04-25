const allPanels = document.querySelectorAll('.panel');

allPanels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActive();
    panel.classList.add('active');
  });
});

function removeActive() {
  allPanels.forEach((panel) => panel.classList.remove('active'));
}
