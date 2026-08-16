// src/services/foodApi.js
import axios from 'axios';

// Pull the secure key from Vite environment variables
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY; 

const apiClient = axios.create({
  baseURL: 'https://spoonacular.com',
  timeout: 8000,
  params: {
    apiKey: API_KEY,
  },
});

/**
 * Fetch recipes matching an array of raw ingredients
 * @param {string[]} ingredients - e.g., ['tomato', 'garlic', 'pasta']
 */
export const getRecipesByIngredients = async (ingredients) => {
  const ingredientString = ingredients.join(',');
  const response = await apiClient.get('/findByIngredients', {
    params: {
      ingredients: ingredientString,
      number: 12,           // Number of matching recipes to return
      ranking: 1,          // Maximize used ingredients first
      ignorePantry: true,  // Ignore basic items like water, salt, oil
    },
  });
  return response.data;
};