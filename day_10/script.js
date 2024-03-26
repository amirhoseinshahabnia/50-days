const jokeCtn = document.querySelector('.joke-ctn');
const jokeElement = document.getElementById('joke-content');
const jokeBtn = document.getElementById('get-joke');
// select random text for the btn
const btnTexts = [
  'Staaaahp',
  '🤦🏽',
  'No pleaaaase',
  'Am I still alive?',
  'Can it get any worse???',
  'You are the worst',
  'Omg dad.',
  'Seriously',
];

// we need to set innertext of joke element after we retrieve a joke
// add getJoke to the btn click event
const getJoke = async () => {
  jokeCtn.classList.add('loading');
  const randomBtnText = btnTexts[Math.floor(Math.random() * btnTexts.length)];
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const joke = await response.json();
  jokeCtn.classList.remove('loading');
  jokeElement.innerText = joke.joke;
  jokeBtn.innerText = randomBtnText;
};

// first time when the page loads
getJoke();

// add click event to get-joke btn to load a new joke
jokeBtn.addEventListener('click', getJoke);
