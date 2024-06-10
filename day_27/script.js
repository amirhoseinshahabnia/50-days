const notifCtn = document.querySelector(".notif-ctn");
const showBtn = document.getElementById("show-notif");

const NOTIF_TYPES = [
  {
    type: "error",
    message: "Something went wrong, please try again.",
  },
  {
    type: "success",
    message: "Operation successful.",
  },
  {
    type: "info",
    message: "Hello, Welcome to your application.",
  },
];

showBtn.addEventListener("click", () => {
  // show notif boxes
  const notif = document.createElement("div");
  const random_notif =
    NOTIF_TYPES[Math.floor(Math.random() * NOTIF_TYPES.length)];
  notif.classList.add("notification");
  notif.classList.add(random_notif.type);
  notif.innerText = random_notif.message;

  notifCtn.appendChild(notif);

  //   remove noti from DOM after 1s
  setTimeout(() => {
    notifCtn.removeChild(notif);
  }, 3000);
});
