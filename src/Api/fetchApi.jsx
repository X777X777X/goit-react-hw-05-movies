import axios from 'axios';

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendingApi = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};
export const fetchSearchApi = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
export const fetchMovieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
export const fetchMovieGenres = async () => {
  const { data } = await axios.get(
    `/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
export const fetchCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
export const fetchReview = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
