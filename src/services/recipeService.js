import { axiosClient } from './axiosClient';

export const recipeService = {
  // Search recipes matching the pantry ingredients list
  searchByIngredients: async (ingredients) => {
    if (!ingredients || ingredients.length === 0) return [];
    const response = await axiosClient.get('/recipes/findByIngredients', {
      params: {
        ingredients: ingredients.join(','),
        number: 6,
        ranking: 1,
        ignorePantry: true,
      },
    });
    return response.data;
  },
};