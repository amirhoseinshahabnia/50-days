const container = document.querySelector(".container");
const heartCounter = document.getElementById("counter");
const pic = document.getElementById("pic");

// set up counter to detech each double click
// select html element
// initiate counter value
// on each dbclick -> increae the counter and set innerHtml of the dom node

// implement custom db click
// based on Data function
// we set clicktime to 0
// on each click on img
// if clikeTime = 0 -> clickTIme set to now
// else -> if now - clickTime is less than timeinerval --> double click & clickTime = 0
// else else --> set clickTime to now

let counter = 0;
let clickTime = 0;
// in ms
const dbClickInterval = 600;

function addHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("with-anim", "red", "fa-solid", "fa-heart");
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 300);
}

pic.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < dbClickInterval) {
      addHeart(e);
      heartCounter.innerText = ++counter;
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
