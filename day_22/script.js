const canvas = document.getElementById("canvas");
const clearBtn = document.getElementById("clear");
const inputColor = document.getElementById("color");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeLabel = document.getElementById("size");
const eraserBtn = document.getElementById("eraser");
const mousePointer = document.querySelector(".mouse-pointer");

const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let isEraserSelected = false;
let color = inputColor.value;
let x;
let y;

function drawCircle(x, y, size) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// add mousedown to  set ispressed to true
// to get x and y value
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

// add mouse up to set x and y to undefined + isPressed to false
canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mouseout", (e) => {
  if (isPressed) {
    isPressed = false;
    x = undefined;
    y = undefined;
  }
});

// mousemove event -> when isPressed -> draw
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2, size);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   deselect eraser btn
  eraserBtn.classList.remove("selected");
  isEraserSelected = false;
  color = inputColor.value;
});

inputColor.addEventListener("change", (e) => {
  color = e.target.value;
});

decreaseBtn.addEventListener("click", () => {
  if (size > 5) {
    size -= 5;
    sizeLabel.innerHTML = size;
  }
});

increaseBtn.addEventListener("click", () => {
  if (size < 50) {
    size += 5;
    sizeLabel.innerHTML = size;
  }
});

eraserBtn.addEventListener("click", () => {
  eraserBtn.classList.toggle("selected");

  if (!isEraserSelected) {
    isEraserSelected = true;
    color = "#e3e3e3";
  } else {
    mousePointer.style.opacity = 0;
    isEraserSelected = false;
    color = inputColor.value;
  }
});

// mousePointer.addEventListener("mousedown", () => (isPressed = true));
// mousePointer.addEventListener("mouseup", () => (isPressed = false));
