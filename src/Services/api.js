import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/`;
//  'https://api.themoviedb.org/4'
const API_KEY = `299fab6334d3a7c294b935fd0abb8d7b`;

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common.Authorization = API_KEY;

const fetchObject = async (url = "", param = {}) => {
  try {
    const result = await axios.get(url, param);
    const data = result.data;
    return data;
  } catch (err) {
    return err.message;
  }
};

// fetch Trends
const fetchTrends = () => {
  return fetchObject(`trending/movie/day?api_key=${API_KEY}`);
};

// fetch Movies
const fetchMovies = (query, page) => {
  return fetchObject(
    `search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US&include_adult=false`
  );
};

// fetch fetchMovieById
const fetchMovieById = (movieId) => {
  return fetchObject(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
};

// fetch fetchCast
const fetchCast = (movieId) => {
  return fetchObject(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
};

// fetch fetchReviews
const fetchReviews = async (movieId) => {
  return fetchObject(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};
const api = {
  fetchTrends,
  fetchMovies,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};
export default api;
