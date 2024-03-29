const container = document.querySelector('.container');
const quizCtn = document.querySelector('.quiz-ctn');

// fucntion to get trivia queations
const getTrivia = async () => {
  // showing loaded while fetching data
  container.classList.add('loading');

  // fetch data from api
  const response = await fetch('https://opentdb.com/api.php?amount=20');
  const data = await response.json();

  // if fetch is successful
  if (data.response_code === 0) {
    data.results.forEach((item) => {
      const quizItem = document.createElement('div');
      quizItem.classList.add('quiz-item');

      // if the question is NOT multiple option
      if (item.type !== 'multiple') {
        const innerCopy = `
          <h4 class="question">${item.question}</h4>
          <h4 class="answer">${item.correct_answer}</h4>
        `;
        quizItem.innerHTML = innerCopy;
      } else {
        // render li elements when the question type is multipl.e
        const options = _.shuffle([
          ...item.incorrect_answers,
          item.correct_answer,
        ]);

        const innerCopy = `
          <h4 class="question">${item.question}<br/>
            <ul>
              ${options.map((option) => `<li>${option}</li>`).join('')}
            </ul>
          </h4>
          <h4 class="answer">${item.correct_answer}</h4>
        `;
        quizItem.innerHTML = innerCopy;
      }

      // Add event listener to quiz item element to show correct anwwer on click
      quizItem.addEventListener('click', () =>
        quizItem.classList.toggle('active')
      );
      // append the created quiz item to quiz container
      quizCtn.appendChild(quizItem);
    });
  } else {
    // if there was any issue with the response from API, outputs error
    quizCtn.innerHTML = 'Error, please try again.';
  }

  // remove loading indicator
  container.classList.remove('loading');
};

getTrivia();
