const API_KEY = '289a265bc88a0afed00b4ae3739eaf8b';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODlhMjY1YmM4OGEwYWZlZDAwYjRhZTM3MzllYWY4YiIsInN1YiI6IjY2MjA1MGUxN2EzYzUyMDE3ZDRiOTdkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gWAATh1N_R-Cp1ttYUS8kGUScKCgRPLEUZXslQ3o6y4';

const moviesCtn = document.querySelector('.movies-ctn');
const loader = document.querySelector('.loader');
const searchBtn = document.getElementById('site-search');

const fetchUrl =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&sort_by=popularity&page=1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

let shouldRefetch = false;

const getRatingLabel = (num) => {
  const numberTwoDecimal = num.toFixed(2);
  if (numberTwoDecimal >= 8) {
    return `<span class="rating high">${numberTwoDecimal}</span>`;
  } else if (numberTwoDecimal < 8 && numberTwoDecimal >= 6) {
    return `<span class="rating medium">${numberTwoDecimal}</span>`;
  }

  return `<span class="rating low">${numberTwoDecimal}</span>`;
};

const enableLoader = () => {
  loader.style.display = 'inline-grid';
};

const disableLoader = () => {
  loader.style.display = 'none';
};

const clearMovies = () => {
  moviesCtn.innerHTML = '';
};

const fetchMovies = async () => {
  shouldRefetch = false;
  enableLoader();
  const response = await fetch(fetchUrl, options);
  const data = await response.json();
  disableLoader();
  return data.results;
};

const searchMovies = async (term) => {
  clearMovies();
  enableLoader();

  if (!term) {
    return fetchMovies;
  }
  shouldRefetch = true;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&sort_by=popularity&query=${term}&page=1`;
  const response = await fetch(searchUrl, options);
  const data = await response.json();
  disableLoader();
  return data.results;
};

const addMovies = async (moviesFetch) => {
  clearMovies();
  const movies = await moviesFetch();
  // check if any movies found
  if (movies.length !== 0) {
    movies.forEach((movie) => {
      if (movie.poster_path) {
        const div = document.createElement('div');
        div.classList.add('movie');
        const htmlContent = `
    <img src="http://image.tmdb.org/t/p/w342/${movie.poster_path}" alt=${
          movie.original_title
        } />
      <div class="movie-info">
        <h4 class="white">${movie.original_title}</h4>
        ${getRatingLabel(movie.vote_average)}
      </div>
      <div class="overview">
            ${movie.overview}
      </div>
    `;
        div.innerHTML = htmlContent;
        moviesCtn.appendChild(div);
      }
    });
  } else {
    moviesCtn.innerHTML =
      '<p class="no-result">No Movies Could be found, please try again</p>';
  }
};

// search on enter keydown
searchBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addMovies(() => searchMovies(e.target.value));
  }
});

searchBtn.addEventListener('input', (e) => {
  if (!e.target.value && shouldRefetch) {
    clearMovies();
    return addMovies(fetchMovies);
  }
});

addMovies(fetchMovies);
