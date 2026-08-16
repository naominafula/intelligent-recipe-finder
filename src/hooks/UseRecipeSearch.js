import { useState, useEffect } from 'react';
import { recipeService } from '../services/recipeService';
import { useDebounce } from './useDebounce';

export function useRecipeSearch(ingredients) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const debouncedIngredients = useDebounce(ingredients, 600);

  useEffect(() => {
    if (!debouncedIngredients || debouncedIngredients.length === 0) {
      setRecipes([]);
      return;
    }

    async function fetchRecipes() {
      setLoading(true);
      setError(null);
      try {
        const data = await recipeService.searchByIngredients(debouncedIngredients);
        setRecipes(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching recipes.');
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [debouncedIngredients]);

  return { recipes, loading, error };
}