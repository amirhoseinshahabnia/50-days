const container = document.querySelector(".container");
const alerWrapper = document.querySelector(".alert-wrapper");
const form = document.querySelector("form");
const result = document.querySelector("#result p");
const copyBtn = document.querySelector("#result .icon-wrapper");

// config variables
const length = document.getElementById("length");

const allConfigs = document.querySelectorAll("input[type='checkbox'");

const chars_obj = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/",
};

copyBtn.addEventListener("click", (e) => {
  //  create alert box and append and remove it from dom
  const alert = document.createElement("div");
  if (result.innerText.length !== 0) {
    alert.classList.add("alert", "success");
    alert.innerText = "Password successfully copied to clipboard!";

    navigator.clipboard.writeText(result.innerText);
  } else {
    alert.classList.add("alert", "error");
    alert.innerText = "No password generated, try again!";
  }

  alerWrapper.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 1500);
});

function generateRandomPwd(length) {
  // define result var
  // get length of chars
  // whie -> start at index 0 to index < length
  // choose random string from chars -> Math.floor(Math.random() * charsLength )
  let result = "";
  let index = 0;
  let selectedConfig = "";

  //   loop through all configs and check if each is checked -> append the string from chars_obj to selected config
  allConfigs.forEach((config) => {
    if (config.checked) {
      selectedConfig += chars_obj[config.id];
    }
  });

  const charLength = selectedConfig.length;

  while (index < length) {
    randomChar = selectedConfig.charAt(Math.floor(Math.random() * charLength));
    result += randomChar;
    index++;
  }

  return result;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let safeToProceeed = false;

  allConfigs.forEach((config) => {
    if (config.checked) {
      safeToProceeed = true;
    }
  });

  if (safeToProceeed) {
    result.innerText = generateRandomPwd(Number(length.value));
  } else {
    const alert = document.createElement("div");
    alert.classList.add("alert", "error");
    alert.innerText = "At least one config should be selected";
    alerWrapper.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 1500);
  }
});
