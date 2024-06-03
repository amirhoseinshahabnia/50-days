const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

// select all animated elements (loading state indicators)
const allAnimatedBgs = document.querySelectorAll(".animated-bg");
const allAnimatedBgTexts = document.querySelectorAll(".animated-bg-text");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const now = new Date();

// settimeout to show loading state for 2 second (this can be done when data successfully retrieved from DB or api endpoint)
setTimeout(getData, 3000);

// we set the html nodes content (this can come from API)
function getData() {
  header.innerHTML = '<img src="./laptop.jpg" alt="laptop" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusamus?";
  profileImg.innerHTML =
    '<img src="./profile.jpg" alt="sample profile picture" />';
  name.innerHTML = "Jane Doe";
  date.innerText = `${months[now.getMonth()]} ${
    now.getDate() < 10 ? "0" + now.getDate() : now.getDate()
  }, ${now.getFullYear()}`;

  allAnimatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
  allAnimatedBgTexts.forEach((text) =>
    text.classList.remove("animated-bg-text")
  );
}
