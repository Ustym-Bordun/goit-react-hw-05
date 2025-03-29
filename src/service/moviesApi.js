import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGI4MmQ3NjUwNmRjMDQwMjAzM2FlMmI2MmZlNmMwOSIsIm5iZiI6MTc0Mjg1MDQyMy4zMiwic3ViIjoiNjdlMWM5NzdkNDA1MmY0NzkzZGM1NTc5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9hYzpxxH8DIeZINqiS9Jl3WVKkGpTu-Sn7bG9bLJHso',
  },
};

export const fetchTrendingMovies = async curentPage => {
  const responce = await axios.get('/trending/movie/day', {
    ...options,
    params: { language: 'en-US', include_adult: false, page: curentPage },
  });
  return responce.data;
};

export const fetchSearchedMovies = async (searchQuery, curentPage) => {
  const responce = await axios.get('search/movie', {
    ...options,
    params: { language: 'en-US', include_adult: false, page: curentPage, query: searchQuery },
  });
  return responce.data;
};

export const fetchMovieDetails = async movieId => {
  const responce = await axios.get(`/movie/${movieId}`, {
    ...options,
    params: { language: 'en-US' },
  });
  return responce.data;
};

export const fetchMovieReviews = async movieId => {
  const responce = await axios.get(`/movie/${movieId}/reviews`, {
    ...options,
    params: { language: 'en-US' },
  });
  return responce.data;
};

export const fetchMovieCredits = async movieId => {
  const responce = await axios.get(`/movie/${movieId}/credits`, {
    ...options,
    params: { language: 'en-US' },
  });
  return responce.data;
};

/* 
? API key
d0b82d76506dc0402033ae2b62fe6c09

? API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGI4MmQ3NjUwNmRjMDQwMjAzM2FlMmI2MmZlNmMwOSIsIm5iZiI6MTc0Mjg1MDQyMy4zMiwic3ViIjoiNjdlMWM5NzdkNDA1MmY0NzkzZGM1NTc5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9hYzpxxH8DIeZINqiS9Jl3WVKkGpTu-Sn7bG9bLJHso

? trending/movie
https://api.themoviedb.org/3/trending/movie/{time_window}
* {time_window} = 'day' or 'week'

? search/movie
https://api.themoviedb.org/3/search/movie
*/
