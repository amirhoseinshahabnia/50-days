const slider = document.querySelector(".slider");
const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");
const leftSlider = document.querySelector(".left-slides");
const rightSlider = document.querySelector(".right-slides");

const slidesLength = leftSlider.children.length;

const amountToScroll = 100;
let activeIndex = 0;
const slidesToScroll = slidesLength - 1;

function setSetSlidesOnReload() {
  activeIndex = 0;
  // leftSlider.style.top = `0px`;
  leftSlider.style.transform = "translateY(0)";
  rightSlider.style.transform = `translateY(-${
    slidesToScroll * amountToScroll
  }vh)`;
}

setSetSlidesOnReload();

upArrow.addEventListener("click", () => {
  if (activeIndex > 0) {
    activeIndex--;
    leftSlider.style.transform = `translateY(-${
      activeIndex * amountToScroll
    }vh)`;
    rightSlider.style.transform = `translateY(-${
      (slidesToScroll - activeIndex) * amountToScroll
    }vh)`;
  } else {
    activeIndex = slidesToScroll;
    rightSlider.style.transform = "translateY(0)";
    leftSlider.style.transform = `translateY(-${
      slidesToScroll * amountToScroll
    }vh)`;
  }
});

downArrow.addEventListener("click", () => {
  if (activeIndex < slidesToScroll) {
    activeIndex++;
    leftSlider.style.transform = `translateY(-${
      amountToScroll * activeIndex
    }vh)`;
    rightSlider.style.transform = `translateY(-${
      (slidesToScroll - activeIndex) * amountToScroll
    }vh)`;
  } else {
    setSetSlidesOnReload();
  }
});
