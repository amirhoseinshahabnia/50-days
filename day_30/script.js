const title = document.getElementById("title");
const speedControl = document.getElementById("speed");

const TEXT = "Hey Mehrnaz, I love you baby!";
let effectSpeed = 300;
let index = 0;

speedControl.addEventListener("input", (e) => {
  effectSpeed = 300 / e.target.value;
});

// get each char of title
// append all to the title
// reset when everything got added
function addTextEffect() {
  title.innerText = TEXT.slice(0, index + 1);
  index++;

  if (index === TEXT.length) {
    index = 0;
  }

  setTimeout(addTextEffect, effectSpeed);
}

addTextEffect();
