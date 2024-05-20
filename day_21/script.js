const draggable = document.querySelector(".fill");
const allBoxes = document.querySelectorAll(".item");

const dragStart = () => {
  draggable.classList += " hold";
  setTimeout(() => {
    draggable.classList = "invisible";
  }, 300);
};

const dragEnd = () => {
  draggable.classList = "fill";
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.target.classList.add("hovered");
};

const dragLeave = (e) => {
  e.target.classList.remove("hovered");
};

const dragDrop = (e) => {
  e.target.classList.remove("hovered");
  e.target.appendChild(draggable);
};

draggable.addEventListener("dragstart", dragStart);
draggable.addEventListener("dragend", dragEnd);

allBoxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
});
