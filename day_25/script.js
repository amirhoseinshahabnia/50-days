const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
