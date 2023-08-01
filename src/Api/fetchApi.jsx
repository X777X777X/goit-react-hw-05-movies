import axios from "axios";

const API_KEY = 'efeda743ab45883687fff04b1ed36428';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingApi = async () => {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
    return data;
};

export const fetchMovieDetails = async id => {
    const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return data;
};

export const featchSearchApi = async query => {
    const { data } = await axios.get(
        `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=true&language=en-US&page=1`
    );
    return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}/cast?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchReview = async id => {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1'`
    );
    return data;
}