import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://spoonacular.com',
  timeout: 10000,
  params: {
    apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
  },
});