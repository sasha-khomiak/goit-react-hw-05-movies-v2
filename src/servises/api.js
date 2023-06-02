//settings
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDUxYWM1MGQzYmZlMGMzZmQ3NWYwMmMxZmY3YjY4OCIsInN1YiI6IjY0MzU2NTAxZTYzNTcxMDExMTBlNjg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFa5GXSVBy7mOGv4-c6hZa7SvnNn7rZ6QbJ22iF5bgM',
  },
};
const BASE_URL = 'https://api.themoviedb.org/3/';

// // 1
// export function getPopularMoviesFromApi() {
//   const URL = `${BASE_URL}trending/all/day?language=en-US`;
//   return fetch(URL, options).then(response => response.json());
// }

// 1
export function getPopularMoviesFromApi() {
  const URL = `${BASE_URL}movie/popular`;
  return fetch(URL, options).then(response => response.json());
}

// 2
export function getMovieByIdFromApi(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}`;
  return fetch(URL, options).then(response => response.json());
}

// 3
export function getMoviesByQueryFromApi(query) {
  const URL = `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  return fetch(URL, options).then(response => response.json());
}

// 4
export function getMovieCastByIdFromApi(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}/credits`;
  return fetch(URL, options).then(response => response.json());
}

// 5
export function getMovieReviewsByIdFromApi(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}/reviews`;
  return fetch(URL, options).then(response => response.json());
}
