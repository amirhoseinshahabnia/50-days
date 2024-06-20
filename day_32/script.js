const allBtns = document.querySelectorAll(".cool-btn");
const allCircles = document.querySelectorAll(".circle");
const allCheckboxes = document.querySelectorAll("input");

allBtns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    [...allCircles][i].classList.toggle("checked");
    [...allCheckboxes][i].checked = ![...allCheckboxes][i].checked;
  });
});
