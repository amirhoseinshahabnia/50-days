const container = document.querySelector(".container");
const form = document.getElementById("form");
const search = document.getElementById("search");

const API_BASE_URL = "https://api.github.com/users";

async function getUser(username) {
  try {
    const res = await axios.get(`${API_BASE_URL}/${username}`);
    if (res.status !== 200) {
      throw new Error(`Could not fetch data, code; ${res.response.status}`);
    }
    return res.data;
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this username.");
    }
  }
}

async function getReposOfUser(username) {
  try {
    const repos = await axios.get(
      `${API_BASE_URL}/${username}/repos?sort=created`
    );
    if (repos.status !== 200) {
      throw new Error(`Could not fetch data, code; ${res.response.status}`);
    }

    return repos.data;
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createErrorCard(msg) {
  const errorCard = document.createElement("div");
  errorCard.classList.add("card-error");
  errorCard.innerText = msg;
  container.appendChild(errorCard);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    // if there is existing card or error, remove them
    let foundCard = document.querySelector(".card");
    let foundError = document.querySelector(".card-error");
    if (foundCard) {
      container.removeChild(foundCard);
    }

    if (foundError) {
      container.removeChild(foundError);
    }

    getUser(user).then((res) => {
      // get info for repos
      getReposOfUser(user).then((repos) => {
        // create card markup
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
         <img
          src=${res.avatar_url}
          alt="profile-pic"
        />
        <div class="body">
          <h3>${res.login}</h3>
          ${res.bio !== null ? `<p>${res.bio}</p>` : ""}
          <div class="info">
            <p id="followers">${res.followers} followers</p>
            <p id="following"><span>${res.following} following</p>
            <p id="repos">${res.public_repos} repos</p>
          </div>
          <div class="repos">
            ${repos
              .slice(0, 5)
              .map(
                (item) =>
                  `<a href="${item.html_url}" target="_blank">${item.name}</a>`
              )
              .join("")}
          </div>
        </div>
    `;
        container.appendChild(card);
      });

      search.value = "";
    });
  }
});

// promise
// const response = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// response
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Failed to fetch, HTTP ERROR: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data[0].name))
//   .catch((err) => console.log(err));

// async await
// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch, HTTP error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data[0].name);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchProducts();

// let sayHello = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Hey, universe!");
//     // reject("rejected");
//   }, 5000);
// });

// sayHello
//   .then(function (msg) {
//     console.log(msg);
//   })
//   .catch((err) => console.log(err));

// console.log("doing asynchronous task...");

// use of finally
// write a promise that could randomy resolve or reject
// make sure no matter resolve or reject, you'd write some message to user
// const randomPromise = new Promise((resolve, reject) => {
//   if (Math.random() < 0.5) {
//     reject("This is not the number, error happened");
//   }
//   resolve("It looks like it's working");
// });

// randomPromise
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("I run no matter what number gets generated"));

// write promises in two ways to fetch from resource
// 1 - with then, catch
// 2 - with async await

// function getArticleById(id) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`Error occurred, HTTP code: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// async function getArticleById(id) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     if (!res.ok) {
//       throw new Error(`Something went wrong, HTTP error code: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.warn(err);
//   }
// }

// getArticleById(33);
// console.log("fetching data...");
