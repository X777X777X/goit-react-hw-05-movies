import axios from 'axios';

const API_KEY = 'efeda743ab45883687fff04b1ed36428';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchTrendingApi = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/trending/movie/day?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export const fetchSearchApi = async query => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: 'en-US',
        page: 1,
        include_adult: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export const fetchReview = async id => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
